inputNhietDoC = prompt("Nhập giá trị nhiệt độ (Celsius): ");

let NhietDoC= parseInt(inputNhietDoC);
let NhietDoF = (9*NhietDoC)/5-32;

document.write("Giá trị chuyển qua độ F là: " + NhietDoF)