const multer = require('multer');
const upload = multer({ dest: '../files' });

const postRemarque = async (req, res) => {
    try {
        const { ticketId, remarque } = req.body;
        const ticket = await
        Ticket.findById(ticketId);
        res.status(200).json({ message: "Remarque added successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = postRemarque;