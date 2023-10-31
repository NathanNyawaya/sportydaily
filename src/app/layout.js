import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Pitch Basket",
  description: "Powered by Grenlyfe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key': 'e00432cd040f5518499410ed4aa7da79',
                'format': 'iframe',
                'height': 600,
                'width': 160,
                'params': {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="//www.highcpmcreativeformat.com/e00432cd040f5518499410ed4aa7da79/invoke.js"></scr' + 'ipt>');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
