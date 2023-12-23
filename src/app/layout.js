import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ThePitchBasket™",
  description: "Supported by Grenlyfe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
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
