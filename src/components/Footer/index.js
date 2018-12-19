import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Link } from 'gatsby'
import { Flex, Box, Text, Heading } from 'rebass'

const LinkStyled = styled.a`
  color: ${themeGet('colors.blue')};
  font-family: ${themeGet('fonts.text')};
  font-weight: 600;
  text-decoration: none;
`

const GatsbyLinkStyled = styled(Link)`
  color: ${themeGet('colors.blue')};
  font-family: ${themeGet('fonts.text')};
  font-weight: 600;
  text-decoration: none;
`

const Footer = () => (
  <>
    <Flex flexWrap="wrap" mx={-2}>
      <Box width={1} px={3} pb={5} bg={'background_blue'}>
        <Flex alignItems="center">
          <Box width={[1, 5 / 8]} mx="auto">
            <Heading fontFamily="menu" fontSize={5} textAlign="center" py={4}>
              Crédits
            </Heading>
            <Text
              fontFamily="text"
              fontSize={3}
              textAlign="justify"
              fontWeight="500"
              mb={4}
            >
              Ont contribué à la <strong>réalisation des vidéos</strong> :
              Daniel Bouy (images et son), Nathalie Perrin (montage), Ahmet
              Sissokho (musique), Eric Rey (mixage). <br />
              <br />
              Ont contribué à la <strong>réalisation du site internet</strong> :
              Soline Ledésert (conception), Steven Sanséau (programmation), Rémy
              Vehier (graphisme) et Julie Henches (communication). <br /> <br />
              Merci à Clara Borgen et à l'atelier Pierre Pierre pour la
              <strong> réalisation de la bande-annonce</strong>.
              <br /> <br /> Merci à Élise Prévot pour les
              <strong> photographies de la soirée de lancement</strong>.
              <br /> <br /> Merci à Mylène Clément, Pierre Herouali et Thierry
              Gautier (TGA productions) pour leurs interventions efficaces.
              Merci aux usagers, à l'équipe des salariés, aux bénévoles, au
              conseil d'administration et aux partenaires d'Accueil Goutte d’Or.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
    <Flex flexWrap="wrap" mx={-2}>
      <Box width={1} px={3} bg={'background_gray'}>
        <Flex alignItems="center">
          <Box width={[1, 5 / 8]} mx="auto">
            <Heading fontFamily="menu" fontSize={5} textAlign="center" py={4}>
              Pour soutenir Accueil Goutte d'or
            </Heading>
            <Text
              fontFamily="text"
              fontSize={3}
              fontWeight="500"
              mt={3}
              textAlign="justify"
              lineHeight={3}
            >
              Pour être bénévole, rendez-vous{' '}
              <LinkStyled
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.accueilgouttedor.fr/adh%C3%A9rer-%C3%A0-ago/"
              >
                ici
              </LinkStyled>
              . <br />
              Pour faire un don, rendez-vous{' '}
              <LinkStyled
                target="_blank"
                rel="noopener noreferrer"
                href="http://facebook.com"
              >
                ici
              </LinkStyled>
              .
              <br /> Le site d'Accueil Goutte d'Or :{' '}
              <LinkStyled
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.accueilgouttedor.fr/"
              >
                www.accueilgouttedor.fr
              </LinkStyled>
              <br />
              Pour suivre Accueil Goutte d'Or sur Facebook, c’est{' '}
              <LinkStyled
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.accueilgouttedor.fr/"
              >
                ici
              </LinkStyled>
              .
            </Text>
            <Text
              textAlign="center"
              fontFamily="text"
              fontSize={1}
              fontWeight={500}
              mt={4}
            >
              2018 -{' '}
              <GatsbyLinkStyled to="/cgu">Mentions légales</GatsbyLinkStyled>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)
export default Footer
