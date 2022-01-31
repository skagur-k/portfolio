import Link from 'next/link'
import { Image } from 'next/image'
import styled from '@emotion/styled'
import { Text, useColorModeValue, Heading, Box } from '@chakra-ui/react'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    line-height: 20px;
    padding: 10px;
`

const Logo = ({ children }) => {
    return (
        <Box align="center" ml={4} flex={1}>
            <Heading as="h1" size="lg" letterSpacing={'normal'}>
                <Link href="/">
                    <a>
                        <LogoBox>
                            <Text
                                color={useColorModeValue(
                                    'gray.800',
                                    'whiteAlpha.900'
                                )}
                                fontSize={16}
                            >
                                {children}
                            </Text>
                        </LogoBox>
                    </a>
                </Link>
            </Heading>
        </Box>
    )
}

export default Logo
