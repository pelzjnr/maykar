"use client";
import { useState } from "react";
import Link from "next/link";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
      >
        <span className="font-mono text-base font-bold">{question}</span>
        <span className={`font-mono text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="font-mono text-sm text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
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
            <Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link>
            <Link href="/login" className="font-mono text-sm text-gray-600 hover:text-orange">log in</Link>
            <Link href="/signup" className="bg-orange text-white font-mono text-sm px-5 py-2 hover:bg-[#cc3d00] transition-colors">
              sign up
            </Link>
          </nav>
          <Link href="/generator" className="md:hidden bg-orange text-white font-mono text-sm px-4 py-2 hover:bg-[#cc3d00] transition-colors">
            try
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight">
            thumbnails<span className="text-orange">.</span>
          </h1>
          <p className="font-mono text-lg md:text-xl mt-6 text-gray-600 max-w-xl">
            ai-powered thumbnail generator. create scroll-stopping images for youtube, twitter, and instagram in seconds.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/generator"
              className="inline-block bg-orange text-white font-mono text-base md:text-lg px-8 py-4 hover:bg-[#cc3d00] transition-colors text-center"
            >
              create thumbnails →
            </Link>
            <Link
              href="/pricing"
              className="inline-block border border-gray-300 text-gray-700 font-mono text-base md:text-lg px-8 py-4 hover:border-orange hover:text-orange transition-colors text-center"
            >
              view pricing
            </Link>
          </div>
        </div>
      </section>

      {/* preview */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
            how it works<span className="text-orange">.</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-8">
              <div className="w-10 h-10 bg-orange text-white flex items-center justify-center font-mono text-lg font-bold mb-4">
                1
              </div>
              <h3 className="font-mono text-lg font-bold mb-3">enter your topic</h3>
              <p className="font-mono text-sm text-gray-600">
                describe what your video or post is about. our ai understands your niche.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <div className="w-10 h-10 bg-orange text-white flex items-center justify-center font-mono text-lg font-bold mb-4">
                2
              </div>
              <h3 className="font-mono text-lg font-bold mb-3">ai generates</h3>
              <p className="font-mono text-sm text-gray-600">
                our ai creates multiple variations optimized for clicks and engagement.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <div className="w-10 h-10 bg-orange text-white flex items-center justify-center font-mono text-lg font-bold mb-4">
                3
              </div>
              <h3 className="font-mono text-lg font-bold mb-3">download or edit</h3>
              <p className="font-mono text-sm text-gray-600">
                pick your favorite. download as png or edit further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          features<span className="text-orange">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-lg font-bold mb-3">multi-platform</h3>
            <p className="font-mono text-sm text-gray-600">
              youtube, twitter, instagram. all aspect ratios covered.
            </p>
          </div>
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-lg font-bold mb-3">unique designs</h3>
            <p className="font-mono text-sm text-gray-600">
              no templates. every thumbnail is generated fresh.
            </p>
          </div>
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-lg font-bold mb-3">fast results</h3>
            <p className="font-mono text-sm text-gray-600">
              generate 4 variations in under 30 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100 bg-gray-50">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          pricing<span className="text-orange">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-base font-bold text-gray-500">starter</h3>
            <p className="font-display text-4xl font-bold mt-4">$0</p>
            <p className="font-mono text-sm text-gray-500 mt-2">free</p>
            <ul className="font-mono text-sm mt-6 space-y-2 text-gray-600">
              <li>5 thumbnails / month</li>
              <li>standard quality</li>
              <li>personal license</li>
            </ul>
          </div>
          <div className="border-2 border-orange p-6 md:p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white font-mono text-xs px-3 py-1">
              popular
            </div>
            <h3 className="font-mono text-base font-bold text-orange">creator</h3>
            <p className="font-display text-4xl font-bold mt-4">$15</p>
            <p className="font-mono text-sm text-gray-500 mt-2">/ month</p>
            <ul className="font-mono text-sm mt-6 space-y-2 text-gray-600">
              <li>100 thumbnails / month</li>
              <li>high quality</li>
              <li>commercial license</li>
              <li>priority support</li>
            </ul>
          </div>
          <div className="border border-gray-200 p-6 md:p-8 hover:border-orange transition-colors">
            <h3 className="font-mono text-base font-bold text-gray-500">pro</h3>
            <p className="font-display text-4xl font-bold mt-4">$49</p>
            <p className="font-mono text-sm text-gray-500 mt-2">/ month</p>
            <ul className="font-mono text-sm mt-6 space-y-2 text-gray-600">
              <li>unlimited thumbnails</li>
              <li>highest quality</li>
              <li>api access</li>
              <li>dedicated support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          faq<span className="text-orange">.</span>
        </h2>
        <div className="max-w-3xl space-y-4">
          <FAQItem
            question="what platforms are supported?"
            answer="we support youtube (16:9), twitter/x (2:1), and instagram (1:1). more formats coming soon."
          />
          <FAQItem
            question="can i use thumbnails commercially?"
            answer="yes. creator and pro plans include commercial license. starter is personal use only."
          />
          <FAQItem
            question="how long does generation take?"
            answer="most thumbnails are generated in under 30 seconds. complex prompts may take up to a minute."
          />
          <FAQItem
            question="can i edit the generated images?"
            answer="download and edit in any software you prefer. pro plan includes basic editor."
          />
        </div>
      </section>

      {/* cta */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-t border-gray-100 bg-orange">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            create thumbnails<span className="text-black">.</span>
          </h2>
          <p className="font-mono text-base md:text-lg text-white/80 mt-4">
            start for free. no credit card required.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-block bg-white text-orange font-mono text-base md:text-lg px-8 py-4 hover:bg-black hover:text-white transition-colors"
            >
              get started →
            </Link>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="px-6 py-12 md:px-12 md:py-16 border-t border-gray-100 bg-gray-50">
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div>
            <p className="font-display text-xl font-bold mb-4">maykar.</p>
            <p className="font-mono text-sm text-gray-600">
              ai-powered thumbnail generator.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">product</h4>
            <ul className="space-y-2">
              <li><Link href="/generator" className="font-mono text-sm text-gray-600 hover:text-orange">generator</Link></li>
              <li><Link href="/pricing" className="font-mono text-sm text-gray-600 hover:text-orange">pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">account</h4>
            <ul className="space-y-2">
              <li><Link href="/login" className="font-mono text-sm text-gray-600 hover:text-orange">sign in</Link></li>
              <li><Link href="/signup" className="font-mono text-sm text-gray-600 hover:text-orange">sign up</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <p className="font-mono text-xs text-gray-500">
            © 2026 maykar.
          </p>
        </div>
      </footer>
    </main>
  );
}
