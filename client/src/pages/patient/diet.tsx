import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Utensils, ArrowLeft, Flame, Apple, ShoppingCart, Repeat } from "lucide-react";
import { Link } from "wouter";

export default function Diet() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const weekDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
  
  const meals = {
    breakfast: { name: "Śniadanie", time: "08:00", calories: 450, items: ["Owsianka z owocami", "Jogurt naturalny", "Migdały (30g)"] },
    lunch: { name: "II śniadanie", time: "11:00", calories: 250, items: ["Jabłko", "Garść orzechów"] },
    dinner: { name: "Obiad", time: "14:00", calories: 650, items: ["Pierś kurczaka (150g)", "Ryż brązowy (100g)", "Surówka z kapusty"] },
    snack: { name: "Podwieczorek", time: "17:00", calories: 200, items: ["Banan", "Shake proteinowy"] },
    supper: { name: "Kolacja", time: "19:00", calories: 550, items: ["Łosoś pieczony (120g)", "Warzywa z patelni", "Awokado"] },
  };

  const shoppingList = [
    { category: "Warzywa", items: ["Kapusta (1 główka)", "Pomidory (500g)", "Ogórek (2 szt)", "Papryka (3 szt)"] },
    { category: "Owoce", items: ["Jabłka (6 szt)", "Banany (5 szt)", "Jagody (200g)"] },
    { category: "Białko", items: ["Pierś kurczaka (600g)", "Łosoś (400g)", "Jajka (12 szt)"] },
    { category: "Nabiał", items: ["Jogurt naturalny (500g)", "Ser cottage (250g)"] },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">AI Dietetyk</h1>
          <p className="text-muted-foreground">Spersonalizowany plan żywieniowy</p>
        </div>
        <Button data-testid="button-generate-plan">
          <Apple className="w-4 h-4 mr-2" />
          Wygeneruj nowy plan
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-status-info/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-status-info" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono" data-testid="text-daily-calories">2100</div>
                <div className="text-xs text-muted-foreground">kcal/dzień</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Białko</div>
            <div className="text-2xl font-bold font-mono">140g</div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div className="bg-status-normal h-2 rounded-full" style={{ width: "85%" }} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Węglowodany</div>
            <div className="text-2xl font-bold font-mono">220g</div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div className="bg-status-info h-2 rounded-full" style={{ width: "75%" }} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground mb-1">Tłuszcze</div>
            <div className="text-2xl font-bold font-mono">65g</div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div className="bg-status-warning h-2 rounded-full" style={{ width: "70%" }} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="plan">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="plan" data-testid="tab-meal-plan">Plan posiłków</TabsTrigger>
          <TabsTrigger value="shopping" data-testid="tab-shopping-list">Lista zakupów</TabsTrigger>
        </TabsList>

        <TabsContent value="plan" className="space-y-6">
          {/* Day Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {weekDays.map((day, index) => (
              <Button
                key={day}
                variant={selectedDay === index ? "default" : "outline"}
                size="sm"
                className="min-w-[60px]"
                onClick={() => setSelectedDay(index)}
                data-testid={`button-day-${index}`}
              >
                {day}
              </Button>
            ))}
          </div>

          {/* Meals */}
          <div className="space-y-4">
            {Object.entries(meals).map(([key, meal]) => (
              <Card key={key} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{meal.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        <Flame className="w-3 h-3 mr-1" />
                        {meal.calories} kcal
                      </Badge>
                      <Button variant="ghost" size="icon" data-testid={`button-swap-${key}`}>
                        <Repeat className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {meal.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" data-testid="button-mark-not-followed">
              Nie zjadłem zgodnie z planem
            </Button>
            <Button className="flex-1" data-testid="button-mark-completed">
              <Utensils className="w-4 h-4 mr-2" />
              Oznacz dzień jako zrealizowany
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="shopping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Lista zakupów na tydzień
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {shoppingList.map((category) => (
                <div key={category.category}>
                  <h3 className="font-semibold mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded" 
                          data-testid={`checkbox-shopping-${category.category.toLowerCase()}-${i}`}
                        />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Button className="w-full" data-testid="button-export-shopping-list">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Eksportuj listę
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
