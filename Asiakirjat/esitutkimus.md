# Esitutkimus

- [Esitutkimus](#esitutkimus)
  - [Projektin tiedot](#projektin-tiedot)
    - [Termit ja lyhenteet](#termit-ja-lyhenteet)
    - [Viitteet](#viitteet)
  - [Johdanto](#johdanto)
  - [Visio](#visio)
  - [Käyttäjäkertomukset](#k%C3%A4ytt%C3%A4j%C3%A4kertomukset)
  - [Tekniset vaatimukset](#tekniset-vaatimukset)
  - [Ratkaisuvaihtoehdot](#ratkaisuvaihtoehdot)
    - [Ratkaisuvaihtoehto 1](#ratkaisuvaihtoehto-1)
      - [Toteutusympäristö](#toteutusymp%C3%A4rist%C3%B6)
      - [Toteutettavat kertomukset](#toteutettavat-kertomukset)
      - [Työmääräarviot](#ty%C3%B6m%C3%A4%C3%A4r%C3%A4arviot)
      - [Pros and Cons](#pros-and-cons)
  - [Yhteenveto](#yhteenveto)

## Projektin tiedot

<Juomapelit-app>

Juomapelit-appin tarkoituksena on luoda toimiva PWA eli nettiselaimen kautta toimiva sovellus, joka korvaisi fyysisen korttipakan.
Lobbyn ja pelin luominen, sekä lobbyyn liittyminen on vaivatonta, helppoa ja nopeaa. Sovelluksesta löytyy aluksi ainakin yksi tuttu
juomapeli, tulevaisuudessa ehkä useampia ja modattava korttipakka, johon käyttäjä saa itse lisätä kortteihin omat säännöt.

Tekijät: Julius Kelja, Janne Matela, Aku Järvinen, Toni Virta

### Termit ja lyhenteet

| Termi        | Kuvaus                                                                                                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GIT          | Versionhallintajärjestelmä                                                                                                                                                  |
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

| Viittaus | Materiaali                       |
| -------- | -------------------------------- |
| HLTP     | _linkki hltp dokumenttiin_       |
| GDD      | _linkki gamedesign dokumenttiin_ |

## Johdanto

Tämän dokumentin tarkoituksena on tuottaa esitutkimus Juomapelit-appistä. App on websovellus, jonka tarkoituksena on korvata fyysinen korttipakka, ja juomapelejä pystyttäisiin pelaamaan multiplayerinä useammalla laitteella samanaikaisesti.

## Visio

Sovelluksen päävisiona toimii helppokäyttöinen, verkkoselaimessa toimiva app, joka korvaa fyysisen korttipakan. Sovelluksesta löytyy ainakin yksi tuttu juomapeli. Lobby ja automaattisesti generoitu koodi, jolla muut pelaajat liittyvät käyttäjän luomaan lobbyyn, ovat luotuja parilla klikkauksella. Pelaaminen ei vaadi sisäänkirjautumista. Sovellus sisältää mahdollisimman vähän ärsyttäviä pop-upeja tai pelin keskeyttäviä ikkunoita ja mainoksia. Sovelluksella on mahdollista pelata monella eri laitteella samaa peliä yhteisessä lobbyssä multiplayer-ominaisuuden avulla.

## Käyttäjäkertomukset

https://jamkstudent-my.sharepoint.com/:p:/g/personal/aa3098_student_jamk_fi/ETg_iavc2IdDhc_0Gp59s1UBnaDpVti4FbC1vOIPK6YWGg?e=eD6sSw

## Tekniset vaatimukset

1. Pelien tulee toimia sulavasti
2. Sovelluksen tulee toimia yleisimmillä alustoilla, esim. Android, iOS, PC, Mac
3. Serverless-backend
4. Mahdollinen tietokanta?
5. Toimiva Multiplayer (WebSocket?)

## Ratkaisuvaihtoehdot

Alla listattuna ratkaisuvaihtoehdot.

### Ratkaisuvaihtoehto 1

#### Toteutusympäristö

_Tässä aliluvussa kerrotaan ympäristön jossa tietojärjestelmä tulee toimimaan. Tähän kannattaa liittää myös yksinkertainen arkkitehtuurikuva, josta pystytään havainnoimaan järjestelmän oleelliset osat ja osien välinen kommunikointi_

#### Toteutettavat kertomukset

_Tässä aliluvussa kerrotaan mitä kertomuksia kyseisellä tekniikalla pystytään toteuttamaan ja mitä ei_

#### Työmääräarviot

_Tähän arvioidaan hyvin karkealla tasolla työhön kuluva aika. Tehkää arviot käyttäen hyväksi seurantaraportin Työmäärien arviointi -välilehteä (SeurantaRaportti_Projektin_nimi.xls). Työmäärien arvioinnissa jokainen projektin jäsen tekee omat arvionsa ja sen jälkeen keskustellaan arviot läpi, jolloin päätetään vaiheeseen arvioitavat tunnit._

_Esimerkiksi_>
| Vaihe | Tunnit | Muuta?
|---|---|---|
Käynnistys | 10 | Jee
Suunnittelu | 10 | Jee
**Yht** | 20 | Paljon tunteja

#### Pros and Cons

_Tässä aliluvussa kerrotaan ratkaisuvaihtoehdon hyvät ja huonot puolet objektiivisesti_

## Yhteenveto

_Tässä luvussa tehdään ehdotus järjestelmän toteutustavasta (siis jokin edellä esitellyistä vaihtoehdoista) ja perustellaan ko. valinta._
