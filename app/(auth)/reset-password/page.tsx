"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BarcodeLogo } from "@/components/atoms/BarcodeLogo"

export default function ResetPasswordPage() {
  return (
    <Card className="mx-auto w-[480px] pt-12 px-8 py-8 bg-background">
      <div className="flex justify-center mb-12">
        <BarcodeLogo />
      </div>
      <Separator className="mb-8" />
      <CardHeader>
        <CardTitle>Reset password</CardTitle>
      </CardHeader>
      <CardContent>in progress </CardContent>
    </Card>
  )
}
