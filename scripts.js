const tdlist = document.getElementsByTagName('td');
const sign_x = document.querySelector('#x');
const sign_o = document.querySelector('#o');
const btn = document.getElementById("restart");
const sign_text = document.querySelector("#sign_text");
let score_x = 0;
let score_o = 0;
const score_x_div = document.querySelector("#x_s");
const score_o_div = document.querySelector("#o_s");

btn.addEventListener("click", function() {
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].textContent = "";
    tdlist[i].setAttribute("style","background-color:#ffffff00");
  }
  check_winner_enabler();
  add_hover_to_sign_boxes();
  sign_x.setAttribute("style", "background-color:black");
  sign_o.setAttribute("style", "background-color:black")

  sign_x.addEventListener("mouseover", hover_mouseover);
  sign_x.addEventListener("mouseout", hover_mouseout);
  sign_o.addEventListener("mouseover", hover_mouseover);
  sign_o.addEventListener("mouseout", hover_mouseout);

  sign_x.addEventListener("click", pick_sign);
  sign_o.addEventListener("click", pick_sign);

  sign_text.textContent = "Chose which SIGN starts:"
})

function clickfunc() {
  if ($(this).text() === "" && $("#x").attr("style")==="background-color:#1cd591") {
    $(this).text("X");
    $("#o").attr("style", "background-color:#1cd591")
    .off();
    $("#x").attr("style", "background-color:#1cd5914a")
    .off();
    $("#sign_text").text("Next goes:");

  } else if ($(this).text() === "" && $("#o").attr("style")==="background-color:#1cd591") {
    $(this).text("O");
    $("#x").attr("style", "background-color:#1cd591")
    .off();
    $("#o").attr("style", "background-color:#1cd5914a")
    .off();
    $("#sign_text").text("Next goes:");
  }
}

$("td").click(clickfunc)
.click(check_winner)
.addClass("sign_box");

function scorefunc(sign_to_be_checked){
    if (sign_to_be_checked === 'X') {
    score_x++;
    console.log(score_x);
    $("#x_s").text(score_x);
  }else if (sign_to_be_checked === 'O') {
    score_o++;
    console.log(score_o);
    $("#o_s").text(score_o);
  }
}

function fill_the_blanks(){
  let tdlist = $("td")
  for (var i = 0; i < tdlist.length; i++) {
    if (tdlist[i].textContent === "") {
      tdlist[i].textContent = " "
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
function add_hover_to_sign_boxes(){
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].addEventListener("mouseover", hover_mouseover);
    tdlist[i].addEventListener("mouseout", hover_mouseout);
  }
}
function remove_hover_from_sign_boxes(){
  for (var i = 0; i < tdlist.length; i++) {
    tdlist[i].removeEventListener("mouseover", hover_mouseover);
    tdlist[i].removeEventListener("mouseout", hover_mouseout);
  }
}

function check_winner(){
  if ($("td").eq(0).text() === $("td").eq(1).text() &&
      $("td").eq(0).text() === $("td").eq(2).text() &&
      $("td").eq(0).text() !== ""){
        $("td").eq(0).attr("style","background-color:#1cd591");
        $("td").eq(1).attr("style","background-color:#1cd591");
        $("td").eq(2).attr("style","background-color:#1cd591");
        scorefunc($("td").eq(0).text());
        check_winner_disabler();
        fill_the_blanks();
        remove_hover_from_sign_boxes();
  }else if ($("td").eq(3).text() === $("td").eq(4).text() &&
            $("td").eq(3).text() === $("td").eq(5).text() &&
            $("td").eq(3).text() !== "") {
              $("td").eq(3).attr("style","background-color:#1cd591");
              $("td").eq(4).attr("style","background-color:#1cd591");
              $("td").eq(5).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(3).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }else if ($("td").eq(6).text() === $("td").eq(7).text() &&
            $("td").eq(6).text() === $("td").eq(8).text() &&
            $("td").eq(6).text() !== "") {
              $("td").eq(6).attr("style","background-color:#1cd591");
              $("td").eq(7).attr("style","background-color:#1cd591");
              $("td").eq(8).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(6).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }else if ($("td").eq(0).text() === $("td").eq(3).text() &&
            $("td").eq(0).text() === $("td").eq(6).text() &&
            $("td").eq(0).text() !== "") {
              $("td").eq(0).attr("style","background-color:#1cd591");
              $("td").eq(3).attr("style","background-color:#1cd591");
              $("td").eq(6).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(0).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }else if ($("td").eq(1).text() === $("td").eq(4).text() &&
            $("td").eq(1).text() === $("td").eq(7).text() &&
            $("td").eq(1).text() !== "") {
              $("td").eq(1).attr("style","background-color:#1cd591");
              $("td").eq(4).attr("style","background-color:#1cd591");
              $("td").eq(7).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(1).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }else if ($("td").eq(2).text() === $("td").eq(5).text() &&
            $("td").eq(2).text() === $("td").eq(8).text() &&
            $("td").eq(2).text() !== "") {
              $("td").eq(2).attr("style","background-color:#1cd591");
              $("td").eq(5).attr("style","background-color:#1cd591");
              $("td").eq(8).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(2).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }else if ($("td").eq(0).text() === $("td").eq(4).text() &&
            $("td").eq(0).text() === $("td").eq(8).text() &&
            $("td").eq(0).text() !== "") {
              $("td").eq(0).attr("style","background-color:#1cd591");
              $("td").eq(4).attr("style","background-color:#1cd591");
              $("td").eq(8).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(0).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }else if ($("td").eq(2).text() === $("td").eq(4).text() &&
            $("td").eq(2).text() === $("td").eq(6).text() &&
            $("td").eq(2).text() !== "") {
              $("td").eq(2).attr("style","background-color:#1cd591");
              $("td").eq(4).attr("style","background-color:#1cd591");
              $("td").eq(6).attr("style","background-color:#1cd591");
              scorefunc($("td").eq(2).text());
              check_winner_disabler();
              fill_the_blanks();
              remove_hover_from_sign_boxes();
  }
}



function hover_mouseover(){
  if (this.id === "x" || this.id === "o") {
    this.setAttribute("style", "background-color:#1cd5914a");
  }else if (this.classList.value = "sign_box") {
    this.setAttribute("style", "background-color:#1b1b1bfa");
  }
}
function hover_mouseout(){
  this.setAttribute("style", "background-color:black");
}


function pick_sign(){

  if (this.textContent === "X") {
    document.querySelector("#x").setAttribute("style", "background-color:#1cd591");
    document.querySelector("#o").setAttribute("style", "background-color:#1cd5914a");
    sign_x.removeEventListener("mouseover", hover_mouseover);
    sign_x.removeEventListener("mouseout", hover_mouseout);
    sign_o.removeEventListener("mouseover", hover_mouseover);
    sign_o.removeEventListener("mouseout", hover_mouseout);

  }else if(this.textContent === "O"){
    document.querySelector("#o").setAttribute("style", "background-color:#1cd591");
    document.querySelector("#x").setAttribute("style", "background-color:#1cd5914a");
    sign_x.removeEventListener("mouseover", hover_mouseover);
    sign_x.removeEventListener("mouseout", hover_mouseout);
    sign_o.removeEventListener("mouseover", hover_mouseover);
    sign_o.removeEventListener("mouseout", hover_mouseout);

  }
}

$("#x").click(pick_sign);
$("#o").click(pick_sign);
