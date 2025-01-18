import { cn } from "@/utils/cn";
import Image from "next/image";
import { FC } from "react";

/* -------------------------------------------------------------------------- */
/*                                  INTERFACE                                 */
/* -------------------------------------------------------------------------- */
interface CardProps {
  title: string;
  src: string;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */
const Card: FC<CardProps> = (props) => {
  /* ----------------------------- PROPS & PARAMS ----------------------------- */
  const { title, src, className } = props;
  /* --------------------------------- STATES --------------------------------- */
  /* ---------------------------------- HOOKS --------------------------------- */
  /* -------------------------------- FUNCTIONS ------------------------------- */
  /* ------------------------------- USE EFFECTS ------------------------------ */
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <div
      className={cn(
        "flex flex-col shadow-md w-[400px] p-2 h-fit bg-gray-950",
        className
      )}
    >
      {/* IMAGE */}
      <div className="relative w-full h-[600px] -translate-x-4 -translate-y-4">
        <Image
          src={src}
          alt={`${title}-card-image`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* TITLE */}
      <p className="text-2xl tracking-widest -mt-2 uppercase">{title}</p>
    </div>
  );
};

export default Card;
