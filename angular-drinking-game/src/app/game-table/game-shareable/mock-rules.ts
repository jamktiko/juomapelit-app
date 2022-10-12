import { Rule } from "./rule";
export const RULES: Rule[] = [
  { number: 1, name: "Vesiputous ", rule: "Kaikki aloittavat juomaan samaan aikaan. Kortin nostaja voi lopettaa juomisen milloin vain, mutta kukaan muu ei saa lopettaa, ennen kuin oikealla puolella oleva pelaaja lopettaa juomisen." },
  { number: 2, name: "Antokortti", rule: `Anna 3 hörppyä` },
  { number: 3, name: "Ottokortti", rule: `Ota 3 hörppyä` },
  { number: 4, name: "123", rule: "Kortin nostaja juo yhden hörpyn, sitä seuraava kaksi hörppyä jne. kunnes kaikki pelaajat on käyty läpi." },
  { number: 5, name: "Jakokortti",rule: "Jaa haluamillesi pelaajille 5 hörppyä" },
  { number: 6, name: "Juomanhenki", rule: "Kortin nostanut on tästä eteenpäin Juomanhenki. Hän saa joka kierros määrätä omalla vuorollaan pelaajan ottamaan 3 huikkaa. Yksi pelaaja kerrallaan voi olla Juomanhenki." },
  { number: 7, name: "Kategoria", rule: "Kortin nostaja päättää kategorian, johon lähdetään keksimään asioita myötäpäivään. Ensimmäinen, joka kertoo jo kerrotun asian tai ei keksi uutta, joutuu juomaan 3 hörppyä." },
  { number: 8, name: "Sääntö", rule: "Kortin nostaja määrittelee uuden säännön, joka on koko loppupelin voimassa. Toisella sääntökortilla voi kumota jo olemassaolevan säännön." },
  { number: 9, name: "Tauko", rule: "Kortin nostaja saa pelata taukokortin milloin vain, jolloin hän voi käydä vessassa ja/tai tupakalla. Taukokortin käyttäjä on immuuni rangaistuksille tauon aikana." },
  { number: 10, name: "Tarina", rule: "Jokainen pelaaja jatkaa tarinaa uudella sanalla, samaan aikaan toistaen jo kerrotun tarinan alusta alkaen. Esim. Olipa... Olipa kerran... Olipa kerran pieni... jne." },
  { number: 11, name: "Kysymysmestari", rule: "Kortin nostajasta tulee Kysymysmestari. Kysymysmestarin kysymyksiin ei saa vastata tai joutuu juomaan rangaistuksesi 3 hörppyjä. Peliin liittyviin kysymyksiin saa vastata (esim. mitä tämä kortti tekee?). Pelissä voi olla vain yksi Kysymysmestari." },
  { number: 12, name: "Juomakuoma", rule: "Kortin nostaja päättää itselleen Juomakuoman, joka juo aina kun nostajakin juo (pätee vain sakkoihin)." },
  { number: 13, name: "Kuningashörppy", rule: "Kortin nostaja saa juoda yhden hörpyn jokaisen pelaajan juomasta." },
];