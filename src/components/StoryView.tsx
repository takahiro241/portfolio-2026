"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ENTITIES, PROFILE_INTRO, PROFILE_SECTIONS, UI, nodeById } from "@/data/ontology";
import { linkify, popoverFor } from "@/lib/story";
import type { Locale } from "@/i18n/config";

interface Pop {
  id: string;
  x: number;
  y: number;
}

export function StoryView({ lang }: { lang: Locale }) {
  const [pop, setPop] = useState<Pop | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefix = lang === "ja" ? "" : "/en";
  const fujii = ENTITIES.fujii;

  const show = useCallback((id: string, el: HTMLElement) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    const r = el.getBoundingClientRect();
    setPop({ id, x: Math.min(innerWidth - 350, Math.max(12, r.left)), y: r.bottom + scrollY + 10 });
  }, []);

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setPop(null), 200);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPop(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const renderLine = (line: string, key: number) => (
    <span key={key}>
      {linkify(line).map((seg, i) =>
        seg.entity ? (
          <b
            key={i}
            data-e={seg.entity}
            onPointerEnter={(e) => e.pointerType === "mouse" && show(seg.entity!, e.currentTarget)}
            onPointerLeave={(e) => e.pointerType === "mouse" && scheduleHide()}
            onClick={(e) => show(seg.entity!, e.currentTarget)}
          >
            {seg.text}
          </b>
        ) : (
          seg.text
        )
      )}
    </span>
  );

  const popData = pop ? popoverFor(pop.id, lang) : null;

  return (
    <div className="story">
      <article>
        <div className="kicker">{UI.storyKicker[lang]}</div>
        <h1 className="s-title hum">{fujii.title[lang]}</h1>
        <div className="s-sub">{UI.storySub[lang]}</div>

        {PROFILE_INTRO[lang].split("\n\n").map((para, pi) => (
          <p className="hum" key={pi}>
            {para.split("\n").map((line, li, arr) => (
              <span key={li}>
                {renderLine(line, li)}
                {li < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
        ))}

        {PROFILE_SECTIONS.map((section) => (
          <section className="s-sec" key={section.title.en}>
            <h3>{section.title[lang]}</h3>
            {section.entityIds.map((id) => {
              const detail = ENTITIES[id];
              if (!detail) return null;
              return (
                <Link className="p-entry" href={`${prefix || "/"}?e=${id}`} key={id}>
                  <span className="p-name hum">
                    {detail.title[lang]}
                    <span className="p-uri">{nodeById[id].label}</span>
                  </span>
                  <span className="p-desc hum">{detail.desc[lang]}</span>
                </Link>
              );
            })}
          </section>
        ))}
      </article>

      <div className="s-note">{UI.storyNote[lang]}</div>

      <div
        className={`pop${popData ? " show" : ""}`}
        style={pop ? { left: pop.x, top: pop.y } : undefined}
        onPointerEnter={() => hideTimer.current && clearTimeout(hideTimer.current)}
        onPointerLeave={scheduleHide}
        data-testid="story-pop"
      >
        {popData && pop && (
          <>
            <div className="uri">{popData.uri}</div>
            <div className="d hum">{popData.desc}</div>
            <div className="rels">
              {popData.triples.map((t, i) => (
                <div className="rel" key={i}>
                  {t}
                </div>
              ))}
            </div>
            <Link className="open" href={`${prefix || "/"}?e=${pop.id}`}>
              {UI.openInGraph[lang]} ↗
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
