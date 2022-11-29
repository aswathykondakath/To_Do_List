let button = document.getElementById("login");
let username,password,message;
button.addEventListener('click',(e) => {

    username = document.getElementById("user").value
    password = document.getElementById("pwd").value
 
    let message = (alertmessage) => {
        alert(alertmessage)
    }
    validateform(username,password,message);
    
})
let validateform = (username,password,callback) =>  {

    if(username=="" || password==""){
        callback("Please enter all fields!!!");
    }
    else if(username=="admin" && password==="12345"){
        
        window.location="home.html";
        
    }
    else{
        
        callback("Invalid Credentials.Try Again!!!");
        document.getElementById("user").value="";
        document.getElementById("pwd").value="";
    }
}