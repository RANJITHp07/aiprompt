'use client'
import React,{useState} from 'react'
import { useSession } from 'next-auth/react';
import {useRouter} from "next/navigation";
import Form from '../component/form';


interface Props{
    prompt:string,
    tag:string
}



function CreatePrompt() {

  const { data: session } = useSession()
  console.log(session?.user)
  const router=useRouter()

    const [submitting,setsubmitting]=useState<Boolean>(false);
    const [post,setpost]=useState<Props>({
        prompt:'',
        tag:''
    })

    const handleSubmit=async(e:React.FormEvent<EventTarget>)=>{
        e.preventDefault();

        try{
          const res = await fetch('api/prompt/new', {
            method: 'POST',
            body: JSON.stringify({
              prompt:post.prompt,
              tag:post.tag,
              userId: session?.user?.id,
            }),
          });
          if(res.ok){
            router.push("/")
          }
          
        }catch(err){
          console.log(err)
        }
    }
  return (
    <div className='w-full'>
      <Form
       type="Create"
       post={post}
       submitting={submitting}
       setpost={setpost}
       handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default CreatePrompt
