var opDurum = false,
  opt = "",
  sonuc = 0;

let btnRkam = document.querySelectorAll(".rakambtn");
let txtgtr = document.querySelector(".btngoster");
let btnOrs = document.querySelectorAll(".btnOrs");
let btnislem = document.querySelector(".btnislem");
let btnce = document.querySelector(".btnce");
let btnc = document.querySelector(".btnc");
btnRkam.forEach(function (element) {
  element.onclick = function (e) {
    if (txtgtr.textContent == "0" || opDurum);
    txtgtr.textContent = "";

    txtgtr.textContent += this.textContent;
    opDurum = false;
  };
});
btnOrs.forEach(function (element) {
  element.onclick = function (e) {
    opDurum = true;
    var yoptt = this.textContent;

    btnislem.textContent =
      btnislem.textContent + " " + txtgtr.textContent + " " + yoptt;
    switch (opt) {
      case "+":
        txtgtr.textContent = Number(sonuc + txtgtr.textContent);
        break;
      case "-":
        txtgtr.textContent = Number(sonuc + -txtgtr.textContent);
        break;
      case "*":
        txtgtr.textContent = Number(sonuc * txtgtr.textContent);
        break;
      case "/":
        txtgtr.textContent = Number(sonuc / txtgtr.textContent);
      default:
        break;
    }
    sonuc = Number(txtgtr.textContent);
    opt = yoptt;
  };
});
/*** btnc and btnce*/
btnc.onclick = function (e) {
  txtgtr.textContent = "0";
};
btnce.onclick = function (e) {
  txtgtr.textContent = "0";
  btnislem.textContent = "0";
  sonuc = 0;
  opt = "";
};
