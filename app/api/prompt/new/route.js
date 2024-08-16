
import { connectedToDB } from "@utils/database.js";
import promptModel from "@models/prompt.js";


export const POST = async (req)=>{
    const { userId, prompt, tag } = await req.json();

    try {
        await connectedToDB();
        const newPrompt = new promptModel({
            creator: userId,
            prompt, 
            tag,
        });
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        // console.log(error);
        return new Response("Failed to create a new prompt", { status: 500 });
    }

}

