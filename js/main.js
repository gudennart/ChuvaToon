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
                    hour: '23:00',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
                prog = {
                    hour: '23:15',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
                prog = {
                    hour: '23:30',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
                prog = {
                    hour: '23:45',
                    img: 'IncrivelGumballnDarwin.png',
                    name: 'O Incrível Mundo de Gumball'
                }
                listProg.push(prog);
            }
            else if (element.getAttribute("class").substr(-1) == "2") {
                let prog = {
                    hour: '22:00',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
                prog = {
                    hour: '22:15',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
                prog = {
                    hour: '22:30',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
                prog = {
                    hour: '22:45',
                    img: 'regularShowSeriously.png',
                    name: 'Apenas um Show'
                }
                listProg.push(prog);
            }
            else {
                let prog = {
                    hour: '08:00',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
                prog = {
                    hour: '08:15',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
                prog = {
                    hour: '08:30',
                    img: 'adventureTimeCard.png',
                    name: 'Hora de Aventura'
                }
                listProg.push(prog);
                prog = {
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

    atualizaProg(today.getHours(), today.getDate());

    document.getElementsByClassName('right')[0].addEventListener('click', ()=>{
        sumDay();
    }, false);
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
                ProgCard.setAttribute('class', 'prog-card')
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
                    console.log('clickado ', j)
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