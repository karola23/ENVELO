function validatetel(tel) {
    var reg = '!/^([0-9]{9})$/';
    if(tel !== reg) {
        return document.querySelector('.form-input').style.border = '3px solid red';
    } else {
        return document.querySelector('.form-input').style.border = '3px solid #00d81a';
    }
}
 
document.getElementById('phone-number').addEventListener('keyup', validatetel);

function validatekod(kod) {
    var reg = '!/^([0-4]{4})$/';
    if(kod !== reg) {
        return document.querySelector('.form-input').style.border = '3px solid red';
    } else {
        return document.querySelector('.form-input').style.border = '3px solid #00d81a';
    }
}
 
document.getElementById('kod').addEventListener('keyup', validatekod);
