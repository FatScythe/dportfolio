"use client";

import { useState, useRef, useEffect } from "react";

// icons...
import { FaLock, FaArrowRight } from "react-icons/fa";

// component...
import Image from "next/image";

// utils...
import { cn } from "../libs/utils";

// actions...
import { verifyPassword } from "../actions/verify-password";
import { usePortfolio } from "@/hook/usePortfolio";

export default function LoginPage() {
  const { loginBackgroundImage, portfolioName } = usePortfolio();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus the password input immediately on page load...
    passwordInputRef.current?.focus();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");

    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get("from") || "/protected-work";

    const result = await verifyPassword(String(password ?? ""));
    if (result.success) {
      document.cookie = "slug_auth=true; path=/; max-age=600; SameSite=Strict";
      window.location.href = redirectTo;
    } else {
      setErrorMsg(result?.error || "Wrong password");
      // re-focus and select input text for quick re-typing...
      passwordInputRef.current?.focus();
      passwordInputRef.current?.select();
    }
  }

  const bgSrc = loginBackgroundImage?.url || "/images/login_bkg.jpg";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center min-h-screen bg-black/20 px-4 text-center overflow-hidden",
      )}
    >
      <div className={cn("absolute inset-0 z-0")}>
        <Image
          src={bgSrc}
          alt={loginBackgroundImage?.alt || "Private Area"}
          fill
          className={cn("object-cover object-center grayscale opacity-60")}
          priority
          unoptimized
        />
        <div className={cn("absolute inset-0 bg-black/70 z-10")} />
      </div>

      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center",
        )}
      >
        <div className={cn("mb-8 text-black/85")}>
          <div
            className={cn(
              "p-6 bg-white border border-white/10 rounded-full inline-block",
            )}
          >
            <FaLock size={32} />
          </div>
        </div>

        <div className={cn("max-w-md w-full space-y-4 mb-12")}>
          <p
            className={cn(
              "text-lg uppercase tracking-[0.5em] text-white/90 font-serif",
            )}
          >
            {portfolioName ||
              process.env.NEXT_PUBLIC_PORTFOLIO_NAME ||
              "Designer Portfolio"}{" "}
            portfolio
          </p>
          <p className={cn("text-xl font-serif text-white/90")}>
            Feel free to reach out to me for the password
          </p>
        </div>

        <div className={cn("w-full max-w-sm space-y-4")}>
          <form onSubmit={handleSubmit} className={cn("relative group")}>
            <input
              ref={passwordInputRef}
              name="password"
              type="password"
              placeholder="Password"
              className={cn(
                "w-full p-4 bg-transparent border-b border-white/20 outline-none focus:border-white transition-colors font-serif text-white/90 placeholder:text-white/30",
              )}
              required
            />
            <button
              type="submit"
              aria-label="Submit"
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors",
              )}
            >
              <FaArrowRight size={18} />
            </button>
          </form>

          {/* Inline error message */}
          {errorMsg && (
            <p className="text-red-400 text-xs tracking-wider font-sans pt-2">
              {errorMsg}
            </p>
          )}
        </div>

        <div className={cn("fixed bottom-12")}>
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.2em] text-white/40",
            )}
          >
            {portfolioName ||
              process.env.NEXT_PUBLIC_PORTFOLIO_NAME ||
              "Designer Portfolio"}
          </p>
        </div>
      </div>
    </div>
  );
}
