inputVatLy = prompt("Nhập điểm vật lý: ");
inputHoahoc = prompt("Nhập điểm hóa học: ");
inputSinhhoc = prompt("Nhập điểm sinh học: ");

let DiemVL= parseInt(inputVatLy);
let DiemHH = parseInt(inputHoahoc);
let DiemSH = parseInt(inputSinhhoc);

let total = DiemVL+DiemHH+DiemSH;
let medium = total/3;

document.write("Điểm trung bình là: " + medium);
document.write('</br>')
document.write("Điểm tổng là: " + total);