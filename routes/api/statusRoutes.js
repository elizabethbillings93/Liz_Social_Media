const router = require ('express').Router();
// Deconstructed Object
const {getStatus,getOneStatus,newStatus,deleteStatus,updatedStatus,addReaction,deleteReaction}= require('../../controllers/statusControllers');
// api/status
router.route('/').get(getStatus).post(newStatus);
// api/status/:statusId
router.route('/:statusId')
        .get(getOneStatus)
        .put(updatedStatus)
        .delete(deleteStatus);
// api/status/:statusId/reactions
router.route("/:statusId/reactions").post(addReaction);
// api/status/:statusId/reactions/:reactionId
router.route('/:statusId/reactions/:reactionId').delete(deleteReaction);

module.exports= router;