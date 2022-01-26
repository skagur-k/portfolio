import { List, Icon, Box, HStack } from '@chakra-ui/react'
import ContactItem from './contact-item'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMailOpenOutline
} from 'react-icons/io5'

const ContactList = () => {
    return (
        <Box>
            <HStack justify="space-around">
                <ContactItem
                    href="http://www.google.com"
                    leftIcon={<Icon as={IoLogoGithub} />}
                >
                    skagur-k
                </ContactItem>
                <ContactItem
                    href="http://www.google.com"
                    leftIcon={<Icon as={IoLogoInstagram} />}
                >
                    skagurzz
                </ContactItem>
                <ContactItem
                    href="http://www.google.com"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                    skagur0329
                </ContactItem>
            </HStack>
        </Box>
    )
}
// <List>

//     <ContactItem
//         href="http://www.google.com"
//         leftIcon={<Icon as={IoMailOpenOutline} />}
//     >
//         namhyuck.james@gmail.com
//     </ContactItem>
// </List>

export default ContactList
