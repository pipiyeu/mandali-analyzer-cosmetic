import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-20">

      {/* Background Glow */}
      <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#f9d6e4] opacity-70 blur-3xl" />

      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#f7bfd5] opacity-40 blur-3xl" />

      <div className="relative grid items-center gap-16 lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div>
          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

            Beauty begins with

            <span className="block text-[#df6f9d]">
              understanding.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-[#765d67] sm:text-lg">
            Discover the potential benefits and effects of cosmetic
            ingredients through intelligent analysis.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

                  {/* Analyze Ingredients */}
                  <a
                    href="#ingredient-input"
                    className="group flex items-center gap-3 rounded-full bg-[#df6f9d] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#df6f9d]/20 transition hover:-translate-y-0.5 hover:bg-[#d45f91]"
                  >
                    Analyze Ingredients

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  {/* Learn More */}
                  <a
                    href="#about"
                    className="rounded-full border border-[#e8cbd5] bg-white px-7 py-4 text-sm font-semibold text-[#5d424d] transition hover:bg-[#fff0f6]"
                  >
                    Learn More
                  </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-[#efdce3] pt-7">

            <div>
              <p className="text-2xl font-bold">
                17+
              </p>

              <p className="mt-1 text-xs text-[#8b727c]">
                Cosmetic Effects
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                ML
              </p>

              <p className="mt-1 text-xs text-[#8b727c]">
                Powered Analysis
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">
                24/7
              </p>

              <p className="mt-1 text-xs text-[#8b727c]">
                Easy to Access
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Circle */}
          <div className="absolute h-[390px] w-[390px] rounded-full bg-[#f8d2e0] sm:h-[500px] sm:w-[500px]" />

          {/* Card */}
          <div className="relative w-full max-w-md">

            <div className="rounded-[2.5rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-[#c66d92]/15 backdrop-blur-xl">

              {/* Header */}
              <div className="flex items-center justify-between px-2 pb-5">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#b78396]">
                    Ingredient Scan
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Your cosmetic
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f6] text-[#df6f9d]">
                  ✦
                </div>

              </div>

              {/* Ingredients */}
              <div className="rounded-3xl bg-[#fff8fb] p-5">

                <p className="text-xs font-medium text-[#9a7d87]">
                  INGREDIENTS
                </p>

                <p className="mt-3 text-sm leading-7 text-[#5c444e]">
                  Water, Niacinamide, Glycerin,
                  Zinc PCA, Hyaluronic Acid
                </p>

              </div>

              {/* Results */}
              <div className="mt-4">

                <div className="mb-3 flex items-center justify-between">

                  <p className="text-sm font-semibold">
                    Predicted effects
                  </p>

                  <span className="rounded-full bg-[#fce5ef] px-3 py-1 text-xs font-medium text-[#c35f88]">
                    4 results
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  {[
                    "Brightening",
                    "Hydrating",
                    "Acne Fighting",
                    "Oily Skin",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-2xl border border-[#f1dce4] bg-white px-3 py-3"
                    >

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fce5ef] text-xs text-[#df6f9d]">
                        ✓
                      </span>

                      <span className="text-xs font-medium">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Footer Card */}
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#3d2630] px-5 py-4 text-white">

                <div>

                  <p className="text-xs text-[#dcbec9]">
                    Analysis powered by
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Machine Learning
                  </p>

                </div>

                <span className="text-xl">
                  ✦
                </span>

              </div>

            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 top-16 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-[#c66d92]/10 sm:-right-10">

              <p className="text-xs text-[#967680]">
                Smart analysis
              </p>

              <p className="mt-1 text-sm font-bold text-[#df6f9d]">
                Multi-Label ML
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}