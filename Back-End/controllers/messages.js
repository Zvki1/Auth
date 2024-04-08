const User = require('../models/userSchema');
const Group = require('../models/groupSchema');
const jwt = require('jsonwebtoken');
const PrivateGroup = require('../models/privateGroupSchema');
const getFreindsList = async (req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        //  this is how you can add a friend to the user
        // const updatedUser = await User.findByIdAndUpdate(decoded.userId, { $addToSet: { friends: '66042cd8048f94d0fe899aeb' } }, { new: true });
        const user = await User.findById(decoded.userId).populate('freinds');
   
        // extrating freinds info
        const freindsInfo = user.freinds.map(freind => ({
            _id: freind._id,
            email: freind.email,
            username: freind.username,
            isOnline: freind.isOnline,
        }));
        
        const grouplist=await Group.find({ members: user._id },'name')


        const privateGroupsPromises = freindsInfo.map(async (friendInfo) => {
            const privateGroup = await PrivateGroup.findOne({ members: { $all: [user._id, friendInfo._id] }})
                .populate({
                    path: 'members',
                    select: 'username isOnline _id',
                    match: { _id: { $ne: user._id } }
                })
                .select({ messages: { $slice: -1 } })
                .lean();
            return privateGroup;
        });
       
        
        // Attendre que toutes les requêtes soient terminées
        const privateGroups = await Promise.all(privateGroupsPromises);
    
        
        // const privateGroups = await privateGroup.find({ members: { $all: [user._id,freindsInfo[0]._id] } })
        // .populate({
        //     path: 'members',
        //     select: 'username _id isOnline',
        //     match: { _id: { $ne: user._id } }
        // })
        // .select({ messages: { $slice: -1 } })
        // .lean();
        // const privateGroups = await privateGroup.aggregate([
        //     { $match: { members: user._id } }, // Filtre pour les groupes où l'utilisateur est membre
        //     { $project: { _id: 1, lastMessage: { $arrayElemAt: ["$messages", -1] } } }, // Sélectionne le dernier message de chaque groupe
        //     { $lookup: { from: 'users', localField: 'lastMessage.sender', foreignField: '_id', as: 'sender' } }, // Recherche le membre qui a envoyé le dernier message
        //     { $unwind: '$sender' }, // Déroule le tableau de membres
        //     { $project: { _id: 1, lastMessage: 1, sender: { _id: '$sender._id', username: '$sender.username' } } } // Sélectionne uniquement les champs nécessaires du membre
        // ]).exec();
//         const privateGroups = await privateGroup.aggregate([
//     { $match: { members: user._id } }, // Filtre pour les groupes où l'utilisateur est membre
//     { $project: { _id: 1, lastMessage: { $arrayElemAt: ["$messages", -1] } } }, // Sélectionne le dernier message de chaque groupe
//     { $lookup: { from: 'users', localField: 'lastMessage.sender', foreignField: '_id', as: 'sender' } }, // Recherche le membre qui a envoyé le dernier message
//     { $unwind: '$sender' }, // Déroule le tableau de membres
//     {
//         $project: {
//             _id: 1,
//             lastMessage: 1,
//             sender: {
//                 $cond: {
//                     if: { $eq: ['$sender._id', user._id] }, // Vérifie si l'envoyeur est l'utilisateur actuel
//                     then: { $arrayElemAt: [{ $setDifference: ['$members', [user._id]] }, 0] }, // Sélectionne le membre différent de l'utilisateur actuel
//                     else: { _id: '$sender._id', username: '$sender.username' } // Utilise l'envoyeur tel quel
//                 }
//             }
//         }
//     }
// ]).exec();

        
        console.log(privateGroups);
        res.json({freinds: freindsInfo,user: {username: user.username,id: user._id},publicGroups:grouplist,privateGroups: privateGroups});
        // res.json({privateGroups: privateGroups});
    }catch(err){
        res.status(500).send({err:'Server test error'});
        console.log(err);
    }
}

module.exports = getFreindsList;