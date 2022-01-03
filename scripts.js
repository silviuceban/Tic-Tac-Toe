console.log("tic-tac-toe script");
const tdlist = document.getElementsByTagName("td");
const sign_x = document.querySelector("#x");
const sign_o = document.querySelector("#o");
const btn = document.getElementById("restart");
const sign_text = document.querySelector("#sign_text");
let score_x = 0;
let score_o = 0;
const score_x_div = document.querySelector("#x_s");
const score_o_div = document.querySelector("#o_s");

btn.addEventListener("click", function () {
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].textContent = "";
    tdlist[i].setAttribute("style", "background-color:#ffffff00");
  }
  check_winner_enabler();
  add_hover_to_sign_boxes();
  sign_x.setAttribute("style", "background-color:black");
  sign_o.setAttribute("style", "background-color:black");
  sign_x.addEventListener("click", pick_sign);
  sign_o.addEventListener("click", pick_sign);
  sign_x.addEventListener("mouseover", hover_mouseover);
  sign_x.addEventListener("mouseout", hover_mouseout);
  sign_o.addEventListener("mouseover", hover_mouseover);
  sign_o.addEventListener("mouseout", hover_mouseout);
  sign_text.textContent = "Chose which SIGN starts:";
});

function clickfunc() {
  if (
    this.textContent === "" &&
    document.querySelector("#x").getAttribute("style") ===
      "background-color:#1cd591"
  ) {
    this.textContent = "X";
    document
      .querySelector("#o")
      .setAttribute("style", "background-color:#1cd591");
    document
      .querySelector("#x")
      .setAttribute("style", "background-color:#1cd5914a");
    sign_text.textContent = "Next goes:";
    sign_x.removeEventListener("click", pick_sign);
    sign_o.removeEventListener("click", pick_sign);
  } else if (
    this.textContent === "" &&
    document.querySelector("#o").getAttribute("style") ===
      "background-color:#1cd591"
  ) {
    this.textContent = "O";
    document
      .querySelector("#x")
      .setAttribute("style", "background-color:#1cd591");
    document
      .querySelector("#o")
      .setAttribute("style", "background-color:#1cd5914a");
    sign_text.textContent = "Next goes:";
    sign_x.removeEventListener("click", pick_sign);
    sign_o.removeEventListener("click", pick_sign);
  }
}

for (var i = 0; i < tdlist.length; i++) {
  tdlist[i].addEventListener("click", clickfunc);
  tdlist[i].addEventListener("click", check_winner);
  tdlist[i].classList.add("sign_box");
}

function scorefunc(sign_to_be_checked) {
  if (sign_to_be_checked.textContent === "X") {
    score_x++;
    score_x_div.textContent = score_x;
  } else {
    score_o++;
    score_o_div.textContent = score_o;
  }
}

function fill_the_blanks() {
  for (var i = 0; i < tdlist.length; i++) {
    if (tdlist[i].textContent === "") {
      tdlist[i].textContent = " ";
    }
  }
}

function check_winner_disabler() {
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].removeEventListener("click", check_winner);
  }
}
function check_winner_enabler() {
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].addEventListener("click", check_winner);
  }
}
function add_hover_to_sign_boxes() {
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].addEventListener("mouseover", hover_mouseover);
    tdlist[i].addEventListener("mouseout", hover_mouseout);
  }
}
function remove_hover_from_sign_boxes() {
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].removeEventListener("mouseover", hover_mouseover);
    tdlist[i].removeEventListener("mouseout", hover_mouseout);
  }
}
/*function remove_initial_hover(){
  for (var i = 0; i < tdlist.length; i++) {
    if (tdlist[i].getAttribute("style", "background-color") !== "#1cd591") {
    }
    tdlist[i].setAttribute("style","background-color:black");
  }
}*/

