import "./globals.css"
import type React from "react" // Import React

// Using system fonts to avoid network dependencies
const fontConfig = {
  className: "font-sans"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontConfig.className}>
      <body>{children}</body>
    </html>
  )
}