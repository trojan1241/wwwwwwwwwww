import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutDashboard,
  Stethoscope,
  Pill,
  FileText,
  File,
  Utensils,
  Dumbbell,
  Activity,
  Smartphone,
  TrendingUp,
  CreditCard,
  Settings,
  LogOut,
  Heart,
  Users,
  ClipboardList,
  AlertCircle,
  UserCog,
  Database,
  Shield,
} from "lucide-react";

type Role = "patient" | "doctor" | "admin";

const patientMenuItems = [
  { title: "Dashboard", url: "/app/dashboard", icon: LayoutDashboard },
  { title: "Wirtualna wizyta", url: "/app/consultation", icon: Stethoscope },
  { title: "Recepty", url: "/app/prescriptions", icon: Pill },
  { title: "e-ZLA", url: "/app/ezla", icon: FileText },
  { title: "Dokumentacja", url: "/app/medical-docs", icon: File },
  { title: "AI Dietetyk", url: "/app/diet", icon: Utensils },
  { title: "AI Trener", url: "/app/training", icon: Dumbbell },
  { title: "Monitoring 24/7", url: "/app/monitoring", icon: Activity },
  { title: "Urządzenia", url: "/app/devices", icon: Smartphone },
  { title: "Postępy", url: "/app/progress", icon: TrendingUp },
  { title: "Subskrypcja", url: "/app/subscription", icon: CreditCard },
  { title: "Ustawienia", url: "/app/settings", icon: Settings },
];

const doctorMenuItems = [
  { title: "Dashboard", url: "/doctor/dashboard", icon: LayoutDashboard },
  { title: "Kolejka konsultacji", url: "/doctor/dashboard#queue", icon: ClipboardList },
  { title: "Alerty pacjentów", url: "/doctor/dashboard#alerts", icon: AlertCircle },
  { title: "Ustawienia", url: "/doctor/dashboard#settings", icon: Settings },
];

const adminMenuItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Użytkownicy", url: "/admin/dashboard#users", icon: Users },
  { title: "System", url: "/admin/dashboard#system", icon: Database },
  { title: "Bezpieczeństwo", url: "/admin/dashboard#security", icon: Shield },
  { title: "Ustawienia", url: "/admin/dashboard#settings", icon: Settings },
];

const roleConfig = {
  patient: { label: "Pacjent", menuItems: patientMenuItems },
  doctor: { label: "Lekarz", menuItems: doctorMenuItems },
  admin: { label: "Administrator", menuItems: adminMenuItems },
};

export function AppSidebar() {
  const [location] = useLocation();
  const [role, setRole] = useState<Role>("patient");

  useEffect(() => {
    if (location.startsWith("/doctor/")) {
      setRole("doctor");
    } else if (location.startsWith("/admin/")) {
      setRole("admin");
    } else if (location.startsWith("/app/")) {
      setRole("patient");
    }
  }, [location]);

  const currentMenuItems = roleConfig[role].menuItems;

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="font-semibold">AI Lekarz</div>
        </div>
        <Select value={role} onValueChange={(value) => setRole(value as Role)}>
          <SelectTrigger className="w-full" data-testid="select-role">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="patient" data-testid="option-role-patient">
              Pacjent
            </SelectItem>
            <SelectItem value="doctor" data-testid="option-role-doctor">
              Lekarz
            </SelectItem>
            <SelectItem value="admin" data-testid="option-role-admin">
              Administrator
            </SelectItem>
          </SelectContent>
        </Select>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{roleConfig[role].label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {currentMenuItems.map((item) => {
                const isActive = location === item.url || location.startsWith(item.url.split("#")[0]);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Link href={item.url}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild data-testid="button-logout">
              <Link href="/">
                <LogOut className="w-4 h-4" />
                <span>Wyloguj</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
