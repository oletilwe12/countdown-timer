const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const diff = new Date(newYearsDate - currentDate);

    const days = Math.floor(seconds / 3600 / 24); 

    console.log(newYearsDate - currentDate);
}

// Initial call
countdown();

setInterval(countdown, 1000);