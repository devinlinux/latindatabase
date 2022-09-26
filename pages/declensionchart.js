import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container
  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const DeclensionChart = () => (
    <Layout title="Declension Chart">
        <Container maxW="container.lg" paddingTop={40}>
            <Section delay={0.1}>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Latin Declension Chart</TableCaption>
                        <Thead>
                            <Tr>
                                <Th> </Th>
                                <Th>1st</Th>
                                <Th>2nd M/F</Th>
                                <Th>2nd N.</Th>
                                <Th>3rd M/F</Th>
                                <Th>3rd N.</Th>
                                <Th> </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Nominative</Td>
                                <Td>-a</Td>
                                <Td>-us/-er</Td>
                                <Td>-um</Td>
                                <Td>-?</Td>
                                <Td>-?</Td>
                            </Tr>
                            <Tr>
                                <Td>Genitive</Td>
                                <Td>-ae</Td>
                                <Td>-ī</Td>
                                <Td>-ī</Td>
                                <Td>-is</Td>
                                <Td>-is</Td>
                            </Tr>
                            <Tr>
                                <Td>Dative</Td>
                                <Td>-ae</Td>
                                <Td>-ō</Td>
                                <Td>-ō</Td>
                                <Td>-ī</Td>
                                <Td>-ī</Td>
                            </Tr>
                            <Tr>
                                <Td>Accusative</Td>
                                <Td>-am</Td>
                                <Td>-um</Td>
                                <Td>-um</Td>
                                <Td>-em</Td>
                                <Td>S.A.N</Td>
                            </Tr>
                            <Tr>
                                <Td>Ablative</Td>
                                <Td>-ā</Td>
                                <Td>-ō</Td>
                                <Td>-ō</Td>
                                <Td>-e</Td>
                                <Td>-e</Td>
                            </Tr>
                            <Tr>
                                <Td>Vocative</Td>
                                <Td>-a</Td>
                                <Td>-e/-er</Td>
                                <Td>-um</Td>
                                <Td>S.A.N</Td>
                                <Td>S.A.N</Td>
                            </Tr>
                            <Tr>
                                <Td>Nominative Pl</Td>
                                <Td>-ae</Td>
                                <Td>-ī</Td>
                                <Td>-a</Td>
                                <Td>-ēs</Td>
                                <Td>-a</Td>
                            </Tr>
                            <Tr>
                                <Td>Genative Pl</Td>
                                <Td>-ārum</Td>
                                <Td>-ōrum</Td>
                                <Td>-ōrum</Td>
                                <Td>-um</Td>
                                <Td>-um</Td>
                            </Tr>
                            <Tr>
                                <Td>Dative Pl</Td>
                                <Td>-īs</Td>
                                <Td>-īs</Td>
                                <Td>-īs</Td>
                                <Td>-ibus</Td>
                                <Td>-ibus</Td>
                            </Tr>
                            <Tr>
                                <Td>Accusative Pl</Td>
                                <Td>-ās</Td>
                                <Td>-ōs</Td>
                                <Td>-a</Td>
                                <Td>-ēs</Td>
                                <Td>-a</Td>
                            </Tr>
                            <Tr>
                                <Td>Ablative Plural</Td>
                                <Td>-īs</Td>
                                <Td>-īs</Td>
                                <Td>-īs</Td>
                                <Td>-ibus</Td>
                                <Td>-ibus</Td>
                            </Tr>
                            <Tr>
                                <Td>Vocative Pl</Td>
                                <Td>-ae</Td>
                                <Td>-ī</Td>
                                <Td>-a</Td>
                                <Td>-ēs</Td>
                                <Td>-a</Td>
                            </Tr>
                        </Tbody>
                    </Table>    
                </TableContainer>
            </Section>
        </Container>
    </Layout>
)

export default DeclensionChart