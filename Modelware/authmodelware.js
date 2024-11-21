// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET;
// console.log(process.env.JWT_SECRET);

// if (!JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in the environment variables.');
// }

// const authenticateToken = (req, res, next) => {
//   try {
//     // Extract the token from the Authorization header
//     const authHeader = req.headers['authorization'];
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ error: 'Authorization token missing or malformed.' });
//     }

//     const token = authHeader.split(' ')[1];

//     // Verify the token
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ error: 'Invalid or expired token.' });
//       }

//       // Attach the decoded user data to the request object
//       req.user = decoded;
//       next();
//     });
//   } catch (error) {
//     console.error('Error in authentication middleware:', error);
//     res.status(500).json({ error: 'Server error during authentication.' });
//   }
// };

// module.exports = authenticateToken;
