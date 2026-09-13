import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-sans text-base font-normal transition-[background-color,opacity,transform,border-color] duration-200 ease-out cursor-pointer select-none touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-action text-action-ink hover:opacity-90",
        ghost: "bg-transparent border border-line-2 text-ink hover:bg-surface-2",
        glass: "bg-ink/10 border border-line-2 text-ink backdrop-blur-xl hover:bg-ink/15",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-[18px] py-3",
        sm: "min-h-10 px-3 py-2 text-sm",
        lg: "min-h-13 px-6 py-3.5 text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
