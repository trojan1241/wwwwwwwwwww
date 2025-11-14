import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, ArrowLeft, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Prescriptions() {
  const activeMedications = [
    {
      id: 1,
      name: "Amlozek 5mg",
      dosage: "1 tabletka rano",
      prescribedBy: "Dr Anna Kowalska",
      issuedDate: "2024-03-15",
      expiresDate: "2024-06-15",
      status: "active",
    },
    {
      id: 2,
      name: "Metformax 850mg",
      dosage: "1 tabletka 2x dziennie",
      prescribedBy: "Dr Anna Kowalska",
      issuedDate: "2024-03-01",
      expiresDate: "2024-06-01",
      status: "active",
    },
  ];

  const history = [
    {
      id: 3,
      name: "Ibuprom 400mg",
      dosage: "1 tabletka w razie bólu",
      prescribedBy: "Dr Jan Nowak",
      issuedDate: "2024-02-10",
      expiresDate: "2024-03-10",
      status: "expired",
    },
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
          <h1 className="text-3xl font-bold">Recepty</h1>
          <p className="text-muted-foreground">Zarządzaj swoimi lekami i receptami</p>
        </div>
      </div>

      {/* Active Medications */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Aktualne leki</h2>
          <Link href="/app/consultation">
            <Button data-testid="button-request-renewal">
              <Pill className="w-4 h-4 mr-2" />
              Poproś o przedłużenie
            </Button>
          </Link>
        </div>

        <div className="grid gap-4">
          {activeMedications.map((med) => (
            <Card key={med.id} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold" data-testid={`text-medication-${med.id}`}>
                          {med.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{med.dosage}</p>
                      </div>
                      <Badge className="bg-status-normal text-white" data-testid={`badge-status-${med.id}`}>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Aktywna
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Wystawiona przez:</span>
                        <p className="font-medium">{med.prescribedBy}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Data wystawienia:</span>
                        <p className="font-medium">{new Date(med.issuedDate).toLocaleDateString("pl-PL")}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Wygasa:</span>
                        <p className="font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(med.expiresDate).toLocaleDateString("pl-PL")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Historia recept</h2>
        <div className="grid gap-4">
          {history.map((med) => (
            <Card key={med.id} className="opacity-75">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold" data-testid={`text-medication-${med.id}`}>
                          {med.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{med.dosage}</p>
                      </div>
                      <Badge variant="outline" className="bg-muted" data-testid={`badge-status-${med.id}`}>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Wygasła
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Wystawiona przez:</span>
                        <p className="font-medium">{med.prescribedBy}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Data wystawienia:</span>
                        <p className="font-medium">{new Date(med.issuedDate).toLocaleDateString("pl-PL")}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Wygasła:</span>
                        <p className="font-medium">{new Date(med.expiresDate).toLocaleDateString("pl-PL")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
