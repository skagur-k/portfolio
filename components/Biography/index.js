import Section from '../Misc/section'
import { Heading } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'

const Biography = () => {
    return (
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>1995</BioYear>
                Born in Cheong Ju (청주), South Korea
            </BioSection>
            <BioSection>
                <BioYear>2003</BioYear>
                Moved to Shanghai, China
            </BioSection>
            <BioSection>
                <BioYear>2013</BioYear>
                Attended Hong Kong Polytechnic University (香港理工大学)
                majoring in Computer Science
            </BioSection>
            <BioSection>
                <BioYear>2017</BioYear>
                Discharged as Sergeant and completed military service
            </BioSection>
            <BioSection>
                <BioYear>2019</BioYear>
                Graduated with Bachelor&apos;s Degree in Information Technology
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Shifted gear into the Entertainment Industry
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Started business and failed miserably.
            </BioSection>
        </Section>
    )
}

export default Biography
