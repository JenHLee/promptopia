import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    // Immediatly extract all the data
  const { userId, prompt, tag } = await req.json();

  try {
    // Lambda function
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      tag,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
