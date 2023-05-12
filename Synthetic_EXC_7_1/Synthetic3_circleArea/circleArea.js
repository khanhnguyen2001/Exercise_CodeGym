inputBanKinh = prompt("Nhập vào bán kính hình tròn: ");

let BanKinh= parseInt(inputBanKinh);
let DienTich = BanKinh*BanKinh*Math.PI;

document.write("Diện tích của hình tròn là: " + DienTich)