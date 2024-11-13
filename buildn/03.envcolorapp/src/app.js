const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get : 어떤 요청 받을지 정의하는 부분
// 루트 경로 의미하는 '/' 적어두면 로컬호스트라는 주소로 접속 시의 응답 정의 가능
app.get('/', (req, res) => {
  // process.env.COLOR : 시스템의 COLOR 환경 변수 읽어옴
  const color = process.env.COLOR || 'green';
  const username = '사용자';
  // res.render 부분은 어떤 파일 응답하는지 정의
  res.render('index', { color, username });
});

// /:name 은 URI 뒤에 문자열 있을 경우 라는 뜻
app.get('/:name', (req, res) => {
  const color = process.env.COLOR || 'green';
  // req.params.name : URI 문자열을 username으로 입력
  const username = req.params.name;
  res.render('index', { color, username });
});

app.listen(port, () => {
  console.log(`Simple Node.js web app is running at http://localhost:${port}`);
});
