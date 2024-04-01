import { tv } from "tailwind-variants";

export const getClassName = tv({
  base: "flex h-16 items-center justify-center px-4 py-2 text-2xl",
  variants: {
    variant: {
      primary:
        "min-w-80 rounded-full bg-sky-600 uppercase text-white shadow-[0px_0px_5px_1px] shadow-sky-400 hover:bg-sky-400 hover:shadow-[0px_0px_8px_1px] disabled:bg-gray-600 disabled:text-gray-400 disabled:shadow-none",
      link: "p-0 text-orange-400 hover:text-orange-600",
    },
  },
});
