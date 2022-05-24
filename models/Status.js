const {Schema, model}= require('mongoose');
const reactionSchema= require('./Reaction');
// Schemas maps to a MongoDB collection and define the shape of the documents within the collection
// Each key defines a property in our documents which will be cast to its associate SCHEMATYPE

const statusSchema = new Schema(
    {   username:{
        // Username is required to make reactions
            type: String,
            required: true,
        },
        // Min length is 1 so there is something to update
        statusBody:{
            type:String,
            required: true,
            minlength:1,
            maxlength:150
        },
        // Timestamps needed
        createdAt:{
            type: Date,
            timestamp: true,
            default: Date.now
        },
        // Pull in from the Reaction.js
        reactions:[reactionSchema]
    },
    {
          // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON:{
            getters:true,
        },
        id:false,
    }
);
// Unit 25
// Create a virtual property `responses` that gets the amount of response per reaction
statusSchema
  .virtual('reactionNumber')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Status model
const Status = model('status', statusSchema);

module.exports = Status;

