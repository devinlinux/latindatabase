import Layout from '../../components/layouts/article'
import {
    Heading,
    Container,
    Divider,
    Text
} from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'

const Indirect = () => (
    <Layout title="Indirect Statements">
        <Container paddingTop={40}>
            <Heading as="h1" textAlign='center'>
                Indirect Statments
            </Heading>

            <Divider orientation='horizontal' paddingTop={2}/>

            <Section delay={0.1}>
                <Paragraph>
                    Indirect Statements are thoughts, ideas, and sentences that are related by someone.
                    Indirect statements always follow "head" verbs which usually express an idea of 
                    "thinking", "feeling", "saying", or "perceiving". Indirect speech is speech that 
                    could have been a quote if spoken directly, if someone is relaying the quote instead
                    of stating it outright then it is considered an indirect statemnt.
                </Paragraph>

                <Heading as="h5" paddingTop={5} variant="section-title">
                    Example Head Verbs:
                </Heading>

                <Section delay={0.4}>
                    <Text>
                        I think that<br></br>
                        I know that<br></br>
                        I say that<br></br>
                        I hear that<br></br>
                        I see that<br></br>
                        I recall that<br></br>
                        I smell that<br></br>
                    </Text>
                </Section>

                <Section delay={0.7}>
                    <Heading as="h5" variant="section-title">
                        The Word "That"
                    </Heading>

                    <Paragraph>
                        Notice that each of the head verbs uses "that". The word "that" is used in English
                        to show that a statement is indirect, but the word that does not have a Latin 
                        equivalent to explicitely include the word "that" in the sentence. 
                    </Paragraph>
                </Section>

                <Section delay={1.0}>
                    <Heading as="h5" variant="section-title">
                        Key Components
                    </Heading>

                    <Paragraph>
                        Indirect statments have two key components that identify them in Latin text. The first
                        is that the subject of the indirect statement needs to be in the accusative case, and the 
                        second is that the main verb of the indirect statement needs to be a verb in the 
                        infinitive form. 
                    </Paragraph>
                </Section>

                <Section delay={1.3}>
                    <Heading as="h5" variant="section-title">
                        Indirect Statement Example
                    </Heading>

                    <Text>
                        Michael Caeciliō dīxīt murum esse rubrum. 
                        <br></br>
                        <br></br>
                        Michael said to Caecilius that the wall is red.
                    </Text>

                    <br></br>
                    <Paragraph>
                        In this sentence the head verb dīxīt starts the indirect statement with the accusative subject
                        being murum and the infinitive main verb being esse. You can see in this example that Michael
                        is saying something to Caecilius but since the quote is not being spoken directly (in quotes), 
                        it is expressed not as a quote but as an indirect statement.
                    </Paragraph>
                </Section>
            </Section>
        </Container>
    </Layout>
)

export default Indirect