import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  AlertCircle, ArrowLeft, Heart, Activity, TrendingUp, Clock, 
  Phone, User, MapPin, CheckCircle, AlertTriangle, Info
} from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Monitoring() {
  const hrData = [
    { time: "00:00", hr: 62 },
    { time: "04:00", hr: 58 },
    { time: "08:00", hr: 72 },
    { time: "12:00", hr: 85 },
    { time: "16:00", hr: 78 },
    { time: "20:00", hr: 68 },
    { time: "23:59", hr: 64 },
  ];

  const alerts = [
    {
      id: 1,
      level: 1,
      type: "Podwyższone tętno",
      message: "Tętno spoczynkowe > 100 BPM przez 15 minut",
      time: "2024-03-20 14:30",
      status: "resolved",
      userResponse: "Wszystko ok",
      vitals: { hr: 105, sp02: 97 },
    },
    {
      id: 2,
      level: 0,
      type: "Info",
      message: "Tętno było podwyższone po treningu",
      time: "2024-03-19 10:15",
      status: "acknowledged",
      vitals: { hr: 145, sp02: 98 },
    },
  ];

  const iceContacts = [
    { id: 1, name: "Anna Nowak", relationship: "Żona", phone: "+48 123 456 789", isPrimary: true },
    { id: 2, name: "Jan Kowalski", relationship: "Brat", phone: "+48 987 654 321", isPrimary: false },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Monitoring 24/7</h1>
          <p className="text-muted-foreground">Całodobowy monitoring parametrów życiowych</p>
        </div>
      </div>

      {/* Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Status monitoringu
            </span>
            <Badge className="bg-status-normal text-white" data-testid="badge-monitoring-active">
              <CheckCircle className="w-4 h-4 mr-1" />
              AKTYWNY
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-accent">
            <div>
              <Label htmlFor="monitoring-switch" className="text-base font-medium">
                Monitoring serca
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                Ciągła analiza tętna, saturacji i parametrów życiowych
              </p>
            </div>
            <Switch id="monitoring-switch" defaultChecked data-testid="switch-monitoring" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border">
              <div className="text-sm text-muted-foreground mb-1">Ostatnie 24h</div>
              <div className="text-2xl font-bold font-mono">0</div>
              <div className="text-xs text-muted-foreground">Zdarzenia krytyczne</div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="text-sm text-muted-foreground mb-1">Urządzenia</div>
              <div className="text-2xl font-bold font-mono">2</div>
              <div className="text-xs text-muted-foreground">Podłączone i aktywne</div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="text-sm text-muted-foreground mb-1">Ostatnia aktualizacja</div>
              <div className="text-lg font-bold">2 min</div>
              <div className="text-xs text-muted-foreground">temu</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Heart Rate Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Tętno - ostatnie 24h
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={hrData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" domain={[40, 160]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Line type="monotone" dataKey="hr" stroke="hsl(var(--status-critical))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Alert History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Historia alarmów
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.level === 0 ? "border-l-status-info bg-status-info/5" :
                  alert.level === 1 ? "border-l-status-warning bg-status-warning/5" :
                  "border-l-status-critical bg-status-critical/5"
                }`}
                data-testid={`alert-${alert.id}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {alert.level === 0 && <Info className="w-4 h-4 text-status-info" />}
                      {alert.level === 1 && <AlertTriangle className="w-4 h-4 text-status-warning" />}
                      {alert.level === 2 && <AlertCircle className="w-4 h-4 text-status-critical" />}
                      <span className="font-semibold">{alert.type}</span>
                      <Badge variant="outline" className="text-xs">
                        Poziom {alert.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </span>
                      <span>HR: {alert.vitals.hr} BPM</span>
                      <span>SpO2: {alert.vitals.sp02}%</span>
                    </div>
                    {alert.userResponse && (
                      <div className="mt-2 text-sm">
                        <span className="text-muted-foreground">Odpowiedź: </span>
                        <span className="font-medium">{alert.userResponse}</span>
                      </div>
                    )}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={
                      alert.status === "resolved" 
                        ? "bg-status-normal/10 text-status-normal border-status-normal/20"
                        : "bg-muted"
                    }
                  >
                    {alert.status === "resolved" ? "Rozwiązany" : "Potwierdzony"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ICE Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Kontakty awaryjne (ICE)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {iceContacts.map((contact) => (
              <div key={contact.id} className="flex items-center gap-4 p-4 rounded-lg border" data-testid={`ice-contact-${contact.id}`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{contact.name}</h3>
                    {contact.isPrimary && (
                      <Badge variant="outline" className="text-xs">Podstawowy</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                  <p className="text-sm font-mono mt-1">{contact.phone}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" data-testid="button-add-ice-contact">
              <Phone className="w-4 h-4 mr-2" />
              Dodaj kontakt awaryjny
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Zgody i uprawnienia
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Lokalizacja GPS w sytuacjach alarmowych</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Przekazywanie lokalizacji do centrum medycznego w razie alarmu
              </p>
            </div>
            <Switch defaultChecked data-testid="switch-gps-permission" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Przekazywanie danych do centrum medycznego</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Zgoda na udostępnienie danych w sytuacjach awaryjnych
              </p>
            </div>
            <Switch defaultChecked data-testid="switch-data-sharing" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
