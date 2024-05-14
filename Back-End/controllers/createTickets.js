const Alert = require("../models/alerteSchema");
const Ticket = require("../models/ticketShema");
const Remarque = require("../models/remarqueSchema");
const jwt = require("jsonwebtoken");
// create ticket
const createTicket = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "Zvki1");
  console.log("decoded", decoded);
  const { employelist, alert, remarque } = req.body;
  console.log("employelist", employelist);
  console.log("alert", alert);
  console.log("remarque", remarque);
  // filtring assgnedTo from the names
  const employelistIds = [];
  employelist.map((employe) => employelistIds.push(employe.id));
  // set  the isAssigned to true
  await Alert.updateOne({ _id: alert._id }, { isAssigned: true })
    .then(() => {
      console.log("alert is set to assigned");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  // create ticket
  const ticket = new Ticket({
    title: alert.titre,
    description: alert.description,
    importance: alert.importance,
    date: new Date(),
    localisation: alert.localisation,
    assignedTo: employelistIds,
    owner: decoded.userId,
  });
  try {
    const savedTicket = await ticket.save();
    // create remarque
    const newRemarque = new Remarque({
      content: remarque,
      date: new Date(),
      ticket: savedTicket._id,
      sender: decoded.userId,
    });
    const savedRemarque = await newRemarque.save();
    res.json({ message: "Ticket created successfully", savedTicket, savedRemarque });
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createTicket;
