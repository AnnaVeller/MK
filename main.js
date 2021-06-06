const arena = document.getElementsByClassName('arenas arena1')[0];
const randomBtn = document.querySelector('.button');
randomBtn.addEventListener('click', event => {
    changeHP(player1);
    changeHP(player2);
});


const player1 = {
    name: 'Shrek',
    hp: 100,
    player: 1,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['Нож', 'Бомба', 'Пук'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    name: 'Fiona',
    hp: 100,
    player: 2,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ['Нож', 'Бомба', 'Пук'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};


const div1 = createPlayer(player1);
const div2 = createPlayer(player2);

arena.appendChild(div1);
arena.appendChild(div2);

function createPlayer(player) {
    div = createElement('div', player.player === 1 ? 'player1' : 'player2')
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


function changeHP(player) {
    const playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= getRandom(1, 20);
    playerLife.style.width = player.hp + '%';

    if (player.hp < 0) {
        player.hp = 0;
        playerLife.style.width = '0%';
        arena.appendChild(playerLose(player));
    }
}

function getRandom(min = 1, max = 20) {
    console.log(Math.random() * (max - min) + min);
    return Math.random() * (max - min) + min;
}

function playerLose(player) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = (player.player === 1 ? player2.name : player1.name) + ' Win';
    randomBtn.disabled = true;
    return loseTitle;
}

function createElement(tag, className) {
    const el = document.createElement(tag);

    if (className) {
        el.className = className;
    }
    return el;
}


