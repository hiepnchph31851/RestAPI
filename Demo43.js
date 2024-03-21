//npm i jsonwebtoken
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
//tạo app
const app =express();

// hỗ trợ nhận dữ liệu json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//mảng users
const users =[
    {id:1, username: 'user01', password:'123'}, //dùng để login
];

//token bí mật
const tokenBiMat = '123456';
//tạo token
function hamTaoToken(user){
    return jwt.sign(user,tokenBiMat,{expiresIn:'15m'}); //có giá trị trong 15p
}

//tiến hành login (gọi qua post man, không hỗ trợ gọi qua trình duyệt)
app.post('/login', (req,res)=>{
    const {username, password} = req.body;
    console.log('Thông tin nhận đc');
    console.log(username); console.log(password);
    //tìm kiếm trong mảng xem có user như người dùng nhập ko?
    const user = users.find((u)=> u.username === username && u.password === password); //so sánh
    if(!user){
        console.log("sai username, password");
        return;
    }
    //nếu nhập đúng thì tạo token
    const tokenCongKhai = hamTaoToken({id:user.id,username:user.username ,password:user.password});
    //trả token
    res.json(tokenCongKhai);
    console.log("token sinh ra:" + tokenCongKhai);
});

app.listen(3007,()=>{
    console.log("server đang chạy");
})