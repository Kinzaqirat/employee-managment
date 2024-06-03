#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.bgGray(`**********Welcome to Employee Managment!*********`));

interface Employee{
    employeeName:string,
    employeeId:number,
    salary:number
}

let collectionOfEmployee :Employee[]=[];

async function startEmployeeManagmentSystem() {

let selectOption = await inquirer.prompt([{
    name:"userSelectedOption",
    type:"list",
    message:"Please select an option .",
    choices:["Add Employee","Veiw Employee","Delete Employee","Exist"]

}]);

if (selectOption.userSelectedOption==="Add Employee"){
addEmployee();
}

if (selectOption.userSelectedOption==="Veiw Employee"){
    Veiw();
}



if (selectOption.userSelectedOption==="Delete Employee"){
    Delete();
}
if (selectOption.userSelectedOption==="Exist"){
    
}
};
 async function addEmployee() {
    console.log('\n');
    let employeeDetails=await inquirer.prompt([{
        name:"employeeName",
        message:"Please enter Employee name .",
        type:"input"
    },
{
    name:"employeeId",
        message:"Please enter Employee ID .",
        type:"number"
},
{
    name:"employeeSalary",
    message:"Please enter Employee salary .",
    type:"number"
}
]);
collectionOfEmployee.push(
    {
        employeeId: employeeDetails.employeeId,
        employeeName: employeeDetails.employeeName,
        salary: employeeDetails.employeeSalary,
      }
);
console.log("\n");
console.log(chalk.bold.bgGrey("***********Employee added successfuly!"));
collectionOfEmployee[collectionOfEmployee.length-1];
startEmployeeManagmentSystem()
};
async function Veiw() {
    for(let i =0;i < collectionOfEmployee.length;i++)
    console.log(collectionOfEmployee[i]);
    startEmployeeManagmentSystem();
    }
async function Delete() {
    let employeeDetails = await inquirer.prompt([{
        message:"Please enter employee ID .",
        type:"number",
        name:"employeeId"
    }]);

    collectionOfEmployee= collectionOfEmployee.filter((x)=> x.employeeId !=employeeDetails.employeeId);
    // collectionOfEmployee=filterEmployeeBySalary;

    console.log(chalk.bold.bgGrey("*********Employee delete successfuly!"));
    startEmployeeManagmentSystem();
}

startEmployeeManagmentSystem();


