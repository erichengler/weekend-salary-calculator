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
            <td>${salaryVal}</td>
            <td><button id="delete-button" onClick="deleter(event)">Delete</button>
        </tr>    
    `;
}

function deleter( event ) {
    // Removing employee row from table
    let element = event.target.parentElement.parentElement
    element.remove();

    // Removing deleted employee from array
    for ( let i=0; i<employeeInfoArray.length; i++ ) {
        if ( employeeInfoArray[i].IDNum === Number(element.children[2].innerHTML) ) {
            employeeInfoArray.splice( i )
        } 
    }  console.log( employeeInfoArray );
}

// QUESTION FOR TOMORROW : THE ABOVE FUNCTION ONLY WORKS IF ITS NOT THE FIRST EMPLOYEE
// IM DELETING. I KNOW THIS HAS TO DO WITH element.children BUT CANT FIGURE IT OUT.



