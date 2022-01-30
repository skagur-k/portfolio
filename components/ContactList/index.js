import { List, Icon, Box, SimpleGrid } from '@chakra-ui/react'
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
            <SimpleGrid columns={[1, 3]} spacingY="4">
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
            </SimpleGrid>
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
