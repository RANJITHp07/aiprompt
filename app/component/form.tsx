import React from 'react'
import Link from "next/link"

interface Prop{
    prompt:string,
    tag:string
}

interface Props{
    type:string,
    post:Prop,
    setpost:React.Dispatch<React.SetStateAction<Prop>>,
    submitting:Boolean,
    handleSubmit:(e:React.FormEvent<EventTarget>)=>void
}


function Form({type,post,setpost,submitting,handleSubmit}:Props) {
  return (
    <section className='lg:w-1/2 flex-col'>
        <h1 className='head_text text-left blue_gradient'>Create Post</h1>
        <p className='mt-2'>Create and share amazing prompt with the world,and let your imagination<br/> run wild with any AI-powered platform</p>

        <form className='glassmorphism flex-col mt-10' onSubmit={handleSubmit}>
          <p className='text-semibold'>Your AI prompt</p>
          <textarea className='form_textarea' placeholder='Write your prompt here... 'onChange={(e)=>{setpost({...post,prompt:e.target.value})}} required/>
          <p className='text-semibold mt-3'>Tag<span>(#coding,#webdevelopment)</span></p>
          <textarea className='form_input' placeholder='#tag' onChange={(e)=>{setpost({...post,tag:e.target.value})}} required/>
          <span className='flex-end mt-5 items-center'>
          <button className='mx-2 px-2 bg-primary-orange rounded-full text-white' type='submit'>{type}</button>
            <Link href="/">Cancel</Link>
          </span>
        </form>
    </section>
  )
}

export default Form
