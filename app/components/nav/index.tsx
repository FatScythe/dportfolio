"use client";
import { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

// util...
import { cn } from "@/app/libs/utils";

// icon...
import { FaChevronDown } from "react-icons/fa";
import { usePortfolio } from "@/hook/usePortfolio";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const { projects } = usePortfolio();

  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <header
      className={cn("w-full px-4 py-7 sm:px-8 sm:py-14 font-serif relative")}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto grid grid-cols-3 gap-0 sm:gap-10 items-center",
        )}
      >
        <div
          className={cn(
            "flex sm:justify-between sm:items-center col-span-3 sm:col-span-2 sm:px-10",
          )}
        >
          <div className={cn("flex justify-start")}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(!openModal);
              }}
              className={cn(
                "sm:hidden relative w-8 h-3 flex flex-col justify-between",
              )}
            >
              <div
                className={cn(
                  "h-0.5 w-full bg-foreground/65 transition-all duration-300",
                  openModal && "rotate-45 translate-y-[5.5px]",
                )}
              />
              <div
                className={cn(
                  "h-0.5 w-full bg-foreground/65 transition-all duration-300",
                  openModal && "-rotate-45 -translate-y-[5.5px]",
                )}
              />
            </button>
          </div>

          <div className={cn("flex justify-center w-full sm:w-fit")}>
            <Link href="/" className={cn("group")}>
              <h1
                className={cn(
                  "font-sans text-sm text-nowrap tracking-widest sm:tracking-normal font-bold sm:text-4xl sm:font-normal uppercase transition-opacity group-hover:opacity-70",
                )}
              >
                {process.env.NEXT_PUBLIC_PORTFOLIO_NAME || "John Doe"}
              </h1>
            </Link>
          </div>
        </div>
        <nav
          className={cn(
            "flex justify-center items-center sm:justify-end col-span-3 sm:col-span-1",
            "w-full sm:min-h-fit transition-all duration-500 ease-in-out",
            "sm:opacity-100 sm:visible",
            !openModal && "pointer-events-none sm:pointer-events-auto",
            openModal
              ? "min-h-[95lvh] opacity-100 bg-background visible absolute top-14 bottom-0 left-0 right-0 z-10"
              : "min-h-0 h-0 opacity-0 invisible",
          )}
        >
          <ul
            className={cn(
              "text-base sm:text-[15px] tracking-widest uppercase font-bold sm:font-medium sm:lowercase",
              "flex flex-col sm:flex-row items-center gap-3 sm:gap-5",
            )}
          >
            <li>
              <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-accent",
                  isActive("/") ? "text-accent" : "text-foreground",
                )}
              >
                home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={cn(
                  "transition-colors hover:text-accent",
                  isActive("/about") ? "text-accent" : "text-foreground",
                )}
              >
                about
              </Link>
            </li>

            <li className={cn("relative group text-center")}>
              <button
                type="button"
                onClick={(e) => {
                  setIsOpen(!isOpen);
                }}
                className={cn(
                  "cursor-pointer hover:text-accent transition-colors",
                  "uppercase sm:lowercase text-base sm:text-[15px]",
                )}
              >
                <div
                  className={cn(
                    "flex justify-center items-center gap-1 sm:gap-0",
                  )}
                >
                  <span>work</span>
                  <FaChevronDown
                    className={cn(
                      "w-3 h-3 opacity-50 transition-transform duration-300",
                      "group-hover:rotate-180",
                      isOpen && "rotate-180",
                    )}
                    strokeWidth={2}
                  />
                </div>
              </button>
              <div
                className={cn(
                  "relative w-full pt-2 transition-all duration-300 ease-out z-50 overflow-hidden",
                  "h-0 opacity-0",
                  isOpen && "h-auto opacity-100 py-4",

                  "sm:absolute sm:right-0 sm:top-full sm:h-auto sm:min-w-64 sm:translate-y-2",
                  "sm:opacity-0 sm:invisible sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:translate-y-0",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col gap-4",
                    "sm:bg-white sm:shadow-xl sm:border sm:border-gray-100 sm:p-5",
                  )}
                >
                  {Object.entries(projects).map(([key, value], index) => (
                    <Link
                      key={key || index}
                      href={`/work/${key}`}
                      className={cn(
                        "text-sm sm:text-[13px] tracking-wide hover:text-accent transition-colors whitespace-nowrap border-b border-transparent hover:border-accent/10 pb-1",
                        "text-center sm:text-left",
                      )}
                    >
                      {value.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href={
                  process.env?.NEXT_PUBLIC_PORTFOLIO_CV_URL ||
                  "https://drive.google.com/file/d/1d4sOTshJnty9pAGGECXMh8ZXOQaFfilo/view?usp=sharing"
                }
                target="_blank"
                className={cn(
                  "transition-colors hover:text-accent",
                  isActive("/resume") ? "text-accent" : "text-foreground",
                )}
              >
                resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
