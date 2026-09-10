function digitalClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 12-hour format
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    // Date
    let day = String(now.getDate()).padStart(2, "0");
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let year = now.getFullYear();

    document.getElementById("date").textContent =
        `${day}/${month}/${year}`;
}

setInterval(digitalClock, 1000);

digitalClock();