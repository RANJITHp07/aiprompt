'use client'
import { useSession } from 'next-auth/react';
import React ,{useState,useEffect} from 'react'

interface Creator {
    _id: string;
    username: string;
    email: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }


function Profile() {
    const{data:session}=useSession()
    console.log(session?.user?.name)
  const [profile,setprofile]=useState<Creator>();

  useEffect(()=>{
    const fetchdata=async ()=>{
        const res=await fetch(`api/prompt/${session?.user?.id}/post`);
        const data=await res.json();

        setprofile(data)
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default  Profile
