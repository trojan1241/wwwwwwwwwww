import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, Heart, Utensils, Dumbbell, Calendar } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Progress() {
  const healthData = [
    { date: "01.03", hr: 68, bp: 125, weight: 82.5 },
    { date: "08.03", hr: 66, bp: 122, weight: 81.8 },
    { date: "15.03", hr: 65, bp: 120, weight: 81.2 },
    { date: "22.03", hr: 64, bp: 118, weight: 80.5 },
  ];

  const dietData = [
    { day: "Pon", calories: 2100, protein: 140, target: 2100 },
    { day: "Wt", calories: 2050, protein: 135, target: 2100 },
    { day: "Śr", calories: 2200, protein: 145, target: 2100 },
    { day: "Czw", calories: 2080, protein: 138, target: 2100 },
    { day: "Pt", calories: 2150, protein: 142, target: 2100 },
    { day: "Sob", calories: 2300, protein: 150, target: 2100 },
    { day: "Ndz", calories: 2100, protein: 140, target: 2100 },
  ];

  const workoutData = [
    { week: "Tydz 1", completed: 4, planned: 5 },
    { week: "Tydz 2", completed: 5, planned: 5 },
    { week: "Tydz 3", completed: 4, planned: 5 },
    { week: "Tydz 4", completed: 5, planned: 5 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Postępy</h1>
          <p className="text-muted-foreground">Analiza zdrowia, diety i treningu</p>
        </div>
        <Button variant="outline" data-testid="button-export-report">
          <Calendar className="w-4 h-4 mr-2" />
          Eksportuj raport
        </Button>
      </div>

      <Tabs defaultValue="health">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="health" data-testid="tab-health">
            <Heart className="w-4 h-4 mr-2" />
            Zdrowie
          </TabsTrigger>
          <TabsTrigger value="nutrition" data-testid="tab-nutrition">
            <Utensils className="w-4 h-4 mr-2" />
            Dieta
          </TabsTrigger>
          <TabsTrigger value="training" data-testid="tab-training">
            <Dumbbell className="w-4 h-4 mr-2" />
            Trening
          </TabsTrigger>
        </TabsList>

        <TabsContent value="health" className="space-y-6">
          {/* Health Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Tętno spoczynkowe</div>
                <div className="text-3xl font-bold font-mono">64</div>
                <div className="flex items-center gap-1 mt-1 text-sm text-status-normal">
                  <TrendingUp className="w-3 h-3" />
                  <span>-6% w miesiącu</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Ciśnienie</div>
                <div className="text-2xl font-bold font-mono">118/76</div>
                <div className="flex items-center gap-1 mt-1 text-sm text-status-normal">
                  <TrendingUp className="w-3 h-3" />
                  <span>Normalizacja</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Waga</div>
                <div className="text-3xl font-bold font-mono">80.5</div>
                <div className="flex items-center gap-1 mt-1 text-sm text-status-normal">
                  <TrendingUp className="w-3 h-3" />
                  <span>-2kg w miesiącu</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Jakość snu</div>
                <div className="text-2xl font-bold">Dobra</div>
                <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                  <span>7.5h średnio</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <Card>
            <CardHeader>
              <CardTitle>Tętno spoczynkowe - trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[60, 75]} />
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

          <Card>
            <CardHeader>
              <CardTitle>Waga - trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[79, 84]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--popover))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Line type="monotone" dataKey="weight" stroke="hsl(var(--status-info))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrition" className="space-y-6">
          {/* Nutrition Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Adherencja do planu</div>
                <div className="text-3xl font-bold font-mono">92%</div>
                <div className="text-sm text-muted-foreground">Ostatnie 7 dni</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Średnie kalorie</div>
                <div className="text-3xl font-bold font-mono">2140</div>
                <div className="text-sm text-muted-foreground">Cel: 2100 kcal</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Białko</div>
                <div className="text-3xl font-bold font-mono">141g</div>
                <div className="text-sm text-status-normal">Cel osiągnięty</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Dni z planem</div>
                <div className="text-3xl font-bold font-mono">6/7</div>
                <div className="text-sm text-muted-foreground">W tym tygodniu</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Kalorie - ostatni tydzień</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dietData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--popover))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="calories" fill="hsl(var(--status-normal))" />
                  <Line type="monotone" dataKey="target" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          {/* Training Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Ukończone treningi</div>
                <div className="text-3xl font-bold font-mono">18</div>
                <div className="text-sm text-muted-foreground">W tym miesiącu</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Średni czas</div>
                <div className="text-3xl font-bold font-mono">48</div>
                <div className="text-sm text-muted-foreground">minut/trening</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Spalono kalorii</div>
                <div className="text-3xl font-bold font-mono">8420</div>
                <div className="text-sm text-muted-foreground">W tym miesiącu</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">Wzrost siły</div>
                <div className="text-3xl font-bold font-mono">+5%</div>
                <div className="text-sm text-status-normal">Od początku</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ukończone vs Planowane</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, 6]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--popover))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="completed" fill="hsl(var(--status-normal))" />
                  <Bar dataKey="planned" fill="hsl(var(--muted))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
