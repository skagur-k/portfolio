import Link from 'next/link'
import { Image } from 'next/image'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    line-height: 20px;
    padding: 10px;
`

const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontSize={16}
                        mx={2}
                    >
                        namhyuck
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
