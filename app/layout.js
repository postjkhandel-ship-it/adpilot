import "./globals.css";

export const metadata = {
  title: "AdPilot – AI annoncegenerator til Meta Ads & Google Ads",
  description:
    "Lav professionelle Meta Ads, Google Ads, hooks, retargeting og kampagner på få minutter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
