import { Saanto } from "./saanto";
export const SAANNOT: Saanto[] = [
  { arvo: 1, nimi: "Vesiputous ", saanto: "Kaikki aloittaa juomaan samaan aikaan. Kortin nostaja voi lopettaa juomisen milloin vain, mutta kukaan muu ei saa lopettaa ennen kuin oikealla puolella oleva pelaaja lopettaa juomisen" },
  { arvo: 2, nimi: "Antokortti", saanto: `anna X hörppyä` },
  { arvo: 3, nimi: "Ottokortti", saanto: `Ota X hörppyä` },
  { arvo: 4, nimi: "123", saanto: "Kortin nostaja juo yhden hörpyn, sitä seuraava kaksi hörppyä ja niin edelleen kunnes kaikki pelaajat on käyty läpi." },
  { arvo: 5, nimi: "Jakokortti",saanto: "Jaa haluamillesi pelaajille 5 hörppyä" },
  { arvo: 6, nimi: "Juomanhenki", saanto: "Kortin nostanut on tästä eteenpäin Juomahenki, hän saa joka kierros määrätä omalla vuorollaan ihmisen ottamaan kolme huikkaa. Yksi pelaaja kerrallaan voi olla Juomanhenki" },
  { arvo: 7, nimi: "Kategoria", saanto: "Kortin nostaja päättää kategorian, johon lähdetään keksimään asioita myötäpäivään. Ensimmäinen joka kertoo jo kerrotun asian, tai ei keksi uutta joutuu juomaan X määrän hörppyjä." },
  { arvo: 8, nimi: "Sääntö", saanto: "Kortin nostaja määrittelee uuden säännön, joka on koko loppupelin voimassa. Toisella taukokortilla voi kumota jo olemassaolevan säännön." },
  { arvo: 9, nimi: "Tauko", saanto: "Kortin nostaja saa pelata taukokortin milloin vaan, jolloin hän voi käydä vessassa ja / tai tupakalla. Taukokortin käyttäjä on immuuni rangaistuksille tauon aikana." },
  { arvo: 10, nimi: "Tarina", saanto: "Jokainen pelaaja jatkaa tarinaa uudella sanalla, samaan aikaan toistaen jo kerrotun tarinan alusta alkaen. Esim. Olipa. Olipa kerran. Olipa kerran pieni. jnejne." },
  { arvo: 11, nimi: "Kysymysmestari", saanto: "Kortin nostajasta tulee kysymysmestari. Kysymysmestarin kysymyksiin ei saa vastata, tai joutuu juomaan rangaistuksesi sakkojen verran hörppyjä. Peliin liittyviin kysymyksiin saa vastata (Esim. Mitä tämä kortti tekee?). Pelissä voi olla vin yksi kysymysmestari." },
  { arvo: 12, nimi: "Juomakuoma", saanto: "Kortin nostaja päättää itselleen henkilön, joka juo aina kun nostajakin juo. (Pätee vain sakkoihin)" },
  { arvo: 13, nimi: "Kuningashörppy", saanto: "Kortin nostaja saa juoda yhden hörpyn jokaisen pelaajan juomasta." },
];