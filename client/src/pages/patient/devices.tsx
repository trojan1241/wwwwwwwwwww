import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, ArrowLeft, CheckCircle, XCircle, Clock, Wifi } from "lucide-react";
import { Link } from "wouter";

export default function Devices() {
  const connectedDevices = [
    {
      id: 1,
      name: "Apple Watch Series 8",
      type: "apple_health",
      isConnected: true,
      lastSync: "2 min temu",
      dataTypes: ["Tętno", "Aktywność", "Sen", "SpO2"],
    },
    {
      id: 2,
      name: "Google Fit",
      type: "google_fit",
      isConnected: true,
      lastSync: "5 min temu",
      dataTypes: ["Kroki", "Aktywność", "Waga"],
    },
  ];

  const availableDevices = [
    { name: "Fitbit", type: "fitbit", icon: "📱" },
    { name: "Garmin", type: "garmin", icon: "⌚" },
    { name: "Samsung Health", type: "samsung_health", icon: "📱" },
    { name: "Withings", type: "withings", icon: "⚖️" },
    { name: "Omron (Ciśnieniomierz)", type: "omron", icon: "🩺" },
    { name: "Abbott Libre (Glukometr)", type: "libre", icon: "💉" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Integracje urządzeń</h1>
          <p className="text-muted-foreground">Podłącz swoje urządzenia i aplikacje zdrowotne</p>
        </div>
      </div>

      {/* Connected Devices */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Podłączone urządzenia</h2>
        
        {connectedDevices.map((device) => (
          <Card key={device.id} className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg" data-testid={`device-name-${device.id}`}>
                        {device.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-status-normal text-white text-xs" data-testid={`badge-status-${device.id}`}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Połączone
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Wifi className="w-3 h-3" />
                          Ostatnia synchronizacja: {device.lastSync}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground mb-2">Synchronizowane dane:</p>
                    <div className="flex gap-2 flex-wrap">
                      {device.dataTypes.map((type) => (
                        <Badge key={type} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" data-testid={`button-sync-${device.id}`}>
                      <Clock className="w-4 h-4 mr-2" />
                      Synchronizuj teraz
                    </Button>
                    <Button variant="ghost" size="sm" data-testid={`button-disconnect-${device.id}`}>
                      <XCircle className="w-4 h-4 mr-2" />
                      Rozłącz
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Available Devices */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dostępne integracje</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableDevices.map((device) => (
            <Card key={device.type} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{device.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1" data-testid={`available-device-${device.type}`}>
                      {device.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {device.type.includes("health") ? "Aplikacja zdrowotna" : "Urządzenie medyczne"}
                    </p>
                  </div>
                  <Button data-testid={`button-connect-${device.type}`}>
                    Połącz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Jak to działa?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
              <span>Połącz swoje urządzenia za pomocą bezpiecznych połączeń OAuth</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
              <span>Dane są automatycznie synchronizowane w tle</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
              <span>AI analizuje dane i włącza je do monitoringu 24/7</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
              <span>Możesz w każdej chwili rozłączyć urządzenie</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
