import bcryptjs from 'bcryptjs';
async function login(password) {
    const passwordInDB = '$2a$10$5J7pKczCU4VfTFD6asY5MOEmx4bLl6z/FWgpQtd8jlQ7fyAv4gLia';
    const salt  = passwordInDB.slice(0,29)
    const isValid = await bcryptjs.compare(password, passwordInDB);
    console.log(isValid);
}
login('secret123');