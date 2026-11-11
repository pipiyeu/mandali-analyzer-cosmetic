export default function About() {
  return (
    <>
      {/* ================= ABOUT ================= */}
      <section 
      id="about"
      className="px-6 py-24 lg:px-10">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Text */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#df6f9d]">
              About Mandali
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Making cosmetic ingredients easier to understand.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#765d67]">
              Mandali is an intelligent cosmetic ingredient analysis platform
              designed to bridge the gap between complex product labels and
              everyday understanding.
            </p>

            <p className="mt-5 text-base leading-8 text-[#765d67]">
              We believe everyone should be able to better understand what is
              inside their cosmetic products without needing to be a cosmetic
              science expert.
            </p>

          </div>

          {/* Visual */}
          <div className="relative">

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f8d2e0] blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-[#f0dce4] bg-white p-8 shadow-xl shadow-[#c66d92]/10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fce5ef] text-2xl text-[#df6f9d]">
                ✦
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Transparency through technology.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#79636c]">
                Mandali transforms complex cosmetic ingredient information
                into clear insights that are easier to understand.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-[#fff8fb] p-5">
                  <p className="text-2xl font-bold text-[#df6f9d]">
                    AI
                  </p>

                  <p className="mt-1 text-xs text-[#8b727c]">
                    Intelligent Analysis
                  </p>
                </div>

                <div className="rounded-2xl bg-[#fff8fb] p-5">
                  <p className="text-2xl font-bold text-[#df6f9d]">
                    17+
                  </p>

                  <p className="mt-1 text-xs text-[#8b727c]">
                    Cosmetic Effects
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="border-y border-[#f1dfe5] bg-white/60 px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#df6f9d]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From ingredients to meaningful insights.
            </h2>

          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "⚡",
                title: "Instant Analysis",
                text: "Simply input your ingredients list and Mandali will analyze the composition.",
              },
              {
                icon: "🔍",
                title: "Benefit Identification",
                text: "Discover potential cosmetic benefits associated with the ingredients.",
              },
              {
                icon: "⚠️",
                title: "Effect Identification",
                text: "Identify potential cosmetic effects associated with the composition.",
              },
              {
                icon: "📖",
                title: "Easy Education",
                text: "Understand cosmetic ingredients through simple explanations.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-[#f0dfe6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d77a9d]/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce5ef] text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#79636c]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY MANDALI ================= */}
      <section className="px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#df6f9d]">
              Why Mandali?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Designed around clarity and intelligence.
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                icon: "🔬",
                title: "Data-Driven",
                text: "Predictions are generated using a machine learning model trained on cosmetic ingredient data.",
              },
              {
                icon: "✨",
                title: "Elegant Design",
                text: "A clean and intuitive interface designed for a comfortable and simple experience.",
              },
              {
                icon: "👤",
                title: "User-Centered",
                text: "Designed to help users better understand cosmetic ingredient compositions.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[2rem] border border-[#f0dfe6] bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d77a9d]/10"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0f6] text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#79636c]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= VISION ================= */}
      <section className="px-6 pb-24 lg:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#fce5ef] px-7 py-16 text-center sm:px-12">

          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-white/40 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#f7b6ce]/40 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c35f88]">
              Our Vision
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              “To make every skincare decision safer, smarter, and more
              personal.”
            </h2>

            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-[#df6f9d]" />

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#765d67]">
              Mandali aims to make cosmetic ingredient information more
              transparent, accessible, and understandable for everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}