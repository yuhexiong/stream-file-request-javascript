const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

function streamFileRequest(filePath, url, token) {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));
        
        axios.post(url, formData, {
            headers: {
                ...formData.getHeaders(),
                'Content-Type': 'application/octet-stream',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('Success: ', response.data);
        })
        .catch((error) => {
            console.error('Error: [Sending Request]', error);
        });
    } catch (error) {
        console.error('Error: ', error);
    }
}

const filePath = process.argv[2];
const url = process.argv[3];
const token = process.argv[4];

streamFileRequest(filePath, url, token);