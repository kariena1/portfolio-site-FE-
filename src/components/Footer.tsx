import { myInfo } from "../data/orders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 text-sm text-slate-500 md:px-6">
        <div className="flex flex-col">
          <p>© 2026 {myInfo.name}</p>
        </div>
        <div className="flex gap-3">
          <a href={myInfo.git} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
