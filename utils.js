// generate token using secret from process.env.JWT_SECRET
let jwt = require('jsonwebtoken');

// generate token and return it
function generateToken(user) {
    //1. Don't use password and other sensitive fields
    //2. Use the information that are useful in other parts
    if (!user) return null;

    let u = {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email
        // isAdmin: user.isAdmin
    };

    return jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
}

// return basic user details
function getCleanUser(user) {
    if (!user) return null;

    return {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
        // isAdmin: user.isAdmin
    };
}

module.exports = {
    generateToken,
    getCleanUser
}
