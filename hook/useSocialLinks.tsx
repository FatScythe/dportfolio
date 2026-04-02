import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { usePortfolio } from "./usePortfolio";

export function useSocialLinks() {
  const { linkedInUrl, behanceUrl, emailAddress } = usePortfolio();

  const links = [
    ...(linkedInUrl && linkedInUrl !== "#"
      ? [
          {
            name: "LinkedIn",
            href: linkedInUrl,
            icon: <FaLinkedinIn size={20} />,
          },
        ]
      : []),
    ...(behanceUrl && behanceUrl !== "#"
      ? [
          {
            name: "Behance",
            href: behanceUrl,
            icon: <FaBehance size={20} />,
          },
        ]
      : []),
    {
      name: "Email",
      href: `mailto:${emailAddress}`,
      icon: <HiOutlineMail size={20} />,
    },
  ];

  return links;
}
