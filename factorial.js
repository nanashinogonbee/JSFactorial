let f=(n)=>!n?+!'':n*f(--n);
let n=window.prompt('enter a number to get a factorial of it');
alert(`${n}! = ${f(n)}`);
