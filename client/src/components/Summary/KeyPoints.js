import React from 'react'

function Points({children}) {

    return (
        <div className="flex gap-x-[10px] text-[18px] ">
            <img className=" w-[10px] h-[10px] mt-[8.5px] "  src="https://media-public.canva.com/6WEUY/MABw6X6WEUY/3/t.png" alt="bulletin" />
            <div>{children}</div>
        </div>
    );
}

export default function KeyPoints({content}) {
  return (
    <div className="w-[600px] min-h-[300px] bg-[#9340ff] rounded-[40px] border-[5px] border-white self-center px-[40px] py-[30px] flex flex-col gap-y-[20px] ">
      { content.map((point) => {
        return (<Points >{point}</Points>);
      }) }
    </div>
  )
}
