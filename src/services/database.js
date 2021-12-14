const { query } = require("express");
const mysql = require("mysql");

const constants = require("../configs/constants");
const responseCode = require("../configs/responseCode");

const identify = require("sql-query-identifier");
var sql = require("sql-query"),
  sqlQuery = sql.Query(); //for dialect: sql.Query('postgresql')

// Create a connection to the database
const db = mysql.createConnection({
  host: constants.HOST,
  user: constants.USER,
  password: constants.PASSWORD,
  database: constants.DB,
});

// Import SQL Commmand
const createTable = require("../sql/createTable");
const insertInto = require("../sql/insertInto");

// DataBase Connected
db.connect((err) => {
  try {
    if (err) throw err;
    console.log("connected!!");

    // Show All Table in DataBase
    db.query("SHOW TABLES", (err, result) => {
      if (err) throw err;
      let allTable = [];
      for (let i = 0; i < result.length; i++) {
        allTable.push(result[i].Tables_in_repaircenter_db);
      }

      // Check Table garage in DataBase
      if (allTable.includes("garage") == false) {
        // Create Table
        db.query(createTable.garage, (err) => {
          if (err) throw err;
          console.log("Created table garage successfully.");
        });
      } else {
        console.log("database there is already this table.");
      }

      // Check Table member in DataBase
      if (allTable.includes("member") == false) {
        // Create Table
        db.query(createTable.member, (err) => {
          if (err) throw err;
          console.log("Created table member successfully.");
        });
      } else {
        console.log("database there is already this table.");
      }

      // Check Table repairDetails in DataBase
      if (allTable.includes("repairdetails") == false) {
        // Create Table
        db.query(createTable.repairDetails, (err) => {
          if (err) throw err;
          console.log("Created table repairDetails successfully.");
        });
      } else {
        console.log("database there is already this table.");
      }

      // Check Table reported in DataBase
      if (allTable.includes("reported") == false) {
        // Create Table
        db.query(createTable.reported, (err) => {
          if (err) throw err;
          console.log("Created table reported successfully.");
        });
      } else {
        console.log("database there is already this table.");
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// insert garage in RepairCenterDB
function registerGarage(data, callback) {
  values = [
    data.party,
    data.userID,
    data.password,
    data.user_name,
    data.garage_name,
    data.email,
    data.garage_type,
    data.address_number,
    data.moo,
    data.alley,
    data.road,
    data.sub_district,
    data.district,
    data.province,
    data.pos_code,
    data.address_map,
    new Date(),
    data.on_time,
    data.off_time,
    data.tel,
  ];
  try {
    let sql = `SELECT userID FROM garage`;
    db.query(sql, (error, result) => {
      if (error) {
        console.log("===>>> Error", err);
        ``;
      } else {
        // console.log(result)
        let listUID = [];
        result.forEach((doc) => {
          listUID.push(doc.userID);
        });

        const checkUID = listUID.includes(data.userID);
        if (checkUID === false) {
          db.query(insertInto.insert_garage, [values], (err, result) => {
            if (err) {
              return callback(err);
            } else {
              callback(null, values, responseCode.SUCCESS);
              // console.log("5555555");
            }
          });
        } else {
          // console.log("มี userID นี้แล้ว");
          callback(null, result, responseCode.SUCCESS_NO_CONTENT);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
}

// get All Garage
function getAllGarage(data, callback) {
  try {
    db.query("SELECT * FROM garage", function (err, rows) {
      if (err) return callback(err);
      callback(null, rows, responseCode.SUCCESS);
    });
  } catch (err) {
    console.log(err);
  }
}

// get one Garage
function getGarage(data, callback) {
  // console.log(data.userID);
  let sql = `SELECT * FROM garage WHERE userID = "${data.userID}"`;
  try {
    db.query(sql, function (err, rows) {
      if (err) return callback(err);
      callback(null, rows, responseCode.SUCCESS);
    });
  } catch (err) {
    console.log(err);
  }
}

// insert Product
async function insertProduct(data) {
  console.log("register ", data);
  try {
    db.query("SELECT * FROM repairapi", (err, result) => {
      if (err) {
        console.log("===>>> Error");
      } else {
        console.log("===>> suss", result);
      }
    });

    return { status: responseCode.SUCCESS };
  } catch (err) {
    console.log(err);
  }
}

// Get All Member
async function getallMember() {
  try {
    db.query("SELECT * FROM repairapi", (err, result) => {
      if (err) {
        console.log("===>>> Error");
      } else {
        console.log("===>> suss", result);
      }
    });

    return { status: responseCode.SUCCESS };
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  registerGarage,
  getAllGarage,
  getGarage,
  insertProduct,
  getallMember,
};
