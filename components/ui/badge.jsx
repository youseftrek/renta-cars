import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4",
        destructive:
          "border-transparent py-2 px-4 bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
