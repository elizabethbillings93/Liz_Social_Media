const{Schema,model}=require('mongoose');
// Schemas maps to a MongoDB collection and define the shape of the documents within the collection
// Each key defines a property in our documents which will be cast to its associate SCHEMATYPE

const userSchema= new Schema({
    username:{
        // Unique Index ensures that the idnexed fields do not store dupilicate values
        unique:true,
        // Asset should be a string
        type: String, 
        // Mandatory
        required:true,
        // Remove all whitespace
        trim:true,
    },
    email:{
        unique:true,
        require:true,
        type:String,
    },
    status:[{
        type: Schema.Types.ObjectId,
        ref:'Status'
    }],
},
    {
         // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          getters: true,},
        id: false,
    }
);
// Initialize the User Model
const User= model('User', userSchema)
module.exports= User;