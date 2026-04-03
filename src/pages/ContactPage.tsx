import { myInfo } from "../data/orders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactPage() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
      <div className="mt-4 space-y-2 text-slate-700 flex flex-col gap-2">
        <span>
          이메일: <a href={`mailto:${myInfo.email}`}>{myInfo.email}</a>
        </span>

        <span><FontAwesomeIcon icon={faGithub} />
          <a href={myInfo.git} target="_blank" rel="noopener noreferrer">{myInfo.git}</a>
        </span>
        
        <span>전공: {myInfo.speciality} 였던것</span>
      </div>
    </section>
  );
}

export default ContactPage;
