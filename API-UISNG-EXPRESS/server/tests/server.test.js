const expect = require('expect');
const request = require('supertest');

const {
    app
} = require('./../server');
const {
    Todo
} = require('../../models/todos');
const {
    User
} = require('../../models/users');
const {
    Student
} = require('../../models/StudentModel');
const {
    Department
} = require('../../models/Department');
const {
    Employee
} = require('../../models/Employee');
const {
    Parent
} = require('../../models/ParentInfo');
const {
    HolidayInfo
} = require('../../models/AcademicHolidayModel');
const {
    bookInfo
} = require('../../models/BookInfo');
const {
    AnnualActivity
} = require('../../models/AnnualActivityModel');
beforeEach((done) => {
    AnnualActivity.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    bookInfo.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    HolidayInfo.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    Parent.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    Employee.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    Department.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    Student.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    User.remove({}).then(() => {
        done();
    })
});
beforeEach((done) => {
    Todo.remove({}).then(() => {
        done();
    })
});
describe('POST/AnnualActivity', () => {
    var id = 21;
    var createdBy = 23;
    var createTime = 23;
    var schoolId = 123;
    var partClassStartId = 23;
    var partClassEndId = 23;
    var partSectionStartId = 23;
    var partSectionEndId = 23;
    var activityDescription = "Holi Celebration";
    var participationType = "All Balihans Employees";
    var startDate = "1970-01-01T00:00:00.023Z";
    var endDate = "2019-03-20T09:35:56.023Z";
    var awardDescription = "First Winner will get Gold Loan";
    var session = "2018-19";
    var partSectionEndName = "A";
    var partClassEndName = "10";
    var partClassStartName = "1";
    var partSectionStartName = "D";
    var activityTitle = "Holi Celebration";

    it('it SHould create new request to post AnnualActivity ', (done) => {
        request(app).post('/annualActivityInfo').send({
                id,
                createdBy,
                createTime,
                schoolId,
                partClassStartId,
                partClassEndId,
                partSectionStartId,
                partSectionEndId,
                activityDescription,
                participationType,
                startDate,
                endDate,
                awardDescription,
                session,
                partSectionEndName,
                partClassEndName,
                partClassStartName,
                partSectionStartName,
                activityTitle

            }).expect(200)
            .expect((res) => {
                expect(res.body.id).toBe(id);
            }).end((err, res) => {
                if (err) {
                    return done(err);
                }
                AnnualActivity.find().then((annualActivities) => {
                    expect(annualActivities.length).toBe(1);
                    expect(annualActivities[0].id).toBe(id);
                }).catch((e) => {
                    done(e);
                })
            })
    });
    it('it should not create new request To Post Annual Actity ', (done) => {
        request(app).post('/annualActivityInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                AnnualActivity.find().then((actitis) => {
                    expect(actitis.length).toBe(0);
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('POST/bookInfo', () => {
    var _id = 123;
    var createTime = "2019-03-19T11:53:39.400Z";
    var createdBy = "22-11-2018";
    var schoolId = 213;
    var authorName = "Akash";
    var bookName = "Java Programming";
    var publisher = "Abahy";
    var session = "2018-19";
    var price = "123";
    it("it should create new Book info Post Api", (done) => {
        request(app).post('/bookInfo').send({
                _id,
                createTime,
                createdBy,
                schoolId,
                authorName,
                bookName,
                publisher,
                session,
                price

            }).expect(200)
            .expect((res) => {}).end((err, res) => {
                if (err) {
                    return done(err);
                }
                bookInfo.find().then((booksinfos) => {
                    expect(booksinfos.length).toBe(1);
                    expect(booksinfos[0].authorName).toBe(authorName);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
    it('it should not create post request for bookInfo', (done) => {
        request(app).post('/bookInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                bookInfo.find().then((booksinf) => {
                    expect(booksinf.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('POst/HolidayInfo', () => {
    var _id = 123;
    var createTime = "2019-03-19T10:33:52.646Z";
    var startDate = "2018-12-11T18:30:00.000Z";
    var endDate = "2018-12-11T18:30:00.000Z";
    var schoolId = 123;
    var holidayTypeId = 12345;
    var holidayImagePath = "Holiday Image";
    var session = "2018-19";
    var createdBy = 1234;
    var holidayDescription = "Holiday Description Fields";
    var holidayType = "Academic Holiday";
    var holidayTypeTitle = "Academic Holiday";
    var holidayTitle = "Holiday Title";
    it('It should Create new Post request of HolidayInfo', (done) => {
        request(app).post('/HolidayInfo').send({
                _id,
                createTime,
                startDate,
                endDate,
                schoolId,
                holidayTypeId,
                holidayImagePath,
                session,
                createdBy,
                holidayDescription,
                holidayType,
                holidayTypeTitle,
                holidayTitle
            }).expect(200)
            .expect((res) => {
                expect(res.body.holidayTitle).toBe(holidayTitle)
            }).end((err, res) => {
                if (err) {
                    return done(err);
                }
                HolidayInfo.find().then((holidays) => {
                    expect(holidays.length).toBe(1);
                    expect(holidays[0].holidayTitle).toBe(holidayTitle);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
    it('it Should not create Holidays Post Request', (done) => {
        request(app).post('/HolidayInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                HolidayInfo.find().then((holidays) => {
                    expect(holidays.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('Post/Parent', () => {
    var fatherName = "Akashay Maity";
    var motherName = "Soni Maity";
    var guardianName = "Akzshay Maity";
    var relationship = "son";
    var email = "akashayMaity@gmail.com";
    var phone = "7890789078";
    var alternateNumber = "9809809801";
    var adharNumber = "12345678910";
    var currentAddress = "Bangalore,Karnataka,India";
    var permanentAddress = "Bangalore,Karnataka,India";
    var username = "akshay22uj";
    var password = "akashay22uj";
    it('it should create new Parent list', (done) => {
        request(app).post('/parentInfo').send({
                fatherName,
                motherName,
                guardianName,
                relationship,
                email,
                phone,
                alternateNumber,
                adharNumber,
                currentAddress,
                permanentAddress,
                username,
                password
            }).expect(200)
            .expect((res) => {
                expect(res.body.fatherName).toBe(fatherName);
            }).end((err, res) => {
                if (err) {
                    return done(err);
                }
                Parent.find().then((parents) => {
                    expect(parents.length).toBe(1);
                    expect(parents[0].fatherName).toBe(fatherName);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
    it('it should not create prentInfo with invalid body', (done) => {
        request(app).post('/parentInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Parent.find().then((parents) => {
                    expect(parents.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('POST/Employee', () => {
    var name = "ashok";
    var id = 12;
    var address = "Bangalore,Karnataka,India";
    var phone = "7736385681";
    var email = "ashokok@gmail.com";
    var country = "India";
    it('It should post new Request for Employee', (done) => {
        request(app).post('/employeeInfo').send({
                name,
                id,
                address,
                phone,
                email,
                country
            }).expect(200)
            .expect((res) => {
                expect(res.body.name).toBe(name);
            }).end((err, res) => {
                if (err) {
                    return done(err);
                }
                Employee.find().then((emps) => {
                    expect(emps.length).toBe(1);
                    expect(emps[0].name).toBe(name);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
    it('should not create Employee with invalid body ', (done) => {
        request(app).post('/employeeInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Employee.find().then((depts) => {
                    expect(depts.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('POst/Department', () => {
    it('create new post request for Department', (done) => {
        var name = "Ashok";
        var address = "Bangalore,India";
        var phone = "8891288912";
        request(app).post('/departmentInfo').send({
                name,
                address,
                phone,
            }).expect(200)
            .expect((res) => {}).end((err, res) => {
                if (err) {
                    return done(err);
                }
                Department.find().then((depts) => {
                    expect(depts.length).toBe(1);
                    expect(depts[0].name).toBe(name);
                    done();
                }).catch((e) => {
                    done(e);
                })
            });

    });
    it('should not create departmentInfo with invalid body ', (done) => {
        request(app).post('/departmentInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Department.find().then((depts) => {
                    expect(depts.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('Post/Student', () => {
    it('creates new request for Student', (done) => {
        var firstName = "ashokasd";
        var lastName = "Kumar";
        var email = "ashokkk@gmail.com";
        var phone = "8989898989";
        var presentAddress = "Bangalore";
        var permanentAddress = "Bangalore";
        var adhar = "78787878788";
        request(app).post('/stuentInfo').send({
                firstName,
                lastName,
                email,
                phone,
                presentAddress,
                permanentAddress,
                adhar
            }).expect(200)
            .expect((res) => {
                expect(res.body.firstName).toBe(firstName);
            }).end((err, res) => {
                if (err) {
                    return done(err);
                }
                Student.find().then((students) => {
                    expect(students.length).toBe(1);
                    expect(students[0].firstName).toBe(firstName);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
    it('it should not create request with invalid body', (done) => {
        request(app).post('/stuentInfo').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Student.find().then((students) => {
                    expect(students.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })
    });
});
describe('Post/users', () => {
    it('it should createb new User', (done) => {
        var name = "Ashok";
        var email = "ashiokj@gmail.com";
        var phone = "787878787878";
        request(app).post('/users').send({
                name,
                email,
                phone
            }).expect(200)
            .expect((res) => {
                expect(res.body.name).toBe(name);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                User.find().then((users) => {
                    expect(users.length).toBe(1);
                    expect(users[0].name).toBe(name);
                    done();
                }).catch((e) => done(e));
            })
    });
    it('should not create request with invalid', (done) => {
        request(app).post('/users').send({}).expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                User.find().then((userss) => {
                    expect(userss.length).toBe(0);
                    done();
                }).catch((e) => {
                    done(e);
                })
            })

    })
});
describe('POST/todos', () => {
    it('should create a new todo', (done) => {
        var text = 'first Example of postman';
        request(app).post('/todos')
            .send({
                text
            }).expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            })
    });
});