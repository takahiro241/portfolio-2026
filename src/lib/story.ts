import { EDGES, ENTITIES, SENTENCES, STORY_ALIASES, nodeById } from "@/data/ontology";
import type { Locale } from "@/i18n/config";

/** a run of prose, optionally bound to an entity */
export interface Segment {
  text: string;
  entity?: string;
}

/**
 * Auto-link a line of prose against STORY_ALIASES: earliest match wins,
 * longest form wins at the same position. Data stays plain text.
 */
export function linkify(text: string): Segment[] {
  const segments: Segment[] = [];
  let rest = text;
  while (rest.length) {
    let best: { index: number; form: string; id: string } | null = null;
    for (const alias of STORY_ALIASES) {
      for (const form of alias.forms) {
        const index = rest.indexOf(form);
        if (index === -1) continue;
        if (!best || index < best.index || (index === best.index && form.length > best.form.length)) {
          best = { index, form, id: alias.id };
        }
      }
    }
    if (!best) {
      segments.push({ text: rest });
      break;
    }
    if (best.index > 0) segments.push({ text: rest.slice(0, best.index) });
    segments.push({ text: best.form, entity: best.id });
    rest = rest.slice(best.index + best.form.length);
  }
  return segments;
}

export interface Popover {
  uri: string;
  type: string;
  desc: string;
  triples: string[];
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, "");

/** everything the story popover shows is derived, never hand-written twice */
export function popoverFor(id: string, lang: Locale): Popover | null {
  const node = nodeById[id];
  if (!node) return null;
  const detail = ENTITIES[id];
  const desc = detail?.desc[lang] ?? (SENTENCES[id] ? stripTags(SENTENCES[id][lang]) : "");
  const triples = EDGES.filter((e) => e.s === id || e.o === id)
    .slice(0, 3)
    .map((e) => (e.s === id ? `:${e.p} ${nodeById[e.o].label}` : `${nodeById[e.s].label} :${e.p} →`));
  return {
    uri: node.label,
    type: detail?.type ?? `a :${node.cls.charAt(0).toUpperCase()}${node.cls.slice(1)}`,
    desc: desc.length > 120 ? desc.slice(0, 119) + "…" : desc,
    triples,
  };
}
