//    Login Page JavaScript
var j=0;
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
            //   alert("logged in successfully.")
              j=i;
              window.location.href="ChatPage.html"
              break;
            }
        }
       if(i===(UsersDetail.length-1)){
          alert("Email or Password or Both are invalid.")
        }
    }
}
        // ChatPageJavaScript

        var usersFromStorage=JSON.parse(localStorage.getItem("User"))
        var userName=usersFromStorage[j].userName;
        console.log(usersFromStorage)
        document.getElementById("name").innerHTML=userName;

        // Sliding Images
        var k=1
var slidingImages=["Img/Img1.png","Img/Img2.png","Img/Img3.png","Img/Img4.png"]
setInterval(changeImage,3000)
function changeImage(){
 document.getElementById("slidingImage").src=slidingImages[k]

 if(k===3){
     k=0;
 }
 k=k+1;
}