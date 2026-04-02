import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { projectSamples } from "../../data/projects";
import { ServicePlatform } from "../../types/define";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faSteam, faApple } from "@fortawesome/free-brands-svg-icons";

import { SWIPE_THRESHOLD_RATIO, SWIPE_THRESHOLD_MIN_PX, AUTO_SLIDE_DELAY_MS } from "../../types/define";

export default function ProjectSample() {
	const [slideIndex, setSlideIndex] = useState(0);
  const sampleCount = projectSamples.length;

  const slideViewportRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const getPlatformIcon = (platform: ServicePlatform) => {
    switch (platform) {
      case ServicePlatform.GOOGLE_PLAY:
        return faGooglePlay;
      case ServicePlatform.APPLE_STORE:
        return faApple;
      case ServicePlatform.STEAM:
        return faSteam;
    }
  };

  const goPrev = useCallback(() => {
    setSlideIndex((i) => (i - 1 + sampleCount) % sampleCount);
  }, [sampleCount]);

  const goNext = useCallback(() => {
    setSlideIndex((i) => (i + 1) % sampleCount);
  }, [sampleCount]);

  const resetAutoplayTimer = useCallback(() => {
    setAutoplayKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (sampleCount <= 1) return;
    const id = window.setInterval(goNext, AUTO_SLIDE_DELAY_MS);
    return () => window.clearInterval(id);
  }, [sampleCount, goNext, autoplayKey]);

  const handlePrevClick = () => {
    goPrev();
    resetAutoplayTimer();
  };

  const handleNextClick = () => {
    goNext();
    resetAutoplayTimer();
  }; 

  const endDrag = useCallback(
    (clientX: number) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);

      const dx = clientX - dragStartXRef.current;
      const width = slideViewportRef.current?.offsetWidth ?? 0;
      const threshold = Math.max(
        SWIPE_THRESHOLD_MIN_PX,
        width * SWIPE_THRESHOLD_RATIO
      );

      if (dx > threshold) {
        goPrev();
        resetAutoplayTimer();
      } else if (dx < -threshold) {
        goNext();
        resetAutoplayTimer();
      }

      setDragOffsetPx(0);
    },
    [goPrev, goNext, resetAutoplayTimer]
  );

  const onSlidePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (sampleCount <= 1) return;
    if (e.button !== 0) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    setDragOffsetPx(0);
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onSlidePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    setDragOffsetPx(e.clientX - dragStartXRef.current);
  };

  const onSlidePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    endDrag(e.clientX);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const onSlidePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    endDrag(dragStartXRef.current);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

	return (
		<div>
			<p className="text-sm font-semibold text-indigo-600">
				Portfolio Project Image
			</p>
			
			<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
				<div
					ref={slideViewportRef}
					className="relative aspect-[4/3] w-full cursor-grab touch-none select-none active:cursor-grabbing"
					onPointerDown={onSlidePointerDown}
					onPointerMove={onSlidePointerMove}
					onPointerUp={onSlidePointerUp}
					onPointerCancel={onSlidePointerCancel}
				>
					{/* image area */}
					<div
						className={`flex h-full w-full ${
							isDragging ? "" : "transition-transform duration-500 ease-out"
						}`}
						style={{
							transform: `translateX(calc(-${slideIndex * 100}% + ${dragOffsetPx}px))`,
						}}
					>
						{projectSamples.map((sample) => (
							<div
								key={sample.id}
								className="h-full w-full shrink-0 overflow-hidden"
							>
								<img
									src={sample.image}
									alt={sample.name ?? sample.description ?? sample.id}
									className="h-full w-full object-cover pointer-events-none"
									draggable={false}
									loading="lazy"
								/>
							</div>
						))}
					</div>

					{/* description area */}
					<div className="pointer-events-none absolute inset-x-0 top-0 w-full bg-black/50 shadow-lg">
						<div className="flex items-center gap-3 px-4 py-2 text-sm text-white">
							{/* platform icon */}
							{projectSamples[slideIndex]?.platform && (
								<div className="flex shrink-0 justify-start gap-1.5">
									{projectSamples[slideIndex].platform.map((platform) => (
										<FontAwesomeIcon key={slideIndex + platform} icon={getPlatformIcon(platform) ?? faGooglePlay} />
									))}
								</div>
							)}

							{/* description */}
							{projectSamples[slideIndex]?.description && (
								<div className="min-w-0 truncate">
									{projectSamples[slideIndex].description}
								</div>
							)}
						</div>
					</div>
				</div>

				{sampleCount > 1 && (
					<>
						<button
							type="button"
							onClick={handlePrevClick}
							className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md ring-1 ring-slate-200/80 transition hover:bg-white"
							aria-label="이전 슬라이드"
						>
							<HiChevronLeft className="h-5 w-5" />
						</button>
						<button
							type="button"
							onClick={handleNextClick}
							className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md ring-1 ring-slate-200/80 transition hover:bg-white"
							aria-label="다음 슬라이드"
						>
							<HiChevronRight className="h-5 w-5" />
						</button>
					</>
				)}

				{sampleCount > 1 && (
					<div
						className="flex justify-center gap-1.5 border-t border-slate-200 bg-white px-4 py-3"
						role="tablist"
						aria-label="슬라이드 위치"
					>
						{projectSamples.map((sample, i) => (
							<button
								key={sample.id}
								type="button"
								role="tab"
								aria-selected={i === slideIndex}
								aria-label={`${i + 1}번째 슬라이드`}
								onClick={() => {
									setSlideIndex(i);
									resetAutoplayTimer();
								}}
								className={`h-2 rounded-full transition-all ${
									i === slideIndex
										? "w-6 bg-indigo-600"
										: "w-2 bg-slate-300 hover:bg-slate-400"
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}