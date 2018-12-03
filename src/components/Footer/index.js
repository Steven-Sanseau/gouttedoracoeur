import React from 'react'
import { Flex, Box, Text } from 'rebass'

const Footer = () => (
  <>
    <Flex flexWrap="wrap" mx={-2}>
      <Box width={1} px={3} py={5} bg={'background_blue'}>
        <Flex alignItems="center">
          <Box width={[1, 5 / 8]} mx="auto">
            <Text fontFamily="menu" fontSize={2} textAlign="justify">
              Crédit
            </Text>
            <Text fontFamily="text" fontSize={1} textAlign="justify">
              Ont contribué à la réalisation des vidéos :{' '}
              <strong>Daniel Bouy</strong> (images et son), Nathalie Perrin
              (montage), <strong>Ahmet Sissokho</strong> (musique),{' '}
              <strong>Eric Rey</strong>
              (mixage),
              <br />
              <strong>Fabian Sibade</strong>, <strong>Mathieu Maillet</strong>,{' '}
              <strong>David Aucouturier</strong> (pour leur précieuse assistance
              technique) ainsi que Isabelle, Léo, Fabien, Cédric et Eric (pour
              leur bienveillance)
              <br />
              Ont contribué à la réalisation du site internet :{' '}
              <strong>Soline Ledésert</strong> (conception),{' '}
              <strong>Steven Sanséau</strong>
              (programmation), <strong>Julie Henches</strong> (communication)
              Merci à <strong>Mylène Clément</strong> et{' '}
              <strong>Pierre Herouali</strong> et{' '}
              <strong>Thierry Gautier</strong> (TGA productions) pour leurs
              interventions efficaces.
              <br /> Merci aux usagers, à l'équipe des salariés, aux bénévoles,
              au conseil d'administration et aux partenaires d'Accueil Goutte
              d’Or.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)
export default Footer
