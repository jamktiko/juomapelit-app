const c = document.getElementById("cardTemplate");

const suit = c.getContext("2d");
suit.font = "60px Roboto-Black, sans-serif";
suit.fillText("♠", 20, 110);

const rank = c.getContext("2d");
rank.font = "50px Roboto-Black, sans-serif";
rank.fillText("2", 20, 60);

const suit1 = c.getContext("2d");
suit1.font = "60px Roboto-Black, sans-serif";
suit1.rotate((180 * Math.PI) / 180);
suit1.fillText("♠", -280, -360);

const rank1 = c.getContext("2d");
rank1.font = "50px Roboto-Black, sans-serif";
rank1.fillText("2", -280, -410);
