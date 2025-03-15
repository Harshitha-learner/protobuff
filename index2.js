const Schema = require("./employees_pb");
const fs = require("fs");
const john = new Schema.Employee();
john.setId(101);
john.setName('John');

const rick = new Schema.Employee();
rick.setId(102);
rick.setName('Rick');

const jack = new Schema.Employee();
jack.setId(103);
jack.setName('Jack');

const employees = new Schema.Employees();
employees.addEmployees(john);
employees.addEmployees(rick);
employees.addEmployees(jack);

const bytes = employees.serializeBinary();
fs.writeFileSync("binarydata", bytes)
console.log('Binary = '+ bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());