const birthDay = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#check-btn");
const outputtxt = document.querySelector("#text");

function checkBirthdayIsLucky() {
  const dob = birthDay.value;
  const sum = calculateSum(dob);
  const valueOfLuckyNumber = luckyNumber.value;

  if (dob !== "" && valueOfLuckyNumber !== "") {
    if (valueOfLuckyNumber > 0) {
      compareValues(sum, valueOfLuckyNumber);
    } else {
      outputtxt.innerText = "zero can't be a lucky number add in a value greater than zero";
    }
  } else {
    outputtxt.innerText = "Please put in both fields";
  }
}

function compareValues(sum, luckynumber) {
  if (sum % luckynumber === 0) {
    outputtxt.innerText = "Ihr Geburtstag ist glücklich " + " Your birthday is lucky";
    // outputtxt.innerText = "your birthday is lucky";
  } else {
    outputtxt.innerText = "Jeder ist seines Glückes Schmied " + " You make your own luck !";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", 0);
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkBtn.addEventListener("click", checkBirthdayIsLucky);