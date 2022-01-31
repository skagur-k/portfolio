import Section from '../Section'
import { Heading } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'

const Biography = () => {
    const biography = [
        { year: 1995, content: 'Born in Cheong Ju, South Korea' },
        { year: 2003, content: 'Moved to Shanghai, China' }
    ]

    return (
        <Section delay={0}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            {biography.map((item, index) => {
                console.log(index)
                return (
                    <BioSection key={index}>
                        <BioYear>{item.year}</BioYear>
                        {item.content}
                    </BioSection>
                )
            })}
        </Section>
    )
}

export default Biography
