
let spin = "|/-\\|";
let timer = 100;
const animate = function(index) {

  if (index === spin.length) {

    return;
  }

  setTimeout(() => {
    process.stdout.write("\r" + spin[index++]);
    animate(index);
  }, timer);
      
};


animate(0);
console.log(spin.length);
