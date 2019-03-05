function notifyAll(funsms, fnEmail) {
    console.log("Satrting  Application");

    setTimeout(() => {
        funsms();
        fnEmail();
    }, 3000);
}
notifyAll(() => {
    console.log("SMS Send Successfully");
}, () => {
    console.log("Email Send Successfully");
});
console.log("Application End");