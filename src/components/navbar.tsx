import { useState } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  return (
    <header className="flex justify-between items-center h-28">
      <div id="logoCtn" className="h-10">
        <h1 className="text-2xl"><strong>A</strong>HENRIKES</h1>
        <hr />
      </div>

      <button className='md:hidden' onClick={toggleMenu}>
        <EllipsisVerticalIcon className="h-10 w-[49px] text-[#424a53]"/>
      </button>

      <nav id="navCtn"
        className={`${showMenu ? 'grid' : 'hidden'} md:flex`}>
        <div id='xMark' className='flex justify-end md:hidden'>
          <button onClick={toggleMenu}>
            <XMarkIcon  className='h-10 text-[#424a53]'/>
          </button>
        </div>

        <ul>
          <li><a href="#">HOME</a></li>

          <li><a href="#">SKILLS</a></li>

          <li><a href="#">PROJECTS</a></li>
        </ul>

        <div id='contactBtn' className='grid place-content-center'>
          <button className='transition duration-500'>CONTACTS</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar