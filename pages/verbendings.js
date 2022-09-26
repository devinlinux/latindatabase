import Layout from '../components/layouts/article'
import { 
    Heading, 
    Container, 
    Divider,
    Table, 
    Thead,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
    Text
 } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const VerbEndings = () => (
    <Layout title="Verb Endings">
        <Container paddingTop={40}>
            <Heading as="h1" textAlign='center'>
                Verb Endings
            </Heading>

            <Divider orientation='horizontal' />

            <Section delay={0.1}>
                <Heading as="h3" paddingTop={10} variant="section-title">
                    Present Tense
                </Heading>

                <Paragraph>
                    The present tense is used to describe things (actions)
                    that are currently happening: 
                    <br></br>
                    I am running / They are sitting
                    <br></br>
                    <br></br>
                    The basic process for getting a verb into the present tense
                    is to take the second principle part, remove the -re, add 
                    the correct ending based on who is doing the action,
                    and applying the necessary rules to ensure that the verb
                    is formed correctly.
                </Paragraph>
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Present Tense Endings</TableCaption>
                        <Thead>
                            <Tr>
                                <Td>English Person</Td>
                                <Td>Latin Verb Ending</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>I</Td>
                                <Td>-o</Td>
                            </Tr>
                            <Tr>
                                <Td>You</Td>
                                <Td>-s</Td>
                            </Tr>
                            <Tr>
                                <Td>He / She / It</Td>
                                <Td>-t</Td>
                            </Tr>
                            <Tr>
                                <Td>We</Td>
                                <Td>-mus</Td>
                            </Tr>
                            <Tr>
                                <Td>You all</Td>
                                <Td>-tis</Td>
                            </Tr>
                            <Tr>
                                <Td>They</Td>
                                <Td>-nt</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <br></br>
                <br></br>
                <Container>
                    The rules for the present tense are dependent on the conjugation 
                    of the verb.
                    <Heading as="h3" variant="section-title"> 
                        1st Conjugation
                    </Heading>
                    <Text>
                        - The letter 'a' is crushed by the -o ending
                    </Text>

                    <Heading as="h3" variant="section-title">
                        2nd Conjugation
                    </Heading>
                    <Text>
                        - There are no special rules for the 2nd conjugation!
                    </Text>

                    <Heading as="h3" variant="section-title">
                        3rd Conjugation
                    </Heading>
                    <Text>
                        - The 'e' is crushed by the -o ending
                        <br></br>
                        - The 'e' changes to an 'i' before the endings -s, -t, -mus, and -tis
                        <br></br>
                        - The 'e' changes to a 'u' before the ending -nt
                    </Text>

                    <Heading as="h3" variant="section-title">
                        3rd -io Conjugation
                    </Heading>
                    <Text>
                        - The 'e' changes to an 'i' before all of the endings
                        <br></br>
                        - A 'u' is added between the 'i' and the ending -nt
                    </Text>

                    <Heading as="h3" variant="section-title">
                        4th Conjugation
                    </Heading>
                    <Text>
                        - The letter 'u' is added between the 'i' and the ending -nt
                    </Text>
                </Container>
            </Section>

            <Divider orientation="horizontal" />

            <Section delay={0.3}>
                <Heading as="h3" paddingTop={10} variant="section-title">
                    Imperfect Tense
                </Heading>

                <Paragraph>
                    The imperfect tense is used to talk about an action
                    that was happening in the past and was in the process
                    of being done when something else happened ot when we 
                    think about the action:
                    <br></br>
                    I was running / They were sitting
                    <br></br>
                    <br></br>
                    The basic process for getting a verb into the imperfect tense
                    is to take the second principle part of the verb, remove the -re,
                    add the a ba, add the correct ending, and then change the verb according
                    to the rules
                </Paragraph>
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Imperfect Tense Endings</TableCaption>
                        <Thead>
                            <Tr>
                                <Td>English Person</Td>
                                <Td>Latin Verb Ending</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>I</Td>
                                <Td>-m</Td>
                            </Tr>
                            <Tr>
                                <Td>You</Td>
                                <Td>-s</Td>
                            </Tr>
                            <Tr>
                                <Td>He / She / It</Td>
                                <Td>-t</Td>
                            </Tr>
                            <Tr>
                                <Td>We</Td>
                                <Td>-mus</Td>
                            </Tr>
                            <Tr>
                                <Td>You all</Td>
                                <Td>-tis</Td>
                            </Tr>
                            <Tr>
                                <Td>They</Td>
                                <Td>-nt</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <br></br>
                <br></br>
                <Container>
                    The rules for the imperfect tense are also dependent on
                    the conjugation of the verb that you are applying them to.

                    <Heading as="h3" variant="section-title">
                        1st Conjugation
                    </Heading>
                    <Text>
                        - the 'a' before the 'ba' should have a macron (ā)
                    </Text>

                    <Heading as="h3" variant="section-title">
                        2nd Conjugation
                    </Heading>
                    <Text>
                        - the 'e' before the 'ba' should have a macron (ē)
                    </Text>

                    <Heading as="h3" variant="section-title">
                        3rd Conjugation
                    </Heading>
                    <Text>
                        - the 'e' before the 'ba' should have a macron (ē)
                    </Text>

                    <Heading as="h3" variant="section-title">
                        3rd -io Conjugation
                    </Heading>
                    <Text>
                        - the 2 letters before the 'ba' must be 'iē'
                    </Text>

                    <Heading as="h3" variant="section-title">
                        4th Conjugation
                    </Heading>
                    <Text>
                        - the 2 letters before the 'ba' must be 'iē'
                    </Text>
                </Container>
            </Section>

            <Divider orientation='horizontal' />

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Perfect Tense
                </Heading>

                <Paragraph>
                    The perfect tense is used to talk about actions
                    that happened in the past and have been completed 
                    when something else happens or when we think 
                    about the action.
                    <br></br>
                    I (have) ran / They (have) sat
                    <br></br>
                    <br></br>
                    The process to get a verb into the perfect tense 
                    is to take the third principle part, remove the -ī,
                    and add the correct ending. There are no special rules
                    for the perfect tense!
                </Paragraph>
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Perfect Tense Endings</TableCaption>
                        <Thead>
                            <Tr>
                                <Td>English Person</Td>
                                <Td>Latin Verb Ending</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>I</Td>
                                <Td>-ī</Td>
                            </Tr>
                            <Tr>
                                <Td>You</Td>
                                <Td>-istī</Td>
                            </Tr>
                            <Tr>
                                <Td>He / She / It</Td>
                                <Td>-it</Td>
                            </Tr>
                            <Tr>
                                <Td>We</Td>
                                <Td>-imus</Td>
                            </Tr>
                            <Tr>
                                <Td>You all</Td>
                                <Td>-istis</Td>
                            </Tr>
                            <Tr>
                                <Td>They</Td>
                                <Td>-ērunt</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <br></br>
                <br></br>
            </Section>

            <Divider orientation='horizontal' />
        </Container>
    </Layout>
)

export default VerbEndings