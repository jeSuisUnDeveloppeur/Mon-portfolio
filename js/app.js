import{genererUnNombre,supprimerLettre,afficherLettreMot} from './_functions.js'

let competence = document.getElementsByClassName('container_competences')[0];
let titleMessage = document.getElementById('header_message');

let word1 = 'je suis curieux';
let word2 = 'je suis persévérant';
let word3 = 'je suis autonome';
let word4 = 'j\'apprécie le travail en équipe';
let word5 = 'je suis un developpeur full stack';
let tempsEcriture = genererUnNombre();

afficherLettreMot(titleMessage,word1,tempsEcriture,()=>{
    supprimerLettre(titleMessage,tempsEcriture,()=>{
        afficherLettreMot(titleMessage,word2,tempsEcriture,()=>{
            supprimerLettre(titleMessage,tempsEcriture,()=>{
                afficherLettreMot(titleMessage,word3,tempsEcriture,()=>{
                    supprimerLettre(titleMessage,tempsEcriture,()=>{
                        afficherLettreMot(titleMessage,word4,tempsEcriture,()=>{
                            supprimerLettre(titleMessage,tempsEcriture,()=>{
                                afficherLettreMot(titleMessage,word5,tempsEcriture,()=>{
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});



  document.addEventListener('scroll',()=>{
      if(window.scrollY >= 1000){
          competence.style.animation ='leftToRight 3s';
          competence.classList.replace('container_competences','container_competences_visible');
      }
  })


  const btnCaroussel = document.querySelectorAll(".caroussel_btn");
  const competencesCard = document.querySelectorAll(".card");
  let compteur = 0;
  const cardWidth = 200; 
  const totalCards = competencesCard.length -4;
  const maxScroll = cardWidth * totalCards;
  
  btnCaroussel.forEach((element, index) => {
    element.addEventListener("click", event => {
      if (index === 0) { 
        compteur -= cardWidth;
        if (compteur < 0) {
          compteur = maxScroll - cardWidth;
        }
      } else { 
        compteur += cardWidth;
        if (compteur >= maxScroll) {
          compteur = 0;
        }
      }
      competencesCard.forEach(competence => {
        competence.style.transition = "transform 1.5s ease";
        competence.style.transform = `translateX(-${compteur}px)`;
      });
    });
  });

  
  
  

  



