"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function IngredientInput() {
  const [ingredients, setIngredients] = useState("");
  const router = useRouter();

  const handleAnalyze = () => {
    const value = ingredients.trim();

    if (!value) {
      return;
    }

    router.push(`/analyzer?ingredients=${encodeURIComponent(value)}`);
  };

  return (
    <section 
    id="ingredient-input"
    className="px-6 py-20 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#fff0f6] px-6 py-16 sm:px-10 lg:px-16">

        {/* Glow */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f7b6ce]/40 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#df6f9d]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          {/* Heading */}
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#c35f88]">
              <span className="text-lg">✦</span>
              Start exploring
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#3d2630] sm:text-5xl">
              What&apos;s inside
              <span className="text-[#df6f9d]">
                {" "}your cosmetics?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#765d67] sm:text-base">
              Enter the ingredient composition and discover the potential
              cosmetic effects with Mandali.
            </p>
          </div>

          {/* Input */}
          <div className="mt-10">
            <div className="rounded-[2rem] border border-[#edcedb] bg-white p-3 shadow-[0_20px_60px_rgba(195,95,136,0.12)]">

              {/* Header */}
              <div className="flex items-center justify-between px-4 pt-3">
                <label
                  htmlFor="ingredients"
                  className="text-sm font-semibold text-[#3d2630]"
                >
                  Ingredient List
                </label>

                <span className="text-xs text-[#a88a96]">
                  Paste ingredients
                </span>
              </div>

              {/* Textarea */}
              <textarea
                id="ingredients"
                name="ingredients"
                rows={5}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Water, Niacinamide, Glycerin, Zinc PCA, Hyaluronic Acid..."
                className="mt-2 w-full resize-none border-0 bg-transparent px-4 py-3 text-sm leading-7 text-[#3d2630] outline-none placeholder:text-[#bca5ae]"
              />

              {/* Bottom */}
              <div className="flex flex-col gap-4 border-t border-[#f3e4ea] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-xs text-[#9a7d87]">
                  Separate each ingredient with a comma
                </p>

                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={!ingredients.trim()}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#df6f9d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#df6f9d]/20 transition hover:-translate-y-0.5 hover:bg-[#d45f91] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Start Analyze Now

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}