import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, User, Bell, Shield, Download, Trash2 } from "lucide-react";
import { Link } from "wouter";

export default function Settings() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Ustawienia</h1>
          <p className="text-muted-foreground">Zarządzaj swoim kontem i preferencjami</p>
        </div>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" data-testid="tab-profile">
            <User className="w-4 h-4 mr-2" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="notifications" data-testid="tab-notifications">
            <Bell className="w-4 h-4 mr-2" />
            Powiadomienia
          </TabsTrigger>
          <TabsTrigger value="privacy" data-testid="tab-privacy">
            <Shield className="w-4 h-4 mr-2" />
            Prywatność
          </TabsTrigger>
          <TabsTrigger value="data" data-testid="tab-data">
            <Download className="w-4 h-4 mr-2" />
            Dane
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informacje osobowe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Imię</Label>
                  <Input id="firstName" defaultValue="Jan" data-testid="input-first-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nazwisko</Label>
                  <Input id="lastName" defaultValue="Kowalski" data-testid="input-last-name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jan.kowalski@example.com" data-testid="input-email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" defaultValue="+48 123 456 789" data-testid="input-phone" />
              </div>
              <Button data-testid="button-save-profile">Zapisz zmiany</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profil zdrowotny</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Wzrost (cm)</Label>
                  <Input id="height" type="number" defaultValue="180" data-testid="input-height" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Waga (kg)</Label>
                  <Input id="weight" type="number" defaultValue="80.5" step="0.1" data-testid="input-weight" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Grupa krwi</Label>
                  <Input id="bloodType" defaultValue="A+" data-testid="input-blood-type" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="chronic">Choroby przewlekłe</Label>
                <Textarea 
                  id="chronic" 
                  placeholder="Nadciśnienie tętnicze, cukrzyca typu 2..."
                  defaultValue="Nadciśnienie tętnicze"
                  data-testid="input-chronic-diseases"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies">Alergie i nietolerancje</Label>
                <Textarea 
                  id="allergies" 
                  placeholder="Penicylina, gluten, laktoza..."
                  data-testid="input-allergies"
                />
              </div>
              <Button data-testid="button-save-health">Zapisz zmiany</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferencje powiadomień</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Powiadomienia email</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Otrzymuj powiadomienia o wizytach i wynikach
                  </p>
                </div>
                <Switch defaultChecked data-testid="switch-email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Powiadomienia push</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Alerty o monitoringu i pilnych sprawach
                  </p>
                </div>
                <Switch defaultChecked data-testid="switch-push-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>SMS w sytuacjach alarmowych</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ważne alerty zdrowotne przez SMS
                  </p>
                </div>
                <Switch defaultChecked data-testid="switch-sms-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Newsletter</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Porady zdrowotne i nowości
                  </p>
                </div>
                <Switch data-testid="switch-newsletter" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Zgody i uprawnienia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Monitoring 24/7</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Zgoda na ciągły monitoring parametrów życiowych
                  </p>
                </div>
                <Switch defaultChecked data-testid="switch-monitoring-consent" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Przekazywanie danych do centrum medycznego</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    W sytuacjach awaryjnych
                  </p>
                </div>
                <Switch defaultChecked data-testid="switch-medical-center-consent" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Lokalizacja GPS</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dla procedury alarmowej
                  </p>
                </div>
                <Switch defaultChecked data-testid="switch-gps-consent" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Badania naukowe (anonimowe)</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Wykorzystanie zanonimizowanych danych
                  </p>
                </div>
                <Switch data-testid="switch-research-consent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bezpieczeństwo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" data-testid="button-change-password">
                Zmień hasło
              </Button>
              <Button variant="outline" className="w-full justify-start" data-testid="button-enable-2fa">
                Włącz uwierzytelnianie dwuskładnikowe (2FA)
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Eksport danych</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Zgodnie z RODO możesz pobrać kopię swoich danych osobowych i medycznych.
              </p>
              <Button variant="outline" data-testid="button-export-data">
                <Download className="w-4 h-4 mr-2" />
                Eksportuj wszystkie dane (JSON)
              </Button>
              <Button variant="outline" data-testid="button-export-medical">
                <Download className="w-4 h-4 mr-2" />
                Eksportuj dokumentację medyczną (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Strefa niebezpieczna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Usuń konto</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Trwałe usunięcie konta i wszystkich danych. Ta akcja jest nieodwracalna.
                </p>
                <Button variant="destructive" data-testid="button-delete-account">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Usuń moje konto
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
