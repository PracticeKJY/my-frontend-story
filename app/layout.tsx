import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intersection observer을 이용해 만들어 본 예제",
  description: "나의 성장 이야기",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <body className="font-Pretendard">{children}</body>
    </html>
  )
}
