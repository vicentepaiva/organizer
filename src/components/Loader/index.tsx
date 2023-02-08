import react from "react";
import {LoadingSpinner, LoadSpinnerContainer} from "./styles";
import loading from "../../assets/loading.svg";

export function LoadSpinner() {
    return (
        <LoadSpinnerContainer>
            <LoadingSpinner>
                    <img src={loading} alt="loading" />
            </LoadingSpinner>
        </LoadSpinnerContainer>
    )
}