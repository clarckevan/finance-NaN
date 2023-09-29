let session = JSON.parse(sessionStorage.getItem('session')) ;
let souscription = JSON.parse(localStorage.getItem('souscription'))
let content = document.querySelector('.conten')


    if(souscription !== null && souscription.email == session.email){
        let text = `
        <p class="nom">Nom: <span>${session.lname}</span></p>
        <p class="prenom">Prenom: <span>${session.fname}</span></p>
        <p class="email">email: <span>${session.email}</span></p>
        <p class="nation">Nationalité: <span></span>${session.pays}</p>
        <p class="somme">Montant de souscription: <span>${souscription.montant} frcfa</span></p>
        <p class="formuleactiver">status: <span>Activé</span></p>
        `
        content.innerHTML = text
    }
    else{
        let text = `
        <p class="nom">Nom: <span>${session.lname}</span></p>
        <p class="prenom">Prenom: <span>${session.fname}</span></p>
        <p class="email">email: <span>${session.email}</span></p>
        <p class="nation">Nationalité: <span></span>${session.pays}</p>
        <p class="somme">Montant de souscription: <span>0 frcfa</span></p>
        <p class="formuleactiver">status: <span> Non Activé</span></p>
        `
        content.innerHTML = text
    }
