import { useMutation } from '@tanstack/react-query'

async function buyCornApi(userId: string) {
   const resp = await fetch('http://localhost:3001/purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
   })
   if (!resp.ok) {
      if (resp.status === 429) {
         throw new Error('Too many requests')
      } else {
         throw new Error('Server error')
      }
   }
   return resp.json()
}

export function useBuyCorn(onSuccessCallback: () => void) {
   return useMutation({
      mutationFn: (userId: string) => buyCornApi(userId),
      onSuccess: () => {
         onSuccessCallback()
      },
   })
}
