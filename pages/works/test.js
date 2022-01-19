import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work-details'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Test">
            <Container>
                <Title>
                    Test <Badge>2020</Badge>
                </Title>
                <Paragraph>This is a test paragraph</Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.google.com">
                            Google.com <ExternalLinkIcon mx="2px" />
                        </Link>
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
