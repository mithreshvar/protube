export default function ChapterSummary({sno, title, content}) {
  return (
    <div className='h-[600px] w-[350px] border-[3px] border-white rounded-[30px] overflow-y-scroll px-[20px] py-[15px] bg-[#9340ff] flex flex-col gap-y-[10px] shrink-0'>
        <div className='text-[28px] self-center'>{sno}. {title}</div>
        <div className="w-full h-0 border-[2px] border-[#ffffff] rounded-full opacity-75 my-[5px] "></div>
        {content.map( (ele, index) => <p className='text-[18px] ' key={index}>{ ele }</p> )}
    </div>
  )
}
