import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center gap-1 mb-4">
      <Image src="/images/Linkora_logo_white.svg" alt="location" width={140} height={150} />
    </div>
  );
};

export default Logo;
