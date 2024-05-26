const Notification = require("../models/notificationSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const getNotifications = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "Zvki1");
  try {
    const notifications = await Notification.find({
      receiver: decoded.userId,
      isArchived: false,
    });
    if (!notifications) {
      return res.status(404).json({ message: "No notifications found" });
    }
    res.json({ notifications });
  } catch (err) {
    res.status(400).json({ message: "Error from get notifications" }, err);
    console.log("error from get notifications ", err, "-----------------\n");
  }
};

const archiveNotification = async (req, res) => {
  const notificationId = req.body.notificationId;
  try {
    const notification = await Notification.findByIdAndUpdate(notificationId, { isArchived: true });
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.json({ message: "Notification archived" ,notification});
  } catch (err) {
    res.status(400).json({ message: "Error from archive notification" }, err);
    console.log("error from archive notification ", err, "-----------------\n");
  }
}

module.exports = { getNotifications, archiveNotification };
