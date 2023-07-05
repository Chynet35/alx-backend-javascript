// Define the interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Ifeoma",
  lastName: "Enemuo",
  age: 10,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Jason",
  lastName: "Chukwuka",
  age: 7,
  location: "United Kingdom",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

