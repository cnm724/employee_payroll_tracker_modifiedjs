// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


//Collecting employee data
const collectEmployees = function () {
  const people = [];
  let addEmployees = true;
  while (addEmployees) {
    const firstName = prompt("Enter employee's first name");
    const lastName = prompt("Enter employee's last name");
    const salary = prompt("Enter employee's salary");

    // Creates an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      //salary will check to see if input is a number or will set to $0
      salary: isNaN(salary) ? 0 : parseFloat(salary)
    };

    // Adds the prompt obects into the Array
    people.push(employee);

    // Asks the user if they want to add an additional employee
    addEmployees = confirm("Do you want to add another employee?");

  }
  return people;
}

// Display the average salary
 //TODO: Calculate and display the average salary
  //define total running total variable
  // add all salaries
  // - for loop on employee array, add salary to running total
  // divide by # of employees
  // -employeesArray.length
  //show the results in console



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  //put in a hat - employeesArray
  //draw one at random
  //-Math,floor(Math.random()*employeesArray
  //-floor cuts off decimal, ceiling will cut off 
  //announce the winner

  //const randomIndex = console.log(Math.floor(Math.random()*employeesArray.length))
  // employeesArray[randomIndex].firstName
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
