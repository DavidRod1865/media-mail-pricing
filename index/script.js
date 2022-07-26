function calShipPay(){
    let weight = document.getElementById("weight").value;  
        if (weight == 0){
            alert("Enter Value Greater Than 0!");
        } else if (weight == 1){
            return 3.19;
        } else if (weight == 2){
            return 3.82;
        } else if (weight == 3){
            return 4.45;
        } else if (weight == 4){
            return 5.08;
        } else if (weight == 5){
            return 5.71;
        } else if (weight == 6){
            return 6.34;
        } else if (weight == 7){
            return 6.97;
        } else if (weight == 8){
            return 7.60;
        } else if (weight == 9){
            return 8.23;
        } else if (weight == 10){
            return 8.86;
        } else if (weight == 11){
            return 9.49;
        } else if (weight == 12){
            return 10.12;
        } else if (weight == 13){
            return 10.75;
        } else if (weight == 14){
            return 11.38;
        } else if (weight == 15){
            return 12.01;
        } else if (weight == 16){
            return 12.64;
        } else if (weight == 17){
            return 13.27;
        } else if (weight == 18){
            return 13.90;
        } else if (weight == 19){
            return 14.53;
        } else if (weight == 20){
            return 15.16;
        } else if (weight == 21){
            return 15.79;
        } else if (weight == 22){
            return 16.42;
        } else if (weight == 24){
            return 17.68;
        } else if (weight == 25){
            return 18.31;
        } else if (weight == 26){
            return 18.94;
        } else if (weight == 27){
            return 19.57;
        } else if (weight == 28){
            return 20.20;
        } else if (weight == 29){
            return 20.83;
        } else if (weight == 30){
            return 21.83;
        } else if (weight == 31){
            return 22.09;
        } else if (weight == 32){
            return 22.72;
        } else if (weight == 33){
            return 23.25;
        } else if (weight == 34){
            return 23.98;
        } else if (weight == 35){
            return 24.61;
        } else if (weight == 36){
            return 25.24;
        } else if (weight == 37){
            return 25.87;
        } else if (weight == 38){
            return 26.50;
        } else if (weight == 39){
            return 27.13;
        } else if (weight == 40){
            return 27.76;
        } else if (weight == 41){
            return 28.39;
        } else if (weight == 42){
            return 29.01;
        } else if (weight == 43){
            return 29.65;
        } else if (weight == 44){
            return 30.28;
        } else if (weight == 45){
            return 30.91;
        } else if (weight == 46){
            return 31.54;
        } else if (weight == 47){
            return 32.17;
        } else if (weight == 48){
            return 32.80;
        } else if (weight == 49){
            return 33.43;
        } else if (weight == 50){
            return 34.06;
        } else if (weight == 51){
            return 34.69;
        } else if (weight == 52){
            return 35.52;
        } else if (weight == 53){
            return 35.95;
        } else if (weight == 54){
            return 36.58;
        } else if (weight == 55){
            return 37.21;
        } else if (weight == 56){
            return 37.84;
        } else if (weight == 57){
            return 38.47;
        } else if (weight == 58){
            return 39.10;
        } else if (weight == 59){
            return 39.73;
        } else if (weight == 60){
            return 40.36;
        } else if (weight == 61){
            return 40.99;
        } else if (weight == 62){
            return 41.62;
        } else if (weight == 63){
            return 42.25;
        } else if (weight == 64){
            return 42.88;
        } else if (weight == 65){
            return 43.51;
        } else if (weight == 66){
            return 44.14;
        } else if (weight == 67){
            return 44.77;
        } else if (weight == 68){
            return 45.40;
        } else if (weight == 69){
            return 46.03;
        } else if (weight == 70){
            return 46.66;
        } else if (weight > 70){
            alert("Weight Must Be Less Than 70 Lbs.");
        }
    };
    
function paypal(){
    let paypalFee = +document.getElementById("value").value;  
    if (paypalFee > 0){
        return paypalFeeResult = (paypalFee * .0349) + 0.49;
        } else if (paypalFee == 0){
            return 0.00;
        }
    }

function paypal2(){
    let paypalFee = +document.getElementById("value").value;  
    if (paypalFee > 0){
        return paypalFeeResult = (paypalFee * .0289) + 0.49;
        } else if (paypalFee == 0){
            return 0.00;
        }
    }

// as July 18th - Paypal Website: https://www.paypal.com/us/webapps/mpp/merchant-fees#fixed-fees-commercialtrans

// function bookPrice(){
//     let bookValue = document.getElementById("value").value;
//     document.querySelector(".userValue").textContent = parseFloat(bookValue).toFixed(2);
//     return false;
//     };

    
function bookPrice(){
    let bookValue = +document.getElementById("value").value;
    return parseFloat(bookValue).toFixed(2);
};

function totalAfter(){
    let bookValue = +document.getElementById("value").value;
    let ship = calShipPay();
    let pay = paypal();
    let price = bookPrice();
    let totalValue = bookValue - (pay + ship);
    totalValue = parseFloat(totalValue).toFixed(2);
    document.querySelector(".userProfit").textContent = totalValue;
    document.querySelector(".shippingFee1").textContent = ship;
    document.querySelector(".paypalFee1").textContent = (Math.round(pay * 100) / 100).toFixed(2);
    document.querySelector(".userValue").textContent = price;
    return false;
};

function totalBefore(){
    let bookValue = +document.getElementById("value").value;
    let ship = calShipPay();
    let pay = paypal2();
    let price = bookPrice();
    let totalValue = bookValue + (pay + ship);
    totalValue = parseFloat(totalValue).toFixed(2);
    document.querySelector(".userSell").textContent = totalValue;
    document.querySelector(".shippingFee2").textContent = ship;
    document.querySelector(".paypalFee2").textContent = (Math.round(pay * 100) / 100).toFixed(2);
    document.querySelector(".userValue2").textContent = price;
    return false;
};

let calculate = document.querySelector("button").addEventListener('click', () => {
    bookPrice();
    totalAfter();
    totalBefore();
    event.preventDefault();
    });