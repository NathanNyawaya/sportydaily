import { Roboto, Vina_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

const vina_sans = Vina_Sans({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-vina-sans",
  display: 'swap',
});

export const metadata = {
  title: "ThePitchBasket™",
  description: "Powered by Grenlyfe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${vina_sans.variable} ${roboto.variable}`}>
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
