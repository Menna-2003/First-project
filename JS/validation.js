
let Emails = [
    {user:"menna@gmail.com",password:"12345678"},
    {user:"sama@gmail.com",password:"142536789"},
    {user:"omar@gmail.com",password:"87654321"},
    {user:"mariam@gmail.com",password:"01022969"},
    {user:"sara@gmail.com",password:"01015555"}
]

// log in
{
    let Login_username = document.getElementById("Login_username");  //text box in html
    let Login_password = document.getElementById("Login_password");  
    let span_true = document.getElementById("true");  // success to open
    let span_false = document.getElementById("false"); // fail to open
    let loginUserRequired = document.getElementById("requiredUser");   // span for required message
    let loginPassRequired = document.getElementById("requiredPass");   
    let submit_log_in = document.getElementById("submit_button");    // submit button
    let loginUserLabel = document.getElementsByClassName("username_label");
    let loginPassLabel = document.getElementsByClassName("password_label");
    let notAmember = document.getElementById("notAmember");

    Login_username.setAttribute("required","");
    Login_password.setAttribute("required","");

    let x = 0;

    submit_log_in.addEventListener('click',function(event){
        event.preventDefault(); // prevents the form from submitting
        let loginUservalue = Login_username.value; // take the value then remove the white spaces before and after
        let loginPassvalue = Login_password.value;
        if(loginUservalue === ""){
            loginUserRequired.textContent = 'This is required'
        }
        else{
            loginUserRequired.textContent = "";   // to be empty when user enter sth
            loginPassRequired.textContent = "";
        }
        if(loginPassvalue === ""){
            loginPassRequired.textContent = 'This is required'
        }
        else{
            loginUserRequired.textContent = "";   // to be empty when user enter sth
            loginPassRequired.textContent = "";
        }
        for(let i=0 ; i<Emails.length ; i++){
            if( loginUservalue  == Emails[i].user  &&  loginPassvalue == Emails[i].password ){
                x = 1 ;     break;                  // bool is to check if user and pass exist
            }
        }
        if(Boolean(x)){
            span_true.style.display = "grid";
            {
                Login_username.style.display = "none";
                Login_password.style.display = "none";
                submit_log_in.style.display = "none";
                loginUserLabel[0].style.display = "none";
                loginPassLabel[0].style.display = "none";
                notAmember.style.display = "none";
            }
            setTimeout(() => {
                window.location.href = "/index.html"
            }, 1000);
        }
        else if(Boolean(x) == false && loginUservalue !== "" && loginPassvalue !== ""){
            span_false.style.display = "grid";
            {
                Login_username.style.display = "none";
                Login_password.style.display = "none";
                submit_log_in.style.display = "none";
                loginUserLabel[0].style.display = "none";
                loginPassLabel[0].style.display = "none";
                loginUserRequired.style.display = "none";
                loginPassRequired.style.display = "none";
                notAmember.style.display = "none";
            }
            setTimeout(function(){
                location.reload();
            }, 1200)
        }
        x = 0;         // return to original value after function ends
        Login_username.value = "";
        Login_password.value = "";
    })
    }



// sign up

// let Sign_upButton = document.getElementById("Sign_upButton");
// let Sign_up_username_label = document.getElementsByClassName("Sign_up_username_label");
// let Sign_up_password_label = document.getElementsByClassName("Sign_up_password_label");
// let signup_username = document.getElementById("signup_username");
// let signup_password = document.getElementById("signup_password");
// let signup_required_user = document.getElementById("signup_required user");
// let signup_required_pass = document.getElementById("signup_required_pass");

// Sign_upButton.addEventListener('click',function(Sign_event){
//     Sign_event.preventDefault(); // prevents the form from submitting
//     let signupUserValue = signup_username.value;  // take user and remove white spaces 
//     let signupPassValue = signup_password.value;
//     if(signupUserValue === ""){
//         signup_required_user.textContent = 'This is required';
//     }
//     else{
//         signup_required_user.textContent = "";   // to be empty when user enter sth
//         signup_required_pass.textContent = "";
//     }
//     if(signupPassValue === ""){
//         signup_required_pass.textContent = 'This is required';
//     }
//     else{
//         signup_required_user.textContent = "";   // to be empty when user enter sth
//         signup_required_pass.textContent = "";
//     }
//         Emails[0].push(signupUserValue);   // store them im array
//         Emails[1].push(signupPassValue);
//         signup_required_user.textContent = "";   // to be empty when user enter sth
//         signup_required_pass.textContent = "";
//         console.log("sadasda");
//         signup_username.value = "";
//         signup_password.value = "";
    
// })


// }