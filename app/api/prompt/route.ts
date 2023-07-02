import { connectToDB } from '@/utils/db';
import Prompt from '@/models/prompt';

export const GET=async(req:Request,res:Response)=>{
    try{
        await connectToDB()
        const posts=await Prompt.find().populate('creator');
        return new Response(JSON.stringify(posts),{status:201}) 
    
    }catch(err){
        console.log(err)
        return new Response("Failed to fetch data",{status:401}) 
    }
}