function addc(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const add2 = a => b => a + b; // (a, b) => a + b
  
  add(1)(5); // add(1, 5)
  // N => 1

const add1 = addc(1);
//console.log(add1(2));
  