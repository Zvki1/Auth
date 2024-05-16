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
  try {
    employelist.map((employe) => employelistIds.push(employe.id));
  } catch (err) {
    console.log("error from create ticket ", err, "-----------------\n");
  }
  // set  the isAssigned to true
  try {
    await Alert.updateOne({ _id: alert._id }, { isAssigned: true })
      .then(() => {
        console.log("alert is set to assigned");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  } catch (err) {
    console.log("error from create ticket while assigning the alert  ", err, "-----------------\n");
  }
    // create remarque
    const newRemarque = new Remarque({
      content: remarque,
      date: new Date(),
      sender: decoded.userId,
    });
    const savedRemarque = await newRemarque.save();
  // create ticket
  const ticket = new Ticket({
    title: alert.titre,
    description: alert.description,
    importance: alert.importance,
    date: new Date(),
    localisation: alert.localisation,
    assignedTo: employelistIds,
    owner: decoded.userId,
    remarques: [savedRemarque._id],
  });
  try {
    const savedTicket = await ticket.save();
    
    res.json({ message: "Ticket created successfully", savedTicket, savedRemarque });
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createTicket;
