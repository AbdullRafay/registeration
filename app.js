const input=document.getElementById('input');

input.addEventListener('submit', function(event){
    event.preventDefault();


 var fname=document.getElementById('fname').value;
 var lname=document.getElementById('lname').value;
 var email=document.getElementById('email').value;
 var password=document.getElementById('password').value;


 var obj={
    fname : fname,
    lname : lname,
    email : email,
    password :password,
    

 }
console.log(obj);
})
