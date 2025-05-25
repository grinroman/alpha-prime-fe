import { Typography } from "@/components/ui/typography"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex min-h-screen max-h-screen flex-col bg-secondary justify-between items-center ">
      <div className="flex items-center justify-center px-4 h-[96vh]">
        {children}
      </div>
      <div className="h-[4vh]">
        <Typography variant="additionalInfo">
          Сервіс працює в режимі BETA тестування. © Aplha Prime{" "}
          {new Date().getFullYear()}. All Rights Reserved.
        </Typography>
      </div>
    </div>
  )
}
