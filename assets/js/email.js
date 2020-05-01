/**
 * Altered code from CodeInstitute and EmailJS
 * @param {string} - emailForm.name - The sender's name.
 * @param {string} -emailForm.email - The sender's email adress.
 * @param {string} -emailForm.issue - The sender's response to the website.
 */
function sendMail(emailForm) {
    emailjs.send("gmail", 'trivia_website', {
        "from_name": emailForm.name.value,
        "from_email": emailForm.email.value,
        "trivia_issue": emailForm.issue.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Your email was successfully sent!");
    }, function(error) {
       console.log('FAILED...', error);
       alert("Something went wrong, please try again!");
    });
    return false;
};