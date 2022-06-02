// Code your solutions in this file

function writeCards(name,event){
    let thanksCard = [];
    for (let i = 0; i < name.length; i++){
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
  return thanksCard;
}