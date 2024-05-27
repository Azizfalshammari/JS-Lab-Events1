let text = document.getElementById("paragraph");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
console.log('visited')
btn1.addEventListener("click", () => {
    console.log('visited')
    text.innerText = "text has been changed to something more profound than a mere lorem ipsum"
    
  
 
});

btn2.addEventListener("click", () => {
  text.style.fontSize = "large";
  console.log('visited')
});

btn3.addEventListener("click", () => {
  text.style.fontSize = "small";
  console.log('visited')
});

btn4.addEventListener("click", () => {
  text.style.color = "#f0f0f0f0";
  console.log('visited')
});

btn5.addEventListener("click", () => {
  text.style.backgroundColor = "#777777";
  console.log('visited')
});

btn6.addEventListener("click", () => {
  text.style.backgroundImage = "url(https://images.pexels.com/photos/24718979/pexels-photo-24718979/free-photo-of-a-black-and-white-photo-of-a-lone-tree-on-top-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)";
  console.log('visited')
});
btn7.addEventListener("click", () => {
  text.style.backgroundImage = "url(https://images.pexels.com/photos/22207914/pexels-photo-22207914/free-photo-of-a-black-and-white-photo-of-a-staircase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)";
  console.log('visited')
});
