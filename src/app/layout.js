import { Roboto } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});



export const metadata = {
  title: "ThePitchBasket™",
  description: "Powered by Grenlyfe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ktoq0i85n9");
            `,
          }}
        />
      </Head>
      <body className={`${roboto.variable}`}>
        {process.env.NEXT_PUBLIC_PROD ? (
          <GoogleAnalytics
            ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
