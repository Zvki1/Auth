const Alert = require("../models/alerteSchema");
const jwt = require("jsonwebtoken");

const getAlerts = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const mainUser = jwt.verify(token, 'Zvki1');
        const mainUserId = mainUser.userId;
        const alerts = await Alert.find({ managerResponsable: mainUserId });
        res.json({ alerts, message: "Alerts retrieved successfully"});
    } catch (error) {
        console.error("Error getting alerts:", error);
        res.status(500).json({ error: "Failed to get alerts" });
    }
};

module.exports = getAlerts;