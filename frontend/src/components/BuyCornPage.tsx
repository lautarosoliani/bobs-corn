'use client'

import { Button } from '@/components/ui/button'
import { useBuyCorn } from '@/hooks/useBuyCorn'
import { useState } from 'react'
import ErrorDialog from '@/components/AlertDialog'

export default function BuyCornPage() {
   const [userId] = useState('user-123')
   const [totalPurchases, setTotalPurchases] = useState(0)
   const [errorMessage, setErrorMessage] = useState<string | null>(null)

   const mutation = useBuyCorn(() => {
      setTotalPurchases((prev) => prev + 1)
   })

   const handleBuyCorn = () => {
      mutation.mutate(userId, {
         onError: (error) => {
            if (error.message === 'Too many requests') {
               setErrorMessage('⛔ Wait a minute before buying more corn!')
            } else {
               setErrorMessage('💥 Server error, please try again later.')
            }
         },
      })
   }

   return (
      <div className='flex flex-col items-center justify-center min-h-screen p-8'>
         <h1 className='text-xl font-bold mb-4'>Buy Corn</h1>
         <p className='mb-4'>
            You have bought: <strong>{totalPurchases}</strong> corn
         </p>
         <Button variant='default' onClick={handleBuyCorn}>
            Buy Corn 🌽
         </Button>
         <ErrorDialog errorMessage={errorMessage} onClose={() => setErrorMessage(null)} />
      </div>
   )
}
