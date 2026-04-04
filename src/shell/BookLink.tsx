import { type ComponentProps } from "react";
import { integrations } from "@/config/brand";
import { cn } from "@/lib/cn";

type Props = ComponentProps<"a">;

/** Primary booking CTA — opens Fresha in a new tab (swap URL in brand `integrations` for WP). */
export function BookLink({ className, href = integrations.bookingUrl, children, ...rest }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      {...rest}
    >
      {children}
    </a>
  );
}
