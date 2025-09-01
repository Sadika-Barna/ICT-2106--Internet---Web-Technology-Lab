// Static object
var student1 = {
  name: "Sadika",
  roll: 133647,
  year: "1st",
  courses: ["Operating System", "Data Structure", "Algorithm"]
};

document.writeln(`<br><span style="color: teal;">Student1: ${student1.name} (${student1.year}) - Roll: ${student1.roll}</span>`);
document.writeln(`<br><strong>Courses:</strong> <span style="color: gray;">${student1.courses.join(", ")}</span><br><br>`);

// Constructor function
function Student(name, roll, year, courses) {
  this.name = name;
  this.roll = roll;
  this.year = year;
  this.courses = courses;
  this.display = function () {
    document.writeln(`<br><span style="color: darkorange;">${this.name} (${this.year}) - Roll: ${this.roll}</span>`);
    document.writeln(`<br><strong>Courses:</strong> <span style="color: gray;">${this.courses.join(", ")}</span><br><br>`);
  };
}

var student2 = new Student("ASD", 123, "2nd", ["Operating System", "Data Structure", "Algorithm"]);
student2.display();

// Show specific course
document.writeln(`<br><span style="color: green;">Favorite Course:</span> ${student2.courses[1]}<br><hr>`);

// DOM manipulation
var header1 = document.getElementById("header1");
if (header1) {
  document.writeln(`<strong>Header1 Text:</strong> <span style="color: blue;">${header1.innerText}</span><br>`);
  header1.innerHTML = "Hello!";
}

var header2 = document.getElementById("header2");
if (header2) {
  document.writeln(`<strong>Header2 Text:</strong> <span style="color: crimson;">${header2.innerText}</span><br>`);
  header2.innerText = "Hi, I am Sadika";
  header2.style.color = "blue";
}

// Get H3 tags
var h3Tags = document.getElementsByTagName("h3");
if (h3Tags.length > 0) {
  document.writeln(`<br><strong>First H3 Text:</strong> <span style="color: brown;">${h3Tags[0].innerText}</span><br>`);
}

// Array of students
var students = [
  {
    name: "Sadika",
    roll: 101,
    year: "1st",
    courses: ["OOP", "DSA", "Algo"]
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

// Display student info
students.forEach(function (s) {
  document.writeln(`<br><span style="color:blue; font-weight: bold;">Name: ${s.name}</span>`);
  document.writeln(`<br>Roll: ${s.roll}`);
  document.writeln(`<br>Year: ${s.year}`);
  document.writeln(`<br>Courses: <span style="color: darkgreen;">${s.courses.join(", ")}</span>`);
  document.writeln("<hr>");
});

// Get and display h4 elements
var h4Tags = document.getElementsByTagName("h4");
for (var i = 0; i < h4Tags.length && i < 3; i++) {
  document.writeln(`<span style="color: red; font-style: italic;">${h4Tags[i].innerText}</span><br><br>`);
}
