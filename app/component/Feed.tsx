'use client'
import React, { useState, useEffect } from 'react';
import Promptcard from './pormptcard';

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

function Feed() {
  const [search, setSearch] = useState<string>('');
  const [posts, setPosts] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <section className='feed w-full '>
      <form className='lg:w-1/2 lg: mx-auto'>
        <input className='search_input peer mx-auto' type='text' placeholder='Search the prompt...' required onChange={() => { }} />
      </form>
      <div className='flex flex-wrap'>
        {posts.map((p) => (
          <div key={p._id} className='lg:w-1/3 '>
            <Promptcard post={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feed;
