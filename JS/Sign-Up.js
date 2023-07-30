var Users=[];
        function Submitting(){
        var UserEmail=document.getElementById("UserEmail").value
        var Password=document.getElementById("UserPassword").value
        var ConfirmPassword=document.getElementById("ConfirmPassword").value
        var UserName=document.getElementById("userName").value
        if(Password==="" || ConfirmPassword === "" || UserName=== ""){
         alert("Please fill all fields.")
        }
        else if(Password===ConfirmPassword && UserName!=""){
            var UsrData={
            userEmail:UserEmail,
            password:Password,
            userName:UserName
           }
        Users.push(UsrData)
        localStorage.setItem("User",JSON.stringify(Users));
        // console.log(JSON.parse(localStorage.getItem("User")));
        window.location.href="http://127.0.0.1:5500/index.html";
        }
        else{
            alert("Both passwords are not same.")     
        }
    }
    
         console.log(Users)