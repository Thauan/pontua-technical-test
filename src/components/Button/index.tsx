import { ButtonWrapper } from './styles'

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

function Button({ children, onClick, disabled = false }: ButtonProps) {
  return (
    <>
      <ButtonWrapper disabled={disabled} onClick={onClick}>
        {children}
      </ButtonWrapper>
    </>
  )
}

export { Button };