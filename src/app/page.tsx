import Image from 'next/image'

/* eslint-disable */

export default function Home() {
  return (
   <div className='wrapper'>
    <div className=' shadow-md'>
       <div className='bg-white top px-4 flex items-center justify-between'>
        <h3 className='font-medium text-3xl '>naira<span className='text-orange-600'>refill</span></h3>
        <div className='flex items-center gap-4'>
          <button className='px-3 py-[6px] bg-orange-500  rounded-md  text-white flex items-center font-medium'>Register</button>
          <button  className='px-3 py-[6px] border border-orange-500  text-orange-500 rounded-md font-medium flex items-center'>Login</button>
        </div>
       </div>
    </div>
    <div className='bottom'>
      <div className='left flex items-start pt-16 justify-center w-full'>
         <div className='w-[250px]'>
          <div>
        <h3 className='font-bold text-2xl mb-2'> We've Missed You</h3> 
         <p className='text-base mb-5'>Kindly signin and get first access to the very best, community and unlock more opportunities.</p>
          </div>
            <form className='space-y-4'>
              <div>
                <label>Email</label>
                <input 
                className='w-full border py-1 px-2 bg-white'
   
                type='text'
                />
              </div>
              <div>
                <label>Password</label>
                <input 
                    className='w-full border py-1 px-2 bg-white'
            
                type='text'
                />
              </div>
              <div>
                <button className='w-full items-center py-2 bg-orange-500 text-white'>
                        Login
                </button>  
              </div>
            </form>
            <p className='text-sm mt-2'>Forget username or password</p>
            <p className='text-sm mt-2'>Don't have an acoount,<span className='text-blue-600 font-medium'>Sign up</span></p>
         </div>
      </div>
      <div className='right'>
        <div className=' w-full'>
          <img
          className='w-[100%] h-[100%] object-cover' 
          src='https://cdn.pixabay.com/photo/2023/08/08/17/20/yosemite-8177850_640.jpg'
          alt=''
          />
        </div>
      </div>
    </div>
   </div>
  )
}
/* eslint-enable */