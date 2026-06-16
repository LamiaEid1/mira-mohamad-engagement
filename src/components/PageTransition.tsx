import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [display, setDisplay] = useState(children);
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    if (key === pathname) {
      setDisplay(children);
      return;
    }
    setVisible(false);
    const t = setTimeout(() => {
      setDisplay(children);
      setKey(pathname);
      setVisible(true);
    }, 250);
    return () => clearTimeout(t);
  }, [pathname, children, key]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {display}
    </div>
  );
}
