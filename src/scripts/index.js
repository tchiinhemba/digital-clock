


let timeContainer = document.querySelector('.time');



function clock() {

    const data = new Date();


    const tempo = {
        day: data.getDate(),
        month: data.getMonth() + 1,
        year: data.getFullYear(),
        hour: data.getHours(),
        min: data.getMinutes(),
        sec: data.getSeconds()
    }

    const { hour, min, sec } = tempo;

    let timeNow = `${hour}:${min},${sec}`;

    timeContainer.innerHTML = timeNow;
}


setInterval( () => {
    clock();
}, 1);