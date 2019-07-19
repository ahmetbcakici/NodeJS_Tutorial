var nodemailer = require("nodemailer");//Nodemailer modülünü kurduktan sonra projeye dahil etme

var transfer = nodemailer.createTransport({
    service:"gmail",//gönderen mailin kullandığı servis
    auth:{//gönderecek kişinin mail bilgileri
        user:"",//Gönderecek kişinin mail adresi
        pass:""////Gönderecek kişinin mail şifresi
    }
});

var mailbilgi = {
    from:"",//Gönderecek kişinin mail adresi
    to:"",//Gönderilecek kişinin mail adresi
    subject:"",//Gönderecek mailin konusu
    text:"",//Gönderecek mailin içeriği
    /*html:"<form><input type='text'><br><input type='submit'></form>"*/ //Ayrıca HTML göndermek istenilirse kullanımı
};

transfer.sendMail(mailbilgi,function(error){//Mail gönderme işlemi
    if(error) console.log(error);
    else console.log("Mailiniz gönderildi!");
});