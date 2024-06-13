function rolldice(){
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src = "img/${value}.png" alt = "${value}">`);

    }
    diceresult.textContent = `dice: ${values.join(', ')}`;
    diceimg.innerHTML = images.join('');

}