const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const freindInfos = async (req,res)=>{
    try{
        const freindId= req.query.freindId;
        const freindInfos = await User.findById(freindId).select('username _id email');
        res.json({freindInfos});
    } catch (err){
        res.status(500).send({err:'freinds fetching failed'});
    }
}

module.exports = freindInfos;