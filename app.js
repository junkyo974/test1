const express = require('express');
const app = express();
const port = 3000;
const userRouter = require("./routes/user");
app.use(express.json());
app.use("/", [userRouter]);


app.get('/', (req, res) => {
    return res.status(200).json({"messege":"회원 목록 조회 실패"})
})

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸습니다.')
})