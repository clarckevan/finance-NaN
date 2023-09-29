let bd = JSON.parse(localStorage.getItem("user"));
let form = document.querySelector('.connect')
let connect = document.querySelector("#enregistrer");

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})
connect.addEventListener("click",(e)=>{
    let entrerEmail = document.getElementById('fEmail').value;
    let entrerMdp = document.getElementById('mdp').value;
 
    let result;
    console.log(bd)
     if(bd !== null){
         bd.forEach((element)=>{
             if (entrerEmail === element.email && entrerMdp === element.password){
                 console.log("trouver");
                 result= element;
                 sessionStorage.setItem("session",JSON.stringify(result));
                 console.log("connecter");
                 window.location.href = "../corporates/acceuil.html";
             } else {
                 console.log("introuvable");
             }
            })
     }
     else{
         window.location.href = './inscript.html'
     }
})
