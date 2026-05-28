import "./globals.css";

export const metadata = {
  title: "AdPilot - AI Ads Generator",
  description: "Generer professionelle annoncekampagner på få minutter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
