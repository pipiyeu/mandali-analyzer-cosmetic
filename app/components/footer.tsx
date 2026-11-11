import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#f1dce4] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">

            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7b6ce] text-lg text-[#3d2630]">
                ✦
              </div>

              <span className="text-2xl font-bold tracking-tight text-[#3d2630]">
                mandali<span className="text-[#df6f9d]">.</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-[#927984]">
              Intelligent cosmetic ingredient analysis to help you
              understand what you put on your skin.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[#3d2630]">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">

              <a
                href="#ingredient-input"
                className="text-[#927984] transition hover:text-[#df6f9d]"
              >
                Analyzer
              </a>

              <a
                href="#about"
                className="text-[#927984] transition hover:text-[#df6f9d]"
              >
                About Mandali
              </a>

            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold text-[#3d2630]">
              Mandali
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#927984]">
              <span>AI-Powered Analysis</span>
              <span>Multi-Label Machine Learning</span>
              <span>17+ Cosmetic Effects</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#f1dce4] pt-6 text-xs text-[#a88a96] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Mandali AI. All rights reserved.
          </p>

          <p>
            Built with Machine Learning
          </p>

        </div>

      </div>
    </footer>
  );
}