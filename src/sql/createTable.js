module.exports = {
  garage: `CREATE TABLE garage(
        garageID int NOT NULL AUTO_INCREMENT,
        party varchar(100),
        userID varchar(255),
        password int NOT NULL,
        user_name varchar(255),
        garage_name varchar(255),
        email varchar(255),
        garage_type varchar(255),
        address_number varchar(10),
        moo varchar(10),
        alley varchar(100),
        road varchar(100),
        sub_district varchar(100),
        district varchar(100),
        province varchar(100),
        pos_code varchar(100),
        address_map varchar(255),
        registration_date DATETIME,
        on_time varchar(100),
        off_time varchar(100),
        tel varchar(30),
    
        PRIMARY KEY (garageID)
  )`,

  member: `CREATE TABLE member(
        memberID int NOT NULL AUTO_INCREMENT,
        party varchar(100),
        member_tel varchar(100),
        member_name varchar(255),
        member_ads varchar(255),
        shop_register varchar(255),
        registration_date DATETIME,

        PRIMARY KEY (memberID)
  )`,

  repairDetails: `CREATE TABLE repairdetails(
        detailsID int NOT NULL AUTO_INCREMENT,
        shop_repair varchar(255),
        member_tel varchar(100), 
        device_type varchar(255),
        device varchar(255),
        details varchar(255),
        repair_date DATETIME,
        status varchar(100),

        PRIMARY KEY (detailsID)
        
  )`,

  reported: `CREATE TABLE reported(
        reportID int NOT NULL AUTO_INCREMENT,
        party varchar(100),
        report_detail varchar(255),
        report_date DATETIME,

        PRIMARY KEY (reportID)
  )`,
};
