const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // 用于解析 JSON 格式的请求体
const port = 3001; // 确保这个端口不与React的开发服务器端口冲突

app.post('/api/data', (req, res) => {
  console.log('收到数据: ', req.body);
  res.status(200).send('数据已接收');
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});