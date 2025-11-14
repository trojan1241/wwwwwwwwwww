import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, ArrowLeft, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Ezla() {
  const requests = [
    {
      id: 1,
      reason: "Infekcja górnych dróg oddechowych",
      duration: 5,
      status: "approved",
      doctorId: "Dr Anna Kowalska",
      createdAt: "2024-03-18",
      approvedAt: "2024-03-18",
    },
    {
      id: 2,
      reason: "Kontuzja stawu skokowego",
      duration: 7,
      status: "pending",
      doctorId: null,
      createdAt: "2024-03-20",
      approvedAt: null,
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
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Zwolnienia e-ZLA</h1>
          <p className="text-muted-foreground">Zarządzaj swoimi zwolnieniami lekarskimi</p>
        </div>
        <Button data-testid="button-new-request">
          <FileText className="w-4 h-4 mr-2" />
          Nowe zgłoszenie
        </Button>
      </div>

      {/* New Request Form */}
      <Card>
        <CardHeader>
          <CardTitle>Poproś o zwolnienie lekarskie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reason">Powód zgłoszenia</Label>
            <Textarea
              id="reason"
              placeholder="Opisz swoje objawy i powód, dla którego potrzebujesz zwolnienia..."
              className="min-h-[100px]"
              data-testid="input-reason"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Szacowany czas zwolnienia (dni)</Label>
            <Input
              id="duration"
              type="number"
              placeholder="np. 3"
              min="1"
              max="30"
              data-testid="input-duration"
            />
          </div>

          <div className="p-4 rounded-lg bg-muted/50 text-sm">
            <p className="text-muted-foreground">
              Po wysłaniu zgłoszenia, AI przeprowadzi wstępny wywiad. Następnie lekarz zweryfikuje 
              Twoją prośbę i podejmie decyzję o wystawieniu zwolnienia.
            </p>
          </div>

          <Button className="w-full" data-testid="button-submit-request">
            Wyślij zgłoszenie
          </Button>
        </CardContent>
      </Card>

      {/* Requests List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Historia zgłoszeń</h2>
        
        {requests.map((request) => (
          <Card key={request.id} className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg" data-testid={`request-reason-${request.id}`}>
                      {request.reason}
                    </h3>
                    {request.status === "approved" && (
                      <Badge className="bg-status-normal text-white" data-testid={`badge-status-${request.id}`}>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Zatwierdzone
                      </Badge>
                    )}
                    {request.status === "pending" && (
                      <Badge variant="outline" className="bg-status-warning/10 text-status-warning border-status-warning/20" data-testid={`badge-status-${request.id}`}>
                        <Clock className="w-3 h-3 mr-1" />
                        Oczekuje
                      </Badge>
                    )}
                    {request.status === "rejected" && (
                      <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20" data-testid={`badge-status-${request.id}`}>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Odrzucone
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <span className="text-muted-foreground">Długość zwolnienia:</span>
                  <p className="font-medium">{request.duration} dni</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Data zgłoszenia:</span>
                  <p className="font-medium">{new Date(request.createdAt).toLocaleDateString("pl-PL")}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    {request.status === "approved" ? "Zatwierdzone przez:" : "Status:"}
                  </span>
                  <p className="font-medium">
                    {request.status === "approved" ? request.doctorId : "W trakcie weryfikacji"}
                  </p>
                </div>
              </div>

              {request.status === "approved" && (
                <div className="p-4 rounded-lg bg-status-normal/5 border border-status-normal/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium mb-1">Zwolnienie wystawione</p>
                      <p className="text-xs text-muted-foreground">
                        Automatycznie przesłane do PUE ZUS
                      </p>
                    </div>
                    <Button variant="outline" size="sm" data-testid={`button-download-${request.id}`}>
                      Pobierz PDF
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
