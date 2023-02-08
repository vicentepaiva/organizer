
import { useContext } from "react"
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/index";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFomratter } from "../../utils/formatter";
import { Trash, Pencil } from "phosphor-react";

import { SearchForm } from "./components/SearchForm";

import { PriceHightLight, TransactionsContainer, TransactionsTable, EditAndErase } from "./styles";




export function Transactions() {
    const { transactions } = useContext(TransactionsContext)


    return(
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                <tbody>
                    {transactions.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                            <td width="30%">{transaction.description}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            <td>{transaction.category}</td>
                            <td>
                            <PriceHightLight variant="income">
                                {priceFomratter.format(transaction.price)}
                            </PriceHightLight>
                            </td>
                            <td>{transaction.observation}</td>
                            <td>
                             <EditAndErase>
                                <Pencil size={15} />
                                <Trash size={15} />
                            </EditAndErase>   
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}