import Logo from '../Logo'

import {
    NavbarItem,
    NavbarRight,
    NavbarContainer,
    NavbarWrapper
} from './navbarItems'

const Navbar = props => {
    const { path } = props

    const navData = [
        { name: 'Works', href: '/works' },
        { name: 'Posts', href: '/posts' },
        { name: 'About', href: '/about' }
    ]

    return (
        <NavbarWrapper>
            <Logo>namhyuck</Logo>
            <NavbarContainer>
                {navData.map((item, index) => {
                    return (
                        <NavbarItem key={index} href={item.href} path={path}>
                            {item.name}
                        </NavbarItem>
                    )
                })}
            </NavbarContainer>
            <NavbarRight data={navData} />
        </NavbarWrapper>
    )
}

export default Navbar
