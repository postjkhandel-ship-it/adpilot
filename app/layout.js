```js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title:
    "AdPilot – AI annoncegenerator til Meta Ads & Google Ads",
  description:
    "Lav professionelle Meta Ads, Google Ads, hooks, retargeting og kampagner på få minutter. AdPilot hjælper virksomheder, freelancere og bureauer med hurtigere annonceproduktion.",
  keywords: [
    "AI annoncegenerator",
    "Meta Ads generator",
    "Facebook Ads generator",
    "Google Ads generator",
    "annoncetekster AI",
    "AI marketing værktøj",
    "retargeting generator",
    "hooks til annoncer",
    "annoncegenerator",
  ],
  openGraph: {
    title: "AdPilot – AI annoncegenerator",
    description:
      "Generér Meta Ads, Google Ads, hooks, retargeting og professionelle kampagneidéer på få minutter.",
    url: "https://adpilot.dk",
    siteName: "AdPilot",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7NYJFY4FCD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7NYJFY4FCD');
          `}
        </Script>
      </body>
    </html>
  );
}
```
