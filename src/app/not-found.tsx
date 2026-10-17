
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-800/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-800/40 bg-green-800/10 px-4 py-2 text-sm text-green-300 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Oops! Page not found
        </div>

        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="bg-gradient-to-b from-green-300 via-green-600 to-green-950 bg-clip-text text-[140px] font-black leading-none tracking-tighter text-transparent sm:text-[200px]">
            404
          </h1>

          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-green-800/30 blur-[80px] sm:h-64 sm:w-64" />
          </div>
        </div>

        {/* Description */}
        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl">
          Lost in the{' '}
          <span className="text-green-500">digital space?</span>
        </h2>

        <p className="mx-auto mb-10 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
          The page you are looking for doesn’t exist or may have been moved.
          Let’s get you back on the right track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-green-800/40 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M9 21V12h6v9" />
            </svg>
            Back to Home
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <button
            onClick={() => router.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-green-800/40 bg-green-950/30 px-7 py-3.5 font-semibold text-green-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-700 hover:bg-green-900/40 sm:w-auto"
          >
            ← Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-green-900/50 pt-6">
          <p className="text-sm text-slate-500">
            Error Code: 404 <span className="mx-2">•</span> Nothing to see here
          </p>
        </div>
      </div>
    </main>
  );
}