function check_winner() {
  if (
    tdlist[0].textContent === tdlist[1].textContent &&
    tdlist[0].textContent === tdlist[2].textContent &&
    tdlist[0].textContent !== ""
  ) {
    tdlist[0].setAttribute("style", "background-color:#1cd591");
    tdlist[1].setAttribute("style", "background-color:#1cd591");
    tdlist[2].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[0]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[3].textContent === tdlist[4].textContent &&
    tdlist[3].textContent === tdlist[5].textContent &&
    tdlist[3].textContent !== ""
  ) {
    tdlist[3].setAttribute("style", "background-color:#1cd591");
    tdlist[4].setAttribute("style", "background-color:#1cd591");
    tdlist[5].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[3]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[6].textContent === tdlist[7].textContent &&
    tdlist[6].textContent === tdlist[8].textContent &&
    tdlist[6].textContent !== ""
  ) {
    tdlist[6].setAttribute("style", "background-color:#1cd591");
    tdlist[7].setAttribute("style", "background-color:#1cd591");
    tdlist[8].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[6]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[0].textContent === tdlist[3].textContent &&
    tdlist[0].textContent === tdlist[6].textContent &&
    tdlist[0].textContent !== ""
  ) {
    tdlist[0].setAttribute("style", "background-color:#1cd591");
    tdlist[3].setAttribute("style", "background-color:#1cd591");
    tdlist[6].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[0]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[1].textContent === tdlist[4].textContent &&
    tdlist[1].textContent === tdlist[7].textContent &&
    tdlist[1].textContent !== ""
  ) {
    tdlist[1].setAttribute("style", "background-color:#1cd591");
    tdlist[4].setAttribute("style", "background-color:#1cd591");
    tdlist[7].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[1]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[2].textContent === tdlist[5].textContent &&
    tdlist[2].textContent === tdlist[8].textContent &&
    tdlist[2].textContent !== ""
  ) {
    tdlist[2].setAttribute("style", "background-color:#1cd591");
    tdlist[5].setAttribute("style", "background-color:#1cd591");
    tdlist[8].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[2]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[0].textContent === tdlist[4].textContent &&
    tdlist[0].textContent === tdlist[8].textContent &&
    tdlist[0].textContent !== ""
  ) {
    tdlist[0].setAttribute("style", "background-color:#1cd591");
    tdlist[4].setAttribute("style", "background-color:#1cd591");
    tdlist[8].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[0]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  } else if (
    tdlist[2].textContent === tdlist[4].textContent &&
    tdlist[2].textContent === tdlist[6].textContent &&
    tdlist[2].textContent !== ""
  ) {
    tdlist[2].setAttribute("style", "background-color:#1cd591");
    tdlist[4].setAttribute("style", "background-color:#1cd591");
    tdlist[6].setAttribute("style", "background-color:#1cd591");
    scorefunc(tdlist[2]);
    check_winner_disabler();
    fill_the_blanks();
    remove_hover_from_sign_boxes();
  }
}

function hover_mouseover() {
  if (this.id === "x" || this.id === "o") {
    this.setAttribute("style", "background-color:#1cd5914a");
  } else if ((this.classList.value = "sign_box")) {
    this.setAttribute("style", "background-color:#1b1b1bfa");
  }
}
function hover_mouseout() {
  this.setAttribute("style", "background-color:black");
}

function pick_sign() {
  if (this.textContent === "X") {
    document
      .querySelector("#x")
      .setAttribute("style", "background-color:#1cd591");
    document
      .querySelector("#o")
      .setAttribute("style", "background-color:#1cd5914a");
    sign_x.removeEventListener("mouseover", hover_mouseover);
    sign_x.removeEventListener("mouseout", hover_mouseout);
    sign_o.removeEventListener("mouseover", hover_mouseover);
    sign_o.removeEventListener("mouseout", hover_mouseout);
  } else if (this.textContent === "O") {
    document
      .querySelector("#o")
      .setAttribute("style", "background-color:#1cd591");
    document
      .querySelector("#x")
      .setAttribute("style", "background-color:#1cd5914a");
    sign_x.removeEventListener("mouseover", hover_mouseover);
    sign_x.removeEventListener("mouseout", hover_mouseout);
    sign_o.removeEventListener("mouseover", hover_mouseover);
    sign_o.removeEventListener("mouseout", hover_mouseout);
  }
}

sign_x.addEventListener("click", pick_sign);
sign_o.addEventListener("click", pick_sign);
