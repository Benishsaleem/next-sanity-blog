import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='border max-w-lg mx-auto my-20 p-8 bg-gray-400 shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center text-black'>Contact Us</h2>
        <form>
          <input type="text" placeholder='Full Name' required className='w-full mb-4 px-4 py-2 border border-orange-600 rounded-md'/>
          <input type="text" placeholder='Email Address' required className='w-full mb-4 px-4 py-2 border border-orange-600 rounded-md'/>
          <input type="text" placeholder='Phone Number' className='w-full mb-4 py-2 border border-orange-600 rounded-md'/>
          <textarea placeholder='Your Message' rows={5} required className='w-full mb-4 px-4 py-2 border border-orange-600 rounded-md'></textarea>
          <button type='submit' className='w-full bg-black text-white hover:text-orange-600 p-3 rounded-md'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
