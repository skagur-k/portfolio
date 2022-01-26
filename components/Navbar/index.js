import Logo from '../Misc/logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../Misc/theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? 'black' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdfropFilterr: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                py={2}
                px={4}
                maxW=""
                wrap="wrap"
                align="center"
                justify="flex-start"
            >
                <Box align="center">
                    <Heading as="h1" size="lg" letterSpacing={'normal'}>
                        <Logo />
                    </Heading>
                </Box>

                <Stack
                    direction="row"
                    display={{ base: 'none', md: 'flex' }}
                    width="auto"
                    alignItems="center"
                    flex={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>

                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            ></MenuButton>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
