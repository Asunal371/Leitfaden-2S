import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const eintraege = [
  {
    phase: "Gespräch mit dem Gatekeeper",
    einwand: "Der Ansprechpartner ist gerade nicht da",
    reaktion: "Kein Problem, ich möchte ihm lediglich ein kostenfreies Angebot machen. Ich kann mich gerne später nochmal melden oder Sie verbinden mich direkt weiter.",
    technik: "–"
  },
  {
    phase: "Gespräch mit dem Entscheider",
    einwand: "Ich zahle extrem wenig, z. B. 5 Cent für Gas und 11 Cent für Strom",
    reaktion: "Das klingt nach einem ausgezeichneten Vertrag – Gratulation. Genau deshalb lohnt sich ein Blick auf Ihre zukünftige Planung: Wenn diese Preise auslaufen, möchten Sie ja bestimmt nicht plötzlich das Doppelte zahlen. Wollen wir gemeinsam schauen, wie Sie diese Konditionen möglichst lange sichern?",
    technik: "Zukunftsbild"
  },
  {
    phase: "Gespräch mit dem Entscheider",
    einwand: "Kein Interesse",
    reaktion: "Völlig in Ordnung – darf ich Ihnen trotzdem in 2 Minuten zeigen, wie andere Firmen mit ähnlichem Bedarf durch uns mehrere tausend Euro sparen konnten? Danach entscheiden Sie, ob es relevant ist.",
    technik: "Testfrage"
  }
];

export default function NachschlageTool() {
  const [suchbegriff, setSuchbegriff] = useState("");

  const gefiltert = eintraege.filter((eintrag) =>
    [eintrag.phase, eintrag.einwand, eintrag.reaktion, eintrag.technik]
      .some((feld) => feld.toLowerCase().includes(suchbegriff.toLowerCase()))
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-[#eb4b22]">RingRingSolutions | Nachschlage-Tool</h1>
      <Input
        placeholder="Einwand, Phase oder Technik suchen..."
        value={suchbegriff}
        onChange={(e) => setSuchbegriff(e.target.value)}
        className="bg-white text-black"
      />

      {gefiltert.map((eintrag, i) => (
        <Card key={i} className="border border-[#eb4b22] shadow-sm">
          <CardContent className="p-4 space-y-2">
            <div className="text-sm text-gray-500">{eintrag.phase}</div>
            <div className="font-semibold">{eintrag.einwand}</div>
            <div className="text-sm text-gray-700 whitespace-pre-line">{eintrag.reaktion}</div>
            {eintrag.technik !== "–" && (
              <Badge className="bg-[#eb4b22] text-white w-fit">{eintrag.technik}</Badge>
            )}
          </CardContent>
        </Card>
      ))}

      {gefiltert.length === 0 && (
        <p className="text-center text-gray-500">Keine passenden Einträge gefunden.</p>
      )}
    </div>
  );
}
