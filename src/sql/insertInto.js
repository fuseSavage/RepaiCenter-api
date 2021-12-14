module.exports = {
    insert_garage: `INSERT INTO garage 
    (
        party,
        userID,
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
    ) VALUES (?)`
}