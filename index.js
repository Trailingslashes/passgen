const passwordOne = document.getElementById("password-1");
const passwordTwo = document.getElementById("password-2");
const genPassBtn = document.getElementById("genpassword")
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


genPassBtn.addEventListener("click", function() {
	passwordOne.textContent = ""; // ensure old passwords are cleared
  passwordTwo.textContent = "";
	passwordOne.textContent += generatePassword()
	passwordTwo.textContent += generatePassword()
})

function generatePassword() {
  let randomPassword = ""
  for (let i = 0; i < 11; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomPassword
}

passwordOne.addEventListener("click", () => {
	navigator.clipboard.writeText(passwordOne.textContent)
})

passwordTwo.addEventListener("click", () => {
	navigator.clipboard.writeText(passwordTwo.textContent)
})