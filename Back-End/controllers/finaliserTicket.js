const Ticket = require("../models/ticketShema");

const finaliserTicket = async (req, res) => {
    const ticketId =req.query.id;
    try {
      const ticket =await Ticket.findByIdAndUpdate(ticketId, {status: "closed"}, { new: true });
        res.status(200).json({ ticket });
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = finaliserTicket;