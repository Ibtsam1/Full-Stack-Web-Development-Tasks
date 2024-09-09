let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let input = document.querySelector('input');
    console.log(`Button pressed: ${e.target.innerHTML}`);

    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        input.value = string;
        console.log(`Result: ${string}`);
      } catch {
        input.value = "Error";
        string = "";
        console.log("Error in calculation");
      }
    }

    else if (e.target.innerHTML == 'C') {
      string = "";
      input.value = string;
      console.log("Cleared the input");
    }

    else if (e.target.innerHTML == 'M+') {
      memory += parseFloat(string || 0);
      console.log(`Memory after M+: ${memory}`);
    }

    else if (e.target.innerHTML == 'M-') {
      memory -= parseFloat(string || 0);
      console.log(`Memory after M-: ${memory}`);
    }

    else if (e.target.innerHTML == 'M') {
      memory = 0;
      console.log("Memory cleared ()");
    }

    else {
      string = string + e.target.innerHTML;
      input.value = string;
      console.log(`Updated input: ${string}`);
    }
  });
});
