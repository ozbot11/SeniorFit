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



// // Function to handle fetching a random quest
// function fetchRandomQuest() {
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

// // Add an event listener to call fetchRandomQuest when the button is clicked
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('randomQuestButton');
//     if (button) {
//         button.addEventListener('click', fetchRandomQuest);
//     }
// });



// function fetchRandomQuest() {
//     fetch('http://127.0.0.1:5000/quest/random', {
//         method: 'GET',
//     })
//     .then(response => response.json())
//     .then(data => {
//         const resultDiv = document.getElementById('result');
//         if (data.error) {
//             resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
//         } else {
//             const formattedQuest = formatQuestData(data);
//             resultDiv.innerHTML = `<p>Random Quest: ${formattedQuest}</p>`;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
//     });
// }

// // Function to reformat quest data into a readable format
// function formatQuestData(quest) {
//     // Assuming quest has fields like title, description, and reward
//     return `
//         <strong>Title:</strong> ${quest.title}<br>
//         <strong>Description:</strong> ${quest.description}<br>
//         <strong>Reward:</strong> ${quest.reward}
//     `;
// }

// // Add an event listener to call fetchRandomQuest when the button is clicked
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('randomQuestButton');
//     if (button) {
//         button.addEventListener('click', fetchRandomQuest);
//     }
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
            const formattedQuest = formatQuestData(data);
            resultDiv.innerHTML = `<p>Random Quest: ${formattedQuest}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
    });
}

// Function to reformat quest data into a readable format
function formatQuestData(quest) {
    return `
        <strong>Title:</strong> ${quest.title}<br>
        <strong>Description:</strong> ${quest.description}<br>
        <strong>Reward:</strong> ${quest.points}
    `;
}

// Function to handle fetching a random reward
function fetchRandomReward() {
    fetch('http://127.0.0.1:5000/reward/random', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        const rewardDiv = document.getElementById('reward');
        if (data.error) {
            rewardDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            const formattedReward = formatRewardData(data);
            rewardDiv.innerHTML = `<p>Random Reward: ${formattedReward}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('reward').innerHTML = `<p>An error occurred: ${error.message}</p>`;
    });
}

// Function to reformat reward data into a readable format
function formatRewardData(reward) {
    return `
        <strong>Title:</strong> ${reward.title}<br>
        <strong>Description:</strong> ${reward.description}<br>
        <strong>Value:</strong> ${reward.points_required} points
    `;
}

// Add event listeners to call fetch functions when the buttons are clicked
document.addEventListener('DOMContentLoaded', () => {
    const questButton = document.getElementById('randomQuestButton');
    if (questButton) {
        questButton.addEventListener('click', fetchRandomQuest);
    }
    
    const rewardButton = document.getElementById('randomRewardButton');
    if (rewardButton) {
        rewardButton.addEventListener('click', fetchRandomReward);
    }
});
