import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 opacity-10  top-0 z-10 w-[200px] xl:w-[400px] mix-blend-color-dodge">
      <Image src="/artex.png" width={300} height={300} alt="" />
    </div>
  );
};

export default TopLeftImg;
