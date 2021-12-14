const express = require("express");

const { registerGarage } = require("../services/database");
const {
  callRegisterGarage,
  callGetallGarage,
  callGetGarage,
} = require("../services/funcCallback");
const responseCode = require("../configs/responseCode");

const router = express.Router();

// Insert garage
router.post("/insert", async (request, response, next) => {
  try {
    let data = request.body;

    callRegisterGarage(data, function (err, datas, status) {
      if (status == responseCode.SUCCESS) {
        response.json({
          code: 200,
          message: "insert garage success",
          data: datas,
        });
      } else {
        response.json({
          code: 204,
          message: "มี UserID นี้แล้ว",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Get All Garage
router.get("/all", (request, response, next) => {
  try {
    callGetallGarage(function (err, datas, status) {
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

// Get All Garage
router.get("/getgarage", (request, response, next) => {
  let data = request.body;
  // console.log(data)
  try {
    callGetGarage(data, function (err, datas, status) {
      if (status == responseCode.SUCCESS) {
        response.json({
          code: 200,
          message: "get one garage success",
          total: datas.length,
          data: datas,
        });
      } else {
        response.json({
          code: 500,
          message: "ไม่มี UsesID นี้อยู่ในตาราง",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
