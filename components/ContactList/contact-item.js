import { Button, Link, ListItem } from '@chakra-ui/react'

const ContactItem = ({
    variant = 'ghost',
    colorScheme = 'teal',
    leftIcon,
    href,
    children
}) => {
    return (
        <ListItem>
            <Link href={href} target="_blank">
                <Button
                    variant={variant}
                    colorScheme={colorScheme}
                    leftIcon={leftIcon}
                >
                    {children}
                </Button>
            </Link>
        </ListItem>
    )
}

export default ContactItem
