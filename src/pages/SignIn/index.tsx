import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AuthCard } from '../../components/AuthCard';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useAuth } from '../../hooks/useAuthHook';
import { Container, Content, Header, LeftContent, RightContent, Wrapper, } from './styles';
import { useState } from 'react';
import { TAUthContext } from '../../hooks/useAuthHook/types';
import { TSignIn } from '../../@types/dtos/TSignIn';

const schema = yup
  .object({
    email: yup.string()
      .email("O e-mail deve ser valido")
      .required("O campo e-mail é obrigatorio"),
    password: yup.string().required("O campo senha é obrigatorio"),
  })
  .required()

function SignIn() {
  const [isPassword, setIsPassword] = useState(true);

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const { signIn }: TAUthContext = useAuth();


  const onSubmit = (user: TSignIn) => {
    signIn({
      email: user.email,
      password: user.password
    });
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
              <AuthCard title='Bem-vindo' description='informe as suas credenciais de acesso ao portal' >
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        // error={errors.email}
                        placeholder='E-mail'
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        isPassword={isPassword}
                        // error={errors.password}
                        placeholder='Informe sua senha'
                        buttonChildren={<img src='/icons/eye.svg' />}
                        onButtonClick={() => setIsPassword(!isPassword)}
                      />
                    )}
                  />

                  <Button>entrar</Button>
                </form>

                <div className="footer">
                  <Link
                    to="/recovery/account"
                    relative="route"
                    className="link">
                      Esqueceu a senha?
                  </Link>
                </div>
              </AuthCard>
            </RightContent>
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}

export { SignIn };