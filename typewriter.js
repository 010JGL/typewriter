const sentence = "hello there from lighthouse labs";

let count = 0;
for (let letter of sentence) {      // loop thru every letter in string
  
  setTimeout(() => {
    process.stdout.write(letter);    // prints out on the same line
  }, count);                         // set timer to count, which increment each time in the loop
  
  count += 50;

}
setTimeout(() => {                   // makes a new line after the whole loop
  process.stdout.write("\n");
}, count);







        
