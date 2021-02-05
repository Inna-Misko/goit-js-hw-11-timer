// решение через обьект
const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
    timer: document.querySelector('#timer-1'),
}
const countdownTimer = {
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
};

const timer = {
    start() {
        const startTime = countdownTimer.targetDate.getTime()

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;

            this.updateClock(deltaTime);

        }, 1000)
    },
    updateClock(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;

    },
    pad(value) {
        return String(value).padStart(2, '0')
    }
};

timer.start()

