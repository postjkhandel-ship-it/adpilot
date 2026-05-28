import "./globals.css";

export const metadata = {
  title: "AdPilot",
  description: "AI Ads Generator til små virksomheder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
