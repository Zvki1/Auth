const Group=require('../models/groupSchema');
const User=require('../models/userSchema');
const jwt = require('jsonwebtoken');

const publicGroups=async(req,res)=>{
    try {
     const token = req.headers.authorization.split(' ')[1];
     const decoded = jwt.verify(token,'Zvki1');
     const user = await User.findById(decoded.userId)
     const grouplist = await Group.aggregate([
        { $match: { members: user._id } },
        { $unwind: { path: '$messages', preserveNullAndEmptyArrays: true } },
        { $sort: { 'messages.timestamp': -1 } },
        { 
            $group: { 
                _id: '$_id', 
                name: { $first: '$name' }, 
                picture: { $first: '$picture' }, 
                latestMessage: { $first: '$messages' } 
            } 
        }
    ]);


     res.json({grouplist});
    } catch (error) {
        console.log('error:',error);
     res.status(500).send({msg:'public groups fetching failed',error});
    }
    }
  

module.exports=publicGroups;