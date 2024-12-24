'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import ErrorDialog from '@/components/AlertDialog'
import useBuyCornHandler from '@/hooks/useBuyCornHandler'

export default function BuyCornPage() {
   const [userId] = useState('user-123')
   const { totalPurchases, handleBuyCorn, errorMessage, resetError } = useBuyCornHandler(userId)

   return (
      <div className='flex flex-col items-center justify-center min-h-screen p-8'>
         <Label className='text-3xl font-bold mb-4'>Buy Corn</Label>
         <Label className='mb-4 text-lg'>
            You have bought: <Label className='font-bold text-lg'>{totalPurchases}</Label> corn
         </Label>
         <Button variant='default' onClick={handleBuyCorn}>
            Buy Corn 🌽
         </Button>
         <ErrorDialog errorMessage={errorMessage} onClose={resetError} />
      </div>
   )
}
