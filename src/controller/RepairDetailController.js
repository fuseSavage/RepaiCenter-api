const express = require("express");

const {
  callRepairDetail,
  callGetallDetail,
  callGetByMember,
  callGetByGarage,
} = require("../services/funcCallback");
const responseCode = require("../configs/responseCode");

const router = express.Router();

// Insert Member
router.post("/insert", async (request, response, next) => {
  try {
    let data = request.body;

    callRepairDetail(data, function (err, datas, status) {
      if (status == responseCode.SUCCESS) {
        response.json({
          code: 200,
          message: "insert success",
          data: datas,
        });
      } else {
        response.json({
          code: 204,
          message: "sql is not working!!",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Get All Detail
router.get("/all", (request, response, next) => {
  try {
    callGetallDetail( function (err, datas, status) {
      //   console.log(status);
      if (status == responseCode.SUCCESS) {
        response.json({
          code: 200,
          message: "get all success",
          total: datas.length,
          data: datas,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Get By Member
router.get("/getbymember", (request, response, next) => {
  let data = request.body;
  // console.log(data)
  try {
    callGetByMember(data, function (err, datas, status) {
      if (status == responseCode.SUCCESS) {
        response.json({
          code: 200,
          message: "get data success",
          total: datas.length,
          data: datas,
        });
      } else {
        response.json({
          code: 500,
          message: "ไม่มี member นี้อยู่ในตาราง",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Get By Member
router.get("/getbygarage", (request, response, next) => {
  let data = request.body;
  // console.log(data)
  try {
    callGetByGarage(data, function (err, datas, status) {
      if (status == responseCode.SUCCESS) {
        response.json({
          code: 200,
          message: "get data success",
          total: datas.length,
          data: datas,
        });
      } else {
        response.json({
          code: 500,
          message: "ไม่มี garage นี้อยู่ในตาราง",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
