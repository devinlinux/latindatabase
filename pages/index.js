import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={20}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Learn Latin with the Latin Database by Michael Bobrowski
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Latin Database v1.0.1
          </Heading>
          <p>Online Latin Learning Tool</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/icons/caecilius.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Why Learn Latin
        </Heading>
        <Paragraph>
          Latin is a highly organized and logical language which makes it
          similar to studying math. Latin will sharpen your mind, cultivate
          mental alertness, create keener attention to detail, devlop critical
          thinking abilities, and enhance problem solving ailities. If you enjoy
          Math or Music then you will most likely enjoy learning Latin because 
          it requires some of the same intellectual skills as Math and Music.
          Even if you do not enjoy Math or Music and you do not want to sharpen
          your mind, learning Latin gives you a unique skill that not a lot of 
          people have in the modern world.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/topics" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Learn Latin
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          A Brief History of Latin
        </Heading>
        <BioSection>
          <BioYear>753 BC</BioYear>
          Rome is Founded by Romulus, a fictional character who killed his
          brother Remus. At this point there are only a few thousand people
          speaking Latin in and around Rome.
        </BioSection>
        <BioSection>
          <BioYear>500 BC</BioYear>
          Earliest known Latin inscription, on a pin which read &quot;Manios me
          fhefhaked Numasioi&quot; which means &quot;Manios made me for Numerius&quot;
        </BioSection>
        <BioSection>
          <BioYear>250-100 BC</BioYear>
          Early Latin, the first Latin literature usually in loose translations
          of Greek works or imitations of Greek generes.
        </BioSection>
        <BioSection>
          <BioYear>100 BC-150 AD</BioYear>
          Classical Latin. Cicero, Caesar, Vergil, and Tacitus write
          masterpieces of Latin literature.
        </BioSection>
        <BioSection>
          <BioYear>200-550</BioYear>
          Late Latin. The Western half of the Roman Empire has been cripled. St.
          Jerome translated the Bible into Latin - The Vulgate
        </BioSection>
        <BioSection>
          <BioYear>600-750</BioYear>
          Latin becomes a dead language. Few people outside of monasteries can
          read it and classical Latin is preserved only in church documents.
        </BioSection>
        <BioSection>
          <BioYear>800-900</BioYear>
          The Carolingian Renaissance. Charlemagne decides that Latin is good
          and promotes it throughout his kingdom.
        </BioSection>
        <BioSection>
          <BioYear>1100-1300</BioYear>
          Contact with Arabs who conquered North Africa and Spain leads to a
          revival of learning, all writing is done in Latin.
        </BioSection>
        <BioSection>
          <BioYear>1400-1650</BioYear>
          During the renaissance, people start reading Latin classical authors
          and bringing Latin words into their language. 
        </BioSection>
        <BioSection>
          <BioYear>Until 1900</BioYear>
          Nearly everyone who goes to college must learn Latin and most people who
          major in a humanity study Greek. 
        </BioSection>
        <BioSection>
          <BioYear>1960</BioYear>
          The Catholic Church decides that Latin is no longer the obligatory language
          of Catholic masses.
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          Almost no one speaks Latin but people still attempt to learn the language
          despite its obsolescence.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find Me on the Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/devinlinux" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @devinlinux
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
