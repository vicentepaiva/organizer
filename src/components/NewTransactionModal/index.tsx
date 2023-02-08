
import * as Dialog  from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { CloseButton, Content, Overlay, TransactionType } from "./styles";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { api } from "../../lib/axios";
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContext } from "react";



const newTransactionFormSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  observation: z.string(),
  type: z.enum(['income']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>


export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const { 
    control,
    register,
    handleSubmit,
    formState: {isSubmitting},
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })
  
    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
      const {description, category, price, observation, type } = data;
      
      await createTransaction({
        description,
        category,
        price,
        observation,
        type,
      })
      reset();
    }
    


    
    return(
        <Dialog.Portal>
        <Overlay />
  
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
              <X />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
              <input 
              type="text" 
              placeholder="Cliente" 
              required 
             {...register('description')}
             />
  
  
              <input 
              type="text" 
              placeholder="Pedido" 
              required 
             {...register('category')}
              />  

              <input 
              type="number" 
              placeholder="Valor" 
              required 
             {...register('price', {valueAsNumber: true})}
              /> 

              <textarea 
              placeholder="Oservação"
              required 
              {...register('observation')}
              >
              </textarea> 

              <Controller
              control={control}
              name="type"
              render={({field}) => {
                return(
                  <TransactionType onValueChange={field.onChange} value={field.value}>
                  </TransactionType>
                )
              }} />
              <button type="submit" disabled={isSubmitting} >Cadastrar</button>     
          </form>
        </Content>
       
      </Dialog.Portal>
    );
  }


