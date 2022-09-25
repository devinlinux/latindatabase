import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/declension_eyecatch.png'
import thumbWalknote from '../public/images/works/conjugation_eyecatch.png'
import thumbFourPainters from '../public/images/works/endings_eyecatch.png'
import thumbMenkiki from '../public/images/works/vocabulary_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Topics
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="declensionchart" title="Declension Chart" thumbnail={thumbInkdrop}>
            The Latin noun endings that you need to know to understand what you are
            reading and how to write in Latin. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="verbconjugations"
            title="Verb Conjugations"
            thumbnail={thumbWalknote}
          >
            The conjugations of Latin verbs. This will be helpful when you
            chane the tense and person of verbs. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="verbendings"
            title="Verb Endings"
            thumbnail={thumbFourPainters}
          >
            The verb endings that you need to know in order to make actions
            in a sentence make sense. 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="vocabulary" thumbnail={thumbMenkiki} title="Vocabulary">
            Nowhere near all the vocabulary you should know but this should
            be enough to help you understand Latin text.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
