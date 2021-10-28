f=n=>n?n*f(--n):1;
n=window.prompt('enter a number to get a factorial of it');
alert(`${n}! = ${f(n)}`);
