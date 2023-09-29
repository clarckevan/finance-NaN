document.addEventListener('DOMContentLoaded',()=>{
    let sous = document.querySelector('.sous')
    let email = document.querySelector('#email')
    let montant = document.querySelector('#montant')
    let btnSous = document.querySelector('#btnSous')

    sous.addEventListener('submit', (e)=>{
        e.preventDefault();
    })

    btnSous.addEventListener('click', ()=>{
        let data = {
            email: email.value,
            montant: montant.value
        }
        let session = JSON.parse(sessionStorage.getItem('session'))
        let souscription = localStorage.getItem("souscription");
        souscription = JSON.parse(souscription)

        if(session.email == data.email){
        
                localStorage.setItem('souscription', JSON.stringify(data))
                setTimeout(()=>{
                    window.location.href = './profil.html'
            })
            
        }
        else{
            alert("ientifiant incorrect")
        }
      
    })

})