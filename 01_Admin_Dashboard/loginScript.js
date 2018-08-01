function validateForm() {

    if (document.myForm.uName.value === "") {
        alert("Please provide your name!");
        document.myForm.uName.focus();
        return false;
    }

    if (document.myForm.pwd.value === "") {
        alert("Please Enter Your Password");
        document.myForm.pwd.focus();
        return false;
    }
    if (document.myForm.cPwd.value === "") {
        alert("Please Confirm Your Password");
        document.myForm.cPwd.focus();
        return false;
    }
    return( true );
}