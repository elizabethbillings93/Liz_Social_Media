const Status= require ('../models/Status');

module.exports ={
    // GET REQUEST FOR ALL STATUSES
    getStatus(req,res){ 
        // Find the status
        Status.find()
        // Make status response readable
        .then((statuses)=>res.json(statuses))
        // Or throw Internal Server Error
        .catch((err)=> res.status(500).json(err));
    },
    // GET REQUEST FOR ONE STATUS
    getOneStatus(req,res){
        // find status according to the id
        Status.findOne({_id:req.paramas.statusId})
        // Select version key
        .select('-__v')
        // Then take status
        .then((status)=>
        // if there is not a status
        !status
        // return status message
        ? res.status(404).json({message: 'No Status'})
        // else return status
        : res.json(status));
    },
    // POST REQUEST FOR NEW STATUS
    newStatus(req,res){
        // Create status
        Status.create(req.body)
        // Then add status to database
        .then((statusData)=> res.json(statusData))
        // Or throw error
        .catch((err)=>{
            return res.status(500).json(err);
        })
    },
    // DELETE REQUEST FOR STATUS
    deleteStatus(req,res){
        // Find the status that is associated with the ID
        Status.findOneandRemove({_id: req.params.statusId})
        // Then take the status
        .then((status)=>
        // if there is not one
        !status
        // return status message
        ?res.status(400).json({message:"No Status" })
        // else send message
        :res.json({message:"Status Deleted"})        
        )
        // Or return Internal Server Error
        .catch((err)=>{
            res.status(500).json(err);
        });
    },
    // PUT REQUEST FOR UPDATED STATUS
    updatedStatus(req,res){
        // Find Status associated with the id, Replace the value of the field:body, run validation
        Status.findOneandUpdate({_id:req.params.statusId},{$set:req.body},{runValidators: true, new: true})
        // Then take the status
        .then((status)=>
        // if there is not one
        !status
        // return error
        ?res.status(400).json({message: "No Status"})
        // else return status
        : res.json(status))
        // or throw internal server error
        .catch((err)=> res.status(500).json(err));
    },
    // ADD A REACTION
    addReaction(req,res){
        // Fine one status and update according to the ID, add to array(if value is not present), run validators
        Status.findOneandUpdate({_id: req.params.statusId},{$addToSet: {reactions: req.body}}, {runValidators:true, new:true})
        // then take status
        .then((status)=>
        // if there is no status
        !status
        // return status error
        ?res.status(400).json({message:'No status'})
        // else return status
        :res.json(status))
        // or throw error
        .catch((err)=>{
            res.status(500).json(err);
        });
    },
    // DELETE REACTION
    deleteReaction(req,res){
        // Find the status that is associated with the ID and remove all instances of a value that matches including reactions
        Status.findOneandRemove({_id: req.params.statusId},{$pull:{reactions:{reactionsId: req.params.reactionsId}}},
        //Mongoose does not automatically run validation 
        {runValidators: true, new: true})
        // then take status
        .then((status)=>
        // if there is no status
        !status
        // send status message
        ?res.status(400).json({message:'No Status'})
        // else send status
        : res.json(status))
        // Or throw error
        .catch((err)=>{
            res.status(500).json(err);
        });
    }

}