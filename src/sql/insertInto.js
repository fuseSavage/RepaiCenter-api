module.exports = {
  insert_garage: `INSERT INTO garage 
    (
        garageID,
        party,
        password,
        user_name,
        garage_name,
        email,
        garage_type,
        address_number,
        moo,
        alley,
        road,
        sub_district,
        district,
        province,
        pos_code,
        address_map,
        registration_date,
        on_time,
        off_time,
        tel
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,

  insert_member: `INSERT INTO member 
    (
        party,
        member_tel,
        member_name,
        member_ads,
        shop_register,
        registration_date
    ) VALUES (?)`,

  insert_detail: `INSERT INTO repairdetails 
    (
        garageID,
        member_tel,
        device_type,
        device,
        details,
        repair_date,
        status,
        price
    ) VALUES (?,?,?,?,?,?,?,?)`,

  insert_reported: `INSERT INTO reported
  (
    party,
    user_report,
    name,
    report_detail,
    report_tel,
    report_date
  ) VALUES (?)`
};
