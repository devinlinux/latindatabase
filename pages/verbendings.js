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

            <Section delay={0.7}>
                <Heading as="h3" variant="section-title">
                    Future Tense
                </Heading>

                <Paragraph>
                    The future tense is used to talk about actions that 
                    will happen in the future. 
                    <br></br>
                    I will run / I will sit
                    <br></br>
                    <br></br>
                    The process to get a verb into the future tense is to 
                    take the second principle part remove the -re, add the 
                    correct letters to the stem, and add the correct personal
                    ending. Finally, you take the verb and change it according 
                    to the rules.
                </Paragraph>
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Future Tense Endings</TableCaption>
                        <Thead>
                            <Tr>
                                <Td>English Person</Td>
                                <Td>Latin Verb Ending</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    I
                                </Td>
                                <Td>
                                    -m / -o (first and second conjugation only)
                                </Td>
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
                <Container>
                    The future tense has additional rules to form that 
                    cannot be generalized, so this will be a guide to 
                    form the word with each conjugation.

                    <Heading as="h3" variant="section-title">
                        1st Conjugation
                    </Heading>
                    <Text>
                        - take the second principle part and remove the -re<br></br>
                        - add the letters -bi<br></br>
                        - add the personal ending<br></br>
                        - remove the i at the end of -bi when the ending is -o<br></br>
                        - change the i at the end of -bi to a u when the ending is -nt
                    </Text>

                    <Heading as="h3" variant="section-title">
                        2nd Conjugation
                    </Heading>
                    <Text>
                        - take the second principle part and remove the -re<br></br>
                        - add the letters -bi<br></br>
                        - add the personal ending<br></br>
                        - remove the i at the end of -bi when the ending is -o<br></br>
                        - change the i at the end of -bu to a u when the ending is -nt
                    </Text>

                    <Heading as="h3" variant="section-title">
                        3rd Conjugation
                    </Heading>
                    <Text>
                        - take the second principle part and remove the -re<br></br>
                        - add a macron to the e (ē)<br></br>
                        - add the personal ending<br></br>
                        - the ē changes to an a when the ending is -m<br></br>
                        - the ē loses the macron when the ending is -t or -nt<br></br>
                    </Text>

                    <Heading as="h3" variant="section-title">
                        3rd -io Conjugation
                    </Heading>
                    <Text>
                        - take the second principle part and remove the -re<br></br>
                        - add add macron to the e (ē)<br></br>
                        - add the personal ending<br></br>
                        - the ē changes to an a when the ending is -m<br></br>
                        - the ē loses the macron when the ending is -t or -nt
                    </Text>

                    <Heading as="h3" variant="section-title">
                        4th Conjugation
                    </Heading>
                    <Text>
                        - take the second principle part and remove the -re<br></br>
                        - remove the marcron from the ī (i)<br></br>
                        - add a -ē<br></br>
                        - add a personal ending<br></br>
                        - the ē changes to an a when the ending is -m<br></br>
                        - the ē loses the macron when the ending is -t or -nt
                    </Text>
                </Container>
            </Section>

            <Section delay={0.9}>
                <Heading as="h3" variant="section-title">
                    Pluperfect Tense
                </Heading>

                <Paragraph>
                    The pluperfect tense is used to talk about actions
                    that had happened before another action that also
                    occured in the past.
                    <br></br>
                    I had ran / They had sat
                    <br></br>
                    <br></br>
                    The process to get a verb into the pluperfect tense
                    is to take the third principle part, remove the -ī,
                    add a -era, then add the correct ending. There are no
                    special rules for the pluperfect tense!
                </Paragraph>
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Pluperfect Tense Endings</TableCaption>
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
            </Section>
        </Container>
    </Layout>
)

export default VerbEndings
