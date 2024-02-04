import { BounceLoader } from 'react-spinners';
import { Content } from './styles';

function Loading() {
  return (
    <Content>
      <img className="logo" src="/logos/logo-app.svg" alt="Logo do sistema Pontua" />
      <BounceLoader
        className='dot_loader'
        color="#F21A05"
        size={20}
      />
    </Content>
  )
}

export { Loading };