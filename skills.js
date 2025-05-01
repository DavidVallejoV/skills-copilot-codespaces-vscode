function calculateNumbers(var1, var2) {
  const sum = var1 + var2;
  const difference = var1 - var2;
  const product = var1 * var2;
  const quotient = var1 / var2;

  return {
    sum,
    difference,
    product,
    quotient
  };
}
function calculateArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}
function calculateCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return circumference;
}
git add skills.js
git commit -m "Add math functions for calculations"
function calculateVolume(radius, height) {
  const volume = Math.PI * Math.pow(radius, 2) * height;
  return volume;
}
git push

