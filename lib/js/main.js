
appUrls = {
    "Customer" : "https://play.google.com/store/apps/details?id=com.bKash.customerapp&hl=bn&gl=US",
    "Agent" : "https://play.google.com/store/apps/details?id=com.bkash.businessapp&hl=bn&gl=US",
    "Merchant" : "https://play.google.com/store/apps/details?id=com.bKash.merchantapp&hl=bn&gl=US"
}

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
        let getName = event.target.innerText;
        window.open(appUrls[getName]);
    })
});