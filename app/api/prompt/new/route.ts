
import { connectToDB } from '@/utils/db';
import Prompt from '@/models/prompt';

export const POST = async (req:Request, res:Response) => {
  try {
    await connectToDB();
    const { userId, prompt, tag } = await req.json();
    console.log(req.body)
    const newPrompt= new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt),{status:201})
  } catch (err) {
    console.log(err);
   
  }
};
