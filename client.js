console.log( 'hello world' );

let employeeInfoArray = [];

// Function to add submitted information to the array
function submitForm( event ) {
    event.preventDefault();

    let firstNameVal = document.querySelector( '#first-name-input' ).value
    let lastNameVal = document.querySelector( '#last-name-input' ).value
    let idNumberVal = Number(document.querySelector( '#id-number-input' ).value)
    let jobTitleVal = document.querySelector( '#job-title-input' ).value
    let salaryVal = Number(document.querySelector( '#salary-input ').value)

    let newEmployee = {
        FirstName: firstNameVal,
        LastName: lastNameVal,
        ID: idNumberVal,
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
            <td>${salaryVal}</td>
            <td><button id="delete-button" onClick="deleter(event)">Delete</button>
        </tr>    
    `;
}

// Removing employee row from table
function deleter( event ) {
    event.target.parentElement.parentElement.remove();

}