import React , {useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = ({setNotification}) => {
const fromData= useRef('')

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm("service_5x1w8zo","template_g67qer7",fromData.current,"KWsn-biekKRPf-nU-").then(
      ()=>{
      setNotification("Message send succesfully ");
      setTimeout(() => setNotification('') , 3000);
      fromData.current.reset();

    },
    (error)=>{
      setNotification("Failed to send message");
      setTimeout(() => setNotification('') , 3000);
      console.error(error.text);
    }
  )
  }



  return (
    <main className='bg-white p-7 border-1 border-zinc-300 rounded-lg shadow-lg w-[600px]'>
      {/* Form heading */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl text-zinc-800 mb-2 font-bold'>Get in Touch</h1>
        <p className='text-md text-zinc-500'>
          we are here to Help. send us message and we will get to you soon.
        </p>
      </div>
      <form autoComplete='off' ref={fromData} onSubmit={sendEmail}>
        <div className='flex gap-5 items-center'>
          <div className='flex-1' >
            <label htmlFor="user-name" className='text-zinc-800' required >Name</label>
            <input type="text" name="user-name" id="user-name" placeholder='Name' required className='border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm  focus:outline-blue-600  rounded-lg' />
          </div>
          <div className='flex-1' >
            <label htmlFor="user-email" className='text-zinc-800'>Email</label>
            <input type="text" name="user-email" id="user-email" placeholder='Email' className='border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm  focus:outline-blue-600  rounded-lg' />
          </div>
        </div>
         <div className='mt-3' >
            <label htmlFor="user-subject" className='text-zinc-800'>Subject</label>
            <input type="text" name="user-subject" id="user-subject" placeholder='Subject'  required className='border-1 border-zinc-300 w-full bg-zinc-100 h-11 pl-3 mt-2 text-sm  focus:outline-blue-600 rounded-lg ' />
          </div>

           <div className='mt-3' >
            <label htmlFor="message" className='text-zinc-800' required>Message</label>
           <textarea name="message" id="message" rows={5} placeholder='Type Your Message Here'  className='border-1 border-zinc-300 w-full bg-zinc-100  p-3 mt-2 text-sm  focus:outline-blue-600 rounded-lg resize-none' >
           
           </textarea>
          </div>
          <div className='mt-8'>
            <button type='submit' className='w-full py-3 bg-blue-600 text-white rounded-lg active:bg-blue-700 '> Send Message</button>
          </div>
      </form>
    </main>

  )
}

export default ContactForm
