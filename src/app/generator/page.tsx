"use client";
import { useState } from "react";
import Link from "next/link";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [generating, setGenerating] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setResults([]);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, aspectRatio }),
      });

      const data = await res.json();
      if (data.images) {
        setResults(data.images.map((img: any) => img.url));
      }
    } catch (error) {
      console.error("Generation failed:", error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* header */}
      <header className="border-b border-gray-200 bg-white px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold">
            maykar<span className="text-orange">.</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link>
            <Link href="/dashboard" className="font-mono text-sm text-gray-600 hover:text-orange">dashboard</Link>
            <Link href="/login" className="font-mono text-sm text-gray-600 hover:text-orange">log in</Link>
          </nav>
        </div>
      </header>

      <div className="px-6 py-12 md:px-12 md:py-20 max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-8">
          create thumbnails<span className="text-orange">.</span>
        </h1>

        {/* input */}
        <section className="bg-white border border-gray-200 p-6 md:p-8 mb-8">
          <div className="mb-6">
            <label className="font-mono text-sm font-bold mb-2 block">describe your thumbnail</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., a youtube thumbnail about crypto trading showing a person looking shocked at their screen"
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors resize-none"
              rows={4}
            />
          </div>

          <div className="mb-6">
            <label className="font-mono text-sm font-bold mb-2 block">aspect ratio</label>
            <div className="flex gap-4">
              <button
                onClick={() => setAspectRatio("16:9")}
                className={`border px-4 py-2 font-mono text-sm transition-colors ${
                  aspectRatio === "16:9" 
                    ? "border-orange text-orange bg-orange/10" 
                    : "border-gray-200 hover:border-orange"
                }`}
              >
                16:9 youtube
              </button>
              <button
                onClick={() => setAspectRatio("2:1")}
                className={`border px-4 py-2 font-mono text-sm transition-colors ${
                  aspectRatio === "2:1" 
                    ? "border-orange text-orange bg-orange/10" 
                    : "border-gray-200 hover:border-orange"
                }`}
              >
                2:1 twitter
              </button>
              <button
                onClick={() => setAspectRatio("1:1")}
                className={`border px-4 py-2 font-mono text-sm transition-colors ${
                  aspectRatio === "1:1" 
                    ? "border-orange text-orange bg-orange/10" 
                    : "border-gray-200 hover:border-orange"
                }`}
              >
                1:1 instagram
              </button>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating || !prompt.trim()}
            className="bg-orange text-white font-mono text-sm px-8 py-4 hover:bg-[#cc3d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {generating ? "generating..." : "generate thumbnails →"}
          </button>
        </section>

        {/* results */}
        {results.length > 0 && (
          <section>
            <h2 className="font-mono text-lg font-bold mb-4">your thumbnails</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {results.map((src, i) => (
                <div key={i} className="aspect-video bg-gray-200 border border-gray-300 relative group overflow-hidden">
                  <img
                    src={src}
                    alt={`Generated thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <a
                    href={src}
                    download={`thumbnail-${i + 1}.png`}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="font-mono text-sm text-white">download</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* empty state */}
        {results.length === 0 && !generating && (
          <section className="text-center py-16">
            <p className="font-mono text-gray-500">
              enter a prompt and click generate to create thumbnails
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
