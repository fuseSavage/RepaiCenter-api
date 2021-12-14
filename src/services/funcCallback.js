
const responseCode = require("../configs/responseCode");

const { getAllGarage, getGarage, registerGarage } = require("./database");




//fucntion callback Insert Garage
async function callRegisterGarage(data, callback) {

  try {
    registerGarage(data, function (err, result, status) {
      if (err || !result.length) return callback("error or no results");

      result = result.map((obj) => obj);

      callback(null, result, status);
    });

  } catch (err) {
    console.log(err);
  }
}



//fucntion callback get all garage
async function callGetallGarage(callback) {
  try {
    getAllGarage("result", function (err, result) {
      if (err || !result.length) return callback("error or no results");

      result = result.map((obj) => obj);

      callback(null, result, responseCode.SUCCESS);
    });

  } catch (err) {
    console.log(err);
  }
}

//fucntion callback get one garage
async function callGetGarage(data, callback) {
  // console.log(data)
  try {
    getGarage(data, function (err, result) {
      if (err || !result.length) return callback("error or no results");

      result = result.map((obj) => obj);

      callback(null, result, responseCode.SUCCESS);
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  callRegisterGarage,
  callGetallGarage,
  callGetGarage,

};
