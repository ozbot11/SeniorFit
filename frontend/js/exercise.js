// document.addEventListener('DOMContentLoaded', function() {
//     fetch('http://localhost:3001/exercises')
//         .then(response => response.json())
//         .then(data => {
//             const exerciseList = document.getElementById('exercise-list');
//             data.forEach(exercise => {
//                 const exerciseItem = document.createElement('div');
//                 exerciseItem.innerHTML = `
//                     <h3>${exercise.name}</h3>
//                     <p>${exercise.description}</p>
//                 `;
//                 exerciseList.appendChild(exerciseItem);
//             });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred while fetching the exercise plan.');
//         });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     fetch('http://localhost:3001/exercises')
//         .then(response => response.json())
//         .then(data => {
//             const exerciseList = document.getElementById('exercise-list');
//             data.forEach(exercise => {
//                 const exerciseItem = document.createElement('div');
//                 exerciseItem.innerHTML = `
//                     <h3>${exercise.name}</h3>
//                     <p>${exercise.description}</p>
//                 `;
//                 exerciseList.appendChild(exerciseItem);
//             });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('An error occurred while fetching the exercise plan.');
//         });
// });




document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3001/exercises')
        .then(response => response.json())
        .then(data => {
            const exerciseList = document.getElementById('exercise-list');
            data.forEach(exercise => {
                const exerciseItem = document.createElement('div');
                exerciseItem.innerHTML = `
                    <h3>${exercise.name}</h3>
                    <p>${exercise.description}</p>
                `;
                exerciseList.appendChild(exerciseItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching the exercise plan.');
        });
});
