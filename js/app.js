import TypeIt from "typeit";
let h1 =  document.getElementById("demo")
console.log(h1)
new TypeIt("#demo", {
    strings: "This is my string!",
    speed: 75,
    loop: true
  }).go();