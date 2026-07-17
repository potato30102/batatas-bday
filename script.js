// ===============================
// ELEMENTOS PRINCIPAIS
// ===============================

const envelopeArea = document.getElementById("envelopeArea");
const envelope = document.getElementById("envelope");
const openText = document.getElementById("openText");

const openEnvelope = document.getElementById("openEnvelope");
const inviteContainer = document.getElementById("inviteContainer");


// ===============================
// MÚSICA
// ===============================

const bgMusic = document.getElementById("bgMusic");


// ===============================
// FORMULÁRIO
// ===============================

const confirmBtn = document.getElementById("confirm");
const rsvpModal = document.getElementById("rsvpModal");
const sendRSVP = document.getElementById("sendRSVP");

const confirmation = document.getElementById("confirmation");
const calendarLink = document.getElementById("calendarLink");


// ===============================
// GOOGLE PLANILHA
// ===============================

const PLANILHA_URL = 
"https://script.google.com/macros/s/AKfycbxVmNsXqlXMwpp_E0GVlmxC3-i4wFXQ7UiIELeNY6PXVJ-NmOnVb1VOGiiUKwsVsz1-/exec";



// ===============================
// ABRIR ENVELOPE
// ===============================

if(envelopeArea){

    envelopeArea.addEventListener("click", ()=>{


        if(bgMusic){

            bgMusic.volume = 0.4;
            bgMusic.play();

        }


        if(envelope){

            envelope.style.opacity = "0";
            envelope.style.transform = "scale(1.3)";

        }


        if(openText){

            openText.style.opacity = "0";

        }



        setTimeout(()=>{


            envelopeArea.style.display = "none";


            if(openEnvelope){

                openEnvelope.style.opacity = "1";
                openEnvelope.style.transform = "scale(1)";

            }


        },1000);



        setTimeout(()=>{


            if(openEnvelope){

                openEnvelope.style.opacity = "0";

            }


            setTimeout(()=>{


                if(openEnvelope){

                    openEnvelope.style.display = "none";

                }


                if(inviteContainer){

                    inviteContainer.style.opacity = "1";
                    inviteContainer.style.transform = "scale(1)";
                    inviteContainer.style.pointerEvents = "auto";

                }


            },1000);



        },3500);



    });


}




// ===============================
// ABRIR MODAL RSVP
// ===============================

if(confirmBtn){

    confirmBtn.addEventListener("click", ()=>{


        if(rsvpModal){

            rsvpModal.style.display = "flex";

        }


    });

}



// ===============================
// ENVIAR CONFIRMAÇÃO
// ===============================

if(sendRSVP){

    sendRSVP.addEventListener("click", ()=>{


        const name = document
        .getElementById("guestName")
        .value
        .trim();



        const bloodType = document
        .getElementById("bloodType")
        .value;



        if(name === ""){


            alert("Digite seu nome 🩸");

            return;

        }




        fetch(PLANILHA_URL, {

            method:"POST",

            headers:{
                "Content-Type":"text/plain;charset=utf-8"
            },

            body: JSON.stringify({

                nome:name,

                sangue:bloodType || "Misterioso"

            })

        })


        .then(()=>{


            if(confirmation){


                confirmation.innerHTML = 
                `
                🩸 Presença selada, ${name}.<br><br>

                Seu sangue ${bloodType || "misterioso"} foi registrado.<br><br>

                Você está confirmado na 
                <strong>Noite Sangrenta</strong> 🦇
                `;

            }



            if(calendarLink){

                calendarLink.style.display = "inline-block";

            }



        })


        .catch((erro)=>{


            console.error(erro);

            alert("Erro ao registrar presença.");

        });



    });


}




// ===============================
// GOOGLE CALENDAR
// ===============================

if(calendarLink){

    calendarLink.addEventListener("click", ()=>{


        const titulo = "Batata's Bday - Noite Sangrenta";

        const inicio = "20260801T200000";

        const fim = "20260802T020000";



        const link =
        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${inicio}/${fim}`;



        window.open(link,"_blank");


    });

}