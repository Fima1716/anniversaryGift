function updateCountdown() {
    const startDate = new Date("2022-09-02");
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    updateElementWithAnimation(daysElement, days);
    updateElementWithAnimation(hoursElement, hours);
    updateElementWithAnimation(minutesElement, minutes);
    updateElementWithAnimation(secondsElement, seconds);
}

function updateElementWithAnimation(element, newValue) {
    if (element.textContent !== newValue) {
        element.classList.add("blink");
        setTimeout(() => {
            element.textContent = newValue.toString().padStart(2, "0");
            element.classList.remove("blink");
        }, 300);
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
