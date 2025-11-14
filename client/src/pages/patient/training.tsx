import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, ArrowLeft, Clock, Flame, CheckCircle, TrendingUp, Heart } from "lucide-react";
import { Link } from "wouter";

export default function Training() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const weekDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
  
  const workouts = [
    { day: 0, name: "Trening siłowy - Górna część ciała", duration: 45, type: "strength", exercises: 8, completed: true },
    { day: 1, name: "Cardio - Interwały", duration: 30, type: "cardio", exercises: 5, completed: true },
    { day: 2, name: "Dzień regeneracji", duration: 0, type: "rest", exercises: 0, completed: false },
    { day: 3, name: "Trening siłowy - Dolna część ciała", duration: 50, type: "strength", exercises: 7, completed: false },
    { day: 4, name: "Cardio - Strefa 2", duration: 40, type: "cardio", exercises: 3, completed: false },
    { day: 5, name: "Trening Full Body", duration: 60, type: "strength", exercises: 10, completed: false },
    { day: 6, name: "Aktywna regeneracja - Stretching", duration: 20, type: "recovery", exercises: 6, completed: false },
  ];

  const todayWorkout = workouts[selectedDay];

  const exercises = [
    { name: "Wyciskanie sztangi leżąc", sets: "4", reps: "8-10", weight: "60kg", rest: "90s" },
    { name: "Wiosłowanie sztangą", sets: "4", reps: "10-12", weight: "50kg", rest: "60s" },
    { name: "Shoulder press", sets: "3", reps: "10", weight: "20kg", rest: "60s" },
    { name: "Uginanie ramion ze sztangą", sets: "3", reps: "12", weight: "25kg", rest: "45s" },
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
          <h1 className="text-3xl font-bold">AI Trener</h1>
          <p className="text-muted-foreground">Spersonalizowany plan treningowy</p>
        </div>
        <Button data-testid="button-generate-plan">
          <Dumbbell className="w-4 h-4 mr-2" />
          Wygeneruj nowy plan
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-normal/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-status-normal" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono">2/7</div>
                <div className="text-xs text-muted-foreground">Ukończone w tym tygodniu</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-info/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-status-info" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono">450</div>
                <div className="text-xs text-muted-foreground">Spalono kcal (dzisiaj)</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-critical/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-status-critical" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono">145</div>
                <div className="text-xs text-muted-foreground">Średnie HR (BPM)</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-status-warning/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-status-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono">+5%</div>
                <div className="text-xs text-muted-foreground">Wzrost siły (miesiąc)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Plan tygodniowy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
            {workouts.map((workout, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`p-3 rounded-lg border text-left hover-elevate ${
                  selectedDay === index ? "border-primary bg-primary/5" : ""
                }`}
                data-testid={`button-day-${index}`}
              >
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {weekDays[index]}
                </div>
                <div className="text-sm font-medium mb-2">
                  {workout.type === "rest" ? "Odpoczynek" : workout.name.split(" - ")[1]}
                </div>
                {workout.completed && (
                  <Badge variant="outline" className="text-xs bg-status-normal/10 text-status-normal border-status-normal/20">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Gotowe
                  </Badge>
                )}
                {!workout.completed && workout.type !== "rest" && (
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {workout.duration} min
                  </div>
                )}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Workout */}
      {todayWorkout && todayWorkout.type !== "rest" && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{todayWorkout.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {todayWorkout.duration} minut • {todayWorkout.exercises} ćwiczeń
                </p>
              </div>
              {todayWorkout.completed ? (
                <Badge className="bg-status-normal text-white">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Ukończone
                </Badge>
              ) : (
                <Badge variant="outline">Do wykonania</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {exercises.map((exercise, i) => (
                <div key={i} className="p-4 rounded-lg border hover-elevate" data-testid={`exercise-${i}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold">{exercise.name}</h3>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Serie: <span className="font-medium text-foreground">{exercise.sets}</span></span>
                        <span>Powt: <span className="font-medium text-foreground">{exercise.reps}</span></span>
                        <span>Ciężar: <span className="font-medium text-foreground">{exercise.weight}</span></span>
                        <span>Przerwa: <span className="font-medium text-foreground">{exercise.rest}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!todayWorkout.completed && (
              <div className="space-y-2">
                <Button className="w-full" data-testid="button-mark-completed">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Oznacz jako wykonane
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" data-testid="button-too-easy">
                    Było za łatwo
                  </Button>
                  <Button variant="outline" className="flex-1" data-testid="button-just-right">
                    Było w sam raz
                  </Button>
                  <Button variant="outline" className="flex-1" data-testid="button-too-hard">
                    Było za trudno
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {todayWorkout && todayWorkout.type === "rest" && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <Moon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dzień regeneracji</h3>
            <p className="text-muted-foreground">
              Odpoczynek jest równie ważny jak trening. Pozwól ciału się zregenerować.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
