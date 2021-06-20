function validateForm(Form){
    
    let name = Form.name;
    let collegeName = Form.Cname;
    let email = Form.emailid;
    let mobile = Form.mobilenumber;

    var nameFormat = /^[a-zA-Z ]+$/;
    if(name.value.match(nameFormat)){
        alert("Valid Name.");
    } else {
        alert("Not a Valid Name.");
    }

    var collegeNameFormat = /^[a-zA-Z ]+$/;
    if(collegeName.value.match(collegeNameFormat)){
        alert("Valid College Name.");
    } else {
        alert("Not a Valid College Name.");
    }

    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mailFormat)) {
        alert("Valid email address!");
        document.registrationform.emailid.focus();
    } else {
        alert("You have entered an invalid email address!");
        document.registrationform.emailid.focus();
    }

    var mobileFormat = /^\d{10}$/;
    if(mobile.value.match(mobileFormat)) 
    {
        alert("Valid Phone Number!");
    } else 
    {
        alert("Not a valid Phone Number");
    }
}