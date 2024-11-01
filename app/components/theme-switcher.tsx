'use client';

import { useTheme } from "next-themes";
import { useEffect, useState, PropsWithChildren } from "react";
import Tooltip from "./tooltip";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import socialStyles from '@/app/components/social-links/social-links.module.css';

export default function ThemeSwitcher({
    className = '',
    hideTooltip = false
}) {
    const { theme: activeTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const Wrapper = ({ children }: PropsWithChildren) => {
      return hideTooltip ? (
        <>{children}</>
      ) : (
        <Tooltip text={activeTheme === "light" ? "Dark Mode" : "Light Mode"}>
          {children}
        </Tooltip>

      );
    }

    return (
      <Wrapper>
        {mounted && (
          <button
            onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
            aria-label="Change the theme"
            className={`${socialStyles.icon} ${className}`}
          >
            {activeTheme === "dark" ? <Sun /> : <Moon />}
          </button>
        )}
      </Wrapper>
    );
}