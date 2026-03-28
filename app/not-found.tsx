import Link from "next/link";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center bg-background">
      <div className="relative z-10 space-y-8 max-w-xl">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 bg-gray-200" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-semibold">
            Page Not Found
          </span>
          <div className="h-[1px] w-8 bg-gray-200" />
        </div>

        {/* Hero Typography */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tighter">
            Lost in the <span className="italic font-serif">void.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest font-medium">
            (The page you seek has been moved or deleted)
          </p>
        </div>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm mx-auto font-light">
          It seems this coordinate doesn't exist. Let's get you back to the
          showcase.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:text-accent transition-all duration-300"
          >
            <HiOutlineArrowLongLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
            Return to Portfolio
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </main>
  );
}
