import { Heading, Button } from '@chakra-ui/react'

const h1 = props => <Heading size="2xl" my="0.5rem" {...props} />
const h2 = props => <Heading size="xl" my="0.5rem" {...props} />
const h3 = props => <Heading size="lg" my="0.5rem" {...props} />
const h4 = props => <Heading size="sm" my="0.5rem" {...props} />

const MDXComponents = {
    h1,
    h2,
    h3,
    h4,
    Button
}

export default MDXComponents
