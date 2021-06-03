let player1 = {
    name: 'Anna',
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: 'bomb',
    attack() {
        console.log(this.name + 'Fight...');
    }
};

let player2 = {
    name: 'Max',
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: 'bomb',
    attack() {
        console.log(this.name + 'Fight...');
    }
};

function createPlayer(className, name, hp) {
    let player;
    if (className === 'player1') {
        player = player1;
    }
    if (className === 'player2') {
        player = player2;
    }
    const div = document.createElement('div');
    player.name = name;
    div.className = className;
    player.hp = hp;
    div.innerHTML =
        '    <div class="progressbar">\n' +
        '        <div class="life"></div>\n' +
        '        <div class="name">SCORPION</div>\n' +
        '    </div>\n' +
        '    <div class="character">\n' +
        '        <img src=' + player.img + '>\n' +
        '    </div>\n';
    return div;

}

const div1 = createPlayer('player1', 'SCORPION', 50);
const div2 = createPlayer('player2', 'SUB-ZERO', 80);

document.getElementsByClassName('arenas arena1')[0].appendChild(div1);
document.getElementsByClassName('arenas arena1')[0].appendChild(div2);