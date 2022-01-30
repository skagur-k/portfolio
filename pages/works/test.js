import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import {
    Title,
    WorkImage,
    Meta,
    ExternalLink
} from '../../components/WorkDetails'
import Layout from '../../components/Layouts/article'

const Work = () => {
    return (
        <Layout title="Test">
            <Container>
                <Title>
                    Test <Badge>2020</Badge>
                </Title>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <ExternalLink>Google.com</ExternalLink>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>NodeJS, Electron, React</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/inkdrop_eyecatch.png" alt="test" />
            </Container>
        </Layout>
    )
}

export default Work
