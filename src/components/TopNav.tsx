import Link from "next/link";
import { LocaleToggle } from "@/components/LocaleToggle";
import type { Locale } from "@/i18n/config";

interface TopNavProps {
  lang: Locale;
  active?: "graph" | "works" | "design" | "story";
  /** locale-less path of the current page, e.g. "/works" */
  path: string;
}

export function TopNav({ lang, active, path }: TopNavProps) {
  const prefix = lang === "ja" ? "" : "/en";

  return (
    <div className="top">
      <span className="brand">
        takahirofujii.dev — <b>ontology.ttl</b>
      </span>
      <nav>
        <Link href={prefix || "/"} className={active === "graph" ? "on" : ""}>:fujii</Link>
        <Link href={`${prefix}/works`} className={active === "works" ? "on" : ""}>
          ?works
        </Link>
        <Link href={`${prefix}/design`} className={active === "design" ? "on" : ""}>
          ?design
        </Link>
        <Link href={`${prefix}/story`} className={active === "story" ? "on" : ""}>
          :profile
        </Link>
      </nav>
      <LocaleToggle lang={lang} path={path} />
    </div>
  );
}
