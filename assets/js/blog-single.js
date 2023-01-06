const replyName = document.getElementById('inputName');
const replyEmail = document.getElementById('inputEmail1');
const replySite = document.getElementById('inputUrl');
const replyBody = document.getElementById('textMessage');
const submit = document.getElementsByClassName('form-mf')[0];

submit.addEventListener('submit',(test)=>{
    test.preventDefault();
    console.log("Checked");

//    let mailBody = ` 
//    
//    <b>Email: </b>${replyEmail.value}<br>,
//    <b>Subject: </b>${replySite.value}<br>,
//    <b>Message was: </b>${replyBody.value}
//    `;

    let mailBody= `
        <b>From: </b>${replyEmail.value}<br>
        <b>Email: </b>${replyEmail.value}<br>
        <b>Website: </b>${replySite.value}<br>
        <b>Comment: </b>${replyBody.value}<br>
    `;
    //EmailCode
    Email.send({
        SecureToken : "6fa43549-2e2a-49c6-9a53-5f7042cb9c4a",
        To : 'rejoyanhridoy3@gmail.com',
        From : 'rejoyanhridoy3@gmail.com',
        Subject : "Title "+replyName.value,
        Body : mailBody
    }).then(
      message => alert("Your message has been Sent to the Developer")
    );

});