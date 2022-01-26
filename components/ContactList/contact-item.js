import { Button, Link, ListItem } from '@chakra-ui/react'

const ContactItem = ({
    variant = 'link',
    colorScheme = 'teal',
    leftIcon,
    href,
    children
}) => {
    return (
        <Link
            href={href}
            target="_blank"
            _focus={({ outline: 'none' }, { border: 'none' })}
        >
            <Button
                as="a"
                variant={variant}
                colorScheme={colorScheme}
                leftIcon={leftIcon}
            >
                {children}
            </Button>
        </Link>
    )
}

export default ContactItem
