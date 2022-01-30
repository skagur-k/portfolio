import NextLink from 'next/link'
import {
    Link,
    Text,
    useColorModeValue,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Stack,
    Container
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../ThemeToggleButton'

export const NavbarWrapper = ({ props, children }) => {
    return (
        <Box
            zIndex={1}
            position={{ base: 'relative', md: 'fixed' }}
            top="0"
            left="0%"
            w="100%"
            style={{ backdropFilter: 'blur(lg)' }}
            bg={useColorModeValue('#ffffff90', '#20202395')}
            pt={3}
        >
            <Container
                display="flex"
                as="nav"
                p={(4, 0)}
                maxW="container.lg"
                align="center"
            >
                {children}
            </Container>
        </Box>
    )
}

export const NavbarContainer = ({ children }) => {
    return (
        <Stack
            mx={6}
            direction="row"
            display={{ base: 'none', md: 'flex' }}
            align="center"
        >
            {children}
        </Stack>
    )
}

export const NavbarItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('black', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                color={inactiveColor}
                variant="navbarItem"
                active={active ? 'true' : undefined}
            >
                <Text fontWeight="600">{children}</Text>
            </Link>
        </NextLink>
    )
}

export const NavbarRight = ({ data }) => {
    return (
        <Box align="center" display="flex" mr={2}>
            <ThemeToggleButton />
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu id="navbar" isLazy>
                    <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        variant="outline"
                        aria-label="Options"
                        _active={{ boxShadow: 'none', outline: 'none' }}
                    ></MenuButton>

                    <MenuList>
                        {data.map((item, index) => {
                            return (
                                <NextLink key={index} href={item.href}>
                                    <MenuItem as={Link}>{item.name}</MenuItem>
                                </NextLink>
                            )
                        })}
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}
