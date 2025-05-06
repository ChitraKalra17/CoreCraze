// Get DOM elements
const trackerForm = document.getElementById('tracker-form');
const logList = document.getElementById('log-list');

// Handle form submission
trackerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get user inputs
    const activityType = document.getElementById('activity-type').value;
    const duration = document.getElementById('duration').value;
    const calories = document.getElementById('calories').value;

    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // Format: MM/DD/YYYY
    const formattedTime = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    // Create a new log item
    const logItem = document.createElement('li');
    logItem.innerHTML = `
        <strong>Activity:</strong> ${activityType} | 
        <strong>Duration:</strong> ${duration} mins | 
        <strong>Calories:</strong> ${calories} kcal |
        <strong>Date:</strong> ${formattedDate} | 
        <strong>Time:</strong> ${formattedTime}
    `;

    // Append the log item to the log list
    logList.appendChild(logItem);

    // Clear form inputs
    trackerForm.reset();
});
