import {
  type MouseEventHandler,
  type PointerEventHandler,
  type ReactNode,
} from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import { hapticImpact } from "@/lib/haptic";
import { useCurtainNav } from "@/shell/Curtain";

type Props = Omit<NavLinkProps, "onClick"> & {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  onPointerDown?: PointerEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
};

function toPath(to: NavLinkProps["to"]): string {
  if (typeof to === "string") return to;
  if (typeof to === "object" && to && "pathname" in to && to.pathname)
    return to.pathname + (to.search ?? "") + (to.hash ?? "");
  return "/";
}

/**
 * Like React Router `NavLink` (incl. `aria-current="page"`) but routes through the ghost curtain for standard clicks.
 */
export function CurtainNavLink({
  to,
  onClick,
  onPointerDown,
  children,
  ...rest
}: Props) {
  const { requestGo } = useCurtainNav();

  const handlePointerDown: PointerEventHandler<HTMLAnchorElement> = (e) => {
    if (e.pointerType === "touch") hapticImpact("light");
    onPointerDown?.(e);
  };

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      onClick?.(e);
      return;
    }
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    requestGo(toPath(to));
  };

  return (
    <NavLink to={to} onClick={handleClick} onPointerDown={handlePointerDown} {...rest}>
      {children}
    </NavLink>
  );
}
