import { useState } from 'react'
import { useBuyCorn } from '@/hooks/useBuyCorn'

const useBuyCornHandler = (userId: string) => {
   const [totalPurchases, setTotalPurchases] = useState(0)
   const [errorMessage, setErrorMessage] = useState<string | null>(null)

   const mutation = useBuyCorn(() => {
      setTotalPurchases((prev) => prev + 1)
   })

   const handleBuyCorn = () => {
      mutation.mutate(userId, {
         onError: (error: Error) => {
            if (error.message === 'Too many requests') {
               setErrorMessage('⛔ Wait a minute before buying more corn!')
            } else {
               setErrorMessage('💥 Server error, please try again later.')
            }
         },
      })
   }

   const resetError = () => {
      setErrorMessage(null)
   }

   return {
      totalPurchases,
      handleBuyCorn,
      errorMessage,
      resetError,
   }
}

export default useBuyCornHandler
