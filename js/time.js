const utcHour1 = 22;
const utcHour2 = 14;

window.onload = () => {
    const yourTime = document.getElementById("your-time");
    if (yourTime === null) {
        return;
    }

    const offset = (new Date()).getTimezoneOffset();
    const hourDiff = -(offset / 60);
    const hourDiffWhole = Math.floor(hourDiff);

    let minuteDiff = hourDiff % 1;

    if (minuteDiff < 0) {
        minuteDiff = minuteDiff + 1;
    }

    const hour1 = (utcHour1 + hourDiffWhole) % 24;
    const hour2 = (utcHour2 + hourDiffWhole) % 24;
    const minute = Math.floor(minuteDiff * 60);
    const minuteFormat = minute.toString().padStart(2, "0");

    yourTime.innerText = `${hour1}:${minuteFormat}-${hour2}:${minuteFormat} your time`;
};