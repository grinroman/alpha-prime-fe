import DashboardSidebar from "@/components/layouts/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}
