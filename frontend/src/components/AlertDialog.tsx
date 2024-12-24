import React from 'react'
import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '@/components/ui/alert-dialog'

interface ErrorDialogProps {
   errorMessage: string | null
   onClose: () => void
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ errorMessage, onClose }) => {
   const isOpen = !!errorMessage

   return (
      <AlertDialog
         open={isOpen}
         onOpenChange={(open) => {
            if (!open) onClose()
         }}
      >
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>Error</AlertDialogTitle>
               <AlertDialogDescription>{errorMessage}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel onClick={onClose}>Close</AlertDialogCancel>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   )
}

export default ErrorDialog
