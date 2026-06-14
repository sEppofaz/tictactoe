# TicTacToe

## URLs
- **Live:** https://seppofaz.github.io/tictactoe/
- **GitHub:** https://github.com/sEppofaz/tictactoe

## Lokaler Pfad
`~/Dropbox/Apps/Claude/TicTacToe/`

## Deployment
```bash
cd ~/Dropbox/Apps/Claude/TicTacToe
git add -A && git commit -m "..." && git push
```

## Dateistruktur
- `index.html` – App (alles in einer Datei)
- `manifest.json` – PWA-Metadaten
- `sw.js` – Service Worker (Cache: `tictactoe-v1`)
- `icon.svg` / `icon-192.png` / `icon-512.png` / `apple-touch-icon.png`

## Spiellogik
- X unten, O oben (O-Bereich 180° gedreht für Gegenübersitzen)
- Punktestand bleibt über Runden erhalten
- Sieger-Felder werden hervorgehoben (`.win`-Klasse)

## PWA-Hinweise
- SW-Cache-Name hochzählen (`tictactoe-v2`) bei Icon/Manifest-Änderungen
