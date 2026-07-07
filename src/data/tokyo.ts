/**
 * tokyo as a local — the three articles from the 2016 side project,
 * rescued from takahirofujii.com/tokyo-as-a-local.
 *
 * Hidden feature: these pages are linked only from the :tokyo-as-a-local
 * entity panel — no nav, no sitemap, noindex. The English has been cleaned
 * up from the 2016 originals; the voice, opinions and TAKA. sign-off stay.
 */

export type TokyoBlock = { img: string; alt: string } | { text: string } | { h: string };

export interface TokyoArticle {
  slug: string;
  no: string;
  kind: string;
  title: string;
  area: string;
  meta: { p: string; v: string; href?: string }[];
  blocks: TokyoBlock[];
  notes?: string[];
}

export const TOKYO_ARTICLES: TokyoArticle[] = [
  {
    slug: "streamer-coffee",
    no: "01",
    kind: "Cafe",
    title: "STREAMER COFFEE COMPANY",
    area: "Gakugei-Daigaku",
    meta: [
      { p: ":station", v: "Gakugei-Daigaku (Tokyu Toyoko line)" },
      { p: ":open", v: "10:00 – 20:00" },
      { p: ":address", v: "2-36 Chuo-cho, Meguro-ku, Tokyo" },
      { p: ":site", v: "streamercoffee.com ↗", href: "http://streamercoffee.com/" },
    ],
    blocks: [
      {
        text: "For the first article on this site, let me introduce Streamer Coffee Company in Gakugei-Daigaku — easily one of my favorite cafes in Japan. In fact, I am building this very website from one of its tables right now.",
      },
      { img: "/tokyo/streamer-coffee/streamer1.jpg", alt: "Streamer Coffee Company under the railway viaduct" },
      {
        text: "It is about a five-minute walk from Gakugei-Daigaku station, tucked under the railway viaduct, so it is easy to find. Being under the tracks gives the cafe an unusually high ceiling — a rare thing in Tokyo — and the whole place feels a little like being abroad.",
      },
      { img: "/tokyo/streamer-coffee/streamer2.jpg", alt: "Inside the cafe" },
      {
        text: "The counter seats come with power outlets. In Tokyo, a cafe with both wifi and outlets is a precious thing.",
      },
      { img: "/tokyo/streamer-coffee/streamer3.jpg", alt: "Counter seats" },
      {
        text: "The second floor is shared with KILO SHOP, a vintage clothing store, and has some extra seating too.",
      },
      { img: "/tokyo/streamer-coffee/streamer4.jpg", alt: "Stairs to the second floor" },
      {
        text: "There are bicycle stands outside — I get around mostly by bicycle, so this makes me happy. And my favorite detail: there is a basketball hoop inside the cafe. When your favorite things are close by, you can really settle in.",
      },
      { img: "/tokyo/streamer-coffee/streamer5.jpg", alt: "The basketball hoop in the cafe" },
      { h: "Streamer Latte" },
      {
        text: "The signature order is the Streamer Latte (around ¥580). If it is your first visit, start there. The mug is American-sized, and the baristas pour simple, beautiful latte art. The steamed milk is more generous than usual, which makes it smooth and easy to drink.",
      },
      { img: "/tokyo/streamer-coffee/streamer7.jpg", alt: "Streamer Latte with latte art" },
      {
        text: "This one below is the Military Latte — Streamer's matcha latte with white chocolate, poured in a camouflage pattern.",
      },
      { img: "/tokyo/streamer-coffee/streamer8.jpg", alt: "Military Latte" },
      { img: "/tokyo/streamer-coffee/streamer10.jpg", alt: "Menu board" },
      {
        text: "There are plenty of non-coffee options too — Thai tea, cocoa, juice — so you can bring friends who do not drink coffee. The free wifi (\"Tourist WIFI @ STREAMER\", ask the staff for the password) and the outlets matter to me, because writing code and drawing in cafes is one of my favorite ways to spend a day. A good latte, a basketball hoop and wifi: this cafe covers most of my essentials. So — try Streamer Coffee Company.",
      },
      { img: "/tokyo/streamer-coffee/streamer6.jpg", alt: "Working from the cafe" },
    ],
    notes: [
      "Weekends get crowded, especially around lunch.",
      "The restroom key is a big one — ask the staff.",
    ],
  },
  {
    slug: "ryzm",
    no: "02",
    kind: "Basketball shop / brand",
    title: "RYZM",
    area: "Komazawa-Daigaku",
    meta: [
      { p: ":station", v: "Komazawa-Daigaku" },
      { p: ":open", v: "12:00 – 18:00 (closed Wednesdays)" },
      { p: ":address", v: "5-17-13 Komazawa, Setagaya-ku, Tokyo" },
      { p: ":site", v: "ryzm.net ↗", href: "http://ryzm.net/" },
    ],
    blocks: [
      {
        text: "For the second article, RYZM in Komazawa — a basketball shop that also makes its own brand.",
      },
      { img: "/tokyo/ryzm/ryzm13.jpg", alt: "RYZM storefront" },
      {
        text: "It is a 10-15 minute walk from Komazawa-Daigaku station, close to Komazawa Olympic Park. The street on the way, Komazawa Park Avenue, is lined with cafes and zakka stores — worth wandering for lunch before or after, and if you have time, take a loop around the park itself.",
      },
      { img: "/tokyo/ryzm/ryzm12.jpg", alt: "Komazawa Park Avenue" },
      {
        text: "My basketball life started here: I have been playing at Komazawa Park for fifteen years, and my basketball wardrobe has grown and changed alongside RYZM. This is a place with real memories for me.",
      },
      { img: "/tokyo/ryzm/ryzm14.jpg", alt: "Inside the shop" },
      {
        text: "The shop is not large, but it is packed. RYZM mainly carries its own brand, plus AKTR and AAA (AKTR All Activity) and vintage imports. Look around first — and if you have any questions, talk to the owner, Hirota-san. He is genuinely friendly.",
      },
      { h: "Tops / Shorts" },
      {
        text: "My favorite RYZM items are the game shorts and tops. The two-tone colorways go with almost anything, they dry quickly, and new color combinations come out every season. I own more than five sets.",
      },
      { img: "/tokyo/ryzm/ryzm4.jpg", alt: "RYZM game shorts and tops" },
      { h: "Basuken" },
      {
        text: "Basuken, the basketball dog, is RYZM's original character.",
      },
      { img: "/tokyo/ryzm/ryzm11.jpg", alt: "Basuken, the basketball dog" },
      { h: "AKTR" },
      {
        text: "I also want to introduce AKTR properly. It is a Japanese brand that covers not just basketball but lifestyle wear, and RYZM is one of the few shops carrying AAA, its sister line — shirts, jackets and more. The AAA shirts are my favorite, and the quality matches the design. If AKTR interests you, RYZM is the place to try it on.",
      },
      { img: "/tokyo/ryzm/ryzm10.jpg", alt: "AKTR items in the shop" },
      { img: "/tokyo/ryzm/ryzm8.jpg", alt: "More AKTR and AAA pieces" },
      { img: "/tokyo/ryzm/ryzm1.jpg", alt: "RYZM" },
    ],
    notes: [
      "RYZM sometimes closes irregularly — check or ask on their Facebook page before you go.",
    ],
  },
  {
    slug: "h-tokyo",
    no: "03",
    kind: "Handkerchief shop / brand",
    title: "H TOKYO",
    area: "Sangen-Jaya",
    meta: [
      { p: ":station", v: "Sangen-Jaya / Ikejiri-Ohashi" },
      { p: ":open", v: "12:00 – 20:00 (closed Wednesdays)" },
      { p: ":address", v: "1-11-11 Taishido, Setagaya-ku, Tokyo" },
      { p: ":site", v: "htokyo.com ↗", href: "http://www.htokyo.com" },
    ],
    blocks: [
      {
        text: "For the third article, H TOKYO in Sangen-Jaya — a stylish shop dedicated entirely to handkerchiefs.",
      },
      { img: "/tokyo/h-tokyo/htokyo2.jpg", alt: "H TOKYO storefront" },
      {
        text: "It is a 10-15 minute walk from Sangen-Jaya or Ikejiri-Ohashi station, on Mishuku street, with restaurants, bars, cafes and Setagaya Park along the way. A little far from the station, but the walk itself is a good one.",
      },
      { img: "/tokyo/h-tokyo/htokyo3.jpg", alt: "On the way along Mishuku street" },
      { h: "Handkerchiefs" },
      {
        text: "Amazingly, the shop displays over 200 handkerchiefs at any time — Japanese fabrics, imports, vintage cloth — with patterns running from formal to casual, all sewn in Japan. They make excellent souvenirs. Production runs are small and turnover is fast: every time I visit, there is something new. I suspect that is exactly why people keep coming back.",
      },
      { img: "/tokyo/h-tokyo/htokyo4.jpg", alt: "Rows of handkerchiefs" },
      { img: "/tokyo/h-tokyo/htokyo5.jpg", alt: "Patterns from formal to casual" },
      { h: "Trunks / Socks" },
      {
        text: "Handkerchiefs are not the whole story — they also make trunks and socks, for example.",
      },
      { img: "/tokyo/h-tokyo/htokyo6.jpg", alt: "Trunks and socks" },
      { h: "Embroidery" },
      {
        text: "There is an in-shop embroidery service — name embroidery, for instance, for a small extra fee.",
      },
      { img: "/tokyo/h-tokyo/htokyo7.jpg", alt: "Embroidery samples" },
      {
        text: "This time I picked up this simple pattern — ¥1,296.",
      },
      { img: "/tokyo/h-tokyo/htokyo9.jpg", alt: "The handkerchief I bought" },
      {
        text: "I promise you will meet your handkerchief at H TOKYO.",
      },
      { img: "/tokyo/h-tokyo/htokyo10.jpg", alt: "H TOKYO" },
    ],
  },
];

export const tokyoArticleBySlug = Object.fromEntries(TOKYO_ARTICLES.map((a) => [a.slug, a]));
