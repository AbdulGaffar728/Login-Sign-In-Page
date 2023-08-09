var GettingIndexOfUser=localStorage.getItem("userNameIndex")
var j=GettingIndexOfUser;
var usersFromStorage=JSON.parse(localStorage.getItem("User"))
var userName=usersFromStorage[j].userName;
document.getElementById("name").innerHTML=userName;

var k=1
var slidingImages=["Img/Img1.png","Img/Img2.png","Img/Img3.png","Img/Img4.png"]
setInterval(changeImage,3000)
function changeImage(){
document.getElementById("slidingImage").src=slidingImages[k]
k=k+1;
if(k===4){
k=0
}
}

var MessagesDetail=[]
function SendingMessage(){
var userMessage=document.getElementById("UserMessage").value
if(userMessage===""){

}
else{
var timeNow=new Date()
var currentMinutes=timeNow.getMinutes()
var Minutes=("0" + currentMinutes).slice(-2)
var currentHours=timeNow.getHours()
var Hours=("0" + currentHours).slice(-2)
var currentDay=timeNow.getDate()
var currentMonth=timeNow.getMonth()
var currentYear=timeNow.getFullYear()
var Months=["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentTime=Months[currentMonth] + " " + currentDay + "," + currentYear + "  " + Hours + ":" + Minutes;


var MessageDetail={
senderName:userName,
sendingTime:currentTime,
message:userMessage
}
var arrayFromStorage=localStorage.getItem("Messages")
if(arrayFromStorage===null){
MessagesDetail=[];  
}
else{
MessagesDetail=JSON.parse(arrayFromStorage)
}
MessagesDetail.push(MessageDetail)
localStorage.setItem("Messages",JSON.stringify(MessagesDetail))


var parentBox=document.getElementById("ChatBody")
var ChildOfMessageBox=document.createElement("div")
var addingMessageBox=document.createElement("div")
var sendingTime=document.createElement("div")
var UserName=document.createElement("div")

parentBox.appendChild(ChildOfMessageBox)
ChildOfMessageBox.className="ChatBox"

ChildOfMessageBox.appendChild(UserName)
UserName.innerHTML=userName
UserName.className="NameOfUser"

ChildOfMessageBox.appendChild(addingMessageBox)
addingMessageBox.innerHTML=userMessage;
addingMessageBox.className="UsersMessage"

ChildOfMessageBox.appendChild(sendingTime)
sendingTime.innerHTML=currentTime;
sendingTime.className="Time"


document.getElementById("UserMessage").value=""
}  
}
var GettingMessages=JSON.parse(localStorage.getItem("Messages"))
if(GettingMessages===null){

}
else{
for(var a=0 ; a<(GettingMessages.length) ; a++){

var parentBox=document.getElementById("ChatBody")
var ChildOfMessageBox=document.createElement("div")
var addingMessageBox=document.createElement("div")
var sendingTime=document.createElement("div")
var UserName=document.createElement("div")

parentBox.appendChild(ChildOfMessageBox)
ChildOfMessageBox.className="ChatBox"

ChildOfMessageBox.appendChild(UserName)
UserName.innerHTML=GettingMessages[a].senderName
UserName.className="NameOfUser"

ChildOfMessageBox.appendChild(addingMessageBox)
addingMessageBox.innerHTML=GettingMessages[a].message;
addingMessageBox.className="UsersMessage"

ChildOfMessageBox.appendChild(sendingTime)
sendingTime.innerHTML=GettingMessages[a].sendingTime;
sendingTime.className="Time"

}  
}
