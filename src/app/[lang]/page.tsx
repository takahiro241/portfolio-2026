import { Stage } from "@/components/Stage";
import { TopNav } from "@/components/TopNav";
import { toLocale } from "@/i18n/config";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const lang = toLocale((await props.params).lang);
  return (
    <div className="gshell">
      <TopNav lang={lang} active="graph" path="/" />
      <Stage lang={lang} />
    </div>
  );
}
