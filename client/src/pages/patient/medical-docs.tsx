import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, ArrowLeft, Upload, Download, Share2, 
  FileImage, FileSpreadsheet, Eye, Calendar
} from "lucide-react";
import { Link } from "wouter";

export default function MedicalDocs() {
  const documents = [
    {
      id: 1,
      title: "Morfologia krwi - pełna",
      type: "lab_result",
      date: "2024-03-15",
      doctor: "Dr Anna Kowalska",
      summary: "Wyniki w normie, hemoglobina 14.2 g/dL",
      hasAnalysis: true,
    },
    {
      id: 2,
      title: "RTG klatki piersiowej",
      type: "imaging",
      date: "2024-03-10",
      doctor: "Dr Jan Nowak",
      summary: "Bez zmian patologicznych",
      hasAnalysis: false,
    },
    {
      id: 3,
      title: "Profil lipidowy",
      type: "lab_result",
      date: "2024-03-05",
      doctor: "Dr Anna Kowalska",
      summary: "Cholesterol całkowity 195 mg/dL, LDL 120 mg/dL",
      hasAnalysis: true,
    },
    {
      id: 4,
      title: "Podsumowanie wizyty",
      type: "visit_summary",
      date: "2024-02-28",
      doctor: "Dr Anna Kowalska",
      summary: "Kontrola nadciśnienia tętniczego, dostosowanie leczenia",
      hasAnalysis: false,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lab_result":
        return <FileSpreadsheet className="w-5 h-5 text-status-info" />;
      case "imaging":
        return <FileImage className="w-5 h-5 text-primary" />;
      case "visit_summary":
        return <FileText className="w-5 h-5 text-status-normal" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case "lab_result":
        return "Wynik badania";
      case "imaging":
        return "Obrazowanie";
      case "visit_summary":
        return "Wizyta";
      case "referral":
        return "Skierowanie";
      default:
        return type;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/app/dashboard">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Dokumentacja medyczna</h1>
          <p className="text-muted-foreground">EDM - Elektroniczna Dokumentacja Medyczna</p>
        </div>
        <Button data-testid="button-upload">
          <Upload className="w-4 h-4 mr-2" />
          Dodaj dokument
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" size="sm" data-testid="button-export-pdf">
          <Download className="w-4 h-4 mr-2" />
          Eksport PDF
        </Button>
        <Button variant="outline" size="sm" data-testid="button-export-fhir">
          <Download className="w-4 h-4 mr-2" />
          Eksport FHIR
        </Button>
        <Button variant="outline" size="sm" data-testid="button-share">
          <Share2 className="w-4 h-4 mr-2" />
          Udostępnij lekarzowi
        </Button>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover-elevate">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  {getTypeIcon(doc.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1" data-testid={`doc-title-${doc.id}`}>
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="outline">{getTypeName(doc.type)}</Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(doc.date).toLocaleDateString("pl-PL")}
                        </span>
                        <span>{doc.doctor}</span>
                      </div>
                    </div>
                  </div>

                  {doc.summary && (
                    <p className="text-sm text-muted-foreground mb-3">{doc.summary}</p>
                  )}

                  {doc.hasAnalysis && (
                    <div className="p-3 rounded-lg bg-status-info/5 border border-status-info/20 mb-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="bg-status-info/10 text-status-info border-status-info/20">
                          Analiza AI
                        </Badge>
                        <span className="text-muted-foreground">
                          Wszystkie parametry w normie. Zalecana kontrola za 3 miesiące.
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" data-testid={`button-view-${doc.id}`}>
                      <Eye className="w-4 h-4 mr-2" />
                      Podgląd
                    </Button>
                    <Button variant="ghost" size="sm" data-testid={`button-download-${doc.id}`}>
                      <Download className="w-4 h-4 mr-2" />
                      Pobierz
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State Example (Hidden when there are documents) */}
      {documents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Brak dokumentów</h3>
            <p className="text-muted-foreground mb-6">
              Dodaj pierwszy dokument medyczny, aby rozpocząć budowanie swojej dokumentacji
            </p>
            <Button data-testid="button-add-first-document">
              <Upload className="w-4 h-4 mr-2" />
              Dodaj dokument
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
