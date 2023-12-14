import { Button, HeaderWrapper ,ListItems,ListMenu,Logo} from '../assets/styles/header'
import {ReactComponent as LogoImg} from '../assets/images/logo.svg'

const array:string[] = ['About','Services','Projects']
function Header() {
  return (
    <HeaderWrapper>
        <Logo>
        <LogoImg/>
        <ListMenu>
            {array.map(item=><ListItems key={item}>{item}</ListItems>)}
        <Button>Get in Touch</Button>
        </ListMenu>
        </Logo>
    </HeaderWrapper>
  )
}

export default Header