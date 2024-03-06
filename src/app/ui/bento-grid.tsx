import { cn } from "../utils/cn";
import Link from "next/link"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input  p-4   bg-slate-200  justify-between flex flex-col space-y-4 bg-opacity-0 shadow-input backdrop-blur-[18px] border-radius-[10px] border-[2px] border-solid border-white/[0.30]",
        className
      )}
    >
      <Link href={"/"}>
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon} 
          <div className="font-sans font-bold text-stone-50  mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-400 text-xs ">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};
