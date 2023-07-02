'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import { ClientSafeProvider, LiteralUnion} from 'next-auth/react';
import ListIcon from '@mui/icons-material/List';

export default function Navbar() {
   const{data:session}=useSession()
    const [providers, setProviders] = useState<Record<LiteralUnion< string>, ClientSafeProvider> | null>();
    const [toggle,settoggle]=useState<Boolean>(false)

    useEffect(()=>{
        const setUpprovider=async()=>{
            const res=await getProviders();
            setProviders(res)
        }
        console.log(session)
        setUpprovider()
    },[])
  return (
    <nav className='flex justify-between w-full p-4'>
        <div className='flex'>
        <Link href="/">
        <Image
        src="/assets/images/logo.svg"
        width={30}
        height={30}
        alt="Logo picture"
      />
        </Link>
        <p className='logo_text pl-2'>Promptoia</p>
        </div>
        <div className='hidden lg:block md:block lg:flex md:flex'>
            {
                session?.user ?
                <>
                  <Link href="/create-prompt" className='black_btn'>
                      Create Post
                  </Link>
                  <button className='outline_btn ml-3 mr-3' type='button' onClick={()=>signOut()}>Sign Out</button>
                  <Image
                    src={session?.user.image || " "}
                    width={37}
                    height={37}
                    alt='Profile picture'
                    className='rounded-full'
                  />
                </>:
                <>
                {console.log(session)}
                 { 
                    providers && Object.values(providers).map((provider)=>{
                        return(
                        <button type='button' key={provider.id} onClick={()=>{signIn(provider.id)}} className='black_btn'>
                            Sign In
                        </button>
                        )
                    })
                 }
                </>
            }
        </div>
        {/*mobile navigation*/}

        <div className=' sm:hidden'>
           <span onClick={()=>{settoggle(!toggle)}} className='relative'><ListIcon/></span>
           {
            session?.user ? toggle && 
            <div className='absolute p-3 right-0 bg-white backdrop-blur-lg bg-opacity-30 border border-gray-200 border-opacity-40'>
                <p className='text-right mb-2 font-semibold'>My Profile</p>
                <p className='text-right mb-2 font-semibold'>Create Post</p>
                <button className='black_btn w-full' onClick={()=>{signIn()}}>Sign Out</button>
                </div>:<> {toggle &&
                <div className='absolute p-3 right-0 bg-white backdrop-blur-lg bg-opacity-30 border border-gray-200 border-opacity-40'>
                {/* { 
                    providers && Object.values(providers).map((provider)=>{
                        return(
                        <button type='button' key={provider.name} onClick={()=>{signIn(provider.id)}} className='black_btn'>
                            Sign In
                        </button>
                        )
                    })
                 } */}
                </div>
                  }
                </>
           }
        </div>
    </nav>
  )
}
