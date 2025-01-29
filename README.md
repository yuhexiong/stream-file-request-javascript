# Stream File Request

**(also provided Traditional Chinese version document [README-CH.md](README-CH.md).)**


Demonstrates how to upload files and stream them to a server using Node.js. Help you test stream file api.  

## Version

- Node.js v20.11.1

## Run

### install dependencies

```bash
npm install
```

### send request with token

```bash
node streamFileRequest.js <filePath> <formUrl> <token>
```

### get token and send request 

```bash
node getTokenAndStreamFileRequest.js <tokenUrl> <username> <password> <filePath> <formUrl> 
```