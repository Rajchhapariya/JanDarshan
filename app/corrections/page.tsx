import { Metadata } from "next";
import { CorrectionsClient } from "./CorrectionsClient";

export const metadata: Metadata = {
  title: "Report Data Inaccuracy or Suggest a Correction",
  description:
    "Submit factual updates, gazette corrections, or outdated representative details to JanDarshan for editorial review against primary public records.",
  alternates: {
    canonical: "https://jan-darshan.vercel.app/corrections",
  },
  openGraph: {
    title: "Report Data Inaccuracy or Suggest a Correction — JanDarshan",
    description:
      "Submit factual updates, gazette corrections, or outdated representative details to JanDarshan for editorial review against primary public records.",
    url: "https://jan-darshan.vercel.app/corrections",
  },
};

export default function CorrectionsPage() {
  return <CorrectionsClient />;
}
