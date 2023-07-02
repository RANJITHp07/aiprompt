import Feed from "./component/Feed";

export default function Home() {
  return (
      <section className='w-full'>
            <h1 className='text-center head_text mb-3'>Discover & Share 
             <br/>
             <span className='orange_gradient text-center'>AI-Powered prompt </span>
            </h1>
            <p className='text-center'>
              Promptophia is an open-source AI prompting tool for<br className='hidden lg:block'>
              </br> modern world to discover,create and share creative prompts
            </p>
            <div>
            <Feed/>
            </div>
            
      </section>
  )
}
