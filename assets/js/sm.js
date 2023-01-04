

const fname = document.getElementById('name');
const femail = document.getElementById('email');
const fsubject = document.getElementById('subject');
const fmessage = document.getElementById('message');
const submit = document.getElementsByClassName('php-email-form')[0];

submit.addEventListener('submit',(test)=>{
    test.preventDefault();
    console.log("Checked");

    //format

    // let mailBody = '
    
    // <b></b>
    // <b></b>
    // <b></b>
    // <b></b>
    // ';
    let loadingDots = ` <b>Sender: </b>${fname.value}<hr>,
    <b>Email: </b>${femail.value}<br>,
    <b>Subject: </b>${fsubject.value}<br>,
    <b>Message was: </b>${fmessage.value}
    `;

    //EmailCode
    Email.send({
        SecureToken : "6fa43549-2e2a-49c6-9a53-5f7042cb9c4a",
        To : 'rejoyanhridoy3@gmail.com',
        From : 'rejoyanhridoy3@gmail.com',
        Subject : "The subject is"+fsubject.value,
        Body : loadingDots
    }).then(
      message => alert(message)
    );

});