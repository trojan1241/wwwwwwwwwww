import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NotFound from "@/pages/not-found";

// Public pages
import Landing from "@/pages/landing";

// Patient pages
import PatientDashboard from "@/pages/patient/dashboard";
import Consultation from "@/pages/patient/consultation";
import Prescriptions from "@/pages/patient/prescriptions";
import Ezla from "@/pages/patient/ezla";
import MedicalDocs from "@/pages/patient/medical-docs";
import Diet from "@/pages/patient/diet";
import Training from "@/pages/patient/training";
import Monitoring from "@/pages/patient/monitoring";
import Devices from "@/pages/patient/devices";
import Progress from "@/pages/patient/progress";
import Subscription from "@/pages/patient/subscription";
import Settings from "@/pages/patient/settings";

// Doctor pages
import DoctorDashboard from "@/pages/doctor/dashboard";

// Admin pages
import AdminDashboard from "@/pages/admin/dashboard";

function PatientLayout({ children }: { children: React.ReactNode }) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-2 border-b bg-background">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
          </header>
          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function Router() {
  return (
    <Switch>
      {/* Public routes */}
      <Route path="/" component={Landing} />
      
      {/* Patient routes */}
      <Route path="/app/dashboard">
        <PatientLayout>
          <PatientDashboard />
        </PatientLayout>
      </Route>
      <Route path="/app/consultation">
        <PatientLayout>
          <Consultation />
        </PatientLayout>
      </Route>
      <Route path="/app/prescriptions">
        <PatientLayout>
          <Prescriptions />
        </PatientLayout>
      </Route>
      <Route path="/app/ezla">
        <PatientLayout>
          <Ezla />
        </PatientLayout>
      </Route>
      <Route path="/app/medical-docs">
        <PatientLayout>
          <MedicalDocs />
        </PatientLayout>
      </Route>
      <Route path="/app/diet">
        <PatientLayout>
          <Diet />
        </PatientLayout>
      </Route>
      <Route path="/app/training">
        <PatientLayout>
          <Training />
        </PatientLayout>
      </Route>
      <Route path="/app/monitoring">
        <PatientLayout>
          <Monitoring />
        </PatientLayout>
      </Route>
      <Route path="/app/devices">
        <PatientLayout>
          <Devices />
        </PatientLayout>
      </Route>
      <Route path="/app/progress">
        <PatientLayout>
          <Progress />
        </PatientLayout>
      </Route>
      <Route path="/app/subscription">
        <PatientLayout>
          <Subscription />
        </PatientLayout>
      </Route>
      <Route path="/app/settings">
        <PatientLayout>
          <Settings />
        </PatientLayout>
      </Route>

      {/* Doctor routes */}
      <Route path="/doctor/dashboard">
        <PatientLayout>
          <DoctorDashboard />
        </PatientLayout>
      </Route>

      {/* Admin routes */}
      <Route path="/admin/dashboard">
        <PatientLayout>
          <AdminDashboard />
        </PatientLayout>
      </Route>

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
