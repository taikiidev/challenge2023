function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "syntaxquick@gmail.com",
        Password : "quickquickqs123",
        To : 'otaldotaiki@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Novo contato ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}