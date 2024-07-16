const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

async function streamFileRequest(tokenUrl, username, password, filePath, formUrl) {
    try {
        const response = await axios.post(tokenUrl, {
            username: username,
            password: password
        });

        token = response.data.token
        console.log('[Getting Token] Success: ', token);
    } catch (error) {
        console.error('[Getting Token] Error: ', error);
        throw error;
    }

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

const tokenUrl = process.argv[2];
const username = process.argv[3];
const password = process.argv[4];

const filePath = process.argv[5];
const formUrl = process.argv[6];

streamFileRequest(tokenUrl, username, password, filePath, formUrl);