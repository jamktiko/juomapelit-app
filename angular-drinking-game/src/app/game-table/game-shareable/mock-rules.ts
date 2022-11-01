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
  { number: 9, name: "Tauko", rule: "Kortin nostaja saa pelata taukokortin milloin vain, jolloin hän voi käydä esim. vessassa. Taukokortin käyttäjä on immuuni rangaistuksille tauon aikana." },
  { number: 10, name: "Tarina", rule: "Kortin nostanut aloittaa tarinan Olipa kerran-lauseella ja keksii perään yhden sanan, josta seuraavat pelaajat yksi sana kerrallaan jatkavat tarinaa. Tarina täytyy jokaisen pelaajan kohdalla sanoa oikein alusta alkaen lisäten lopuksi oma sana. Se joka ei sano tarinaa oikein tai ei keksi jatkoa ottaa kolme huikkaa" },
  { number: 11, name: "Kysymysmestari", rule: "Kortin nostajasta tulee Kysymysmestari. Kysymysmestarin kysymyksiin ei saa vastata tai joutuu juomaan rangaistuksesi 3 hörppyjä. Peliin liittyviin kysymyksiin saa vastata (esim. mitä tämä kortti tekee?). Pelissä voi olla vain yksi Kysymysmestari." },
  { number: 12, name: "Juomakuoma", rule: "Tämän kortin nostanut joutuu juomaan aina silloin, kun muutkin pelaajat joutuvat juomaan." },
  { number: 13, name: "Kuningashörppy", rule: "Kortin nostanut pelaaja kaataa omasta juomasta tuoppiin. Kun viimeinen kuningas on nostettu hän joutuu juomaan kerääntyneen saldon." },
];