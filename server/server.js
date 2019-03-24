var express = require('express');
const _ = require('lodash');
var bodyparser = require('body-parser');
var {
    ObjectID
} = require('mongodb');
var {
    mongoose
} = require('../db/mongoose');
var {
    Todo
} = require('../models/todos');
var {
    User
} = require('../models/users');
var {
    Student
} = require('../models/StudentModel');
var {
    Department
} = require('../models/Department');
var {
    Employee
} = require('../models/Employee');
var {
    Parent
} = require('../models/ParentInfo');
var {
    HolidayInfo
} = require('../models/AcademicHolidayModel');
var {
    bookInfo
} = require('../models/BookInfo');
var {
    AnnualActivity
} = require('../models/AnnualActivityModel');
var {
    AssignClass
} = require('../models/AssignedClassModel');
var app = express();
const port = process.env.port || 3000;
app.use(bodyparser.json());
app.post('/assginClass', (req, res) => {
    console.log(req.body);
    var assignDate = new AssignClass({
        classId: req.body.classId,
        subjectId: req.body.subjectId,
        classSubjectMapId: req.body.classSubjectMapId,
        subjectName: req.body.subjectName,
        classNum: req.body.classNum,
        classSection: req.body.classSection,
        classRoom: req.body.classRoom,
        isClassTeacher: req.body.isClassTeacher,
        sessionYear: req.body.sessionYear,
        periodType: req.body.periodType,
        classStartTime: req.body.classStartTime,
        classEndTime: req.body.classEndTime,
        onMonday: req.body.onMonday,
        onTuesday: req.body.onTuesday,
        onWednesday: req.body.onWednesday,
        onthursday: req.body.onthursday,
        onFriday: req.body.onFriday,
        onSaturday: req.body.onSaturday,
        maxStrength: req.body.maxStrength
    });
    assignDate.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getassignClass', (req, res) => {
    console.log(req.body);
    AssignClass.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getassignClass/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    } else {
        AssignClass.findById(id).then((doc) => {
            if (!doc) {
                return res.status(404).send();
            }
            res.send({
                doc
            });
        }).catch((e) => {
            res.status(404).send();
        })
    }

});
app.delete('/deleteassignClass/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    } else {
        AssignClass.findByIdAndRemove(id).then((doc) => {
            if (!doc) {
                return res.status(404).send();
            }
            res.send({
                doc
            });
        }).catch((e) => {
            res.status(404).send();
        })
    }

});
app.patch('/updateassignClass/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
    var body = _.pick(req.body, ['classSubjectMapId', 'subjectId', 'classId']);
    body.classSubjectMapId = 1230;
    body.subjectId = 2340;
    body.classId = 1230;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    AssignClass.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            return res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});


app.post('/holidayInfo', (req, res) => {
    console.log(req.body);
    var holidayDate = new HolidayInfo({
        id: req.body.id,
        createdBy: req.body.createdBy,
        createTime: req.body.createTime,
        holidayDescription: req.body.holidayDescription,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        schoolId: req.body.schoolId,
        holidayType: req.body.holidayType,
        holidayTypeId: req.body.holidayTypeId,
        holidayTypeTitle: req.body.holidayTypeTitle,
        holidayTitle: req.body.holidayTitle,
        holidayImagePath: req.body.holidayImagePath,
        session: req.body.session
    })
    holidayDate.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    })
});
app.get('/getHolidayInfo', (req, res) => {
    console.log(req.body);
    HolidayInfo.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getSingleHolidayInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    HolidayInfo.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.delete('/deletetHolidayInfo/:id', (req, res) => {
    var id = req.params.id;
    console.log("id :" + id);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    HolidayInfo.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }, (e) => {
        res.status(404).send();
    });

});
app.patch('/updateHolidayInfo/:id', (req, res) => {
    var id = req.params.id;
    console.log("id " + id);
    var body = _.pick(req.body, ["schoolId", "holidayTypeId", "session", "holidayTitle"]);
    body.schoolId = 1234;
    body.holidayTypeId = 1234;
    body.session = "2019-20";
    body.holidayTitle = "Academic Holiday to All";
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    HolidayInfo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }, (e) => {
        res.status(404).send();
    });

});
app.post('/annualActivityInfo', (req, res) => {
    console.log(req.body);
    var annualData = new AnnualActivity({
        id: req.body.id,
        createdBy: req.body.createdBy,
        createTime: req.body.createTime,
        schoolId: req.body.schoolId,
        activityTitle: req.body.activityTitle,
        partClassStartId: req.body.partClassStartId,
        partClassEndId: req.body.partClassEndId,
        partSectionStartId: req.body.partSectionStartId,
        partSectionEndId: req.body.partSectionEndId,
        activityDescription: req.body.activityDescription,
        participationType: req.body.participationType,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        awardDescription: req.body.awardDescription,
        session: req.body.session,
        partSectionEndName: req.body.partSectionEndName,
        partClassEndName: req.body.partClassEndName,
        partClassStartName: req.body.partClassStartName,
        partSectionStartName: req.body.partSectionStartName
    });
    annualData.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    });

});
app.get('/getActivityInfo', (req, res) => {
    console.log(req.body);
    AnnualActivity.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getSingleActivity/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    AnnualActivity.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.delete('/deleteActivityInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    AnnualActivity.findByIdAndDelete(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.patch('/updateActivityInfo/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["schoolId", "activityDescription", "participationType", "awardDescription"]);
    body.schoolId = 125;
    body.activityDescription = "270 Annual Activity for Students";
    body.participationType = "All Students of Our Collge";
    body.awardDescription = "First Winner will get Gold Loan";
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    AnnualActivity.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});

