import Link from 'next/link';
import {
  RiLinkedinLine,
  RiGithubLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-lg">
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/razvanpana29/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link href='https://github.com/pana29'  target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href="https://wa.me/40755380715"  target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
