import { Button, Link } from '@chakra-ui/react'

const ContactItem = ({
    variant = 'link',
    colorScheme = 'teal',
    leftIcon,
    href,
    children
}) => {
    return (
        <Link href={href} isExternal>
            <Button
                variant={variant}
                colorScheme={colorScheme}
                leftIcon={leftIcon}
                _focus={({ boxShadow: 'none' }, { border: 0 }, { outline: 0 })}
            >
                {children}
            </Button>
        </Link>
    )
}

export default ContactItem
