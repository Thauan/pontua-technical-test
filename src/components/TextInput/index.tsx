import { InputHTMLAttributes } from 'react';

import { InputWrapper, MessageError } from './styles';

type TextInputProps = {
  onButtonClick?: () => void;
  buttonChildren?: React.ReactNode | null;
  isPassword?: boolean;
  error?: Error;
} & InputHTMLAttributes<HTMLInputElement>

function TextInput(props: TextInputProps) {
  const inputType = props.isPassword ? "password" : "text";

  return (
    <>
      <InputWrapper>
        <input {...props} type={inputType} />
        <a tabIndex={-1} onClick={props.onButtonClick} >
          {props.buttonChildren}
        </a>
      </InputWrapper>
      <MessageError>{props.error && <p role="alert" className='error'>{props.error?.message}</p>}</MessageError>
    </>
  )
}

export { TextInput };