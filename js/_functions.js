function afficherLettreMot(element, word, delai,callback) {
    for (let i = 0; i < word.length; i++){
        setTimeout(
            function (index){
                return function () {
                    (element.innerHTML += word[index]);
                    if(index === word.length-1 && callback){
                        callback();
                    }
                };
            }(i), 
            i * delai
        );
    }
   
}

function supprimerLettre(element,delai,callback){
   let text = element.innerHTML;
   for (let i = text.length-1; i >= 0; i--){
        setTimeout(
            function(index){
                return function(){
                    element.innerHTML = text.slice(0,index);
                    if(index === 0 && callback){
                        callback();
                    }
                }
                
            }(i),
            (text.length-i)*delai*0.5
        );
    }  
}

function genererUnNombre(){
    return Math.floor(Math.random(301)+200);
}

export{genererUnNombre,supprimerLettre,afficherLettreMot};