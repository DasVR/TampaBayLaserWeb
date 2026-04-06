import { type ComponentProps, type PointerEventHandler } from "react";
import { integrations } from "@/config/brand";
import { cn } from "@/lib/cn";
import { hapticImpact } from "@/lib/haptic";

type Props = ComponentProps<"a">;

/** Primary booking CTA — opens Fresha in a new tab (swap URL in brand `integrations` for WP). */
export function BookLink({
  className,
  href = integrations.bookingUrl,
  children,
  onPointerDown,
  ...rest
}: Props) {
  const handlePointerDown: PointerEventHandler<HTMLAnchorElement> = (e) => {
    if (e.pointerType === "touch") hapticImpact("medium");
    onPointerDown?.(e);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      onPointerDown={handlePointerDown}
      {...rest}
    >
      {children}
    </a>
  );
}
