import Layout from '../../components/layouts/article'
import {
    Heading,
    Container,
    Divider,
} from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'

const ActiveInfinitives = () => (
    <Layout title="Active Infinitives">
        <Container paddingTop={40}>
            <Heading as="h1" textAlign='center'>
                Active Infinitives
            </Heading>

            <Divider orientation='horizontal' paddingTop={2} />

            <Section delay={0.1}>
                <Paragraph>
                    Infinitives are the Latin verb forms that are translated "to verb." Similar to 
                    verb tenses, there are past, present, and future infinitives. The most present
                    infinitive forms are also the second principle parts of verbs. 
                </Paragraph>
            </Section>

            <Heading as="h2" variant="section-title">
                Forming Infinitives
            </Heading>

            <br></br>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Present
                </Heading>

                <Paragraph>
                    To form the present infinitive for a verb, you simple take the second principle part 
                    of that verb. The present infinitives express actions that take place at the <i>same time </i>
                    as the main action. 
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Past
                </Heading>

                <Paragraph>
                    To form the past infinitive for a verb, you take the third principle part, remove the 
                    -ī and add the letters -isse to the end. Past infinitives express actions that took 
                    place <i>before</i> the main action. 
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Future
                </Heading>

                <Paragraph>
                    To form the future infinitive for a verb, take the fourth principle part, add the 
                    letters -ur before the -um and "esse" as a separate word after it. Future infinitives
                    express actions that <i>will</i> take place in the future.
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default ActiveInfinitives