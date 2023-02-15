console.log( 'hello world' );

let employeeInfoArray = [];

// Function to add submitted information to the array
function submitForm( event ) {
    event.preventDefault();

    let firstNameVal = document.querySelector( '#first-name-input' ).value
    let lastNameVal = document.querySelector( '#last-name-input' ).value
    let idNumberVal = document.querySelector( '#id-number-value' ).value
    let jobTitleVal = document.querySelector( '#job-title-input' ).value
    let salaryVal = document.querySelector( '#salary-input ').value

    employeeInfoArray.push(
        {
            FirstName: firstNameVal,
            LastName: lastNameVal,
            ID: idNumberVal,
            JobTitle: jobTitleVal,
            Salary: salaryVal
        }
    );
}