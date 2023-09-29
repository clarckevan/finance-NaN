let inscript = document.querySelector(".inscript")
let button =document.querySelector("#enregistrer")

inscript.addEventListener('submit', (e)=>{
  e.preventDefault();
})
button.addEventListener("click",()=>{
  let bdUser= JSON.parse(localStorage.getItem('clark'))
  let fname =document.querySelector("#fname").value;
  let lname =document.querySelector("#lname").value;
  let pays =document.querySelector("#pays").value;
  let password =document.querySelector("#password").value;
  let email =document.querySelector("#email").value;
  let userClee = {
    fname:fname,
    lname:lname,
    pays:pays,
    password:password,
    email:email
  }
  if(bdUser == null){
    bdUser = []
    bdUser.push(userClee)
    localStorage.setItem("user",JSON.stringify(bdUser))
    window.location.href = './connect.html'
  }
  else{
    bdUser.push(userClee)
    localStorage.setItem("user",JSON.stringify(bdUser))
    window.location.href = './connect.html'
  }

})