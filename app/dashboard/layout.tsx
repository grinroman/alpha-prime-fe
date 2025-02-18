import DashboardSidebar from "@/components/organisms/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}
