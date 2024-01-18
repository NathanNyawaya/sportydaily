export const metadata = {
  title: 'BetGreen',
  description: 'ThePitchBasket Fixtures',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body >{children}
      {/* <script src="/node_modules/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  )
}
