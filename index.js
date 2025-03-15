const fs = require("fs")
const employees = [];

employees.push({
    "name":"John",
    "id":1001
})

const rick = {
    "name":"Rick",
    "id":1002
}

employees.push(rick)

employees.push({
    "name":"Jack",
    "id":1003
})
fs.writeFileSync("jsondata.json", JSON.stringify(employees))
console.log("created")