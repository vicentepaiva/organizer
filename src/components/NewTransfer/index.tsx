import * as Dialog  from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransferType, TransferTypeButton } from "./styles";


export function NewTransfer() {
    return(
        <Dialog.Portal>
        <Overlay />
  
        <Content>
          <Dialog.Title>Transferência</Dialog.Title>
          <CloseButton>
              <X />
          </CloseButton>
          <form action="">
            <input type="text" placeholder="Nome cliente"/>
            <input type="date" placeholder="Informe a Data"/>
            <input type="number" placeholder="Número do pedido"/>
            <input type="number" placeholder="Informe o Valor"/>  
            <textarea  placeholder="Observação"></textarea>  
          </form>
          </Content>
          </Dialog.Portal>  
    );
}