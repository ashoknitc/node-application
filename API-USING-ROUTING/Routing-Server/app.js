var express = require('express');
var app = express();


// app.use('/', (req, res, next) => {
//     res.send('site is under maintainenec');
//     next();
// });

app.use("/academic-holiday-service", require('../Controllers/AcademicHolidayController'));
app.use("/annual-activity-service", require('../Controllers/AnnualActivityController'));
app.use("/board-class-service", require('../Controllers/Board-Class-Controller'));
app.listen(3000);
console.log("listening at http://localhost:3000");