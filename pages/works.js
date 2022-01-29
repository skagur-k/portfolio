import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/Misc/section'
import { WorkGridItem } from '../components/Misc/grid-item'

import InkDrop from '../public/images/inkdrop_eyecatch.png'
import Layout from '../components/Layouts/article'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Section delay={0}>
                    <Heading as="h4" fontSize={20} mb={4} mt={4}>
                        Works
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0}>
                        <WorkGridItem
                            id="test"
                            title="Hello World"
                            thumbnail={InkDrop}
                        >
                            Hello This is a test
                        </WorkGridItem>
                    </Section>
                    <Section delay={0}>
                        <WorkGridItem
                            id="test2"
                            title="Hello World"
                            thumbnail={InkDrop}
                        >
                            Hello This is a test 2
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                {/* Work Sections */}

                <Section delay={0}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4} mt={4}>
                        Old Work
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0}>
                        <WorkGridItem
                            id=""
                            title="Hello World"
                            thumbnail={InkDrop}
                        >
                            Hello This is a test
                        </WorkGridItem>
                    </Section>
                    <Section delay={0}>
                        <WorkGridItem
                            id=""
                            title="Hello World"
                            thumbnail={InkDrop}
                        >
                            Hello This is a test 2
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                {/* Work Sections */}
            </Container>
        </Layout>
    )
}

export default Works
