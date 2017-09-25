var httpMsgs = require("../core/httpMsgs");
var util = require("util");
var request = require("request");


//Read All
exports.getList = function (req, res) {
    function constructUrl() {
        var host = 'http://localhost:4080/Patient';
        //var host = 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open/Patient';
        
        return host;
    }
    

    request.get(constructUrl(), function (error, response, body) {
        if (!error && response.statusCode === 200) {
           console.log(body);
           httpMsgs.sendJson(res,body);
        } else {
            httpMsgs.show500(req, res, error);
        }
    });
};

//Read One
exports.get = function (req, res, actualPatientID) {
    //db.executeSql("SELECT * FROM Patient WHERE PatientId =" + patientid, function (data, err) { //E186253D-792A-4A2B-8459-0361AF8A5BC6
        function constructUrl() {
            //var host = 'https://sb-fhir-stu3.smarthealthit.org/smartstu3/open/Patient/' + actualPatientID;
            
            var host = 'http://localhost:4080/Patient/' + actualPatientID;

            return host;
        }

    request.get(constructUrl(), function (error, response, body) {
        if (!error && response.statusCode === 200) {
           console.log(body);
           httpMsgs.sendJson(res,body);
        } else {
            httpMsgs.show500(req, res, error);
        }
    });



};

//Create
exports.add = function (req, resp, reqBody) {
    try {
        //if (!reqBody) throw new Error("Input not valid");
        //var data = JSON.parse(reqBody);
        var data = "";
        
        
            console.log(data);
            if (data) {
              //Then do something
            }
            
            console.log("debugging");
            
            
            if (data) {
                var sql = "INSERT INTO Patient  VALUES";
                sql += util.format();
                
                db.executeSql(sql, function (data, err) {
                    if (err) {
                        httpMsgs.show500(req, resp, err);
                    }
                    else {
                        httpMsgs.send200(req, resp);
                    }
                });
            }
            else {
                throw new Error("Input not valid");
            }
       
        }
         
    catch (ex) {
        httpMsgs.show500(req, resp, ex);
    }
};

//Delete
exports.delete = function (req, resp, reqBody) {
    try {
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if (data) {
            if (!data.PatientId) throw new Error("PatientId not provided");
            
            var sql = "DELETE FROM Patient ";
            
            sql += "WHERE PatientId = " + data.PatientId;
            
            db.executeSql(sql, function (data, err) {
                if (err) {
                    httpMsgs.show500(req, resp, err);
                }
                else {
                    httpMsgs.send200(req, resp);
                }
            });
        }
        else {
            throw new Erro("Input not valid");
        }
    }
    catch (ex) {
        httpMsgs.show500(req, resp, ex);
    }
};

//Update
exports.update = function (req, resp, reqBody) {
    //try {
    //    if (!reqBody) throw new Error("Input not valid");
    //    var data = JSON.parse(reqBody);
    //    if (data) {
    //        if (!data.PatientId) throw new Error("PatientId not provided");
            
    //        //var sql = "UPDATE PatientId SET ";
            
    //        //var isDataProvided = false;
    //        //if (data.Hospital) {
    //        //    sql += " Hospital = '" + data.Hospital + "',";
    //        //    isDataProvided = true;
    //        //}
            
    //        //if (data.Title) {
    //        //    sql += " Title = '" + data.Title + "',";
    //        //    isDataProvided = true;
    //        //}
            
    //        //if (data.Forenames) {
    //        //    sql += " Forenames = '" + data.Forenames + "',";
    //        //    isDataProvided = true;
    //        //}
                       
            
    //        sql = sql.slice(0, -1); //remove last comma
    //        sql += "WHERE HospitalNumber = " + data.HospitalNumber;
            
    //        db.executeSql(sql, function (data, err) {
    //            if (err) {
    //                httpMsgs.show500(req, resp, err);
    //            }
    //            else {
    //                httpMsgs.send200(req, resp);
    //            }
    //        });
    //    }
    //    else {
    //        throw new Error("Input not valid");
    //    }
    //}
    //catch (ex) {
    //    httpMsgs.show500(req, resp, ex);
    //}
};