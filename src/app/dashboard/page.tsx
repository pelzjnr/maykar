"use client";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [apiKey, setApiKey] = useState("maykar_api_key_xxxx");
  const [copied, setCopied] = useState(false);

  const copyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <Link href="/generator" className="font-mono text-sm text-gray-600 hover:text-orange">generator</Link>
            <Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link>
            <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white font-mono text-sm font-bold">
              J
            </div>
          </nav>
        </div>
      </header>

      <div className="px-6 py-8 md:px-12 md:py-12 max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">dashboard</h1>

        {/* stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">thumbnails left</p>
            <p className="font-display text-2xl md:text-3xl font-bold">5</p>
            <p className="font-mono text-xs text-gray-400 mt-2">of 5 this month</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">thumbnails generated</p>
            <p className="font-display text-2xl md:text-3xl font-bold">12</p>
            <p className="font-mono text-xs text-green-600 mt-2">all time</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">plan</p>
            <p className="font-display text-2xl md:text-3xl font-bold">starter</p>
            <Link href="/pricing" className="font-mono text-xs text-orange mt-2 hover:underline">
              upgrade
            </Link>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <p className="font-mono text-xs text-gray-500 mb-2">member since</p>
            <p className="font-display text-2xl md:text-3xl font-bold">feb 2026</p>
          </div>
        </section>

        {/* api key */}
        <section className="bg-white border border-gray-200 p-6 md:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h2 className="font-mono text-lg font-bold">api key</h2>
            <span className="font-mono text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
              for developers
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="password"
              value={apiKey}
              readOnly
              className="w-full border border-gray-200 p-4 font-mono text-sm bg-gray-50 truncate"
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={copyKey}
                className="bg-gray-100 text-gray-700 font-mono text-xs px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                {copied ? "copied!" : "copy"}
              </button>
              <Link
                href="/generator"
                className="inline-block bg-orange text-white font-mono text-xs px-4 py-2 hover:bg-[#cc3d00] transition-colors"
              >
                go to generator →
              </Link>
            </div>
          </div>
        </section>

        {/* recent */}
        <section className="bg-white border border-gray-200 p-6 md:p-8">
          <h2 className="font-mono text-lg font-bold mb-6">recent thumbnails</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-gray-200 border border-gray-300 flex items-center justify-center">
                <span className="font-mono text-sm text-gray-500">thumb {i}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/generator"
              className="inline-block border border-gray-300 text-gray-700 font-mono text-sm px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              create new →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
