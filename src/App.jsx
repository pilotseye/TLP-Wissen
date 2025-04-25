import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

const facts = [
  // --- TLP Bronze ---
  { category: "Bronze", question: "Welcher Trupp übernimmt die Absicherung der Einsatzstelle und was ist die letzte Tätigkeit vor dem Abrücken?", answer: "Der Sicherungstrupp. Die letzte Arbeit ist, die durchgeführte Absicherung wieder abzubauen." },
  { category: "Bronze", question: "Welche Tätigkeit ist die wichtigste bei Einsätzen auf Verkehrsflächen?", answer: "Die Absicherung der Einsatzstelle." },
  { category: "Bronze", question: "Wann müssen Feuerwehr-Schutzhandschuhe getragen werden?", answer: "Bei allen Tätigkeiten mit Gefahrenpotenzial für die Hände." },
  { category: "Bronze", question: "Worauf ist bei der Verwendung von Kabeltrommeln unter Belastung zu achten?", answer: "Die Kabeltrommeln sind auf jeden Fall ganz abzurollen." },
  { category: "Bronze", question: "Wie werden bewusstlose Personen gelagert?", answer: "In der stabilen Seitenlage." },
  { category: "Bronze", question: "Worauf ist beim Ein- und Aussteigen aus Einsatzfahrzeugen zu achten?", answer: "Abspringen ist verboten, vorhandene Auftritte müssen benutzt werden, mit Gesicht zum Fahrzeug absitzen." },
  { category: "Bronze", question: "Welche Erstmaßnahme hat bei allen Einsätzen nach der Absicherung Vorrang?", answer: "Die Menschenrettung." },
  { category: "Bronze", question: "Was gehört zur persönlichen Schutzausrüstung des Rettungstrupps?", answer: "Einsatzbekleidung, Schutzhandschuhe, Sicherheitsstiefel, Einweghandschuhe, Feuerwehrhelm, Gesichtsschutz, ggf. Staubmaske." },
  { category: "Bronze", question: "Welche Reihenfolge gilt bei Erste Hilfe-Maßnahmen?", answer: "Kontrolle: Bewusstsein, Atmung." },
  { category: "Bronze", question: "Was soll am Einsatzfahrzeug zusätzlich zum Blaulicht eingeschaltet werden?", answer: "Warnblinkanlage, Abblendlicht, ggf. Verkehrsleiteinrichtung und Umfeldbeleuchtung." },
  { category: "Bronze", question: "Wie groß soll der Abstand zwischen Warnzeichen und Unfallstelle mindestens sein?", answer: "Im Ortsgebiet ca. 50 m, auf Landesstraßen 150–250 m, auf Autobahnen 250–400 m." },
  { category: "Bronze", question: "Welche Art von Brandschutz ist bei einem Verkehrsunfall ohne Brand anzustreben?", answer: "Zweifacher Brandschutz (Pulver, Wasser)." },
  { category: "Bronze", question: "Welche Geräte werden zur Absicherung der Einsatzstelle verwendet?", answer: "Faltsignale, Blink-/Blitzleuchten, Leitkegel, Absperrband, Anhaltestab." },
  { category: "Bronze", question: "Wie werden Einsatzfahrzeuge zum Schutz der Mannschaft aufgestellt?", answer: "Gestaffelt hintereinander." },
  { category: "Bronze", question: "Auf welcher Seite wird bei stark befahrenen Straßen abgesessen?", answer: "Auf der dem Verkehr abgewandten Seite." },
  { category: "Bronze", question: "Welche zusätzliche Warnkleidung kann verwendet werden?", answer: "Warnwesten." },
  { category: "Bronze", question: "Wer muss Einweg-Infektionshandschuhe tragen?", answer: "Alle, die mit verletzten Personen zu tun haben." },
  { category: "Bronze", question: "Welche Arbeiten müssen nach einem Verkehrsunfall mit Personenschaden durchgeführt werden?", answer: "Absichern, Brandschutz, Fahrzeug sichern, Verletzte betreuen." },
  { category: "Bronze", question: "Wie kann die Ausbreitung von ausgelaufenem Treibstoff verhindert werden?", answer: "Erdwall, Bindemittel, Ölsperren." },
  { category: "Bronze", question: "Wie erfolgt die Betreuung von verletzten Personen?", answer: "Ansprechen, beruhigen, Schmerzen erfragen, Maßnahmen erklären, positiv bleiben." },

  // --- TLP Silber ---
  { category: "Silber", question: "Wie viele Kabeltrommeln mit 2,5 mm² dürfen verwendet werden?", answer: "Max. zwei Trommeln je 50 m." },
  { category: "Silber", question: "Was bewirkt das Einscheren einer losen bzw. festen Rolle?", answer: "Lose: Verdopplung der Zugkraft; feste: Richtungsänderung der Zugkraft." },
  { category: "Silber", question: "Welche Fahrzeugarten haben besondere Antriebe?", answer: "Gas-, Wasserstoff-, Hybrid-, Elektrofahrzeuge." },
  { category: "Silber", question: "Was ist beim Einsatz eines Trennschleifers zu beachten?", answer: "Brandgefahr, Splittergefahr." },
  { category: "Silber", question: "Was tun, wenn Airbag nach Unfall nicht ausgelöst hat?", answer: "Airbagschutz anbringen, Person und sich selbst aus Entfaltungsbereich entfernen." },
  { category: "Silber", question: "Wann darf mit dem Freimachen von Verkehrswegen begonnen werden?", answer: "Wenn Opfer versorgt/abtransportiert und Polizei-Ermittlungen abgeschlossen sind." },
  { category: "Silber", question: "Welche Anschlagmittel werden bei Bergung verwendet?", answer: "Seile, Ketten, Rundschlingen, Hebebänder." },
  { category: "Silber", question: "Wie werden Anschlagmittel verbunden?", answer: "Mit Schäkel oder Lasthaken mit Sicherung." },
  { category: "Silber", question: "Wozu dient eine Bereitstellungsplane?", answer: "Geräte griffbereit, sauber und geschützt lagern." },
  { category: "Silber", question: "Welche zusätzliche Schutzausrüstung bei Motorkettensäge?", answer: "Helm mit Gesichtsschutz, Schnittschutzhose." },
  { category: "Silber", question: "Was besagt die AUTO-Regel?", answer: "Austretende Stoffe, Unterboden prüfen, Tankdeckel, Oberfläche absuchen." },
  { category: "Silber", question: "Worauf beim Arbeiten mit HRG achten?", answer: "PSA komplett tragen, Gesichtsschutz runterklappen." },
  { category: "Silber", question: "Wo findet man Infos zum Fahrzeug?", answer: "Rettungsdatenblatt." },
  { category: "Silber", question: "Wo soll das Rettungsdatenblatt liegen?", answer: "Hinter der Fahrersonnenblende." },
  { category: "Silber", question: "Wie Sicherheitsgurte bei eingeklemmten Personen lösen?", answer: "Mit Gurtmesser am oberen Verankerungspunkt durchtrennen." },
  { category: "Silber", question: "Worauf achten vor Abklemmen der Batterie?", answer: "Ob elektrische Verbraucher noch bedient werden müssen." },
  { category: "Silber", question: "Warum müssen Spreizerarme 1 cm geöffnet sein?", answer: "Zur Sichtkontrolle auf drucklosen Zustand." },
  { category: "Silber", question: "Wie kommt man zum Rettungsdatenblatt, wenn keines im Fahrzeug?", answer: "Rettungsdatenbanken (CRS, Euro Rescue, ARBÖ, ÖAMTC)." },
  { category: "Silber", question: "Welche Hinweise stehen im Rettungsdatenblatt?", answer: "Batteriestandorte, Airbags, Hochvoltbatterien, Karosseriestruktur, Tankdeckel usw." },
  { category: "Silber", question: "Wie erkennt man ein Hybridfahrzeug?", answer: "Orange Kabel, Piktogramme, doppelte Abdeckungen, spezifische Aufkleber usw." }
];

export default function TLPWissen() {
  const [filter, setFilter] = useState("Alle");
  const [search, setSearch] = useState("");

  const filtered = facts.filter(item => {
    const inCategory = filter === "Alle" || item.category === filter;
    const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) || item.answer.toLowerCase().includes(search.toLowerCase());
    return inCategory && matchesSearch;
  });

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">🚒 TLP-Wissen leicht gemerkt</h1>

      <div className="flex gap-2 justify-center items-center flex-wrap">
        <Button variant={filter === "Alle" ? "default" : "outline"} onClick={() => setFilter("Alle")}>Alle</Button>
        <Button variant={filter === "Bronze" ? "default" : "outline"} onClick={() => setFilter("Bronze")}>Bronze</Button>
        <Button variant={filter === "Silber" ? "default" : "outline"} onClick={() => setFilter("Silber")}>Silber</Button>
        <Input
          placeholder="Suche nach Stichwort..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {filtered.map((item, idx) => (
        <Card key={idx} className="shadow border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h2>
            <p className="text-gray-600">{item.answer}</p>
          </CardContent>
        </Card>
      ))}

      {filtered.length === 0 && (
        <div className="text-center text-gray-500 mt-6">Keine Einträge gefunden.</div>
      )}
    </div>
  );
}
