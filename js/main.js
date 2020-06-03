let today = new Date;
let dayBase;

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


function getDiaSemana(day) {
    let weekday = day%7;
    if (weekday == 0) {
        return "Domingo"
    }
    else if (weekday == 1) {
        return 'Segunda'
    }
    else if (weekday == 2) {
        return 'Terça'
    }
    else if (weekday == 3) {
        return 'Quarta'
    }
    else if (weekday == 4) {
        return 'Quinta'
    }
    else if (weekday == 5) {
        return 'Sexta'
    }
    else if (weekday == 6) {
        return 'Sabado'
    }
};

function getProgramacao(hour, day) {

    let hourCards = document.getElementsByClassName("hour-card");
    let listProg = [];
    for (let i = 0; i < hourCards.length; i++) {
        const element = hourCards[i];
        if (element.getAttribute("id") == hour) {

            if (element.getAttribute("class").substr(-1) == "1") {
                let prog = {
                    id: '01',
                    hour: '23:00',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
                prog = {
                    id: '01',
                    hour: '23:15',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
                prog = {
                    id: '01',
                    hour: '23:30',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
                prog = {
                    id: '01',
                    hour: '23:45',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
            }
            else if (element.getAttribute("class").substr(-1) == "2") {
                let prog = {
                    id: '02',
                    hour: '22:00',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
                prog = {
                    id: '02',
                    hour: '22:15',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
                prog = {
                    id: '02',
                    hour: '22:30',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
                prog = {
                    id: '02',
                    hour: '22:45',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
            }
            else {
                let prog = {
                    id: '03',
                    hour: '08:00',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
                prog = {
                    id: '03',
                    hour: '08:15',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
                prog = {
                    id: '03',
                    hour: '08:30',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
                prog = {
                    id: '03',
                    hour: '08:45',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
            }
            return listProg;
        }
    }
}

setInterval(() => {

    let hourCards = document.getElementsByClassName("hour-card");

    for (let i = 0; i < hourCards.length; i++) {
        const element = hourCards[i];
        if (element.getAttribute("id") == today.getHours()) {
            element.style.backgroundColor = "Black"
        }
        else  if (element.getAttribute("class").substr(-1) == "1") {
            element.style.backgroundColor = '#009ade'
        }
        else if (element.getAttribute("class").substr(-1) == "2") {
            element.style.backgroundColor = '#ec0080'
        }
        else {
            element.style.backgroundColor = '#ffea00'
        }
    }
}, 60000);


window.onload = function () {
    
    dayBase = today.getDate()

    printDay();
    
    monitoraCards();

    monitoraChar();
    
    atualizaProg(today.getHours(), today.getDate());


    document.getElementsByClassName('right')[0].addEventListener('click', ()=>{
        sumDay();
    }, false);
}


function preencheModalProg (id){
    const img = document.querySelector('.headermodal img');
    const firstTitle = document.querySelector('.headertitle h3');
    const secondTitle = document.querySelector('.headertitle h4');
    const slogan = document.querySelector('.headertitle p');

    const ageInd = document.querySelector('.headerbox');

    const dayInfo = document.querySelector('.bodymodal h3');
    const description = document.querySelector('.bodymodal p');

    const info = document.querySelector('.infos');
    const ficha = document.querySelector('.fichaCatalografica');
    ficha.innerHTML=""

    if(id =='01'){
        img.setAttribute('src', './img/IncrivelGumballnDarwin.png')
        firstTitle.textContent = "O INCRIVEL MUNDO DE GUMBALL"
        secondTitle.textContent = "THE AWESOME WORLD OF GUMBALL"
        slogan.textContent = "Um gato muito doido, fazendo coisas mundo doidas"

        ageInd.textContent = '16'

        dayInfo.textContent = getDiaSemana(today.getDate()+1)+" "+today.getDate()+1;

        description.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatu  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru'

        info.textContent = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligen"

        let genero = document.createElement('p');
        genero.textContent = "Gênero: Animação, Comédia";
        ficha.appendChild(genero);
        let diretor = document.createElement('p');
        genero.textContent = "Diretor: Juliana Enrico";
        ficha.appendChild(diretor);
        let casting = document.createElement('p');
        genero.textContent = "Casting: ";
        ficha.appendChild(casting);
    }else if(id =='02'){
        img.setAttribute('src', './img/regularShow.png')
        firstTitle.textContent = "APENAS UM SHOW"
        secondTitle.textContent = "REGULAR SHOW"
        slogan.textContent = "Não sei ao certo, nunca assisti"

        ageInd.textContent = '10'

        dayInfo.textContent = getDiaSemana(today.getDate()+10)+" "+today.getDate()+10;

        description.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatu  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru'

        info.textContent = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligen"

        let genero = document.createElement('p');
        genero.textContent = "Gênero: Animação, Comédia";
        ficha.appendChild(genero);
        let diretor = document.createElement('p');
        genero.textContent = "Diretor: Juliana Enrico";
        ficha.appendChild(diretor);
        let casting = document.createElement('p');
        genero.textContent = "Casting: ";
        ficha.appendChild(casting);

    }else if(id == '03'){
        img.setAttribute('src', './img/adventureTimeFinn.jpg')
        firstTitle.textContent = "HORA DE AVENTURA"
        secondTitle.textContent = "ADVENTURE'S TIME"
        slogan.textContent = "Um cachorro boladão e um cara cabeludo"

        ageInd.textContent = '18'

        dayInfo.textContent = getDiaSemana(today.getDate()+5)+" "+today.getDate()+5;

        description.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatu  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru'

        info.textContent = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligen"


        let genero = document.createElement('p');
        genero.textContent = "Gênero: Animação, Comédia";
        ficha.appendChild(genero);
        let diretor = document.createElement('p');
        diretor.textContent = "Diretor: Juliana Enrico";
        ficha.appendChild(diretor);
        let casting = document.createElement('p');
        casting.textContent = "Casting: ";
        ficha.appendChild(casting);

    }
}

function monitoraChar(){
    let chars = document.getElementsByClassName('item');

    for (let l = 0; l < chars.length; l++) {
        const char = chars[l];
        char.addEventListener('click', ()=>{
            preencheModalChar(char.getAttribute('id'));
            charmodal.style.display = "block";
        }, false)
    }
};

function preencheModalChar(name){
    const img = document.querySelector('.upper-content img')
    const firstName = document.querySelector('.upper-content h3')
    const secName = document.querySelector('.upper-content h4')
    const upperbox = document.getElementsByClassName('upper-box')[0]
    const bottom = document.getElementsByClassName('bottom')[0]
    bottom.innerHTML= ""


    if(name == "ADT"){
        img.setAttribute('src', './img/adventureTimeCard.png')
        firstName.textContent = 'HORA DE AVENTURA'
        secName.textContent = "ADVENTURE'S TIME"
        upperbox.textContent = '16'

        for (let m = 0; m < 8; m++) {
            let cardCalendar = document.createElement('div');
            cardCalendar.setAttribute('class', 'cardCalendar')
            bottom.appendChild(cardCalendar);

            let firstp = document.createElement('p')
            firstp.textContent = getDiaSemana(m+10);
            cardCalendar.appendChild(firstp);

            let secondp = document.createElement('p')
            secondp.textContent = m+10;
            cardCalendar.appendChild(secondp);

            let thirdp = document.createElement('p')
            thirdp.textContent = "22:00";
            cardCalendar.appendChild(thirdp);
        }

    }else if(name == 'CLA'){
        img.setAttribute('src', './img/clarencio.png')
        firstName.textContent = 'CLARENCIO, O OTIMISTA'
        secName.textContent = "CLARENCE"
        upperbox.textContent = '10'

        for (let m = 0; m < 8; m++) {
            let cardCalendar = document.createElement('div');
            cardCalendar.setAttribute('class', 'cardCalendar')
            bottom.appendChild(cardCalendar);

            let firstp = document.createElement('p')
            firstp.textContent = getDiaSemana(m+15);
            cardCalendar.appendChild(firstp);

            let secondp = document.createElement('p')
            secondp.textContent = m+15;
            cardCalendar.appendChild(secondp);

            let thirdp = document.createElement('p')
            thirdp.textContent = "09:00";
            cardCalendar.appendChild(thirdp);
        }

    }else if(name == 'GUM'){
        img.setAttribute('src', './img/IncrivelGumballnDarwin.png')
        firstName.textContent = 'INCRIVEL MUNDO DE GUMBALL'
        secName.textContent = "The Amazing World of Gumball"
        upperbox.textContent = '14'

        for (let m = 0; m < 8; m++) {
            let cardCalendar = document.createElement('div');
            cardCalendar.setAttribute('class', 'cardCalendar')
            bottom.appendChild(cardCalendar);

            let firstp = document.createElement('p')
            firstp.textContent = getDiaSemana(m);
            cardCalendar.appendChild(firstp);

            let secondp = document.createElement('p')
            secondp.textContent = m;
            cardCalendar.appendChild(secondp);

            let thirdp = document.createElement('p')
            thirdp.textContent = "20:00";
            cardCalendar.appendChild(thirdp);
        }

    }else if(name == 'JOR'){
        img.setAttribute('src', './img/jorelbrother.png')
        firstName.textContent = 'O IRMÃO DO JOREL'
        secName.textContent = "JOREL'S BROTHER"
        upperbox.textContent = '10'

        for (let m = 0; m < 8; m++) {
            let cardCalendar = document.createElement('div');
            cardCalendar.setAttribute('class', 'cardCalendar')
            bottom.appendChild(cardCalendar);

            let firstp = document.createElement('p')
            firstp.textContent = getDiaSemana(m+5);
            cardCalendar.appendChild(firstp);

            let secondp = document.createElement('p')
            secondp.textContent = m+5;
            cardCalendar.appendChild(secondp);

            let thirdp = document.createElement('p')
            thirdp.textContent = "18:00";
            cardCalendar.appendChild(thirdp);
        }

    }else if(name == 'STE'){
        img.setAttribute('src', './img/Stevenyoung.jpg')
        firstName.textContent = 'STEVEN UNIVERSO'
        secName.textContent = "STEVEN UNIVERSE"
        upperbox.textContent = '16'

        for (let m = 0; m < 8; m++) {
            let cardCalendar = document.createElement('div');
            cardCalendar.setAttribute('class', 'cardCalendar')
            bottom.appendChild(cardCalendar);

            let firstp = document.createElement('p')
            firstp.textContent = getDiaSemana(m+7);
            cardCalendar.appendChild(firstp);

            let secondp = document.createElement('p')
            secondp.textContent = m+7;
            cardCalendar.appendChild(secondp);

            let thirdp = document.createElement('p')
            thirdp.textContent = "23:00";
            cardCalendar.appendChild(thirdp);
        }

    }else if(name == 'RSH'){
        img.setAttribute('src', './img/regularShow.png')
        firstName.textContent = 'APENAS UM SHOW'
        secName.textContent = "REGULAR SHOW"
        upperbox.textContent = '12'

        for (let m = 0; m < 8; m++) {
            let cardCalendar = document.createElement('div');
            cardCalendar.setAttribute('class', 'cardCalendar')
            bottom.appendChild(cardCalendar);

            let firstp = document.createElement('p')
            firstp.textContent = getDiaSemana(m+2);
            cardCalendar.appendChild(firstp);

            let secondp = document.createElement('p')
            secondp.textContent = m+2;
            cardCalendar.appendChild(secondp);

            let thirdp = document.createElement('p')
            thirdp.textContent = "18:00";
            cardCalendar.appendChild(thirdp);
        }

    }
}

function sumDay(){
    dayBase++;
    printDay();
}
function printDay(){

    let todayBar = document.getElementsByClassName('today-bar')[0];
    todayBar.innerHTML = '';
    let todayText = document.createElement('h2');
    todayText.textContent = getDiaSemana(dayBase) + ' ' + dayBase;
    todayBar.appendChild(todayText);

}

function monitoraCards() {
    var listCards = document.getElementsByClassName('hour-card');

    for (let k = 0; k < listCards.length; k++) {
        const element = listCards[k];

        element.addEventListener("click", () => {
            atualizaProg(element.getAttribute("id"), dayBase);
        }, false);
    };
}

function atualizaProg(hour, day) {
    let hourCards = document.getElementsByClassName("hour-card");
    let ProgBar = document.getElementsByClassName('prog-column')[0];

    ProgBar.innerHTML = "";

    const hourNode = document.createElement('div');
    hourNode.setAttribute('class', 'hour-title');
    hourNode.textContent = hour + 'h';
    ProgBar.appendChild(hourNode);


    for (let i = 0; i < hourCards.length; i++) {
        const element = hourCards[i];
        if (element.getAttribute("id") == hour) {
            element.style.backgroundColor = "Black"
            let listProg = getProgramacao(element.getAttribute("id"), day);

            /* A função getProgramação corresponde à requisiçâo para busca em banco de programação.
               Para a construção desse teste, a mesma retorna 3 padrões de programação, um referente a cada coloração, apenas para exemplo.
            */

            if (element.getAttribute("class").substr(-1) == "1") {
                ProgBar.style.backgroundColor = '#009ade'
            }
            else if (element.getAttribute("class").substr(-1) == "2") {
                ProgBar.style.backgroundColor = '#ec0080'
            }
            else {
                ProgBar.style.backgroundColor = '#ffea00'
            }

            for (let j = 0; j < listProg.length; j++) {
                const prog = listProg[j];

                let ProgCard = document.createElement('div');
                ProgCard.setAttribute('class', 'prog-card ')
                ProgBar.appendChild(ProgCard);

                let hourText = document.createElement('p');
                hourText.textContent = prog.hour;
                ProgCard.appendChild(hourText);

                let CartoonImg = document.createElement('img');
                CartoonImg.setAttribute('src', "./img/" + prog.img);
                CartoonImg.setAttribute('alt', prog.name);
                ProgCard.appendChild(CartoonImg);

                let name = document.createElement('p');
                name.textContent = prog.name;
                ProgCard.appendChild(name);

                ProgCard.addEventListener("click", () => {
                    preencheModalProg(prog.id);
                    progmodal.style.display = "block";
                }, false);
            }
        }
        else {
            if (element.getAttribute("class").substr(-1) == "1") {
                element.style.backgroundColor = '#009ade'
            }
            else if (element.getAttribute("class").substr(-1) == "2") {
                element.style.backgroundColor = '#ec0080'
            }
            else {
                element.style.backgroundColor = '#ffea00'
            }
        }
    }
}

var charmodal = document.getElementById("charModal");
var charspan = document.getElementsByClassName("charclose")[0];

charspan.onclick = function() {
  charmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == charmodal) {
    charmodal.style.display = "none";
  }
  else if (event.target == progmodal) {
    progmodal.style.display = "none";
  }
}

var progmodal = document.getElementById("progModal");
var btn = document.getElementById("myBtn");
var progspan = document.getElementsByClassName("progclose")[0];


progspan.onclick = function() {
    progmodal.style.display = "none";
}
