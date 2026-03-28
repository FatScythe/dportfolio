import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { cn } from "../libs/utils";

export const socialLinks = [
  ...(process.env.NEXT_PUBLIC_PORTFOLIO_LINKEDIN
    ? [
        {
          name: "LinkedIn",
          href: process.env.NEXT_PUBLIC_PORTFOLIO_LINKEDIN,
          icon: <FaLinkedinIn size={20} />,
        },
      ]
    : []),

  ...(process.env.NEXT_PUBLIC_PORTFOLIO_BEHANCE
    ? [
        {
          name: "Behance",
          href: process.env.NEXT_PUBLIC_PORTFOLIO_BEHANCE,
          icon: <FaBehance size={20} />,
        },
      ]
    : []),

  {
    name: "Email",
    href: `mailto:${process.env.NEXT_PUBLIC_PORTFOLIO_EMAIL || "johndoe@email.com"}`,
    icon: <HiOutlineMail size={20} />,
  },
];

export default function PageHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-4 text-center",
        className,
      )}
    >
      <h6
        className={cn(
          "font-sans text-accent text-[13px] font-bold tracking-[0.2em]",
        )}
      >
        {title}
      </h6>
      <h2
        className={cn(
          "font-serif text-[44px] sm:text-[5.625vw] text-foreground text-8xl font-extralight",
        )}
      >
        {subtitle}
      </h2>
    </div>
  );
}
