# Stream File Request

展示如何使用 Node.js 上傳檔案並將其以串流方式發送到伺服器。協助測試串流檔案的 API。  

## Version

- Node.js v20.11.1  

## Run

### 安裝依賴

```bash
npm install
```

### 使用 Token 發送請求

```bash
node streamFileRequest.js <filePath> <formUrl> <token>
```

### 獲取 Token 並發送請求

```bash
node getTokenAndStreamFileRequest.js <tokenUrl> <username> <password> <filePath> <formUrl> 
```