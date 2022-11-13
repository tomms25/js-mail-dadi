
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.





// Chiedere all'utente email
let user_mail = prompt("Inserisci qui la tua email!");
console.log(user_mail);

// Controllare che sia nella lista di chi può accedere

let listaMail = ["tommasobaccano@gmail.com, baccanotommaso@gmail.com, tom.stud@uniroma3.it"];
console.log(listaMail);

let mailIsValid = false;  

for (let l = 0; l <= listaMail.length; l++ ) {
    if (user_mail == listaMail[l]) {
        mailIsValid = true;
    }
}

// Stampare un messaggio appropriato sull'esito del controllo

if (mailIsValid == false) {
    document.getElementById("mail").innerHTML = "Gentile utente la sua mail <i>" + user_mail + "</i>  risulta errata";
} else {
    document.getElementById("mail").innerHTML = "Gentile utente la sua mail " + user_mail + " risulta corretta" ;
}

console.log(mailIsValid);