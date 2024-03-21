//npm i nodemailer
const express = require ('express');
const nodemailer = require('nodemailer');
//tạo server
const app = express();
//cấu hình gửi mail
let guiEmail = nodemailer.createTransport({
    auth: {
        user:'hiepnchph31851@fpt.edu.vn',
        pass:'afxf zkjv pzzg pvnj'
    }
});

//thiết lập nội dung gửi
let noiDung = {
    from: 'hiepnchph31851@fpt.edu.vn',
    to: 'hiephoang2k468@gmail.com',
    subject: 'test',
    text:'hello world'
};
// gửi
guiEmail.sendMail(noiDung,(err,info) => {
    if(err){
        console.log('Lỗi:' +err);
    }else{
        console.log('Đã gửi thành công:' +info);
    }
})
//chạy server
app.listen(3005, () =>{
    console.log('server đang chạy');
});