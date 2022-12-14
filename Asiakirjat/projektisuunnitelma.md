# Projektisuunnitelma

- [Projektisuunnitelma](#projektisuunnitelma)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Projektin sisältö](#projektin-sis%C3%A4lt%C3%B6)
    - [Johdanto](#johdanto)
    - [Projektin tausta ja tavoitteet](#projektin-tausta-ja-tavoitteet)
    - [Tuotokset](#tuotokset)
    - [Projektin hyväksyminen](#projektin-hyv%C3%A4skyminen)
  - [Toimintasuunnitelma](#toimintasuunnitelma)
    - [Projektin aloittamisesta](#projektin-aloittamisesta)
    - [Projektin toteuttamisesta](#projektin-toteuttamisesta)
    - [Projektin testaamisesta](#projektin-testaamisesta)
    - [Projektin lopettamisesta](#projektin-lopettamisesta)
  - [Projektin resurssit](#projektin-resurssit)
    - [Projektin organisaatio](#projektin-organisaatio)
    - [Työkalut](#ty%C3%B6kalut)
  - [Aikataulu](#aikataulu)
  - [Raportointi ja kommunikointi](#raportointi-ja-kommunikointi)
    - [Sisäinen raportointi](#sis%C3%A4inen-raportointi)
    - [Viikkopalaverikäytäntö/Daily Scrum](#viikkopalaverik%C3%A4yt%C3%A4nt%C3%B6daily-scrum)
    - [Kommunikointitavat](#kommunikointitavat)
  - [Dokumentointi](#dokumentointi)
    - [Dokumenttipohjat](#dokumenttipohjat)
    - [Dokumenttien hallinta](#dokumenttien-hallinta)
  - [Riskien hallinta](#riskien-hallinta)
  - [Avoimet asiat](#avoimet-asiat)

## Projektin tiedot

\<Juomapelit-app>

Tekijät: Julius Kelja, Janne Matela, Aku Järvinen, Toni Virta

### Termit ja lyhenteet

| Termi        | Kuvaus                                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git          | Versionhallintajärjestelmä                                                                                                                                                  |
| GitHub       | Palvelu joka on rakennettu GIT versionhallinnan ympärille                                                                                                                   |
| Markdown     |  Merkkauskieli                                                                                                                                                              |
| Scrum        | Ketterä sovelluskehitysmenetelmä                                                                                                                                            |
| Scrum Master | Henkilö joka vastaa Scrummin ylläpitämisestä ja toimivuudesta                                                                                                               |
| PO           | Product Owner. Henkilö jolla on selkeä visio projektin lopputuloksesta                                                                                                      |
| HTML         | Hypertext Markup Language. Avoimesti standardoitu merkintäkieli, jota käytetään käyttää nettisivujen rakentamiseen.                                                         |
| CSS          | Cascading Style Sheets. Käytetään esim HTML tekstin kustomointiin.                                                                                                          |
| Frontend     | Loppukäyttäjälle näkyvä osuus sovelluksesta                                                                                                                                 |
| Backend      | Sovelluksen taustalla pyörivä osuus, joka käsittelee kaiken sovelluslogiikan yms.                                                                                           |
| Fullstack    | Kahden edellisen termin kokonaisuus.                                                                                                                                        |
| Framework    | Ohjelmistokehitys joka antaa rungon sovelluksen tai sivuston kehitykseen.                                                                                                   |
| PWA          | Progressive Web Application. Mobiilin verkkoselaimessa toimiva verkkosivu joka pyrkii yhdistämään natiivin mobiilisovelluksen ja responsiivisen verkkosivun parhaat puolet. |
| AWS          | Amazon Web Services                                                                                                                                                         |

### Viitteet

| Viittaus | Materiaali                        |
| -------- | --------------------------------- |
| HLTP     | \<linkki hltp dokumenttiin>       |
| GDD      | \<linkki gamedesign dokumenttiin> |

## Projektin sisältö

### Johdanto

Tästä dokumentista löytyy Ticorporate-projektimme projektisuunnitelma.

Projektimme on websovellus, josta löytyy aluksi ainakin yksi juomapeli. Juomapelin lisäksi sovelluksesta voi katsoa halutessaan erilaisia drinkkivinkkejä, joita taas voi filtteröidä omien mieltymyksien mukaan.

Suunnitelmissa on yrittää lisätä mahdollisuus muokata ja/tai lisätä omia sääntöjä peleihin.

### Projektin tausta ja tavoitteet

Hauska websovellus yli 18-vuotiaille kaveriporukoille jotka viettävät iltoja yhdessä. Projektin tavoitteena on tehdä websovellus mitä voi pelata useampi henkilö omalla mobiililaitteella samanaikaisesti pelaajien luomassa aulassa.

### Tuotokset

- Projektisuunnitelma
- Esitutkimus
- Sprint backlog
- Product backlog
- Prototyyppi
- Liiketoimintasuunnitelma
- Verkkosivut
- Mainos?
- Loppuraportti

### Projektin hyväksyminen

Sovellus on hyväksyttävässä kunnossa kun siitä löytyy ainakin:

- Yksi juomapeli (Tavallisella korttipakalla pelattava)
- Toimiva moninpeli
- Toimiva Drinkkivinkki-osio
- Toimivat animaatiot ja ääniefektit
- Mahdollisuus asetuksien säätöön
- Käyttäjäystävällinen ulkoasu. Tämä testataan vapaaehtoisilla testaajilla.

## Toimintasuunnitelma

Projektia tehdään Scrum-metodin avulla. Roolit on jaettu jokaiselle ryhmän jäsenelle.

### Projektin aloittamisesta

Projektista on valmiina ensimmäinen Figma-prototyyppi, johon on jaettu linkki Discord-serverin "linkit"-kanavalle. Tätä voidaan käyttää referenssinä, pohjana tai poistetaan kokonaan ja tehdään uusi prototyyppi. Tämä päätetään Design Sprintin aikana.

Design Sprint aloitetaan 12.9.2022, jolloin projekti virallisesti lähtee käyntiin.

### Projektin toteuttamisesta

Prototyyppi luodaan Figmalla. Frontend pystytetään ensisijaisesti Angularia käyttäen, mutta tarvittaessa vaihdetaan Svelteen. Backend toteutetaan Serverless-ratkaisua AWS-pilvipalvelua käyttäen. Projekti julkaistaan websovelluksena.

### Projektin testaamisesta

Projektia testataan Cypressillä. Sovellus annetaan myös testauskäyttöön vapaaehtoisille käyttäjille.

### Projektin lopettamisesta

Projekti nähdään valmiiksi, kun siinä on Projektin hyväksyminen -osiossa mainitut asiat. Projekti lopetetaan Scrum-metodin määrämillä tavoilla.

## Projektin resurssit

### Projektin organisaatio

| Nimi         | Rooli(t)                                                | Yhteystiedot           |
| ------------ | ------------------------------------------------------- | ---------------------- |
| Julius Kelja | Scrum Master, UI/UX                                     | AA2850@student.jamk.fi |
| Janne Matela | Product Owner, Liiketoiminta ja markkinointi, Tekniikka | AA4110@student.jamk.fi |
| Aku Järvinen | Tekniikka, Testaus, AWS                                 | AA3953@student.jamk.fi |
| Toni Virta   | Tekniikka, Frontend                                     | AA3098@student.jamk.fi |

## Raportointi ja kommunikointi

### Sisäinen raportointi

Scrum Master ja Product Owner pitävät huolen raportoinneista, jotka heille on suotu. Tiimin muut jäsenet raportoivat edellämainituille, jotka tarvittaessa vievät asiat eteenpäin.

### Palaverikäytänteet (Daily Scrum, Sprint Backlog, jne)

Projektin viikkopalaveri pidetään perjantaisin huoneessa 205 DGC:llä. Palaverin aikana selvitetään tehdyt työt ja suunnitellaan tulevat. Palavereista tehdään pöytäkirja, joita säilytetään projektihakemistossa.

Daily Scrumit pidetään klo 9:30 joka työpäivä.

Sprint backlogien ajoista päätetään erikseen, mutta niistä informoidaan tiimiläisiä ajoissa.

### Kommunikointitavat

Kommunikointi tapahtuu ensisijaisesti Discord-kanavan kautta, sekä kokouksissa työpaikalla.

## Dokumentointi

Haluttu dokumentointi luodaan aluksi joko pilveen tai omalle tietokoneelle, ja siitä jaetaan oikeuksineen linkit tiimin muille jäsenille Discord-serverille.

### Dokumenttipohjat

Projektissa käytetään pääasiassa joko JAMKin tai Labramestarin määräämiä/tekemiä pohjia. Muutoin luodaan siistit pohjat itse tai käytetään muita valmispohjia.

### Dokumenttien hallinta

Dokumenteista jaetaan linkit oikeuksineen Discord-serverin "linkit"-kanavalle. Tärkeät linkit kiinnitetään keskusteluun, jotta ne ovat helposti löydettävissä. Dokumenteista on alkuperäiset versiot tallessa jakajan omalla tietokoneella tai pilvessä. Tarvittaessa käytäntöä muutetaan.

## Riskien hallinta

| Riskit                                                     | Todennäköisyys |  Impakti     | Minimointi                                                                                  |
| ---------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------- |
| Motivaationpuute työntekijöillä                            | Pieni          |  Suuri       | Pidetään tarpeeksi taukoja ja hankimme keskeisiä viihdykkeitä (kahvipulla, koristeita etc.) |
| Projekti kasvaa liian suureksi, eikä aika riitä tekemiseen | Kohtalainen    |  Suuri       | Daily Scrum-kokousten pitäminen ja hyvä suunnittelu.                                        |
| Sairastapaukset, mitkä estävät tiettyjen töiden teon       | Kohtalainen    |  Kohtalainen | Perehdytään kaikkien tiiminjäsenten työtehtäviin ja autetaan tarvittaessa.                  |
|                                                            |                |              |                                                                                             |

## Avoimet asiat

- Ei toistaiseksi
