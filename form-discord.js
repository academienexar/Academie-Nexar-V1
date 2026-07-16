/* ==================================
   ACADEMIE NEXAR
   FORMULAIRES DISCORD
================================== */


// Remplace par tes nouveaux webhooks après les avoir régénérés

const WEBHOOK_ADHESION = "https://discord.com/api/webhooks/1526756547454304439/e4RUiMEmycGZCAY43aIahtOvuk2dd7zhrlt6L6DrVmE41yZZ9i3w24yTJcSh4jCn8YyT";
const WEBHOOK_PARTENARIAT = "https://discord.com/api/webhooks/1526759081887400047/fB3MYKK-cFwlmLK0rtJc0i7E0zvk1lCHrqtffcTq_eSk2_9UiQ3hsY6VHw60rU5-CsJp";
const WEBHOOK_RECRUTEMENT = "https://discord.com/api/webhooks/1526758499168813177/yUaKcxdbgQJkb4xtPoE-AaChlvJEhIu1pnY4j2EEWP1yWKp3h0HAVZufo02U-qKq4Rz8";





async function sendToDiscord(event, type){


event.preventDefault();



const form = event.target;

const data = new FormData(form);



let fields = [];



for (const [key, value] of data.entries()){


fields.push({

name: key,

value: value || "Non renseigné",

inline: false


});


}





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


body: JSON.stringify({


embeds:[{


title:titre,


description:"Académie Nexar - V1™️",


color:16743680,


fields:fields,


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
