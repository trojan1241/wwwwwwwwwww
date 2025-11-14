import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, CreditCard, Download, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Subscription() {
  const currentPlan = {
    name: "Premium",
    price: 149,
    interval: "monthly",
    status: "active",
    currentPeriodEnd: "2024-04-20",
  };

  const invoices = [
    { id: 1, date: "2024-03-20", amount: 149, status: "paid" },
    { id: 2, date: "2024-02-20", amount: 149, status: "paid" },
    { id: 3, date: "2024-01-20", amount: 149, status: "paid" },
  ];

  const plans = [
    {
      name: "Standard",
      price: 99,
      features: [
        "AI Dietetyk",
        "AI Trener",
        "Lekarz asynchroniczny",
        "Plan żywieniowy",
        "Plan treningowy",
      ],
    },
    {
      name: "Premium",
      price: 149,
      features: [
        "Wszystko ze Standard",
        "AI Lekarz priorytetowy",
        "E-recepty i e-ZLA",
        "Dokumentacja medyczna",
        "Priorytetnawsparcie",
      ],
      popular: true,
      current: true,
    },
    {
      name: "Monitoring 24/7",
      price: 249,
      features: [
        "Wszystko z Premium",
        "Monitoring całodobowy",
        "Procedura alarmowa",
        "ICE kontakty",
        "Integracje urządzeń premium",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Subskrypcja</h1>
          <p className="text-muted-foreground">Zarządzaj swoim planem i płatnościami</p>
        </div>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Aktualny plan</span>
            <Badge className="bg-status-normal text-white" data-testid="badge-plan-status">
              <CheckCircle className="w-4 h-4 mr-1" />
              Aktywny
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-1" data-testid="text-current-plan">
                {currentPlan.name}
              </h3>
              <p className="text-3xl font-bold">
                {currentPlan.price} zł
                <span className="text-lg font-normal text-muted-foreground">
                  /{currentPlan.interval === "monthly" ? "miesiąc" : "rok"}
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-accent">
              <div className="text-sm text-muted-foreground mb-1">Następna płatność</div>
              <div className="text-lg font-semibold">
                {new Date(currentPlan.currentPeriodEnd).toLocaleDateString("pl-PL")}
              </div>
              <div className="text-sm text-muted-foreground">
                {currentPlan.price} zł
              </div>
            </div>
            <div className="p-4 rounded-lg bg-accent">
              <div className="text-sm text-muted-foreground mb-1">Metoda płatności</div>
              <div className="flex items-center gap-2 mt-2">
                <CreditCard className="w-5 h-5" />
                <span className="font-mono">•••• •••• •••• 4242</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" data-testid="button-change-plan">
              Zmień plan
            </Button>
            <Button variant="outline" data-testid="button-update-payment">
              <CreditCard className="w-4 h-4 mr-2" />
              Zaktualizuj płatność
            </Button>
            <Button variant="ghost" data-testid="button-cancel">
              Anuluj subskrypcję
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Dostępne plany</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? "border-primary border-2" : ""} ${plan.current ? "opacity-75" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Najpopularniejszy
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  {plan.price} zł
                  <span className="text-lg font-normal text-muted-foreground">/msc</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-status-normal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.current ? "outline" : (plan.popular ? "default" : "outline")}
                  disabled={plan.current}
                  data-testid={`button-select-${plan.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {plan.current ? "Aktualny plan" : "Wybierz plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Historia płatności</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-4 rounded-lg border" data-testid={`invoice-${invoice.id}`}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-status-normal/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-status-normal" />
                  </div>
                  <div>
                    <div className="font-semibold">Faktura #{invoice.id}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(invoice.date).toLocaleDateString("pl-PL")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-semibold">{invoice.amount} zł</div>
                    <Badge variant="outline" className="text-xs bg-status-normal/10 text-status-normal border-status-normal/20">
                      Opłacona
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" data-testid={`button-download-${invoice.id}`}>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
