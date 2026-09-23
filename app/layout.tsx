import type { Metadata } from "next"
import type { ReactNode } from "react"
import { MetaPixel } from "@/components/meta-pixel"
import "./globals.css"

export const metadata: Metadata = {
  title: "Avenue",
  description: "Avenue",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
