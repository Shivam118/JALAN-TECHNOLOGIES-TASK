var a = [2, 4, 6, 8, 10];
var temp, i;
var j = a.length - 1;

for (i = 0; i < a.length; i += 2) {
  temp = a[j];
  for (let k = a.length - 1; k >= i + 1; k--) {
    a[k] = a[k - 1];
  }
  a[i] = temp;
}

console.log(a);
