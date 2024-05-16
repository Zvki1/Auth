const Alert = require("../models/alerteSchema");
const Ticket = require("../models/ticketShema");
const Remarque = require("../models/remarqueSchema");
const jwt = require("jsonwebtoken");

const getTickets = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "Zvki1");
    // if has a role of manager search in the tickets where he is the owner or the assignedTo
    // if has a role of employe search in the tickets where he is the assignedTo
    try {
        if (decoded.role.includes('manager')) {
            const tickets = await Ticket.find({ $or: [{ owner:decoded.userId }, { assignedTo: { $in: [decoded.userId] } }] })
                .populate('owner', 'username email _id')
                .populate('assignedTo', 'username email _id')
                .populate('remarques', 'content date sender')
            res.json(tickets);
        }else {
            const tickets = await Ticket.find({ assignedTo: { $in: [decoded.userId] } })
            .populate('owner', 'username email _id')
            .populate('assignedTo', 'username email _id')
            .populate('remarques', 'content date sender')
            res.json(tickets);
        }
    } catch (err) {
        console.log("error from create ticket ",err,"-----------------\n");
    }
}
module.exports = getTickets;