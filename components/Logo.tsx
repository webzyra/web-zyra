import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Webzyra — home" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Webzyra"
        width={160}
        height={48}
        priority
        className="h-7 w-auto md:h-8 select-none"
      />
    </Link>
  );
}
