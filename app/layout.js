```js
import "./globals.css";

export const metadata = {
  title: "AdPilot – AI annoncegenerator til Meta Ads & Google Ads",
  description:
    "Lav professionelle Meta Ads, Google Ads, hooks, retargeting og kampagner på få minutter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7NYJFY4FCD"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7NYJFY4FCD');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
```
