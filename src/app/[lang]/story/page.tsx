import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { StoryView } from "@/components/StoryView";
import { toLocale } from "@/i18n/config";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = toLocale((await props.params).lang);
  return {
    title: lang === "ja" ? "プロフィール" : "Profile",
    alternates: {
      canonical: lang === "ja" ? "/story" : "/en/story",
      languages: { ja: "/story", en: "/en/story" },
    },
  };
}

export default async function StoryPage(props: { params: Promise<{ lang: string }> }) {
  const lang = toLocale((await props.params).lang);
  return (
    <div className="qshell">
      <TopNav lang={lang} active="story" path="/story" />
      <StoryView lang={lang} />
    </div>
  );
}
