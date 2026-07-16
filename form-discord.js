/* ==================================
   ACADEMIE NEXAR
   FORMULAIRES DISCORD
================================== */

const WEBHOOK_ADHESION = "https://discord.com/api/webhooks/1526756547454304439/e4RUiMEmycGZCAY43aIahtOvuk2dd7zhrlt6L6DrVmE41yZZ9i3w24yTJcSh4jCn8YyT";
const WEBHOOK_PARTENARIAT = "https://discord.com/api/webhooks/1526759081887400047/fB3MYKK-cFwlmLK0rtJc0i7E0zvk1lCHrqtffcTq_eSk2_9UiQ3hsY6VHw60rU5-CsJp";
const WEBHOOK_RECRUTEMENT = "https://discord.com/api/webhooks/1526758499168813177/yUaKcxdbgQJkb4xtPoE-AaChlvJEhIu1pnY4j2EEWP1yWKp3h0HAVZufo02U-qKq4Rz8";


async function sendToDiscord(event, type){

event.preventDefault();


const form = event.target;

let messageFields = [];


// Récupération des cases cochées

const checkboxes = form.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((box, index)=>{

messageFields.push({

name:`Condition ${index + 1}`,

value: box.checked ? "✅ Oui" : "❌ Non",

inline:false

});

});



// Récupération des champs texte

const inputs = form.querySelectorAll('input[type="text"], input[type="url"], input[type="number"], textarea');


inputs.forEach((input)=>{


let nom = input.placeholder || "Champ";

let valeur = input.value || "Non renseigné";


messageFields.push({

name: nom,

value: valeur,

inline:false

});


});





let webhook;
let titre;



if(type === "adhesion"){

webhook = WEBHOOK_ADHESION;

titre = "🤝 Nouvelle demande d'adhésion";

}



if(type === "partenariat"){

webhook = WEBHOOK_PARTENARIAT;

titre = "🤝 Nouvelle demande de partenariat";

}



if(type === "recrutement"){

webhook = WEBHOOK_RECRUTEMENT;

titre = "👥 Nouvelle candidature recrutement";

}






await fetch(webhook, {


method:"POST",


headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

embeds:[{

title:titre,

description:"Académie Nexar - V1™️",

color:16743680,

fields:messageFields,

footer:{

text:"Académie Nexar | Formulaire automatique"

},

timestamp:new Date()

}]

})


});





alert("✅ Votre demande a été envoyée !");


form.reset();


}
