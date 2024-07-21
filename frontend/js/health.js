document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const steps = document.getElementById('steps').value;
    const sleep = document.getElementById('sleep').value;
    const water = document.getElementById('water').value;

    fetch('http://localhost:3001/health', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: date,
            steps: steps,
            sleep: sleep,
            water: water
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Health data logged successfully!');
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging health data: ' + error.message);
    });
});
