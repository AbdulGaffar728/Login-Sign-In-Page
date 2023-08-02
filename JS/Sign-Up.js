var Users=[];
        function Submitting(){
        var UserEmail=document.getElementById("UserEmail").value
        var Password=document.getElementById("UserPassword").value
        var ConfirmPassword=document.getElementById("ConfirmPassword").value
        var UserName=document.getElementById("userName").value
        if(Password==="" || ConfirmPassword === "" || UserName=== ""){
         alert("Please fill all fields.")
        }
        else if(Password===ConfirmPassword && UserName!==""){
            var UsrData={
            userEmail:UserEmail,
            password:Password,
            userName:UserName
           }
        var Local=localStorage.getItem("User")
        if(Local===null){
            Users=[]
        }
        else{
          Users=JSON.parse(Local)
        }
        Users.push(UsrData)
        
        localStorage.setItem("User",JSON.stringify(Users));
        window.location.href="index.html";
        }

        else{
            alert("Both passwords are not same.")     
        }
    }
    
         console.log(Users)