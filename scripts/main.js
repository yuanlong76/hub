const myHeading = document.querySelector("h1");
myHeading.innerHTML = "Hello world!";

var a =20;
var b;
function change(){
    let b = 30;
    a = 500;
    b = 600;
}
change()
console.log(a, b);
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }


if (!localStorage.getItem("shit")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("shit");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }