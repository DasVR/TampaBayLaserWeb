import { type ComponentProps, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCurtainNav } from "@/shell/Curtain";

type Props = Omit<ComponentProps<typeof Link>, "to"> & {
  to: string;
  children: ReactNode;
};

/** Internal link: ghost-block transition. Modifier-click bypasses curtain. */
export function SmartLink({ to, onClick, children, ...rest }: Props) {
  const { requestGo } = useCurtainNav();

  return (
    <Link
      to={to}
      {...rest}
      onClick={(e) => {
        if (e.defaultPrevented) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
          return;
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        requestGo(to);
      }}
    >
      {children}
    </Link>
  );
}
