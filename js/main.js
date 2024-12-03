let x = +prompt("number......?");

function prime(number) {
  let y = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      y++;
      document.write(`<h2>${i}</h2>`);
    }
  }
  if(y === 2){
    document.write(`<h1>${number} is prime</h1>`)
  }else{
    document.write(`<h1>${number} isnt prime</h1>`)
  }
}
prime(x)
