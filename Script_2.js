var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var add_remove_selector = document.querySelector("[type=checkbox]");

function add_or_remove(p_choice, className){
  if(add_remove.checked == false){
    p_choice.classList.add(className);
  }
    p_choice.classList.add(className);

}

function make_change(className){
  let p_choice_selector = document.querySelector("[type=radio]:checked").value;
  if (p_choice_selector == "p1"){
    //p1.classList(className);
    add_or_remove(p1, className);
  }
  else if(p_choice_selector == "p2"){
    //p2.classList(className);
    add_or_remove(p2, className);
  }
}

let red=()=>make_change("red");
let blue=()=>make_change("blue");
let yellow=()=>make_change("yellow");
let green=()=>make_change("green");
