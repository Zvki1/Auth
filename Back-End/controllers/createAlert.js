 const Alert = require("../models/alerteSchema");

const createAlert = async (req, res) => {
    const { type, importance, description, localisation, managerResponsable,titre } = req.body;
    const alert = new Alert({
        type,
        importance,
        description,
        date: new Date(),
        localisation,
        managerResponsable,
        titre
    });
    try {
        await alert.save();
        res.status(201).json({ message:"alert saved successfully",alert });
    } catch (error) {
        res.status(400).json({ error });
    }
}

module.exports = createAlert;