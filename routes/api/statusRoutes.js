const router = require ('express').Router();
// Deconstructed Object
const {getStatus,getOneStatus,newStatus,deleteStatus,updatedStatus,addReaction,deleteReaction}= require('../../controllers/statusControllers');
// api/statuses
router.route('/').get(getStatus).post(newStatus);
// api/statuses/:statusId
router.route('/:statusId')
        .get(getOneStatus)
        .put(updatedStatus)
        .delete(deleteStatus);
// api/statuses/:statusId/reactions
router.route("/:statusId/reactions").post(addReaction);
// api/statuses/:statusId/reactions/:reactionId
router.route('/:statusId/reactions/:reactionId').delete(deleteReaction);

module.exports= router;