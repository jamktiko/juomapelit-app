import { Rule } from "./rule";
export const RULES: Rule[] = [
  { number: 1, name: "Vesiputous ", rule: "Kaikki aloittaa juomaan samaan aikaan. Kortin nostaja voi lopettaa juomisen milloin vain, mutta kukaan muu ei saa lopettaa ennen kuin oikealla puolella oleva pelaaja lopettaa juomisen" },
  { number: 2, name: "Antokortti", rule: `anna X hörppyä` },
  { number: 3, name: "Ottokortti", rule: `Ota X hörppyä` },
  { number: 4, name: "123", rule: "Kortin nostaja juo yhden hörpyn, sitä seuraava kaksi hörppyä ja niin edelleen kunnes kaikki pelaajat on käyty läpi." },
  { number: 5, name: "Jakokortti",rule: "Jaa haluamillesi pelaajille 5 hörppyä" },
  { number: 6, name: "Juomanhenki", rule: "Kortin nostanut on tästä eteenpäin Juomahenki, hän saa joka kierros määrätä omalla vuorollaan ihmisen ottamaan kolme huikkaa. Yksi pelaaja kerrallaan voi olla Juomanhenki" },
  { number: 7, name: "Kategoria", rule: "Kortin nostaja päättää kategorian, johon lähdetään keksimään asioita myötäpäivään. Ensimmäinen joka kertoo jo kerrotun asian, tai ei keksi uutta joutuu juomaan X määrän hörppyjä." },
  { number: 8, name: "Sääntö", rule: "Kortin nostaja määrittelee uuden säännön, joka on koko loppupelin voimassa. Toisella taukokortilla voi kumota jo olemassaolevan säännön." },
  { number: 9, name: "Tauko", rule: "Kortin nostaja saa pelata taukokortin milloin vaan, jolloin hän voi käydä vessassa ja / tai tupakalla. Taukokortin käyttäjä on immuuni rangaistuksille tauon aikana." },
  { number: 10, name: "Tarina", rule: "Jokainen pelaaja jatkaa tarinaa uudella sanalla, samaan aikaan toistaen jo kerrotun tarinan alusta alkaen. Esim. Olipa. Olipa kerran. Olipa kerran pieni. jnejne." },
  { number: 11, name: "Kysymysmestari", rule: "Kortin nostajasta tulee kysymysmestari. Kysymysmestarin kysymyksiin ei saa vastata, tai joutuu juomaan rangaistuksesi sakkojen verran hörppyjä. Peliin liittyviin kysymyksiin saa vastata (Esim. Mitä tämä kortti tekee?). Pelissä voi olla vin yksi kysymysmestari." },
  { number: 12, name: "Juomakuoma", rule: "Kortin nostaja päättää itselleen henkilön, joka juo aina kun nostajakin juo. (Pätee vain sakkoihin)" },
  { number: 13, name: "Kuningashörppy", rule: "Kortin nostaja saa juoda yhden hörpyn jokaisen pelaajan juomasta." },
];