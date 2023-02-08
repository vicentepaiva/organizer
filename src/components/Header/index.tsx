import { ButtonLogout, HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from "../../assets/logo.svg";
import * as Dialog  from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router";




export function Header() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  async function  handleLogout() {
    await auth.signOut();
    navigate('/?')
  }

    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <NewTransactionButton>Novo cadastro</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>

                <ButtonLogout onClick={handleLogout}>
                    Clique para sair
                </ButtonLogout>
            </HeaderContent>
        </HeaderContainer>
    );
}


