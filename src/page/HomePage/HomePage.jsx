import React from 'react'
import ListMoive from './ListMoive'
import TabMovie from './TabMovie'

export default function HomePage() {
  return (
    <div className='text-5xl text-blue-700'>
      Home Page
      <TabMovie/>
      <ListMoive />
    </div>
  )
}
