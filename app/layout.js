import "./globals.css";
import MetaPixel from "./MetaPixel";

export const metadata = {
  title: "AdPilot – AI annoncegenerator til Meta Ads & Google Ads",
  description:
    "Lav professionelle Meta Ads, Google Ads, hooks, retargeting og kampagner på få minutter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
  <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
