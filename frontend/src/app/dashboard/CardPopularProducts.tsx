import { useGetDashboardMetricsQuery } from '@/state/api'
import { ShoppingBag } from 'lucide-react';
import Rating from '@/app/(components)/Rating/index';
import React from 'react'


const CardPopularProducts = () => {
    const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className="bg-white shadow-md rounded-2xl pb-16 row-span-3 xl:row-span-6">
        {isLoading ? (
            <div className=''>Loading...</div>
        )
        :
        <>
            <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>
                Popular Products
            </h3>
            <hr />
            <div className='overflow-auto h-full'>
                {
                    dashboardMetrics?.popularProducts.map((product) => (
                        <div key={product.productId} 
                            className='flex items-center justify-between gap-3 px-5 py-7 border-b'
                            >
                                <div className='flex items-center gap-3'>
                                    <div>img</div>
                                    <div className='flex flex-col justify-between gap-1'>
                                        <div className='font-bold text-gray-700'>
                                            {product.name}
                                        </div>
                                        <div className='flex text-sm items-center'>
                                            <span className='font-bold text-blue-500 text-xs'> ${product.price} </span>
                                            <span className='mx-2'>|</span>
                                            <Rating rating={product.rating || 0} />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-xs flex items-center'>
                                    <button className='bg-blue-100 text-blue-600 rounded-full p-2 mr-2'>
                                        <ShoppingBag className='w-4 h-4' />
                                    </button>
                                    {Math.round(product.stockQuantity/100000)}K sold
                                </div>

                        </div>
                    ))
                }
            </div>
        </>
        }
    </div>
  )
}

export default CardPopularProducts