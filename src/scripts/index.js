/**
 * Author: Eladio Claudio
 * project: Digital Clock
 */


let timeContainer = document.querySelector('.time');
let dateContainer = document.querySelector('.date');



function setZero(number) {
    let result = (number >= 10) ? number : `0${number}`;
    return result;
}



function clock() {

    const data = new Date();

    const time = {
        day: setZero(data.getDate()),
        month: setZero(data.getMonth() + 1),
        year: setZero(data.getFullYear()),
        hour: setZero(data.getHours()),
        min: setZero(data.getMinutes()),
        sec: setZero(data.getSeconds())
    }

    const { hour, min, sec, day, month, year } = time;


    let timeNow = `${hour}:${min}:${sec}`;
    let dateNow = `${day}/${month}/${year}`;


    timeContainer.innerHTML = timeNow;
    dateContainer.innerHTML = dateNow;
}


setInterval(() => {
    clock();
}, 1);