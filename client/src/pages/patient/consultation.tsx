import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, FileText, Pill, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [pathway, setPathway] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Wirtualna wizyta</h1>
          <p className="text-muted-foreground">AI Lekarz POZ</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1">
            <div className={`h-2 rounded-full ${step >= i ? "bg-primary" : "bg-muted"}`} />
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Wybierz typ wizyty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={pathway} onValueChange={setPathway}>
              <div className="flex items-start gap-4 p-4 rounded-lg border hover-elevate" data-testid="option-new-symptoms">
                <RadioGroupItem value="new_symptoms" id="new_symptoms" className="mt-1" data-testid="radio-new-symptoms" />
                <Label htmlFor="new_symptoms" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-status-critical" />
                    <span className="font-semibold">Nowe objawy</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Zgłoś nowe dolegliwości lub objawy wymagające konsultacji
                  </p>
                </Label>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border hover-elevate" data-testid="option-chronic-followup">
                <RadioGroupItem value="chronic_followup" id="chronic_followup" className="mt-1" data-testid="radio-chronic-followup" />
                <Label htmlFor="chronic_followup" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-status-info" />
                    <span className="font-semibold">Kontrola choroby przewlekłej</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Regularna kontrola i monitorowanie stanu przewlekłego
                  </p>
                </Label>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border hover-elevate" data-testid="option-prescription-renewal">
                <RadioGroupItem value="prescription_renewal" id="prescription_renewal" className="mt-1" data-testid="radio-prescription-renewal" />
                <Label htmlFor="prescription_renewal" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <Pill className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Przedłużenie recepty</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kontynuacja leczenia, przedłużenie istniejącej recepty
                  </p>
                </Label>
              </div>
            </RadioGroup>

            <Button 
              className="w-full" 
              disabled={!pathway}
              onClick={() => setStep(2)}
              data-testid="button-next-step"
            >
              Dalej
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Opisz swoje objawy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="symptoms">Jakie objawy występują?</Label>
              <Textarea 
                id="symptoms"
                placeholder="Opisz dokładnie swoje dolegliwości: lokalizacja, czas trwania, nasilenie..."
                className="min-h-[120px]"
                data-testid="input-symptoms"
              />
            </div>

            <div className="space-y-2">
              <Label>Kiedy objawy się pojawiły?</Label>
              <RadioGroup defaultValue="today">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="today" id="today" data-testid="radio-onset-today" />
                  <Label htmlFor="today">Dzisiaj</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="week" id="week" data-testid="radio-onset-week" />
                  <Label htmlFor="week">W tym tygodniu</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="longer" id="longer" data-testid="radio-onset-longer" />
                  <Label htmlFor="longer">Dłużej niż tydzień</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="medications">Obecnie przyjmowane leki</Label>
              <Textarea 
                id="medications"
                placeholder="Podaj nazwy leków i dawki..."
                className="min-h-[80px]"
                data-testid="input-medications"
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep(1)} data-testid="button-previous">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Wstecz
              </Button>
              <Button className="flex-1" onClick={() => setStep(3)} data-testid="button-analyze">
                Analizuj AI
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Analiza AI</CardTitle>
                <Badge variant="outline" className="bg-status-info/10 text-status-info border-status-info/20">
                  W trakcie weryfikacji lekarza
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Diagnoza różnicowa:</h3>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-accent">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">1. Migrenowe bóle głowy</span>
                      <Badge variant="outline" className="text-xs">Prawdopodobne (70%)</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Jednostronne bóle pulsujące, nasilające się przy wysiłku
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">2. Napięciowe bóle głowy</span>
                      <Badge variant="outline" className="text-xs">Możliwe (25%)</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Związane ze stresem i napięciem mięśniowym
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Sugerowane badania:</h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Morfologia krwi z rozmazem
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Badanie poziomu glukozy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Pomiar ciśnienia tętniczego
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Wstępne zalecenia:</h3>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm">
                    Zalecany odpoczynek, unikanie stresu. Należy rozważyć zastosowanie leków przeciwbólowych.
                    Konsultacja wymaga weryfikacji przez lekarza POZ.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Twoja konsultacja została przekazana do lekarza. Otrzymasz powiadomienie po weryfikacji.
                </p>
                <Link href="/app/dashboard">
                  <Button className="w-full" data-testid="button-back-to-dashboard">
                    Powrót do dashboardu
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
