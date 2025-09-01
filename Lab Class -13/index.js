var ParaId = document.querySelector('#ParaId');
function addStyle() {
  ParaId.classList.add("para-style");
}function removeStyle() {
  ParaId.classList.remove("para-style");
}function next() {
  location.href = "template/next.html";
}function back() {
  location.href = "template/previous.html"; 
}var addBtn = document.querySelector('#addButton');
if (addBtn) {
  addBtn.addEventListener('click', addStyle);
}var removeBtn = document.querySelector('#removeButton');
if (removeBtn) {
  removeBtn.addEventListener('click', removeStyle);
}const names = ['ASd', 'fgh', 'dfgfd'];
names.forEach(name => document.writeln(name + '<br>'));
document.writeln("<br/>For each loop use:<br/>");
var numbers = [1, 23, 45, 29];
numbers.forEach(function(num) {
  document.writeln(num + '<br>');
});const add = (a, b) => {
  document.writeln("Add: " + (a + b) + "<br>");
  document.writeln("Sub: " + (a - b) + "<br>");
};add(1, 2);
