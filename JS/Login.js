function LoggingIn(){
    var UserEmail=document.getElementById("UserEmail").value
    var Password=document.getElementById("Password").value
    var UsersDetail=JSON.parse(localStorage.getItem("User"))
    
    if(UsersDetail===null){
        alert("Please Sign-Up first.")
    }
    for(var i=0 ; i<UsersDetail.length ; i++){
        if(UserEmail===UsersDetail[i].userEmail){
            if(Password===UsersDetail[i].password){
              alert("logged in successfully.")
              break;
            }
        }
       if(i===(UsersDetail.length-1)){
          alert("Email or Password or Both are invalid.")
        }
    }
}