import { List, Icon } from '@chakra-ui/react'
import ContactItem from './contact-item'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMailOpenOutline
} from 'react-icons/io5'

const ContactList = () => {
    return (
        <List>
            <ContactItem
                href="http://www.google.com"
                leftIcon={<Icon as={IoLogoGithub} />}
            >
                @skagur-k
            </ContactItem>
            <ContactItem
                href="http://www.google.com"
                leftIcon={<Icon as={IoLogoInstagram} />}
            >
                @skagurzz
            </ContactItem>
            <ContactItem
                href="http://www.google.com"
                leftIcon={<Icon as={IoLogoLinkedin} />}
            >
                @skagur0329
            </ContactItem>
            <ContactItem
                href="http://www.google.com"
                leftIcon={<Icon as={IoMailOpenOutline} />}
            >
                namhyuck.james@gmail.com
            </ContactItem>
        </List>
    )
}

export default ContactList
