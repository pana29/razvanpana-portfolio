//icons
import { AiOutlineDownload } from 'react-icons/ai';

const Cv = () => {
  return (
    <div>
      <a
        className="btn rounded-full border border-white/50 max-w-[170px] px-4 lg:px-8 transition-all duration-300 flex items-center 
              justify-center overflow-hidden hover:border-accent group"
        href="/Razvan-Pana-CV.pdf"
        download={true}
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-sm">
          Download CV
        </span>
        <AiOutlineDownload
          className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
              transition-all duration-300 absolute text-[22px]"
        />
      </a>
    </div>
  );
};

export default Cv;
