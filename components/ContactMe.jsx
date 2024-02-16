//icons
import { FiSend } from "react-icons/fi";

import Link from 'next/link';


const Cv = () => {
  return (
    <div>
      <Link
        href='/contact'
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center 
              justify-center overflow-hidden hover:border-accent group"
        download={true}
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-sm">
          Contact me
        </span>
        <FiSend
          className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
              transition-all duration-300 absolute text-[22px]"
        />
      </Link>
    </div>
  );
};

export default Cv;
