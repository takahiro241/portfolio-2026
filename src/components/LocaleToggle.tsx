"use client";

import type { Locale } from "@/i18n/config";

interface LocaleToggleProps {
  lang: Locale;
  /** locale-less path of the current page, e.g. "/" or "/works" */
  path: string;
}

/**
 * Deliberately plain <a> full-page navigation (no <Link>): the router cache
 * must never replay a stale-locale redirect (portfolio-2025 commit 917623b).
 * The NEXT_LOCALE cookie is written before the navigation starts so the proxy
 * honors the choice over Accept-Language — without it, switching to the
 * default locale bounces straight back for non-Japanese browsers.
 */
export function LocaleToggle({ lang, path }: LocaleToggleProps) {
  const remember = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  };
  const jaHref = path || "/";
  const enHref = `/en${path === "/" ? "" : path}`;

  return (
    <span className="lang">
      {lang === "ja" ? (
        <a className="on">あ</a>
      ) : (
        <a href={jaHref} hrefLang="ja" lang="ja" aria-label="日本語に切り替え" onClick={() => remember("ja")}>
          あ
        </a>
      )}
      {" / "}
      {lang === "en" ? (
        <a className="on">A</a>
      ) : (
        <a href={enHref} hrefLang="en" lang="en" aria-label="Switch to English" onClick={() => remember("en")}>
          A
        </a>
      )}
    </span>
  );
}
