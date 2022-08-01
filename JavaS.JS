function showResult() {
let numberObtain = document.getElementById('numberInput').value;
let result;
if (numberObtain > 79){result="ممتاز";}
else if (numberObtain > 59){ result="جید جدّا";}
else if (numberObtain > 49){result = "جید";}
else if (numberObtain > 39){result = "مقبول";}
else { result = "راسب";}
document.getElementById('resultDetail').innerText= result;}