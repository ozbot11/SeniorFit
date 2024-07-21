// fetch('http://127.0.0.1:5000/quest/', {
//     method: 'GET',
// })
//     .then(response => response.json())
//     .then(data => {
//         const resultDiv = document.getElementById('result');
//         if (data.error) {
//             resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
//         } else {
//             resultDiv.innerHTML = `data: ${data}`;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
//     });

// function randomQuestClick() {
//     fetch('http://127.0.0.1:5000/quest/random', {
//         method: 'GET',
//     })
//     .then(response => response.json())
//     .then(data => {
//         const resultDiv = document.getElementById('result');
//         if (data.error) {
//             resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
//         } else {
//             resultDiv.innerHTML = `<p>Random Quest: ${JSON.stringify(data)}</p>`;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('randomQuestButton').addEventListener('click', random_quest);
// });



// Function to handle fetching a random quest
function fetchRandomQuest() {
    fetch('http://127.0.0.1:5000/quest/random', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
            resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Random Quest: ${JSON.stringify(data)}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
    });
}

// Add an event listener to call fetchRandomQuest when the button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomQuestButton');
    if (button) {
        button.addEventListener('click', fetchRandomQuest);
    }
});