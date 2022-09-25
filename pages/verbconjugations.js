import { Heading, Container, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const VerbConjugations = () => (
    <Layout title="Verb Conjugations">
        <Container paddingTop={40}>
            <Heading as="h1" textAlign="center">
                bĀsĒ ExĪt | cĀgĒ ExĪt
            </Heading>

            <br></br>
            <Divider orientation="horizontal" />

            <Section delay={0.1}>
                <Heading paddingTop={10} as="h3" variant="section-title">
                    1st Conjugation
                </Heading>

                <Paragraph>
                    Verbs that are part of the 1st conjugation can be recognized
                    by their 2nd princple part ending in -āre
                    <br></br>
                    <strong>Example:</strong>
                    <br></br>
                    Circumspect<strong>āre</strong>
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" paddingTop={5} variant="section-title">
                    2nd Conjugation
                </Heading>

                <Paragraph>
                    Verbs that are part of the 2nd conjugation can be recognized
                    by the second principle part ending in -ēre. It is important
                    to recognize the long e being part of the -ēre as the 3rd
                    conjugation ends in -ere
                    <br></br>
                    <strong>Example:</strong>
                    <br></br>
                    Respond<strong>ēre</strong>
                </Paragraph>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" paddingTop={5} variant="section-title">
                    3rd Conjugation
                </Heading>

                <Paragraph>
                    Verbs that are part of the 3rd conjugation can be recognized
                    by the second principle part ending in -ere. An important 
                    distinction between the 2nd and 3rd principle parts is the 
                    -ēre compared to the -ere
                    <br></br>
                    <strong>Example:</strong>
                    <br></br>
                    Quaer<strong>ere</strong>
                </Paragraph>
            </Section>

            <Section delay={0.7}>
                <Heading as="h3" paddingTop={5} variant="section-title">
                    4th Conjugation
                </Heading>

                <Paragraph>
                    Verbs that are part of the 4th conjugation can be recognized
                    by the second principle part ending in -īre
                    <br></br>
                    <strong>Example:</strong>
                    <br></br>
                    Aud<strong>īre</strong>
                </Paragraph>
            </Section>

            
        </Container>
    </Layout>
)

export default VerbConjugations