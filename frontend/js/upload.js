// document.getElementById('upload-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData();
//     const fileInput = document.getElementById('eye-scan');
//     formData.append('eye-scan', fileInput.files[0]);

//     fetch('http://localhost:3001/upload', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         const resultDiv = document.getElementById('result');
//         if (data.error) {
//             resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
//         } else {
//             resultDiv.innerHTML = `<p>Predicted Class: ${data.predicted_class}</p><p>Confidence: ${data.confidence}</p>`;
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
//     });
// });






document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData();
    const fileInput = document.getElementById('eye-scan');
    formData.append('eye-scan', fileInput.files[0]);

    fetch(/*'http://localhost:3001/upload'*/'http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
            resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Predicted Class: ${data.predicted_class}</p><p>Confidence: ${data.confidence}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
    });
});
