document.getElementById('countdownForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
    const minutesInput = document.getElementById('minutes');
    const minutes = parseInt(minutesInput.value);
    const timerDisplay = document.getElementById('timerDisplay');

    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    let seconds = minutes * 60;

    const updateTimer = () => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        if (seconds > 0) {
            seconds--;
            setTimeout(updateTimer, 1000);
        } else {
            timerDisplay.textContent = "Time's up!";
            alert("Your countdown is complete!");
        }
    };

    updateTimer(); // เริ่มการนับถอยหลัง
});
