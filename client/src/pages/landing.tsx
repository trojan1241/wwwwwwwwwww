import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Activity, Utensils, Dumbbell, Shield, CheckCircle, AlertCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
              Cyfrowy lekarz, dietetyk i trener – z całodobowym monitoringiem zdrowia
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-hero-subtitle">
              Pierwsza w Polsce platforma POZ z AI, która analizuje Twoje dane zdrowotne 24/7 i w razie potrzeby uruchamia procedurę medyczną.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/app/dashboard">
                <Button size="lg" className="text-lg px-8" data-testid="button-start">
                  Rozpocznij
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-demo">
                Zobacz jak to działa
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="badge-mdr">
                <Shield className="w-4 h-4 text-status-info" />
                <span>MDR Class IIa</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="badge-rodo">
                <Shield className="w-4 h-4 text-status-info" />
                <span>RODO compliant</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="p-6 bg-card shadow-lg" data-testid="card-dashboard-preview">
              <div className="text-sm font-medium text-muted-foreground mb-4" data-testid="text-dashboard-title">Dashboard pacjenta</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-accent" data-testid="card-heart-rate-preview">
                  <div className="flex items-center justify-between mb-2">
                    <Heart className="w-5 h-5 text-status-critical" />
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-status-normal/20 text-status-normal" data-testid="badge-heart-status">
                      Aktywny
                    </span>
                  </div>
                  <div className="text-3xl font-bold font-mono" data-testid="text-heart-rate-value">72</div>
                  <div className="text-xs text-muted-foreground">BPM</div>
                </div>
                <div className="p-4 rounded-lg bg-accent" data-testid="card-spo2-preview">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-5 h-5 text-status-info" />
                  </div>
                  <div className="text-3xl font-bold font-mono" data-testid="text-spo2-value">98%</div>
                  <div className="text-xs text-muted-foreground">SpO2</div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-status-normal/10 border border-status-normal/20" data-testid="status-monitoring">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-status-normal" />
                  <span className="font-medium">Monitoring 24/7: Aktywny</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-how-it-works-title">Jak to działa</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Zakładasz konto", desc: "Wypełniasz profil zdrowotny" },
              { num: "2", title: "Podłączasz urządzenia", desc: "Apple Health, Google Fit itd." },
              { num: "3", title: "AI analizuje", desc: "Dane medyczne, dietę i trening" },
              { num: "4", title: "24/7 monitoring", desc: "Z procedurą alarmową" },
            ].map((step) => (
              <div key={step.num} className="text-center" data-testid={`step-${step.num}`}>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4" data-testid={`badge-step-${step.num}`}>
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-step-title-${step.num}`}>{step.title}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-step-desc-${step.num}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring 24/7 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-monitoring-title">Monitoring 24/7</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-monitoring-subtitle">
              Całodobowa analiza parametrów życiowych z procedurą alarmową
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6" data-testid="card-monitoring-analysis">
              <div className="w-12 h-12 rounded-full bg-status-info/10 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-status-info" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-analysis-title">Analiza parametrów</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-analysis-desc">
                Tętno, rytm, saturacja, glikemia, aktywność, sen
              </p>
            </Card>
            <Card className="p-6" data-testid="card-monitoring-detection">
              <div className="w-12 h-12 rounded-full bg-status-warning/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-status-warning" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-detection-title">Wykrywanie zdarzeń</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-detection-desc">
                Potencjalne ostre zdarzenia i anomalie
              </p>
            </Card>
            <Card className="p-6" data-testid="card-monitoring-alarm">
              <div className="w-12 h-12 rounded-full bg-status-critical/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-status-critical" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-alarm-title">Procedura alarmowa</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-alarm-desc">
                Powiadomienia, kontakt, centrum medyczne
              </p>
            </Card>
          </div>
          <div className="mt-8 p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground text-center" data-testid="text-disclaimer">
            System jest narzędziem wspomagającym i nie zastępuje numeru alarmowego 112
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">Moduły platformy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6" data-testid="card-feature-doctor">
              <Heart className="w-12 h-12 text-status-critical mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="text-doctor-title">AI Lekarz POZ</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-doctor-desc">
                Wizyty online, diagnozy, e-recepty, e-ZLA, dokumentacja medyczna
              </p>
              <Link href="/app/consultation">
                <Button variant="outline" size="sm" data-testid="link-ai-doctor">
                  Więcej →
                </Button>
              </Link>
            </Card>
            <Card className="p-6" data-testid="card-feature-dietitian">
              <Utensils className="w-12 h-12 text-status-normal mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="text-dietitian-title">AI Dietetyk</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-dietitian-desc">
                Plany żywieniowe, analiza badań, listy zakupów, zamienniki
              </p>
              <Link href="/app/diet">
                <Button variant="outline" size="sm" data-testid="link-ai-dietitian">
                  Więcej →
                </Button>
              </Link>
            </Card>
            <Card className="p-6" data-testid="card-feature-trainer">
              <Dumbbell className="w-12 h-12 text-status-info mb-4" />
              <h3 className="text-xl font-semibold mb-2" data-testid="text-trainer-title">AI Trener</h3>
              <p className="text-muted-foreground mb-4" data-testid="text-trainer-desc">
                Plany treningowe, regeneracja, rehabilitacja, strefy HR
              </p>
              <Link href="/app/training">
                <Button variant="outline" size="sm" data-testid="link-ai-trainer">
                  Więcej →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-pricing-title">Cennik</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Standard", price: "99 zł", features: ["AI Dietetyk", "AI Trener", "Lekarz asynchroniczny"] },
              { name: "Premium", price: "149 zł", features: ["Wszystko ze Standard", "AI Lekarz priorytetowy", "E-recepty i e-ZLA"], popular: true },
              { name: "Monitoring 24/7", price: "249 zł", features: ["Wszystko z Premium", "Monitoring całodobowy", "Procedura alarmowa"] },
            ].map((plan) => (
              <Card key={plan.name} className={`p-6 relative ${plan.popular ? "border-primary border-2" : ""}`} data-testid={`card-plan-${plan.name.toLowerCase().replace(/\s/g, "-")}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full" data-testid="badge-popular">
                    Najpopularniejszy
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-plan-name-${plan.name.toLowerCase().replace(/\s/g, "-")}`}>{plan.name}</h3>
                <div className="text-4xl font-bold mb-4" data-testid={`text-plan-price-${plan.name.toLowerCase().replace(/\s/g, "-")}`}>
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground">/msc</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={feature} className="flex items-center gap-2 text-sm" data-testid={`text-plan-feature-${plan.name.toLowerCase().replace(/\s/g, "-")}-${idx}`}>
                      <CheckCircle className="w-4 h-4 text-status-normal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} data-testid={`button-plan-${plan.name.toLowerCase().replace(/\s/g, "-")}`}>
                  Wybierz plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-faq-title">Często zadawane pytania</h2>
          <div className="space-y-4">
            {[
              { q: "Jak działa monitoring 24/7?", a: "System analizuje dane z Twojego zegarka i wykrywa potencjalne zdarzenia medyczne. W razie potrzeby uruchamia procedurę alarmową." },
              { q: "Czy system zastępuje numer 112?", a: "Nie. System jest narzędziem wspomagającym i przekazuje informacje do centrum teleopieki partnera." },
              { q: "Jakie urządzenia są obsługiwane?", a: "Apple Health, Google Fit, Fitbit, Garmin, Samsung Health i wiele innych." },
            ].map((faq, i) => (
              <Card key={i} className="p-6" data-testid={`card-faq-${i}`}>
                <h3 className="font-semibold mb-2" data-testid={`text-faq-question-${i}`}>{faq.q}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-faq-answer-${i}`}>{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-foreground" data-testid="link-terms">Regulamin</a>
            <a href="#" className="hover:text-foreground" data-testid="link-privacy">Polityka prywatności</a>
            <a href="#" className="hover:text-foreground" data-testid="link-contact">Kontakt</a>
          </div>
          <p data-testid="text-copyright">© 2024 AI Lekarz. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
