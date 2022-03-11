function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
  
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
  
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
      let numbers = generateNumbers(startValue, endValue);
    
      //we call displayNumbers
      displayNumbers(numbers);
  
    } else {
      alert("You must enter valid number!");
    }
  }
  
  function generateNumbers(sValue, eValue) {
    let numbers = [];
  
    for (let index = sValue; index <= eValue; index++) {
      numbers.push(index);
    }
  
    return numbers;
  }
  
  function displayNumbers(numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
      
      let className = "even";
  
      let number = numbers[index];
  
      if (number % 3 === "0") {
        className = "even";
      } else {
        className = "odd";
      }
      templateRows += `<tr><td class="${className}">${number}</td><tr>`;
    }
  
    document.getElementById("results").innerHTML = templateRows;
  }
  