app.post('/bookInfo', (req, res) => {
    console.log(req.body);
    var myBookDate = new bookInfo({
        _id: req.body._id,
        createTime: req.body.createTime,
        createdBy: req.body.createdBy,
        schoolId: req.body.schoolId,
        authorName: req.body.authorName,
        bookName: req.body.bookName,
        price: req.body.price,
        publisher: req.body.publisher,
        session: req.body.session
    });
    myBookDate.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    })
});
app.get('/getbookInfo', (req, res) => {
    console.log(req.body);
    bookInfo.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getSingleBookInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    bookInfo.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.delete('/deleteSingleBookinfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    bookInfo.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.patch('/updateSingleBookinfo/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["schoolId", "authorName", "bookName", "publisher"]);
    body.schoolId = 2019;
    body.authorName = "A.N Kamathane";
    body.bookName = "C++ Programming";
    body.publisher = "Kamathane";
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    bookInfo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.post('/parentInfo', (req, res) => {
    console.log(req.body);

    var parentData = new Parent({
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        guardianName: req.body.guardianName,
        relationship: req.body.relationship,
        email: req.body.email,
        phone: req.body.phone,
        alternateNumber: req.body.alternateNumber,
        adharNumber: req.body.adharNumber,
        currentAddress: req.body.currentAddress,
        permanentAddress: req.body.permanentAddress,
        username: req.body.username,
        password: req.body.password
    });
    parentData.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    })
});
app.get('/getParentInfo', (req, res) => {
    console.log(req.body);
    Parent.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getSingleParentInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Parent.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.patch('/upadteParentInfo/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["fatherName", "motherName", "guardianName", "email"]);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    body.fatherName = "Ashok Kumar";
    body.motherName = "Reena Verma";
    body.guardianName = "Ashok";
    body.email = "ashokok@gmail.com"
    Parent.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })

});

app.post('/employeeInfo', (req, res) => {
    console.log(req.body);
    var empData = new Employee({
        name: req.body.name,
        id: req.body.id,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        country: req.body.country
    });
    empData.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    });
});
app.get('/getEmployeeInfo', (req, res) => {
    console.log(req.body);
    Employee.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getSingleEmployeeInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Employee.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.post('/deleteEmployeeInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Employee.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.patch('/updateEmployeeInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    } else {
        var body = _.pick(req.body, ["name", "address", "email"]);
        body.name = "Ashok Kumar";
        body.address = "Bangalore";
        body.email = "ashokk@gmail.com";
        Employee.findByIdAndUpdate(id, {
            $set: body
        }, {
            new: true
        }).then((doc) => {
            if (!doc) {
                res.status(404).send();
            }
            res.send(doc);
        }).catch((e) => {
            res.status(404).send();
        })
    }

});
app.post('/departmentInfo', (req, res) => {
    console.log(req.body);
    var deptData = new Department({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    });
    deptData.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    });
});
app.get('/getDepartment', (req, res) => {
    console.log(req.body);
    Department.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getParentInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Department.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.delete('/deleteDepartmentInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Department.findByIdAndRemove(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.patch('/updateDepartmentInfo/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["name", "address", "phone"]);
    body.name = "Ashok Kumar";
    body.address = "ashokok@gmail.com";
    body.phone = "9876786781";
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Department.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    });
});
app.post('/stuentInfo', (req, res) => {
    console.log(req.body);
    var studentData = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,

        presentAddress: req.body.presentAddress,
        permanentAddress: req.body.permanentAddress,
        adhar: req.body.adhar
    });
    studentData.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
app.get('/getStudent', (req, res) => {
    console.log(req.body);
    Student.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.get('/getSingleStudentInfo/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Student.findById(id).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.patch('/updateStudentInfo/:id', (req, res) => {
    var id = req.params.id
    var body = _.pick(req.body, ["firstName", "lastName", "email", "phone"]);
    body.firstName = "Ashok";
    body.lastName = "Kumar";
    body.email = "ashokkumar@gmail.com";
    body.phone = "9879879876";
    if (!ObjectID.isValid()) {
        return res.status(404).send();
    }
    Student.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((doc) => {
        if (!doc) {
            res.status(404).send();
        }
        res.send(doc);
    }).catch((e) => {
        res.status(404).send();
    })
});
app.post('/users', (req, res) => {
    console.log(req.body);
    var users = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });
    users.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
app.get('/getuser', (req, res) => {
    console.log(req.boy);
    User.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.post('/todos', (req, res) => {
    console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
app.get('/getTodos', (req, res) => {
    console.log(req.body);
    Todo.find().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});
app.listen(port);
console.log("listening at http://localhost:" + port);
module.exports = {
    app: app
}