window.onload = function () {

    let storedBalance = sessionStorage.getItem("balanceObject");

    if (storedBalance === null) {
        window.location.href = "User.html";
        return;
    }

    document.getElementById("showbalance").innerText = storedBalance;
};
function generateQR() {
    let amount = document.getElementById("amount").value;

    let upiID = "rudranil5@pnb";  // 🔁 Replace with your UPI ID
    let name = "CampusWallet";

    let upiString = `upi://pay?pa=rudranil5@pnb&pn=NAME&am=2&cu=INR`;

    let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" 
                + encodeURIComponent(upiString);

    document.getElementById("qrImage").src = qrURL;
}