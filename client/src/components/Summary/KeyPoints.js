import React from 'react'

function Points({children}) {

    return (
        <div className="flex gap-x-[10px] text-[18px] ">
            <img className=" w-[10px] h-[10px] mt-[8.5px] "  src="https://media-public.canva.com/6WEUY/MABw6X6WEUY/3/t.png" alt="bulletin" />
            <div>{children}</div>
        </div>
    );
}

export default function KeyPoints() {
  return (
    <div className="w-[600px] min-h-[300px] bg-[#9340ff] rounded-[40px] border-[5px] border-white self-center px-[40px] py-[30px] flex flex-col gap-y-[20px] ">
        <Points>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Points>
        <Points>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Points>
    </div>
  )
}
