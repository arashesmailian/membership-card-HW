let input = document.getElementById("range--input") ;
let min = input.min ;
let max = input.max ;
let value = input.value ;

input.style.background = `linear-gradient(to right, #7c01e8 0%, #7c01e8 ${(value-min)/(max-min)*100}%, #ececec ${(value-min)/(max-min)*100}%, #ececec 100%) `
input.oninput = function () {
  this.style.background = `linear-gradient(to right, #7c01e8 0%, #7c01e8 ${(this.value - this.min)/(this.max - this.min)*100}%, #ececec ${(this.value - this.min)/(this.max - this.min)*100}%, #ececec 100%)`
};
