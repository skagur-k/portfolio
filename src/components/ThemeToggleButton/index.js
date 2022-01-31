import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'
const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <IconButton
                aria-label="Toggle theme"
                colorScheme={useColorModeValue('purple', 'orange')}
                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                onClick={toggleColorMode}
                _focus={{ outline: '0' }}
            ></IconButton>
        </AnimatePresence>
    )
}

export default ThemeToggleButton
