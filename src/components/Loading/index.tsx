import { BounceLoader } from 'react-spinners';
import { Wrapper, Container, Content } from './styles';

function Loading() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <img className="logo" src="/logos/logo.png" alt="Logo do sistema Pontua" />
          <BounceLoader
            className='dot_loader'
            color="#F21A05"
            size={20}
          />
        </Content>
      </Container>
    </Wrapper>
  )
}

export { Loading };