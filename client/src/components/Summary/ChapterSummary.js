import React from 'react'

export default function ChapterSummary({sno, title, content}) {

  return (
    <div className='h-[400px] w-[300px] border-[3px] border-white rounded-[30px] overflow-y-scroll px-[25px] py-[15px] bg-[#9340ff] flex flex-col gap-y-[10px] shrink-0'>
        <div className='text-[34px] self-center'>{sno}. {title}</div>
        <div className='text-[18px]'>{ content }</div>
    </div>
  )
}
