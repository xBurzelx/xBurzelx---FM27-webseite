Phase 1: Brand & Grafik-Assets (Design-Fundament)

Logo & Favicon: Ein quadratisches Logo für den Webseiten-Header und als favicon.ico für Browser-Tabs (512×512 px PNG).

Social & Header-Banner: Ein wiederverwendbares Banner (1200×630 px) für Artikel-Header und Social-Media-Vorschauen.

Canva / Photoshop / GIMP Templates:

Matchday-Template: Für Spielstand-Visualisierungen, Kader-Screenshots und Torschützen.

Taktik-Visualizer: Standardisierter Rahmen für Formationen (In-Possession & Out-of-Possession).

Download-Buttons: Einheitliche Badges für .fmf-Dateien und Media-Packs.

Phase 2: Dateistruktur & Hosting-Vorbereitung

In-Game Screenshot-Standard: Feste Auflösung und Format festlegen (z. B. .webp oder komprimiertes .png), um die Ladezeiten der Webseite gering zu halten.

Ordner-Layout im Projekt:

/public/assets/img/stories/ – Screenshots aus dem Savegame (Tabelle, Transfers, Stats).

/public/assets/downloads/tactics/ – Speicherort für .fmf-Dateien (Haupttaktik, Standardvarianten).

/public/assets/downloads/media/ – Kleinere Config- oder Media-Pakete.

Externes Hosting (für Großdateien): Vorbereitung von Cloud-Ordnern (z. B. Google Drive oder Mega) für Grafik- oder Logo-Packs über 100 MB, da das GitHub Repository schlank bleiben sollte.

Phase 3: Content-Templates (Markdown)

Story-Kapitel Template (story-template.md): Festes Gerüst für Monatsberichte (z. B. Ergebnisse, Formkurve, Verletzungssorgen, Spieler des Monats).

Taktik-Steckbrief Template (taktik-template.md): Struktur für Ausrichtung, Rollen-Analysen, Pressing-Intensität und Download-Links.

Frontmatter-Schema: Metadaten für Markdown-Dateien festlegen (z. B. title, season, club, formation, download_link).

Phase 4: Git & VS Code Initialisierung

Git-Repository: git init im VS Code Terminal, Erstellung einer .gitignore (für temporäre Build-Dateien und System-Caches).

Lokaler Dev-Server: Testen der Grundstruktur im Editor über die Live-Vorschau.


-----------------------------------------------------------------------------------


🏛️ Das Struktur-Konzept für die Startseite
Hero-Header (Willkommen & Quick Links):

Eye-Catcher mit Titel, aktuellem FM-Projekt und direkten Buttons zu Taktiken oder der Story.

Dashboard-Leiste (Quick Stats):

Eine kleine Statusleiste (z. B. Aktueller Verein, Saison, Letzter Spieltag, Downloads).

Aktuelles Trainerstory-Kapitel (Featured Story):

Großes Highlight-Feld für den neuesten Story-Post inklusive Match-Screenshot/Header-Bild.

Taktiken & Standardvarianten (Taktik-Grid):

Karten für deine Top-Formationen (z. B. 4-1-1-3-1, 3-4-2-1) mit Direkt-Button für den .fmf-Download.

Media Packs, Fixes & Tools (Download-Bereich):

Übersicht für Namens-Fixes (.lnc), Sachsen-Medienpakete und weitere nützliche Files.