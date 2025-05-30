import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Card, CardTitle } from './ui/card'
import { Avatar } from './ui/avatar'
import { generateNameAbbr } from '@/lib/utils'
import { AvatarFallback } from '@radix-ui/react-avatar'
import Link from 'next/link'

export type Kit = {
  title?: string;
  image: StaticImageData,
  url: string;
  author: {
    name: string;
    url: string;
    avatar: StaticImageData;
  };
};

const KitCard = ({ kit }: { kit: Kit }) => {

  return (
    <>
      <Card className='rounded-xl hover:outline hover:outline-2 hover:outline-gray-400 hover:bg-gray-300 dark:hover:bg-white/10 dark:hover:outline dark:hover:outline-2 dark:outline-gray-600'>
        <div className="flex items-center justify-between gap-3 p-1">
          <CardTitle className='ml-3'> <span className='text-sm'>
            {kit.title}</span>
          </CardTitle>
          <Link href={kit.author.url} target="_blank" rel="noopener noreferrer" className='flex items-center mr-3 mt-2 rounded-full outline outline-1 outline-gray-400 dark:outline-gray-500 z-10 outline-offset-1'>
            <div className='ml-1.5 absolute rounded-full w-3 h-3 lg:w-2 lg:h-2 lg:ml-1 -z-10 outline outline-green-500 animate-ping'></div>
            <Avatar className="size-6 animate-none lg:size-4">
              {
                kit.author.avatar ? <Image src={kit.author.avatar} alt={kit.author.name} /> : <AvatarFallback>{generateNameAbbr(kit.author.name)}</AvatarFallback>
              }
            </Avatar>
          </Link>
        </div>
        <Link href={kit.url} >
          <Image alt="" width={300} height={300} src={kit.image} className="rounded-xl p-2 " />

        </Link>


      </Card>
    </>
  )
}

export default KitCard