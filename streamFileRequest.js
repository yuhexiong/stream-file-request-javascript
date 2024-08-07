const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

function streamFileRequest(filePath, formUrl, token) {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));
        
        axios.post(formUrl, formData, {
            headers: {
                ...formData.getHeaders(),
                'Content-Type': 'application/octet-stream',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log('[Sending Stream Request] Success: ', response.data);
        })
        .catch((error) => {
            console.error('[Sending Stream Request] Error: ', error);
        });
    } catch (error) {
        console.error('[Sending Stream Request] Error: ', error);
    }
}

const filePath = process.argv[2];
const formUrl = process.argv[3];
const token = process.argv[4];

streamFileRequest(filePath, formUrl, token);