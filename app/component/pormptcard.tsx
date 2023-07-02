import React from 'react'
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {message} from "antd"

interface Creator {
    _id: string;
    username: string;
    email: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  interface Data {
    _id: string;
    creator: Creator;
    prompt: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  
interface PromptcardProps {
    post: Data;
  }


function Promptcard({post}:PromptcardProps) {
    
    const copyPromptToClipboard = () => {
        navigator.clipboard.writeText(post.prompt);
        message.success("Copied")
      };
  return (
    <div className='prompt_card m-4'>
      <div className='flex-col'>
      <span className='flex-end cursor-pointer' onClick={()=>copyPromptToClipboard()}><ContentCopyIcon/></span>
        <div className='flex-start'>
            <Image src={post?.creator?.image} width={30} height={30} alt="user_image" className='rounded-full mr-3'/>
            <div>
            <h3 className='font-satoshi font-semibold text-gray-900'>{post?.creator?.username}</h3>
            <p className='font-inter text-sm text-gray-500'>{post?.creator?.email}</p>
            
        </div>
        </div>
        <div>
            <p className='font-satoshi text-sm my-2'>{post.prompt}</p>
            <p className='blue_gradient cursor-pointer text-sm font-inter'>{post.tag}</p>
        </div>
      </div>
    </div>
  )
}

export default Promptcard
