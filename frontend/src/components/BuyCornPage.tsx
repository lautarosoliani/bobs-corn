'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import ErrorDialog from '@/components/AlertDialog'
import useBuyCornHandler from '@/hooks/useBuyCornHandler'

export default function BuyCornPage() {
   const [userId] = useState('user-123')
   const { totalPurchases, handleBuyCorn, errorMessage, resetError } = useBuyCornHandler(userId)

   return (
      <div className='flex flex-col items-center justify-center min-h-screen p-8'>
         <h1 className='text-xl font-bold mb-4'>Buy Corn</h1>
         <p className='mb-4'>
            You have bought: <strong>{totalPurchases}</strong> corn
         </p>
         <Button variant='default' onClick={handleBuyCorn}>
            Buy Corn 🌽
         </Button>
         <ErrorDialog errorMessage={errorMessage} onClose={resetError} />
      </div>
   )
}
