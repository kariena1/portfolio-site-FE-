function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 text-sm text-slate-500 md:px-6">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="#" aria-label="GitHub">
            GitHub
          </a>
          <a href="#" aria-label="Blog">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
