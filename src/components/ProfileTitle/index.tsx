import { Wrapper } from './styles'

type ProfileTitleProps = {
  title: string
  symbol?: string;
  username?: string;
}

function ProfileTitle({ title, symbol = ".", username }: ProfileTitleProps) {
  return (
    <>
      <Wrapper>
        <h2 className="title">{title}<span className="highlight">{symbol}</span>{username}</h2>
      </Wrapper>
    </>
  )
}

export { ProfileTitle };