"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const routes = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Talent", href: "/talent" },
  { title: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/*                                  INTERFACE                                 */
/* -------------------------------------------------------------------------- */
interface NavbarProps {}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */
const Navbar: FC<NavbarProps> = (props) => {
  /* ----------------------------- PROPS & PARAMS ----------------------------- */
  /* --------------------------------- STATES --------------------------------- */
  /* ---------------------------------- HOOKS --------------------------------- */
  const pathname = usePathname();

  /* -------------------------------- FUNCTIONS ------------------------------- */
  /* ------------------------------- USE EFFECTS ------------------------------ */
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <div className="flex gap-4 items-center justify-between w-full">
      <div className="flex gap-12 items-center uppercase text-3xl">
        {routes.map((route) => {
          return (
            <Link href={route.href} key={route.href}>
              <p
                className={cn(
                  "hover:scale-110 transition-transform",
                  pathname === route.href && "underline"
                )}
              >
                {route.title}
              </p>
            </Link>
          );
        })}
      </div>
      Logo
    </div>
  );
};

export default Navbar;
