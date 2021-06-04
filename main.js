const player1 = {
    name: 'Shrek',
    hp: 99,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['Нож', 'Бомба', 'Пук'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    name: 'Fiona',
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ['Нож', 'Бомба', 'Пук'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

function createPlayer(className) {
    let player;
    if (className === 'player1') {
        player = player1;
    }
    if (className === 'player2') {
        player = player2;
    }

    const div = document.createElement('div');
    div.className = className;
    div.innerHTML =
        `<div class="progressbar">
                <div class="life"></div>
                <div class="name">${player.name}</div>
         </div>
         <div class="character">
                <img src="${player.img}">
         </div>`;
    return div;

}

const div1 = createPlayer('player1', player1);
const div2 = createPlayer('player2', player2);

document.getElementsByClassName('arenas arena1')[0].appendChild(div1);
document.getElementsByClassName('arenas arena1')[0].appendChild(div2);
