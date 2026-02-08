"use client";
import Link from "next/link";

export default function Pricing() {
  return (
    <main className="min-h-screen">
      {/* header */}
      <header className="border-b border-gray-100 px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold">
            maykar<span className="text-orange">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/generator" className="font-mono text-sm text-gray-600 hover:text-orange">generator</Link>
            <Link href="/pricing" className="font-mono text-sm text-orange font-bold">pricing</Link>
            <Link href="/login" className="font-mono text-sm text-gray-600 hover:text-orange">log in</Link>
            <Link href="/signup" className="bg-orange text-white font-mono text-sm px-5 py-2 hover:bg-[#cc3d00] transition-colors">
              sign up
            </Link>
          </nav>
        </div>
      </header>

      <div className="px-6 py-12 md:px-12 md:py-20 max-w-6xl mx-auto">
        <h1 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
          pricing<span className="text-orange">.</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-base font-bold text-gray-500">starter</h3>
            <p className="font-display text-4xl font-bold mt-4">$0</p>
            <p className="font-mono text-sm text-gray-500 mt-2">free forever</p>
            <ul className="font-mono text-sm mt-6 space-y-3 text-gray-600">
              <li>✓ 5 thumbnails / month</li>
              <li>✓ standard quality</li>
              <li>✓ personal license</li>
              <li>✓ basic support</li>
              <li className="text-gray-300">✗ commercial use</li>
              <li className="text-gray-300">✗ api access</li>
            </ul>
            <Link
              href="/signup"
              className="inline-block w-full text-center mt-8 border border-gray-300 text-gray-700 font-mono text-sm px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              get started
            </Link>
          </div>

          <div className="border-2 border-orange p-6 md:p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white font-mono text-xs px-3 py-1">
              popular
            </div>
            <h3 className="font-mono text-base font-bold text-orange">creator</h3>
            <p className="font-display text-4xl font-bold mt-4">$15</p>
            <p className="font-mono text-sm text-gray-500 mt-2">/ month</p>
            <ul className="font-mono text-sm mt-6 space-y-3 text-gray-600">
              <li>✓ 100 thumbnails / month</li>
              <li>✓ high quality</li>
              <li>✓ commercial license</li>
              <li>✓ priority support</li>
              <li>✓ download png</li>
              <li className="text-gray-300">✗ api access</li>
            </ul>
            <Link
              href="/signup"
              className="inline-block w-full text-center mt-8 bg-orange text-white font-mono text-sm px-6 py-3 hover:bg-[#cc3d00] transition-colors"
            >
              start free trial
            </Link>
          </div>

          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-base font-bold text-gray-500">pro</h3>
            <p className="font-display text-4xl font-bold mt-4">$49</p>
            <p className="font-mono text-sm text-gray-500 mt-2">/ month</p>
            <ul className="font-mono text-sm mt-6 space-y-3 text-gray-600">
              <li>✓ unlimited thumbnails</li>
              <li>✓ highest quality</li>
              <li>✓ commercial license</li>
              <li>✓ dedicated support</li>
              <li>✓ api access</li>
              <li>✓ custom sizes</li>
            </ul>
            <Link
              href="/signup"
              className="inline-block w-full text-center mt-8 border border-gray-300 text-gray-700 font-mono text-sm px-6 py-3 hover:border-orange hover:text-orange transition-colors"
            >
              contact sales
            </Link>
          </div>
        </div>

        <p className="font-mono text-sm text-gray-500 mt-12 text-center">
          all plans include access to generator. no credit card required for starter.
        </p>
      </div>
    </main>
  );
}
