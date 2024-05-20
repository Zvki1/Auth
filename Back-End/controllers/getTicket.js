const Alert = require("../models/alerteSchema");
const Ticket = require("../models/ticketShema");
const Remarque = require("../models/remarqueSchema");
const jwt = require("jsonwebtoken");

const getTicket = async (req, res) => {
    try {
       const ticketId = req.query.id
      const ticket = await Ticket.findById(ticketId)
        .populate("owner", "username email _id") 
        .populate("assignedTo", "username email _id")
        .populate({
          path: "remarques",
          populate: {
        path: "sender",
        select: "username  _id"
          }
        
        })
        const userRole= jwt.decode(req.headers.authorization.split(" ")[1]).role;
      res.status(200).json({ticket, userRole});
    } catch (error) {
        res.status(400).json({ message: "error" });
    }
    }
module.exports = getTicket;