# Haarstudio ElbStyle

Ovo je statički, responzivni landing page za imaginarni premium frizerski salon u Hamburgu. Sajt je napravljen u HTML5, CSS3 i JavaScript bez framework-a i služi kao portfolio projekat za prikaz web dizajna, UX-a, lokalnog SEO i frontend razvoja.

## Šta se nalazi u projektu

- `index.html` – glavna struktura sajta i sadržaj
- `styles.css` – stilovi, layout, boje, tipografija i responzivnost
- `script.js` – navigacija, galerija, animacije, validacija forme i interaktivni efekti
- `robots.txt` – pravila za pretraživače
- `sitemap.xml` – XML mapa sajta
- `README.md` – uputstvo za pokretanje i deploy

## Kako pokrenuti projekat lokalno

1. Otvori folder projekta.
2. Pokreni lokalni server:

```bash
cd "c:\Users\sembe\Desktop\Moji Svi Projekti\Firzerski salon stranica"
python -m http.server 8000
```

3. Otvori u browseru:

```text
http://localhost:8000
```

Možeš i direktno otvoriti `index.html`, ali lokalni server je bolji zato što bolje simulira realnu web sredinu.

## Responsive design

Sajt je dizajniran za desktop, tablet i mobilne uređaje. U CSS-u postoje media queries koje menjaju raspored sekcija i navigaciju na manjim ekranima.

Primer:
- do 960px: sekcije prelaze na 2 kolone
- do 760px: sekcije prelaze na 1 kolonu
- navigacija se pretvara u hamburger meni

To znači da je stranica potpuno funkcionalna i pregledna na telefonu i tabletu.

## SEO i lokalna optimizacija za Hamburg

Projekt je prilagođen lokalnom SEO za Hamburg:

- title i meta description sadrže "Friseur Hamburg"
- Open Graph tagovi imaju lokalni kontekst
- Schema.org JSON-LD je dodat za HairSalon / LocalBusiness
- addressLocality i areaServed su postavljeni na Hamburg
- sadržaj koristi prirodne termine kao što su "Hamburg", "Friseur Hamburg", "Haarschnitt Hamburg" i slične lokalne reference

Ovo daje sajtu realan lokalni SEO kvalitet za frizerski salon u Hamburg-u.

## GitHub Pages deploy

1. Napravi novi GitHub repository.
2. Uvezi projekat u repo.
3. Idi u Settings → Pages.
4. Odaberi "Deploy from a branch".
5. Izaberi main branch i folder root.
6. Sačuvaj i sačekaj da GitHub objavi stranicu.

Link će izgledati ovako:

```text
https://tvoj-korisnik.github.io/naziv-repozitorijuma/
```

## Netlify deploy

1. Otvori Netlify i prijavi se.
2. Klikni na "Add new site" → "Import from Git".
3. Poveži svoj GitHub account i repo.
4. Izaberi folder koji sadrži projekat.
5. Netlify će automatski objaviti stranicu i generisati preview link.

## Zašto je ovaj projekat dobar za portfolio

Ovaj projekat pokazuje:

- HTML semantičku strukturu
- kvalitetan CSS dizajn
- responzivnost za mobilne uređaje i tablete
- JS interaktivnost
- SEO i local business optimizaciju
- UX i conversion fokus
- profesionalnu prezentaciju lokalnog biznisa

To znači da projekt ne pokazuje samo "lep dizajn", nego i razumevanje kako web stranica funkcioniše u realnom poslovnom kontekstu.

## Preporuka za publikaciju i hosting

Za ovaj tip sajta preporučujem:

### Ako je to demo ili portfolio projekat
- GitHub Pages
- Netlify
- Cloudflare Pages

### Ako je to stvarni klijent koji želi da ima profesionalnu web prezentaciju
- domena: Namecheap, Porkbun ili Cloudflare
- hosting: Netlify ili Cloudflare Pages za statički sajt
- email: Google Workspace ili poslovni email sa domenom

### Ako klijent želi dodatni CMS ili rezervacije
- Hostinger
- SiteGround
- IONOS
- DigitalOcean / Render / Railway za ozbiljnije web aplikacije

Najvažnije pravilo:
- domena i hosting mogu da budu u vlasništvu klijenta,
- ti kao developer možeš da radiš deploy i održavanje,
- za landing page nije potreban komplikovan server.

## Napomena

Sajt koristi stock fotografije radi premium look-a i profesionalne prezentacije. Za pravi poslovni projekat kasnije možeš zameniti slike sa stvarnim fotografijama, logom i branding elementima salon.

## Kratki portfolio opis

"Premium landing page za fiktivni frizerski salon u Hamburgu. Projekt je napravljen u HTML, CSS i JavaScript-u sa fokusom na brand identitet, responzivni dizajn, lokalni SEO i konverziju korisnika."
