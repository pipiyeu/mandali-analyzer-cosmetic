"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface AnalysisItem {
  label: string;
  description: string;
}

function AnalyzerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const ingredients = searchParams.get("ingredients") || "";

  const [benefits, setBenefits] = useState<AnalysisItem[]>([]);
  const [cautions, setCautions] = useState<AnalysisItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredients.trim()) {
      setLoading(false);
      setError("No ingredients were provided.");
      return;
    }

    const analyzeIngredients = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://127.0.0.1:8000/api/predict", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ingredients: ingredients,
          }),
        });

        if (!response.ok) {
          let errorMessage = "Prediction failed.";
          try {
            const errorData = await response.json();
            if (errorData?.error) {
              errorMessage = errorData.error;
            }
          } catch {
            // Gunakan pesan default jika response bukan JSON.
          }
          throw new Error(errorMessage);
        }

        const data = await response.json();

        setBenefits(Array.isArray(data?.benefits) ? data.benefits : []);
        setCautions(Array.isArray(data?.cautions) ? data.cautions : []);
      } catch (err) {
        console.error("Mandali API error:", err);
        setBenefits([]);
        setCautions([]);
        setError(
          err instanceof Error
            ? err.message
            : "Unable to connect to Mandali API."
        );
      } finally {
        setLoading(false);
      }
    };

    analyzeIngredients();
  }, [ingredients]);

  return (
    <main className="min-h-screen bg-[#fff8fb] px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f6] px-4 py-2 text-sm font-medium text-[#c35f88]">
            <span>✦</span>
            Mandali AI Analysis
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#3d2630] sm:text-5xl">
            Your Cosmetic
            <span className="text-[#df6f9d]"> Insights</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#765d67] sm:text-base">
            Discover the potential benefits and side effects identified from your cosmetic ingredients.
          </p>
        </div>


        {/* =========================
            LOADING
        ========================== */}
        {loading && (
          <div className="mx-auto mt-12 max-w-4xl rounded-[2.5rem] border border-[#edcedb] bg-white p-12 text-center shadow-[0_20px_60px_rgba(195,95,136,0.10)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0f6] text-2xl text-[#df6f9d]">
              ✦
            </div>
            <h2 className="mt-6 text-xl font-semibold text-[#3d2630]">
              Analyzing your ingredients...
            </h2>
            <p className="mt-2 text-sm text-[#927984]">
              Please wait while Mandali processes your ingredients.
            </p>
          </div>
        )}

        {/* =========================
            ERROR
        ========================== */}
        {!loading && error && (
          <div className="mx-auto mt-12 max-w-4xl rounded-[2.5rem] border border-[#edcedb] bg-white p-10 text-center shadow-[0_20px_60px_rgba(195,95,136,0.08)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0f6] text-xl text-[#df6f9d]">
              !
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#3d2630]">
              Analysis Unavailable
            </h2>
            <p className="mt-2 text-sm text-[#927984]">{error}</p>
            <button
              onClick={() => router.push("/")}
              className="mt-6 rounded-full bg-[#df6f9d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d45f91]"
            >
              Back to Home
            </button>
          </div>
        )}

        {/* =========================
            RESULT
        ========================== */}
        {!loading && !error && (
          <div className="mt-12">

            {/* INGREDIENT CARD */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#edcedb] bg-white p-7 shadow-[0_20px_60px_rgba(195,95,136,0.10)] sm:p-9">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#f7b6ce]/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c35f88]">
                      Ingredient Composition
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-[#3d2630]">
                      What we analyzed
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0f6] text-[#df6f9d]">
                    ✦
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-[#fff8fb] px-5 py-4">
                  <p className="text-sm leading-7 text-[#765d67]">{ingredients}</p>
                </div>
              </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#cce8d6] bg-[#f4fbf6] p-6 shadow-[0_15px_40px_rgba(77,150,92,0.07)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dcf4e3] text-xl text-[#4d965c]">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#5b8f68]">
                      Potential Benefits
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#315c3a]">
                      {benefits.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#f2cccc] bg-[#fff5f5] p-6 shadow-[0_15px_40px_rgba(190,70,70,0.07)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fde1e1] text-xl text-[#c45b5b]">
                    ⚠
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#b35a5a]">
                      Potential Side Effects
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#8f3d3d]">
                      {cautions.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BENEFITS SECTION */}
            <section className="mt-14">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcf4e3] text-[#4d965c]">
                  ✨
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#5b8f68]">
                    Positive Effects
                  </p>
                  <h2 className="text-2xl font-bold text-[#315c3a]">Potential Benefits</h2>
                </div>
              </div>

              {benefits.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-[1.5rem] border border-[#cce8d6] bg-[#f4fbf6] p-6 shadow-[0_12px_35px_rgba(77,150,92,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#acd9b8]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcf4e3] text-[#4d965c]">
                        ✓
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-[#315c3a]">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#5b8f68]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-[2rem] border border-[#cce8d6] bg-[#f4fbf6] p-10 text-center">
                  <p className="text-sm text-[#5b8f68]">No potential benefits were detected.</p>
                </div>
              )}
            </section>

            {/* SIDE EFFECTS SECTION */}
            <section className="mt-14">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fde1e1] text-[#c45b5b]">
                  ⚠
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#b35a5a]">
                    Things to Consider
                  </p>
                  <h2 className="text-2xl font-bold text-[#8f3d3d]">Potential Side Effects</h2>
                </div>
              </div>

              {cautions.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cautions.map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-[1.5rem] border border-[#f2cccc] bg-[#fff5f5] p-6 shadow-[0_12px_35px_rgba(190,70,70,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#e8b0b0]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fde1e1] text-[#c45b5b]">
                        ⚠
                      </div>
                      <h3 className="mt-5 text-base font-semibold text-[#8f3d3d]">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#b35a5a]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-[2rem] border border-[#cce8d6] bg-[#f4fbf6] p-10 text-center">
                  <h3 className="font-semibold text-[#315c3a]">No potential side effects detected</h3>
                </div>
              )}
            </section>

            {/* BACK BUTTON */}
            <div className="mt-16 text-center">
              <button
                onClick={() => router.push("/")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#df6f9d] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#df6f9d]/20 transition hover:-translate-y-0.5 hover:bg-[#d45f91]"
              >
                Analyze Another Product
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function AnalyzerPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#fff8fb] px-6 py-16">
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-sm text-[#927984]">Loading Mandali AI...</p>
          </div>
        </main>
      }
    >
      <AnalyzerContent />
    </Suspense>
  );
}