// Code your solutions in this file

function writeCards(name,event){
    let thanksCard = [];
    for (let i = 0; i < name.length; i++){
        thanksCard.push( `Thank you, ${name[i]}, for the wonderful ${event} gift!` )
    }
  return thanksCard;
}
/