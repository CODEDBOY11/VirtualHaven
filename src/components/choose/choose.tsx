import { useState, useEffect } from "react";
import chooseImage from "../images/choose.png";
import chooseDarkImage from "../images/choose-dark.png";
import "./choose.css";

const Choose = () => {
  const [sticky, setSticky] = useState(false);
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const body = document.body;
    const html = document.documentElement;
    const explicitLight =
      body.classList.contains("light-theme") ||
      html.classList.contains("light-theme") ||
      body.getAttribute("data-theme") === "light" ||
      html.getAttribute("data-theme") === "light" ||
      localStorage.getItem("theme") === "light";
    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
    return explicitLight ? true : !prefersDark;
  });

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 250);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const isColorLight = (color: string | null) => {
      if (!color) return true;
      color = color.trim();
      const rgb = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (rgb) {
        const r = Number(rgb[1]),
          g = Number(rgb[2]),
          b = Number(rgb[3]);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance >= 0.6;
      }
      const hex = color.replace("#", "");
      if (/^[0-9a-f]{3,6}$/i.test(hex)) {
        const full =
          hex.length === 3
            ? hex
                .split("")
                .map((c) => c + c)
                .join("")
            : hex;
        const r = parseInt(full.slice(0, 2), 16),
          g = parseInt(full.slice(2, 4), 16),
          b = parseInt(full.slice(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance >= 0.6;
      }
      return true;
    };

    const updateIsLight = () => {
      const body = document.body;
      const html = document.documentElement;
      const explicitLight =
        body.classList.contains("light-theme") ||
        html.classList.contains("light-theme") ||
        body.getAttribute("data-theme") === "light" ||
        html.getAttribute("data-theme") === "light" ||
        localStorage.getItem("theme") === "light";
      if (explicitLight) {
        setIsLight(true);
        return;
      }

      const prefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
      if (prefersDark) {
        setIsLight(false);
        return;
      }

      // fallback: inspect CSS var or computed background
      const rootStyle = getComputedStyle(document.documentElement);
      const bodyStyle = getComputedStyle(document.body);
      const cssVarBg =
        rootStyle.getPropertyValue("--bg") ||
        rootStyle.getPropertyValue("--background");
      const computedBg = cssVarBg?.trim()
        ? cssVarBg.trim()
        : bodyStyle.backgroundColor || rootStyle.backgroundColor || "";
      setIsLight(isColorLight(computedBg));
    };

    // media query listener
    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    const mqHandler = () => updateIsLight();
    if (mql) {
      if (typeof mql.addEventListener === "function")
        mql.addEventListener("change", mqHandler);
      else
        (mql as MediaQueryList).addListener(
          mqHandler as (ev: MediaQueryListEvent) => void
        );
    }

    // observe class/data-theme changes on body & html
    const mutationCb = () => updateIsLight();
    const bodyObserver = new MutationObserver(mutationCb);
    const htmlObserver = new MutationObserver(mutationCb);
    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    htmlObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // listen to storage (other tabs)
    const storageHandler = (e: StorageEvent) => {
      if (!e.key || e.key === "theme") updateIsLight();
    };
    window.addEventListener("storage", storageHandler);

    // custom theme-change event (call window.dispatchEvent(new CustomEvent('theme-change', { detail: { isLight: trueOrFalse } })))
    const themeChangeHandler = (ev: Event) => {
      const detail = (ev as CustomEvent)?.detail;
      if (detail && typeof detail.isLight === "boolean")
        setIsLight(Boolean(detail.isLight));
      else updateIsLight();
    };
    window.addEventListener(
      "theme-change",
      themeChangeHandler as EventListener
    );

    // initial run
    updateIsLight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (mql) {
        if (typeof mql.removeEventListener === "function")
          mql.removeEventListener("change", mqHandler);
        else
          (mql as MediaQueryList).removeListener(
            mqHandler as (ev: MediaQueryListEvent) => void
          );
      }
      bodyObserver.disconnect();
      htmlObserver.disconnect();
      window.removeEventListener("storage", storageHandler);
      window.removeEventListener(
        "theme-change",
        themeChangeHandler as EventListener
      );
    };
  }, []);

  return (
    <div className="choose-div">
      <a href="#/contact">
        <button className={`${sticky ? "floating-button" : ""}`}>
          <i className="bi bi-chat-dots" />
          Hire me
        </button>
      </a>
      <a href="#top">
        <button
          className={`backtothetop-button ${
            sticky ? "backtothetop-button--visible" : ""
          }`}
        >
          <i className="bi bi-arrow-up" />
        </button>
      </a>

      <img
        className="img"
        src={isLight ? chooseImage : chooseDarkImage}
        alt="Choose illustration"
        loading="lazy"
      />
    </div>
  );
};

export default Choose;
