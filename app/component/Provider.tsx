'use client'

import {SessionProvider} from 'next-auth/react'


interface Session {
  user: {
    id: string;
    name: string;
    email: string;

  };
  accessToken: string;
  expires: string;
  
}



interface ProviderProps {
    session: Session | null
    children: React.ReactNode
  }

function Provider({children,session}:ProviderProps) {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider
