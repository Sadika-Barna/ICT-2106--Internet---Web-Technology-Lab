var student1 = {
  name: "Sadika",
  roll: 133647,
  year: "1st",
  courses: ["Operating System", "Data Structure", "Algorithm"]
};
document.writeln("<br>" + student1.name + " " + student1.year + " " + student1.roll + " " + student1.courses.join(", "));
function Student(name, roll, year, courses) {
  this.name = name;
  this.roll = roll;
  this.year = year;
  this.courses = courses;
  this.display = function () {
    document.writeln("<br>" + this.name + " " + this.year + " " + this.roll + " " + this.courses.join(", "));
  };
}
var student2 = new Student("ASD", 123, "2nd", ["Operating System", "Data Structure", "Algorithm"]);
student2.display();
document.writeln("<br>" + student2.courses[1]);
document.writeln("<br>");
var header1 = document.getElementById("header1");
if (header1) {
  document.writeln(header1.innerText + "<br>");
  document.writeln(header1 + "<br>");
  header1.innerHTML = "Hello";
}document.writeln("<br>");
var header2 = document.getElementById("header2");
if (header2) {
  document.writeln(header2.innerText + "<br>");
  document.writeln(header2 + "<br>");
  header2.innerText = "Hi, I am Sadika";
  header2.style.color = "blue";
}var h3Tags = document.getElementsByTagName("h3");
if (h3Tags.length > 0) {
  document.writeln(h3Tags[0].innerText + "<br>");
}
document.writeln("<br>");
var studentList = [
  {
    name: "Sadika",
    roll: 101,
    year: "1st",
    courses: ["OPP", "DSA", "Algo"]
  },
  {
    name: "Tinni",
    roll: 102,
    year: "2nd",
    courses: ["BS", "Java", "Math"]
  },
  {
    name: "Priota",
    roll: 103,
    year: "3rd",
    courses: ["ST", "DS", "IWT"]
  }
];
for (var i = 0; i < studentList.length; i++) {
  var s = studentList[i];
  document.writeln('<br><span style="color:blue;">Name: ' + s.name + "</span>");
  document.writeln("<br>Roll: " + s.roll);
  document.writeln("<br>Year: " + s.year);
  document.writeln("<br>Courses: " + s.courses.join(", "));
  document.writeln("<hr>");
}var h4Tags = document.getElementsByTagName("h4");
for (var i = 0; i < h4Tags.length && i < 3; i++) {
  document.writeln('<span style="color:red;">' + h4Tags[i].innerText + '</span><br><br>');
}
