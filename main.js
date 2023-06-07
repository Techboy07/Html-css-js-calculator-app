    let keys =
     document.querySelectorAll(".btn");
   let screen = document.querySelector("#screen");

   let operators = document.querySelectorAll(".operator");

   let numbers = document.querySelectorAll(".num");
   let equalTo = document.querySelector("#equals");

   let cut = document.querySelector("#delete");

   let clear = document.querySelector("#clear");

   for (let i = 0; i < keys.length; i++) {
     keys[i].addEventListener("click", () => {
       screen.value += keys[i].innerText
     })
   };

   cut.addEventListener(
     "click", () => {
       screen.value =
         screen.value.slice(0, screen.value.length - 1)
     });
   clear.addEventListener(
     "click", () => {
       screen.value =
         ""
     });
   equalTo.addEventListener(
     "click", () => {
       let x = screen.value;
       console.log(x.split(""));

     });
//this is just a comment
