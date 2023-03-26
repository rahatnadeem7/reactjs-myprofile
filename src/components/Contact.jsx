import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/b013eeb1-ac39-4cf0-a471-bf2fb3a2fef9' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-teal-600 text-4xl flex items-center  hover:text-black'>Contact</p>
                
            </div>

            <input className='text-white my-2 p-2 bg-teal-600 group rounded-full hover:bg-black' type="text" placeholder="Name" name='name' />
            <input className='text-white my-2 p-2 bg-teal-600 group rounded-full  hover:bg-black ' type="email" placeholder="Email" name='email' />
            <textarea className='text-white my-4 p-2 bg-teal-600 group rounded-2xl  hover:bg-black' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white my-4 p-2 bg-teal-600 group rounded-full items-center mx-11 hover:bg-black' >Submit</button>
        </form>

       
    </div>
    
  )
}

export default Contact