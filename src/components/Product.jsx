import React from 'react'

const data = [
    {
        id:0,
        name: 'Product 0',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    {
        id:1,
        name: 'Product 1',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    {
        id:2,
        name: 'Product 2',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    {
        id:3,
        name: 'Product 3',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    {
        id:4,
        name: 'Product 3',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    {
        id:5,
        name: 'Product 3',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    {
        id:6,
        name: 'Product 3',
        description:'Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',
        price: '$ 100'
    },
    
]


export const Product = () => {
  return (
    <div>
        <div className='flex flex-wrap gap-4'>
            {data.map((x, key)=>(
                    <div key={x.id} className='w-[200px] border p-4 rounded-md shadow-md mb-4'>
                        <div className='font-semibold text-center'>{x.name}</div>
                        <div>{x.description}</div>
                        <div className='text-xl font-semibold'>{x.price}</div>
                        <button className='bg-gray-300 py-1 px-2 rounded-md font-semibold hover:bg-gray-400'>Add to cart</button>
                    </div>  
            ))}
        </div>

    </div>
  )
}
