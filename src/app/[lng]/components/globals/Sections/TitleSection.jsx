import React from 'react'

function TitleSection({
    title,
    text
}) {
  return (
    <div className='w-full flex flex-col items-start gap-6'>
        <h2 className='text-5xl font-light'>{title}</h2>
        {
            text && (
                <p className='text-3xl font-extralight'>{text}</p>
            )
        }
    </div>
  )
}

export default TitleSection