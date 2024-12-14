import React from 'react'

export default function Navbar() {
    const items = [
        {id:1 , title:"خانه"},
        {id:2 , title:"پروژه"},
        {id:3 , title:"سابقه"},
        {id:4 , title:"راه های ارتباطی"},
    ]
  return (
    <div className='bg-bg-navbar text-white py-8'>
<div className='flex justify-between container mx-auto items-center'>
<ul className=' flex items-center'>
    {items.map(item =>(
        <li className='mx-3 cursor-pointer text-lg' key={item.id}>{item.title}</li>
    ))}

</ul>
<a href='/'>
    <img src="src\assets\Experience\Defult.webp" className='h-11 w-11 rounded-full cursor-pointer' alt="" />

</a>
</div>

    </div>
  )
}
