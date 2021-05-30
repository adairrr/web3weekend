import React from 'react'
import * as Assets from '../assets/index'

const Bottom = () => {
    return (
        <div className='relative top-36 h-screen bg-purple-50'>
            <div className='absolute top-20 w-full flex flex-row items-center justify-center'>
                <Assets.Why />
            </div>
            <div className='absolute top-56 w-full flex flex-row justify-between'>
                <Assets.Tile className='mx-8' />
                <Assets.Tile className='mx-8' />
                <Assets.Tile className='mx-8' />
            </div>
            <div className='absolute top-68 w-full flex flex-row justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <Assets.Check className='ml-24 mr-8 mb-4 mt-2' />
                    <Assets.Middlemen className='ml-20 mr-8' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Assets.Lock className='mx-8 mb-4' />
                    <Assets.Privacy className='mx-8' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Assets.Graph className='ml-8 mr-20 mb-4' />
                    <Assets.Decentralized className='ml-8 mr-20' />
                </div>
            </div>
            <div className='absolute bottom-10 w-full flex flex-col justify-center items-center'>
                <Assets.Uparrow className='cursor-pointer' />
                <Assets.Footer className='mt-4' />
            </div>
        </div>
    )
}

export default Bottom