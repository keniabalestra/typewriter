const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i * 50);
  }
  setTimeout(() => {
    console.log('\n');
  }, sentence.length*50)
  
});








