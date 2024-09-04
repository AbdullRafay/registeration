const input = document.getElementById("input");

input.addEventListener("submit", function (event) {
  event.preventDefault();

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var tableBody = document.getElementById("tablebody");
  var searchKey=document.getElementById("inpkey").value;
  var searchInp=document.getElementById("searchinp").value;
var arr=[];
  var obj = {
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  };
  arr.push({ ...obj });

  fname.value=" ";
lname.value=" ";
email.value=" ";
password.value=" ";




  function tableInput(){
 

   for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if(x[searchInp] == searchKey){
         console.log(x);
      }

  }
}

  function renderTable() {
    tableBody.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];

      tableBody.innerHTML += `
       <tr>
       <td>${x.fname}</td>
       <td>${x.lname}</td>
       <td>${x.email}</td>
       <td>${x.password}</td>
   
       </tr>`;
    }
  }

  console.log(obj);
  renderTable();
  tableInput();
});
