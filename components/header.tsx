import Image from "next/image";

export default function Header() {
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <div className="py-6">
        <Image
          src="/images/logo.png"
          alt="Apartae Logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
