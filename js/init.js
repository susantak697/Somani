document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    sendContactmail(name, email, subject, message);

    document.querySelector(".contact-form").reset();
}

function sendContactmail(name, email, subject, message) {
    console.log(name, email, message)
    Email.send({
        Host: "smtp.gmail.com",
        Username: "suvo697@gmail.com",
        Password: "cadcwaxvckelhyjf",
        To: 'suvo697@gmail.com',
        From: email,
        Subject: `Query from website. ${subject}`,
        Body: `Hi my name is  ${name}, my email id is ${email}. i would like to discuss about. My message is ${message}`
    }).then(
        message => alert(message)
    );
};