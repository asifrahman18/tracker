'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname} from 'next/navigation'
import { GiProgression } from "react-icons/gi";
import classNames from 'classnames';


const NavBar = () => {

  const links = [
    {label: 'Home', href: '/'},
    {label: 'Progress', href: '/tracker'},
  ]
    const currentPath = usePathname();
  return (
    <nav className='flex space-x-6 border-b mb-6 px-5 h-14 items-cente'>
        <Link href='/'><GiProgression /></Link>
        <ul className='flex space-x-6 text-xl items-center'>
          {links.map((link, i) => (
            <li key={i}>
              <Link className={classNames({
                'text-zinc-500': link.href !== currentPath,
                'text-black': link.href=== currentPath,
                'hover:text-black transition-colors': true,
              })} href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default NavBar
