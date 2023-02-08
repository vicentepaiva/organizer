import { CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { dateFormatter,  priceFomratter } from "../../utils/formatter";
import { useSummary } from '../../hooks/useSummary';


export function Summary() {
    const summary = useSummary();
    let today = new Date();


    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <strong>{dateFormatter.format(new Date())}</strong>
                    <CurrencyDollar size={32} color="#00b37e"/>
                </header>

                <strong>{priceFomratter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard variant={'green'}>
                <header>
                    <strong>{today.getFullYear()}</strong>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{priceFomratter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}