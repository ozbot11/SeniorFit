fetch('http://127.0.0.1:5000/quest/', {
    method: 'GET',
})
    .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.error) {
                resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `data: ${data}`;
            }
        })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('result').innerHTML = `<p>An error occurred: ${error.message}</p>`;
            });