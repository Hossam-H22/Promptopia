
import { Schema, Types, model, models } from "mongoose";


const promptSchema = new Schema({
    creator:{
        type: Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    },
}, {
    timestamps: true,
});


const promptModel = models.Prompt || model('Prompt', promptSchema);

export default promptModel;