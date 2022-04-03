//js intro
let number = document.querySelectorAll(".number");
function count(element) {
  let numTarget = element.innerHTML;
  for (let i = 0; i <= numTarget; i++) {
    setTimeout(() => {
      const n = i;
      element.innerHTML = n;
    }, (2000.0 / numTarget) * i);
  }
}

number.forEach((el) => {
  count(el);
});
//js contact
