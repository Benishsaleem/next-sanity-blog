import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-center gap-10 px-5 py-10">
      <Image
        src="/banner.jpg"
        width={300}
        height={300}
        className="rounded-lg shadow-lg"
        alt="About Me Banner"
      />
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <p className="text-gray-500 pt-4 max-w-lg">
          I am a student of GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse. 
          I love learning new and creative things, am passionate about technology, and constantly strive to keep up with the latest advancements in the field.
        </p>
      </div>
    </div>
  )
}

export default About
