import { dataAttr } from "@chakra-ui/utils";
import {  useEffect, useState, ReactNode,useCallback } from "react";
import { createContext } from "react";




import { api } from "../lib/axios";



interface Transaction {
    id: number,
    type: 'income',
    description: string,
    createdAt: string,
    category: string,
    price: number,
    observation: string,
}

interface CreateTransactionInput {
    description: string,
    price: number,
    category: string,
    type: 'income',
    observation: string,
}

interface TransactionsContextType {
    transactions: Transaction[];
    removeLoading: boolean;
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: ReactNode;
}


export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    

  const fetchTransactions = useCallback(
    async ( query?: string ) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        }
      })
      
      setTransactions(response.data);
      setRemoveLoading(true);
    }, [])

  

  const createTransaction = useCallback(async (data: CreateTransactionInput) => {
    const { description, price, category, observation, type } = data;

    const response = await api.post('/transactions', {
      description, 
      price, 
      category, 
      type,
      observation,
      createdAt: new Date(), 
    })

    setTransactions(state => [ response.data  ,...state ]);
  }, [])

  useEffect(() => { 
    setTimeout(() => {
      fetchTransactions();
    }, 3000)
    }, [])
  
    return(
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction,
            removeLoading,
            }}>
            {children}
        </TransactionsContext.Provider>
    );
}

