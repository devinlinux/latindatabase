import Layout from '../../components/layouts/article'
import {
    Heading,
    Container,
    Divider,
    Text
} from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'

const Comparatives = () => (
    <Layout title="Comparative Adjectives">
        <Container paddingTop={40}>
            <Heading as="h1" textAlign='center'>
                Comparative Adjectives
            </Heading>

            <Divider orientation='horizontal' paddingTop={2} />

            <Section delay={0.1}>
                <Paragraph>
                    Comparative adjectives are adjectives that are used to compare how much
                    something is a quiality to another. In English, comparative adjectives use 
                    either "more adjective", "adjectiver", or "rather adjective". In Latin, comparative 
                    adjectives can be recognized by the letters -ior added between the adjective base and 
                    the case ending. 
                </Paragraph>
                <br></br>
                <Divider orientation='horizontal' />
                <br></br>
                <br></br>
                <strong>Amicus</strong> Nominative Singular: <strong>Amicior</strong>
                <br></br>
                <strong>Amicus</strong> Genitive Singular: <strong>Amicioris</strong>
                <br></br>
                <strong>Amicus</strong> Dative Singular: <strong>Amiciorī</strong>
                <br></br>
                <strong>Amicus</strong> Accusative Singular: <strong>Amicioriem</strong>

                <br></br>
                <br></br>
                <Paragraph>
                    The noun that follows the comparative and the comparative should be 
                    of the same case. Comparatives are used to compare one thing to another
                    and in Engligh we usually show this comparison by using the word "than".
                    In Latin, we can use the word "quam" for than or we can use a word in the 
                    ablative case without "quam" to express the word that.
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default Comparatives