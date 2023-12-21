import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EPL (The Pitch Basket)",
  description: "Supported by Grenlyfe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </header>
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
