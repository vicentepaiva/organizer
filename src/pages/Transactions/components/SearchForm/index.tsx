;
import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

//import { useContextSelector } from "use-context-selector";
import { useContext, useState } from "react";
import { LoadingSpinner } from "../../../../components/Loader/styles";




const serchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof serchFormSchema>


export function SearchForm() {
    const  {fetchTransactions}  = useContext(TransactionsContext) 
    const {removeLoading} =useContext(TransactionsContext)
    
    

    const {
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(serchFormSchema),
    });

   async function handleSerchTransactions(data: SearchFormInputs) {
       await fetchTransactions(data.query)
    }

    function handleClick() {
        {!removeLoading && <LoadingSpinner />}
    }
   

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSerchTransactions)}>
        <input 
            type="text"  
            placeholder="Busque por transações"
            {...register('query')}
        />

        <button type="submit" disabled={isSubmitting} onClick={handleClick}>
            
            <MagnifyingGlass size={20} />
            Buscar
        </button>
    </SearchFormContainer>
  );
}