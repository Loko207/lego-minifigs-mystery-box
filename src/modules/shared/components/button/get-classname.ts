import { tv } from "tailwind-variants";

export const getClassName = tv({
  base: "px-4 py-2",
  variants: {
    variant: {
      primary:
        "rounded-full bg-sky-800 uppercase text-white hover:bg-sky-600 disabled:bg-gray-300",
      link: "p-0 text-orange-400 hover:text-orange-600",
    },
  },
});
