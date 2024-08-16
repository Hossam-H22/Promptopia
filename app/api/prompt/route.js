

import promptModel from "@models/prompt";
import { connectedToDB } from "@utils/database.js";

export const GET = async (request)=>{
    try {
        await connectedToDB();
        const prompts = await promptModel.find().populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 200 });
    }
}