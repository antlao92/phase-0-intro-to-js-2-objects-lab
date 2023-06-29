// Write your solution in this file!



const employee = {
    name: "Anthony",
    streetAddress: "Maple"
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};

    newEmployee[key] = value;
    return newEmployee;
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};

    newEmployee[key] = value;
    delete employee.key;
    return newEmployee;
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value;
    delete employee.key;
    return employee;
};