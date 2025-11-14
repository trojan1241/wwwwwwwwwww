import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Activity, AlertTriangle, CheckCircle, 
  TrendingUp, Server, Database, Zap 
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const stats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalDoctors: 23,
    totalConsultations: 3421,
    activeMonitoring: 456,
    criticalAlerts: 3,
  };

  const userGrowth = [
    { month: "Sty", users: 450 },
    { month: "Lut", users: 620 },
    { month: "Mar", users: 780 },
    { month: "Kwi", users: 950 },
    { month: "Maj", users: 1150 },
    { month: "Cze", users: 1247 },
  ];

  const systemHealth = [
    { name: "API Response", value: 145, unit: "ms", status: "good" },
    { name: "DB Queries", value: 87, unit: "ms", status: "good" },
    { name: "AI Latency", value: 1250, unit: "ms", status: "warning" },
    { name: "Uptime", value: 99.8, unit: "%", status: "good" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-1" data-testid="text-admin-title">Panel administratora</h1>
        <p className="text-muted-foreground" data-testid="text-admin-subtitle">Zarządzanie systemem i monitorowanie</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card data-testid="card-stat-total-users">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-total-users">{stats.totalUsers}</div>
                <div className="text-xs text-muted-foreground">Użytkownicy</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-active-users">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-status-normal" />
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-active-users">{stats.activeUsers}</div>
                <div className="text-xs text-muted-foreground">Aktywni</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-doctors">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-status-info" />
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-total-doctors">{stats.totalDoctors}</div>
                <div className="text-xs text-muted-foreground">Lekarze</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-consultations">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-status-normal" />
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-total-consultations">{stats.totalConsultations}</div>
                <div className="text-xs text-muted-foreground">Konsultacje</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-monitoring">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-status-info" />
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-active-monitoring">{stats.activeMonitoring}</div>
                <div className="text-xs text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-critical-alerts">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-status-critical" />
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-critical-alerts">{stats.criticalAlerts}</div>
                <div className="text-xs text-muted-foreground">Alarmy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Wzrost użytkowników
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5" />
              Wydajność systemu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((metric) => (
                <div key={metric.name} className="flex items-center justify-between" data-testid={`metric-${metric.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      metric.status === "good" ? "bg-status-normal" : "bg-status-warning"
                    }`} />
                    <span className="text-sm" data-testid={`text-metric-name-${metric.name.toLowerCase().replace(/\s+/g, "-")}`}>{metric.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold" data-testid={`text-metric-value-${metric.name.toLowerCase().replace(/\s+/g, "-")}`}>{metric.value}{metric.unit}</span>
                    {metric.status === "good" && <CheckCircle className="w-4 h-4 text-status-normal" />}
                    {metric.status === "warning" && <AlertTriangle className="w-4 h-4 text-status-warning" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover-elevate">
          <CardContent className="p-6">
            <Users className="w-8 h-8 mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Zarządzanie użytkownikami</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dodawaj, edytuj i zarządzaj kontami użytkowników
            </p>
            <Button variant="outline" className="w-full" data-testid="button-manage-users">
              Zarządzaj
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardContent className="p-6">
            <Database className="w-8 h-8 mb-3 text-status-info" />
            <h3 className="font-semibold mb-2">Logi audytu</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Przeglądaj historię działań i zdarzeń
            </p>
            <Button variant="outline" className="w-full" data-testid="button-view-logs">
              Otwórz logi
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardContent className="p-6">
            <Zap className="w-8 h-8 mb-3 text-status-warning" />
            <h3 className="font-semibold mb-2">Konfiguracja systemu</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Zarządzaj ustawieniami i integracjami
            </p>
            <Button variant="outline" className="w-full" data-testid="button-system-config">
              Konfiguruj
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Ostatnie działania</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: "Nowy użytkownik zarejestrowany", user: "admin", time: "2 min temu", type: "user" },
              { action: "Alarm krytyczny rozwiązany", user: "Dr Kowalska", time: "15 min temu", type: "alert" },
              { action: "Zmiana konfiguracji monitoringu", user: "admin", time: "1 godz. temu", type: "config" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === "user" ? "bg-primary/10" :
                  activity.type === "alert" ? "bg-status-critical/10" :
                  "bg-status-info/10"
                }`}>
                  {activity.type === "user" && <Users className="w-5 h-5 text-primary" />}
                  {activity.type === "alert" && <AlertTriangle className="w-5 h-5 text-status-critical" />}
                  {activity.type === "config" && <Server className="w-5 h-5 text-status-info" />}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-sm text-muted-foreground">{activity.user}</div>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
