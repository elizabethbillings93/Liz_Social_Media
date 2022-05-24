const {Schema, Types}= require('mongoose');
// Schemas maps to a MongoDB collection and define the shape of the documents within the collection
// Each key defines a property in our documents which will be cast to its associate SCHEMATYPE
const reactionSchema = new Schema(
    {
         username:{
            type:String,
            required:true,
        },
        createdAt: {
            type: Date,
            timestamps: true,
            default: Date.now
        },
        reactionId:{
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody:{
            type:String,
            required: true,
            maxlength: 150,
        },
    },{
         // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON:{
            getters:true,
        },
        id:false,

    }
);
module.exports = reactionSchema;