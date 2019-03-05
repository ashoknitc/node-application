function notifiAll(funsms, fnemail) {
    console.log("Starting Notification Process");
    funsms();
    fnemail();
}
notifiAll(() => {
    console.log("Sms Send Successfully");
}, () => {
    console.log("Email Send Successfully");
});
console.log("Program Ends");