Wichtige Besonderheiten für dein FM-Projekt

public/downloads/: Perfekt für kleine .fmf-Taktikdateien und .lnc-Dateien. Sie können direkt auf deinem GitHub-Server liegen und ohne externe Hoster heruntergeladen werden.

Keine Riesen-Downloads in Git: Wenn du Media Packs (Logos, Facepacks) baust, die hunderte Megabyte oder Gigabyte groß sind, lege sie nicht unter public/ ab (das bläht das Git-Repository auf). Verlinke in den Markdown-Dateien stattdessen auf externe Cloud-Ordner (z. B. Google Drive oder MEGA).

templates/: Dieser Ordner dient dir beim Schreiben in VS Code als Vorlage. Du kopierst z. B. story-template.md einfach in den Ordner src/content/stories/saison-1/kapitel-01.md und füllst nur noch den Inhalt aus.

# FM27 Webseiten-Konzept (xBurzelx)

## 🎯 Ziele der Seite
* Dokumentation der eigenen FM27 Manager-Story.
* Bereitstellung von Taktik-Downloads (.fmf) und Set Pieces.
* Hosting von Media-Packs und Konfigurations-Dateien (.lnc).

## 🛠️ Tech-Stack
* **Framework:** Astro
* **Styling:** Tailwind CSS
* **Hosting:** GitHub Pages via GitHub Actions
* **Editor:** VS Code