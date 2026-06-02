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
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}
(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1525584212593660');
fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
```
