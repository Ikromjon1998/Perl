const secondFn = () => {
    setTimeout(() => {
      console.log('2. This is the second function');
     }, 3000);
}

  
const firstFn = () => {
    console.log('1. Welcome to first function');
    secondFn();
    console.log('3. This is the end of first function');
}
firstFn();
