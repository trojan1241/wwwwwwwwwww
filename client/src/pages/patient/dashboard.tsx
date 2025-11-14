import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Heart,
  Activity,
  Droplet,
  Moon,
  TrendingUp,
  FileText,
  Pill,
  AlertCircle,
  Calendar,
  Utensils,
  Dumbbell,
} from "lucide-react";

export default function PatientDashboard() {
  const today = new Date().toLocaleDateString("pl-PL", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
        <div>
          <h1 className="text-2xl font-bold mb-1" data-testid="text-welcome">
            Cześć, Jan
          </h1>
          <p className="text-sm text-muted-foreground" data-testid="text-date">
            {today}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2" data-testid="status-monitoring-active">
            <div className="w-2 h-2 rounded-full bg-status-normal animate-pulse"></div>
            <span className="text-sm font-medium">Monitoring serca: AKTYWNY</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Health Status */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Status zdrowia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-accent space-y-2" data-testid="card-heart-rate">
                <div className="flex items-center justify-between">
                  <Heart className="w-5 h-5 text-status-critical" />
                  <Badge variant="outline" className="text-xs bg-status-normal/10 text-status-normal border-status-normal/20" data-testid="badge-heart-rate-status">
                    Normalne
                  </Badge>
                </div>
                <div className="text-3xl font-bold font-mono" data-testid="text-heart-rate-value">72</div>
                <div className="text-xs text-muted-foreground" data-testid="text-heart-rate-label">Tętno (BPM)</div>
                <div className="text-xs text-muted-foreground" data-testid="text-heart-rate-resting">Spoczynkowe: 65</div>
              </div>

              <div className="p-4 rounded-lg bg-accent space-y-2" data-testid="card-blood-pressure">
                <div className="flex items-center justify-between">
                  <Activity className="w-5 h-5 text-status-info" />
                </div>
                <div className="text-2xl font-bold font-mono" data-testid="text-blood-pressure-value">120/80</div>
                <div className="text-xs text-muted-foreground" data-testid="text-blood-pressure-label">Ciśnienie (mmHg)</div>
                <div className="text-xs text-muted-foreground" data-testid="text-blood-pressure-time">10 min temu</div>
              </div>

              <div className="p-4 rounded-lg bg-accent space-y-2" data-testid="card-spo2">
                <div className="flex items-center justify-between">
                  <Droplet className="w-5 h-5 text-status-info" />
                </div>
                <div className="text-3xl font-bold font-mono" data-testid="text-spo2-value">98%</div>
                <div className="text-xs text-muted-foreground" data-testid="text-spo2-label">Saturacja (SpO2)</div>
                <div className="text-xs text-muted-foreground" data-testid="text-spo2-status">Ciągły pomiar</div>
              </div>

              <div className="p-4 rounded-lg bg-accent space-y-2" data-testid="card-sleep">
                <div className="flex items-center justify-between">
                  <Moon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold font-mono" data-testid="text-sleep-value">7h 32m</div>
                <div className="text-xs text-muted-foreground" data-testid="text-sleep-label">Sen (ostatnia noc)</div>
                <div className="text-xs text-muted-foreground" data-testid="text-sleep-quality">Jakość: Dobra</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monitoring 24/7 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Monitoring 24/7
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Status:</span>
              <Badge className="bg-status-normal text-white" data-testid="badge-monitoring-status">
                AKTYWNY
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm" data-testid="stat-events-24h">
                <span className="text-muted-foreground">Ostatnie 24h:</span>
                <span className="font-medium" data-testid="text-events-count">0 zdarzeń</span>
              </div>
              <div className="flex justify-between text-sm" data-testid="stat-devices">
                <span className="text-muted-foreground">Urządzenia:</span>
                <span className="font-medium" data-testid="text-devices-count">2 podłączone</span>
              </div>
            </div>
            <Link href="/app/monitoring">
              <Button variant="outline" className="w-full" data-testid="button-view-alerts">
                Zobacz historię alarmów
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Today's Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Dziś
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent" data-testid="card-today-meals">
              <Utensils className="w-5 h-5 text-status-normal mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm mb-1" data-testid="text-meals-title">Plan posiłków</div>
                <p className="text-xs text-muted-foreground" data-testid="text-meals-summary">5 posiłków, 2100 kcal</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent" data-testid="card-today-workout">
              <Dumbbell className="w-5 h-5 text-status-info mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm mb-1" data-testid="text-workout-title">Trening</div>
                <p className="text-xs text-muted-foreground" data-testid="text-workout-summary">Trening siłowy - 45 min</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent" data-testid="card-today-recommendations">
              <Heart className="w-5 h-5 text-status-critical mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm mb-1" data-testid="text-recommendations-title">Zalecenia</div>
                <p className="text-xs text-muted-foreground" data-testid="text-recommendations-summary">Kontrola ciśnienia wieczorem</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Ostatnie działania
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 rounded-lg hover-elevate border" data-testid="activity-prescription">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Pill className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Recepta na Amlozek 5mg</div>
                  <div className="text-xs text-muted-foreground">Wydana przez Dr Anna Kowalska</div>
                </div>
                <div className="text-xs text-muted-foreground">2 dni temu</div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg hover-elevate border" data-testid="activity-consultation">
                <div className="w-10 h-10 rounded-full bg-status-info/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-status-info" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Konsultacja AI Lekarz</div>
                  <div className="text-xs text-muted-foreground">Objawy: ból głowy, zmęczenie</div>
                </div>
                <div className="text-xs text-muted-foreground">3 dni temu</div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-lg hover-elevate border" data-testid="activity-diet-plan">
                <div className="w-10 h-10 rounded-full bg-status-normal/10 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-status-normal" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Nowy plan żywieniowy</div>
                  <div className="text-xs text-muted-foreground">Plan na 30 dni, dieta śródziemnomorska</div>
                </div>
                <div className="text-xs text-muted-foreground">5 dni temu</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Szybkie akcje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/app/consultation">
              <Button variant="outline" className="w-full justify-start" data-testid="button-new-consultation">
                <Heart className="w-4 h-4 mr-2" />
                Nowa konsultacja
              </Button>
            </Link>
            <Link href="/app/prescriptions">
              <Button variant="outline" className="w-full justify-start" data-testid="button-renew-prescription">
                <Pill className="w-4 h-4 mr-2" />
                Przedłuż receptę
              </Button>
            </Link>
            <Link href="/app/diet">
              <Button variant="outline" className="w-full justify-start" data-testid="button-view-meals">
                <Utensils className="w-4 h-4 mr-2" />
                Zobacz posiłki
              </Button>
            </Link>
            <Link href="/app/training">
              <Button variant="outline" className="w-full justify-start" data-testid="button-view-workout">
                <Dumbbell className="w-4 h-4 mr-2" />
                Dzisiejszy trening
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
