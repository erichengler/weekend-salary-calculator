console.log( 'hello world' );

let employeeInfoArray = [];
let totalMonthly = 0;

// Function to add submitted information to the array
function submitForm( event ) {
    event.preventDefault();

    let firstNameVal = document.querySelector( '#first-name-input' ).value
    let lastNameVal = document.querySelector( '#last-name-input' ).value
    let idNumberVal = Number(document.querySelector( '#id-number-input' ).value)
    let jobTitleVal = document.querySelector( '#job-title-input' ).value
    let salaryVal = Number(document.querySelector( '#salary-input').value)

    let newEmployee = {
        FirstName: firstNameVal,
        LastName: lastNameVal,
        IDNum: idNumberVal,
        JobTitle: jobTitleVal,
        Salary: salaryVal
    }

    employeeInfoArray.push( newEmployee );
    console.log( employeeInfoArray );
  
    // Appending employee information values to the table
    let appendTable = document.querySelector( '#appendMe' );
    appendTable.innerHTML += `
        <tr>
            <td>${firstNameVal}</td>
            <td>${lastNameVal}</td>
            <td>${idNumberVal}</td>
            <td>${jobTitleVal}</td>
            <td>$${salaryVal}</td>
            <td><button id="delete-button" onClick="deleter(event)">Delete</button>
        </tr>    
    `;
    // Adding new employee annual salary / 12 to the total monthly cost
    totalMonthly += (salaryVal / 12);
    let totalMonthlyAppend = document.querySelector("#total-monthly");
    totalMonthlyAppend.innerHTML = totalMonthly;

    // Resetting input fields
    let form = document.querySelector(".salary-form");
    form.reset();
}

function deleter( event ) {
    // Removing employee row from table
    let element = event.target.parentElement.parentElement
    element.remove();

    // Removing deleted employee's annual salary / 12 from the total monthly cost
    let salaryVal = Number(element.children[4].innerHTML);
    totalMonthly -= (salaryVal / 12);
    let totalMonthlyAppend = document.querySelector("#total-monthly");
    totalMonthlyAppend.innerHTML = totalMonthly;

    // Removing deleted employee from array
    for ( let i=0; i<employeeInfoArray.length; i++ ) {
        if ( employeeInfoArray[i].IDNum === Number(element.children[2].innerHTML) ) {
            employeeInfoArray.splice( i, 1 );
            console.log( employeeInfoArray );
            return;
        } 
    }  
}
