import Layout from "../../components/layouts/article"
import {
    Heading, 
    Container, 
    Divider,
    Text
} from '@chakra-ui/react'
import Paragraph from "../../components/paragraph"
import Section from "../../components/section"

const Superlatives = () => (
    <Layout title="Superlatives">
        <Container paddingTop={40}>
            <Heading as="h1" textAlign="center">
                Superlatives
            </Heading>

            <Divider orientation='horizontal' paddingTop={2} />

            <Section delay={0.1}>
                <Paragraph>
                    Superlatives are words that describe the highest degree of a quiality. In Engligh, they
                    are formed by adding -est to the end of an adjective, adding most before an adjective, and 
                    using the word very before the adjective. In Latin, most superlatives are formed by adding
                    the letters -issim before the case ending. The -issim can only be added to first, second and 
                    third declension adjectives, however the endings must always be first or second declensino endings. 
                    Some adjectives in Latin do not use the letters -issim to show they are superlative, instead
                    they use the letters -rrim. The adjectives that are formed this way have a Masculine Singular
                    Nomitive form that ends in -er.

                </Paragraph>
                <br></br>
                <Divider orientation="horizontal" />
                <br></br>
                <br></br>
                <strong>Ingentēs</strong> becomes <strong>Ingentissimī</strong>
                <br></br>
                <strong>Pulcher</strong> becomes <strong>Pulcherrimus</strong>

                <br></br>
                <br></br>

                <Paragraph>
                    In Latin, there are siz adjectives that do not use either -issim or -rrim to show that they are
                    superlative. Instead, they use the letters -llim. The -llim superlatives are used for adjectives
                    that have a stem that ends in the letter L:
                </Paragraph>
                <br></br>
                <Divider orientation="horizontal" />
                <br></br>
                <br></br>
                <strong>Difficilis</strong> becomes <strong>Difficillimus</strong>
                <br></br>
                <strong>Facilis</strong> becomes <strong>Facillimus</strong>
                <br></br>
                <strong>Similis</strong> becomes <strong>Simillimus</strong>
                <br></br>
                <strong>Dissimilis</strong> becomes <strong>Dissimillimus</strong>
                <br></br>
                <strong>Gracilis</strong> becomes <strong>Gracillimus</strong>
                <br></br>
                <strong>Humilis</strong> becomes <strong>Humillimus</strong>

                <br></br>
                <br></br>

                <Paragraph>
                    Some irregular adjectives do not use hte -issim letters to show that they are superlative.
                    Instead, they use different words:
                </Paragraph>
                <br></br>
                <Divider orientation="horizontal" />
                <br></br>
                <br></br>

                <strong>Good</strong> = <strong>Bonus</strong>
                <br></br>
                <strong>Large</strong> = <strong>Magnus</strong>
                <br></br>
                <strong>Small</strong> = <strong>Parvus</strong>
                <br></br>
                <strong>Bad</strong> = <strong>Malus</strong>
                <br></br>
                <strong>Best</strong> = <strong>Optimus</strong>

                <br></br>
                <br></br>

                <Paragraph>
                    When the word quam is placed before a superlative, it changes the meaning of the superlative
                    to "as _ as possible." The superlative phrases with "quam" have more of an adverbial sense 
                    than an adjectival sense meaning that they describe an action more than a thing. 
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default Superlatives