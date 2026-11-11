import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#f3dce5]/70 bg-[#fff8fb]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* logo */}
          <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/favicon.png"
              alt="Mandali"
              fill
              className="object-cover"
            />
          </div>

          <span className="text-2xl font-bold tracking-tight">
            mandali<span className="text-[#df6f9d]">.</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">

          <Link
            href="/"
            className="text-[#df6f9d] transition hover:text-[#c95782]"
          >
            Home
          </Link>

          <a
            href="#ingredient-input"
            className="text-[#3d2630] transition hover:text-[#df6f9d]"
          >
            Analyzer
          </a>

          <a
            href="#about"
            className="text-[#3d2630] transition hover:text-[#df6f9d]"
          >
            About
          </a>

        </div>

      </div>
    </nav>
  );
}