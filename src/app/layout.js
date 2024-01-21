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
