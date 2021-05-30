import React from 'react'
import { Popover } from '@headlessui/react'
import * as Assets from '../assets/index'

const navigation = [
  { name: 'Explore', href: '#' },
  { name: 'How It Works', href: '#' }
]

const Top = () => {
  return (
    <div className="relative h-full">
      <Popover as="header" className="relative">
        {_ => (
          <>
            <div className="bg-white pt-6">
              <nav
                className="relative max-w-8xl mx-20 flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex flex-row items-center w-full">
                  <div className="flex items-center justify-between w-full md:w-4/5">
                    <a href="#">
                      <Assets.Logo />
                    </a>
                  </div>
                  <div className="hidden space-x-8 md:flex md:flex-row md:items-center md:w-1/4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-semibold text-gray-400"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a 
                      href='#'
                      className='text-base font-semibold text-indigo-600'
                    >
                      Connect Wallet
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </Popover>
      <div className='mx-20 px-4 sm:px-6 mt-8 mb-6'>
        <Assets.Description />
      </div>
      <div className='relative -top-2 mx-20 px-4 sm:px-6'>
        <Assets.Camera className='relative -bottom-44 left-1' />
        <Assets.Crypto className='relative -bottom-68 left-2' />
        <Assets.Features />
      </div>
      <div className='absolute top-16 -bottom-16 right-0'>
        <Assets.Device className='absolute right-48 bottom-36' />
        <Assets.Vneck className='absolute right-24 bottom-20' />
        <Assets.Tie className='absolute right-12 bottom-72' />
        <Assets.Ponytail className='absolute right-12 top-68' />
        <Assets.Polo className='absolute right-44 top-28' />
        <Assets.Vneck className='absolute right-116 top-24' />
        <Assets.Tie className='absolute right-176 top-36' />
        <Assets.Polo className='absolute right-184 top-80' />
        <Assets.Vneck className='absolute right-188 bottom-72' />
        <Assets.Tie className='absolute right-240 bottom-80' />
        <Assets.Ponytail className='absolute right-224 bottom-32' />
        <Assets.Polo className='absolute right-172 bottom-20' />
      </div>
      <div className='absolute right-48 flex flex-col items-center justify-center'>
        <Assets.Explore className='mb-4' />
        <Assets.Downarrow className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Top