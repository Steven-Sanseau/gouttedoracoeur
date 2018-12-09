import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Text } from 'rebass'

const Footer = () => (
  <>
    <Flex flexWrap="wrap" mx={-2}>
      <Box width={1} px={3} py={5} bg={'background_blue'}>
        <Flex alignItems="center">
          <Box width={[1, 5 / 8]} mx="auto">
            <Text fontFamily="menu" fontSize={5} textAlign="left">
              Crédits
            </Text>
            <Text fontFamily="text" fontSize={1} mt={3} textAlign="justify">
              Ont contribué à la <strong>réalisation des vidéos</strong> :
              Daniel Bouy (images et son), Nathalie Perrin (montage), Ahmet
              Sissokho (musique), Eric Rey (mixage), Fabian Sibade, Mathieu
              Maillet, David Aucouturier (pour leur précieuse assistance
              technique) ainsi qu’Isabelle, Léo, Fabien, Cédric et Eric (pour
              leur bienveillance). <br />
              <br />
              Ont contribué à la <strong>réalisation du site internet</strong> :
              Soline Ledésert (conception), Steven Sanséau (programmation), Rémy
              Vehier (graphisme) et Julie Henches (communication).
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
      <Box width={1} px={3} pt={5} bg={'background_gray'}>
        <Flex alignItems="center">
          <Box width={[1, 5 / 8]} mx="auto">
            <Text
              fontFamily="text"
              fontWeight="700"
              fontSize={5}
              textAlign="left"
            >
              Pour soutenir Accueil Goutte d'or
            </Text>
            <Text
              fontFamily="text"
              fontSize={1}
              fontWeight={500}
              mt={3}
              textAlign="justify"
              lineHeight={3}
            >
              Pour être bénévole, rendez-vous{' '}
              <a
                target="_blank"
                href="https://www.accueilgouttedor.fr/adh%C3%A9rer-%C3%A0-ago/"
              >
                ici
              </a>
              . <br />
              Pour faire un don, rendez-vous{' '}
              <a target="_blank" href="http://">
                ici
              </a>
              .
              <br /> Le site d'Accueil Goutte d'Or :{' '}
              <a target="_blank" href="https://www.accueilgouttedor.fr/">
                www.accueilgouttedor.fr
              </a>
              <br />
              Pour nous suivre sur Facebook, c’est <a href="">ici</a>.
            </Text>
            <Text
              textAlign="center"
              fontFamily="text"
              fontSize={1}
              fontWeight={500}
              mt={3}
            >
              2018 - <Link to="/cgu">Mentions légales</Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)
export default Footer
