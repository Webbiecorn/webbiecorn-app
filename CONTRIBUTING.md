# Bijdragen aan Webbiecorn

Bedankt voor je interesse om bij te dragen aan het Webbiecorn project! Deze gids helpt je om pull requests (PR's) te maken en in te dienen.

## 📋 Voordat je begint

1. Fork de repository naar je eigen GitHub account
2. Clone je fork naar je lokale machine:
   ```bash
   git clone https://github.com/jouw-gebruikersnaam/webbiecorn-app.git
   cd webbiecorn-app
   ```
3. Installeer de benodigde dependencies:
   ```bash
   npm install
   ```

## 🔧 Lokale ontwikkeling

1. Start de development server:
   ```bash
   npm run dev
   ```
   De applicatie draait nu op `http://localhost:5173`

2. Maak je wijzigingen in de code

3. Test je wijzigingen door de applicatie te builden:
   ```bash
   npm run build
   ```

## 🚀 Een Pull Request maken

### Stap 1: Maak een nieuwe branch

Maak altijd een nieuwe branch voor je wijzigingen:
```bash
git checkout -b mijn-feature-naam
```

Gebruik duidelijke branch namen zoals:
- `feature/nieuwe-pagina`
- `fix/header-bug`
- `docs/readme-update`

### Stap 2: Commit je wijzigingen

1. Stage je wijzigingen:
   ```bash
   git add .
   ```

2. Commit met een duidelijke boodschap:
   ```bash
   git commit -m "Beschrijf je wijziging hier"
   ```

   Voorbeelden van goede commit berichten:
   - `feat: voeg contactformulier validatie toe`
   - `fix: los responsive menu probleem op`
   - `docs: update README met nieuwe instructies`

### Stap 3: Push naar je fork

```bash
git push origin mijn-feature-naam
```

### Stap 4: Open een Pull Request

1. Ga naar de originele repository op GitHub
2. Klik op "Pull requests" en daarna op "New pull request"
3. Klik op "compare across forks"
4. Selecteer jouw fork en branch
5. Vul een duidelijke titel en beschrijving in:
   - **Titel**: Korte samenvatting van je wijziging
   - **Beschrijving**: 
     - Wat heb je veranderd?
     - Waarom heb je deze wijziging gemaakt?
     - Welke issue lost dit op (indien van toepassing)?

6. Klik op "Create pull request"

## ✅ Pull Request Checklist

Voordat je een pull request indient, controleer het volgende:

- [ ] De code build zonder errors (`npm run build`)
- [ ] De applicatie werkt correct in de browser
- [ ] Je commits hebben duidelijke berichten
- [ ] Je hebt geen onnodige bestanden toegevoegd (bijv. `node_modules`, `dist`)
- [ ] Je PR beschrijving is compleet en duidelijk

## 📝 Code Stijl

- Gebruik TypeScript voor alle nieuwe code
- Volg de bestaande code formatting
- Houd componenten klein en herbruikbaar
- Schrijf duidelijke commentaren waar nodig

## 🐛 Bug Rapporteren

Als je een bug vindt maar deze niet zelf kunt oplossen:

1. Controleer of de bug al gerapporteerd is in de Issues
2. Open een nieuwe Issue met:
   - Beschrijving van de bug
   - Stappen om de bug te reproduceren
   - Verwacht gedrag vs. daadwerkelijk gedrag
   - Screenshots indien mogelijk

## 💡 Feature Suggesties

Heb je een idee voor een nieuwe feature?

1. Open een Issue met het label "enhancement"
2. Beschrijf de feature en waarom deze nuttig zou zijn
3. Wacht op feedback voordat je begint met implementeren

## 🤝 Code Review Process

- Alle PR's worden gereviewd door een maintainer
- Je kunt gevraagd worden om wijzigingen aan te brengen
- Wees open voor feedback en constructieve kritiek
- Zodra de PR is goedgekeurd, wordt deze gemerged

## ❓ Vragen?

Heb je vragen over het bijdragen? Open een Issue of neem contact op via de contact pagina van de website.

Nogmaals bedankt voor je bijdrage aan Webbiecorn! 🦄✨
