import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthCard } from '../../components/AuthCard';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Container, Content, Header, LeftContent, RightContent, Wrapper } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string()
      .email("O e-mail deve ser valido")
      .required("O campo e-mail é obrigatorio")
  })
  .required()

function RecoveryAccount() {
  const [isSubmitted, setSubmited] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    setSubmited(data);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <img className="logo" src="/logos/logo.png" alt="Logo do sistema Pontua" />
          </Header>
          <Content>
            <LeftContent>
              <img src="/illustrations/building.png" alt="Ilustração de um edificio" />
            </LeftContent>
            <RightContent>
              {!isSubmitted ? (
                <AuthCard title='Recuperar senha' description='Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.' >
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          {...field}
                        //   error={errors.email}
                          placeholder='Informe seu e-mail'
                        />
                      )}
                    />
                    <Button disabled={!isValid}>enviar link</Button>
                  </form>
                </AuthCard>
              ) : (
                <AuthCard symbol=" ;)" title='Tudo certo' description='Foi enviado um e-mail para você com instruções de como redefinir a sua senha.' >
                  <Button onClick={() => navigate("/login", { replace: true })}>voltar para o login</Button>
                </AuthCard>
              )}
            </RightContent>
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}

export { RecoveryAccount };