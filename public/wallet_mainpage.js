// let Total_balance = 1000;
// window.onload = function () {

//     let storedBalance = sessionStorage.getItem("balanceObject");

//     if (storedBalance === null) {
//         window.location.href = "User.html";
//         return;
//     }
    
//     document.getElementById("showbalance").innerText = Total_balance - storedBalance;
// };
// function generateQR() {
//     let amount = Number(document.getElementById("amount")).value;

//     let upiID = "rudranil5@pnb";  // 🔁 Replace with your UPI ID
//     let name = "CampusWallet";

//     let upiString = `upi://pay?pa=rudranil5@pnb&pn=NAME&am=${amount}&cu=INR`;

//     let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" 
//                 + encodeURIComponent(upiString);

//     document.getElementById("qrImage").src = qrURL;
//     Total_balance = Total_balance + amount;
// }
// let Total_balance = 1000;
fetch("http://localhost:3000/",
        {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({Sender:Sender})
        }
    )
    .then(res => res.json())
    .then(data =>
    {r})

let Total_balance = Number(localStorage.getItem("walletBalance")) || 1000;
window.onload = function () {

    let storedBalance = sessionStorage.getItem("balanceObject");

    if (storedBalance === null) {
        window.location.href = "User.html";
        return;
    }

    storedBalance = Number(storedBalance);  // convert to number

    document.getElementById("showbalance").innerText =
        Total_balance - storedBalance;
};

function generateQR() {

    let amount = Number(document.getElementById("amount").value);  // ✅ FIXED

    let upiID = "rudranil5@pnb";
    let name = "CampusWallet";

    let upiString = `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&cu=INR`;

    let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + encodeURIComponent(upiString);

    document.getElementById("qrImage").src = qrURL;

    // ✅ Update total balance
    Total_balance = Total_balance + amount;

    // ✅ Update balance display
    document.getElementById("showbalance").innerText = Total_balance;
}