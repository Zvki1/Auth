// middleware/verifyToken.js

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Récupérer le token d'authentification depuis les en-têtes de la requête
    const token = req.headers.authorization;
    
    // Vérifier si le token est présent
    if (!token) { 
        return res.status(401).json({ error: 'Token not provided' });
    }

    // Vérifier et décoder le token
    jwt.verify(token.split(' ')[1], 'Zvki1', (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        } else {
            // Ajouter les informations de l'utilisateur au corps de la requête
            req.user = decoded;
            // Passer à la prochaine fonction middleware
            next();
        }
    });
};

module.exports = verifyToken;
