import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        console.log("new prompt api in")
        const newPrompt = new Prompt({ creator: userId, prompt, tag });
        console.log(JSON.stringify(newPrompt));
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
      console.log("catch error in");
      console.log(error);
        //return new Response(`Failed to create a new prompt ${error}`, { status: 500 });
    }
}