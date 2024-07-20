// document.getElementById('profile-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const weight = document.getElementById('weight').value;
//     const height = document.getElementById('height').value;
//     const conditions = document.getElementById('conditions').value;

//     fetch('http://localhost:3001/profile', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             age: age,
//             weight: weight,
//             height: height,
//             conditions: conditions
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('Profile saved successfully!');
//         window.location.href = 'index.html';
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while saving the profile.');
//     });
// });













// document.getElementById('profile-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const weight = document.getElementById('weight').value;
//     const height = document.getElementById('height').value;
//     const conditions = document.getElementById('conditions').value;

//     fetch('http://localhost:3001/profile', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             age: age,
//             weight: weight,
//             height: height,
//             conditions: conditions
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('Profile saved successfully!');
//         window.location.href = 'index.html';
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while saving the profile.');
//     });
// });











// document.getElementById('profile-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const weight = document.getElementById('weight').value;
//     const height = document.getElementById('height').value;
//     const conditions = document.getElementById('conditions').value;

//     fetch('http://localhost:3001/profile', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             age: age,
//             weight: weight,
//             height: height,
//             conditions: conditions
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert('Profile saved successfully!');
//         window.location.href = 'index.html';
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while saving the profile.');
//     });
// });













// document.getElementById('profile-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const weight = document.getElementById('weight').value;
//     const height = document.getElementById('height').value;
//     const conditions = document.getElementById('conditions').value;

//     fetch('http://localhost:3001/profile', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             age: age,
//             weight: weight,
//             height: height,
//             conditions: conditions
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert('Profile saved successfully!');
//         window.location.href = 'index.html';
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while saving the profile: ' + error.message);
//     });
// });




document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const conditions = document.getElementById('conditions').value;

    fetch('http://localhost:3001/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            age: age,
            weight: weight,
            height: height,
            conditions: conditions
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Profile saved successfully!');
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while saving the profile: ' + error.message);
    });
});
