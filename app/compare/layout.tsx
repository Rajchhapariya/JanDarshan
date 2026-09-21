import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Representatives & Political Leaders",
  description:
    "Side-by-side comparative analysis of Members of Parliament, ministers, assets, education, and parliamentary terms.",
  alternates: {
    canonical: "https://jan-darshan-7jgo.vercel.app/compare",
  },
  openGraph: {
    title: "Compare Representatives & Political Leaders — JanDarshan",
    description:
      "Side-by-side comparative analysis of Members of Parliament, ministers, assets, education, and parliamentary terms.",
    url: "https://jan-darshan-7jgo.vercel.app/compare",
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
