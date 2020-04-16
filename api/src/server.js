// 웹 서버를 실행합니다. --- (※2)
const express = require('express');
const fs = require('fs');
const cp = require('../config');
const app = express();
const http = require('http');
var server = http.createServer(app);


const portNo = 3001;
// body-parser를 사용합니다.
const bodyParser = require('body-parser');
// 소켓
const socketIo = require('socket.io');
// 크로스도메인 정의
const cors = require('cors');
// api 통신을용 파일호출
const api = require('./api');
// api url 검증 파일 호출
// const redirect = require('./middleware/redirect');

const io = socketIo(server); // < Interesting!

// bodyparser : post 통신용
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
//이미지 파일 & 파일 호출을 위한 static 경로 선언
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//app.use(redirect);

app.use('/uploads', express.static('uploads'));
app.use('/api', (req, res, next)=>{
    req.io = io;
    next();
}, api);

app.listen(portNo, () => {
    console.log(`start`)
  })
// setInterval(async()=>{
//     var orderSel = await marketController.orderSel();
//     io.emit('orderSel', orderSel);
// }, 1000);


exports.server = server;

