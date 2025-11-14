import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Stethoscope, AlertCircle, FileText, Users, Clock, 
  CheckCircle, TrendingUp, Heart 
} from "lucide-react";

export default function DoctorDashboard() {
  const queue = [
    {
      id: 1,
      patient: "Jan Kowalski",
      age: 45,
      type: "Nowe objawy",
      priority: "normal",
      time: "10 min temu",
      symptoms: "Ból głowy, zmęczenie",
    },
    {
      id: 2,
      patient: "Anna Nowak",
      age: 62,
      type: "Przedłużenie recepty",
      priority: "low",
      time: "25 min temu",
      symptoms: "Kontynuacja leczenia nadciśnienia",
    },
    {
      id: 3,
      patient: "Piotr Wiśniewski",
      age: 38,
      type: "Kontrola przewlekła",
      priority: "normal",
      time: "1 godz. temu",
      symptoms: "Cukrzyca typu 2 - kontrola",
    },
  ];

  const alerts = [
    {
      id: 1,
      patient: "Maria Lewandowska",
      level: 2,
      type: "Tętno > 150 BPM",
      time: "5 min temu",
      vitals: { hr: 155, sp02: 94 },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-1" data-testid="text-doctor-title">Panel lekarza</h1>
        <p className="text-muted-foreground" data-testid="text-doctor-name">Dr Anna Kowalska - Lekarz POZ</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card data-testid="card-stat-pending">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-pending-count">8</div>
                <div className="text-xs text-muted-foreground">Oczekujące konsultacje</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-completed">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-normal/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-status-normal" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-completed-count">23</div>
                <div className="text-xs text-muted-foreground">Dzisiaj zakończone</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-alerts">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-critical/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-status-critical" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-alerts-count">1</div>
                <div className="text-xs text-muted-foreground">Alarmy krytyczne</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-patients">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-info/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-status-info" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-patients-count">156</div>
                <div className="text-xs text-muted-foreground">Pacjenci (łącznie)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Alerts */}
      {alerts.length > 0 && (
        <Card className="border-status-critical/50 bg-status-critical/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-status-critical">
              <AlertCircle className="w-5 h-5" />
              Alarmy krytyczne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-4 rounded-lg bg-background border border-status-critical/30" data-testid={`alert-${alert.id}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-5 h-5 text-status-critical" />
                        <h3 className="font-semibold" data-testid={`text-alert-patient-${alert.id}`}>{alert.patient}</h3>
                        <Badge className="bg-status-critical text-white" data-testid={`badge-alert-level-${alert.id}`}>POZIOM {alert.level}</Badge>
                      </div>
                      <p className="text-sm mb-2" data-testid={`text-alert-type-${alert.id}`}>{alert.type}</p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span data-testid={`text-alert-hr-${alert.id}`}>HR: {alert.vitals.hr} BPM</span>
                        <span data-testid={`text-alert-spo2-${alert.id}`}>SpO2: {alert.vitals.sp02}%</span>
                        <span className="flex items-center gap-1" data-testid={`text-alert-time-${alert.id}`}>
                          <Clock className="w-3 h-3" />
                          {alert.time}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-status-critical hover:bg-status-critical/90" data-testid={`button-view-alert-${alert.id}`}>
                      Przejdź do pacjenta
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Patient Queue */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Kolejka pacjentów
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {queue.map((item) => (
              <div key={item.id} className="p-4 rounded-lg border hover-elevate" data-testid={`queue-item-${item.id}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{item.patient}</h3>
                      <span className="text-sm text-muted-foreground">{item.age} lat</span>
                      <Badge variant="outline">{item.type}</Badge>
                      {item.priority === "high" && (
                        <Badge className="bg-status-critical text-white">Pilne</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.symptoms}</p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                  </div>
                  <Link href={`/doctor/consultation/${item.id}`}>
                    <Button data-testid={`button-review-${item.id}`}>
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Przejrzyj
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
