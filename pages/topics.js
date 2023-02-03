import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDeclension from '../public/images/works/declension_eyecatch.png'
import thumbConjugations from '../public/images/works/conjugation_eyecatch.png'
import thumbVerbEndings from '../public/images/works/endings_eyecatch.png'
import thumbVocab from '../public/images/works/vocabulary_eyecatch.png'
import thumbIndirect from '../public/images/works/indirect_eyecatch.png'
import thumbActiveInfinitives from '../public/images/works/ainfinitives_eyecatch.png'

const Works = () => (
  <Layout title="Topics">
    <Container paddingTop={38}>
      <Heading as="h3" fontSize={20} mb={4}>
        Topics
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="modules/declensionchart" title="Declension Chart" thumbnail={thumbDeclension}>
            The Latin noun endings that you need to know to understand what you are
            reading and how to write in Latin. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="modules/verbconjugations"
            title="Verb Conjugations"
            thumbnail={thumbConjugations}
          >
            The conjugations of Latin verbs. This will be helpful when you
            chane the tense and person of verbs. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="modules/verbendings"
            title="Verb Endings"
            thumbnail={thumbVerbEndings}
          >
            The verb endings that you need to know in order to make actions
            in a sentence make sense. 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="modules/vocabulary" thumbnail={thumbVocab} title="Vocabulary">
            Nowhere near all the vocabulary you should know but this should
            be enough to help you understand Latin text.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem
            id="modules/indirect"
            title="Indirect Statements"
            thumbnail={thumbIndirect}
          >
            Information about indirect verbs in Latin grammmer.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="modules/activeinfinitives"
            title="Active Infinitives"
            thumbnail={thumbActiveInfinitives}
          >
            General information on how to form and use infinitives. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
