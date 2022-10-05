import BrkCarousel from "./BrkCarousel.vue";
import BrkCardHero from "../BrkCardHero/BrkCardHero.vue";
// import BrkCardPromo from "../BrkCardPromo/BrkCardPromo.vue";

/**
 * Export par defaut
 */
export default {
  title: "Composants/Carousel",
  component: BrkCarousel,
  subcomponents: { BrkCardHero },
  argTypes: {
    nbrPerView: {
      description: "Nombre de cartes que le carrousel affiche en mode desktop",
    },
    accessibilityTextLeft: {
      control: { type: 'text' },
      description : 'Texte pour les lecteurs d\'ecrans. Flèche de gauche (précédent)',
    },
    accessibilityTextRight: {
      control: { type: 'text' },
      description : 'Texte pour les lecteurs d\'ecrans. Flèche de droite (suivant)',
    },
  },
};

/**
 * Template HTML pour carousel contenant des cartes hero
 */
const Template = (args) => ({
  components: { BrkCarousel, BrkCardHero },
  setup() {
    return { args };
  },
  template: `
  <BrkCarousel v-bind="args">  
    <template v-for="(card, index) in args.brkCardsHero" :key="card" v-slot:["item"+index]>
      <BrkCardHero v-bind="card">
    </template>
  </BrkCarousel>
  `,
});

/**
 * Export de la story Carousel Carte Hero
 */
export const CardHero = Template.bind({});
CardHero.args = {
  nbrPerView: {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  },
  accessibilityTextLeft: 'Précédent',
  accessibilityTextRight: 'Suivant',

  brkCardsHero: [
    //Item 1
    {
      title: "Titre du jeu",
      preTitle: "Pré titre",
      postTitle: "Post titre",
      link: "https://google.ca",
      secondaryInfo: "BrkCardSecondaryInfoJackpot",
      showNav: false,
      brkButtonArgs: {
        label: "Jouer!",
        link: "https://google.com",
      },
      brkTripleImagesArgs: {
        bg: [
          {
            path: "/assets/background_macedonia.png",
            width: "300w",
          },
        ],
        character: [
          {
            path: "/assets/KingOfMacedonia.png",
            width: "300w",
          },
        ],
        logo: [
          {
            path: "/assets/logo_macedonia.png",
            width: "300w",
          },
        ],
        alt: "King of Macédonia",
      },
      brkSecondaryInfoArgs: {
        brkImageArgs: {
          src: [
            {
              path: "/assets/logo_MegaJackpotsCleopatra.png",
              width: "300w",
            },
          ],
          alt: "Logo mega jackpot",
        },
        backgroundColor: "#2d2feb",
        text: "Logo mega jackpot",
        totalAmount: "1000000",
        format: "fr",
      },
      brkCardNavArgs: {
        btnOpenLabel: "Ouvrir le menu du jeu",
        btnCloseLabel: "Fermer le menu du jeu",
        links: [
          { url: "http://www.perdu.com", label: "Perdu", newWindow: true },
          { url: "http://www.google.com", label: "Google", newWindow: false },
          { url: "https://www.nyan.cat/", label: "Nyan Cat", newWindow: true },
        ],
      },
    },

    //Item 2
    {
      title: "Titre d'un autre jeu",
      preTitle: "Un autre pré titre",
      postTitle: "Un autre post titre",
      link: "https://google.ca",
      secondaryInfo: "",
      showNav: false,
      brkButtonArgs: {
        label: "Bouton plus gros!",
        link: "https://google.com",
      },
      brkTripleImagesArgs: {
        bg: [
          {
            path: "/assets/background_macedonia.png",
            width: "300w",
          },
        ],
        character: [
          {
            path: "/assets/KingOfMacedonia.png",
            width: "300w",
          },
        ],
        logo: [
          {
            path: "/assets/logo_macedonia.png",
            width: "300w",
          },
        ],
        alt: "King of Macédonia",
      },
      brkSecondaryInfoArgs: {
        brkImageArgs: {
          src: [
            {
              path: "/assets/logo_MegaJackpotsCleopatra.png",
              width: "300w",
            },
          ],
          alt: "Logo mega jackpot",
        },
        backgroundColor: "#2d2feb",
        text: "Logo mega jackpot",
        totalAmount: "1000000",
        format: "fr",
      },
      brkCardNavArgs: {
        btnOpenLabel: "Ouvrir le menu du jeu",
        btnCloseLabel: "Fermer le menu du jeu",
        links: [
          { url: "http://www.perdu.com", label: "Perdu", newWindow: true },
          { url: "http://www.google.com", label: "Google", newWindow: false },
          { url: "https://www.nyan.cat/", label: "Nyan Cat", newWindow: true },
        ],
      },
    },

    //Item 3
    {
      title:
        "Titre overridé avec quelque chose de vraiment très beaucoup plus long genre abusif qui va dépasser les deux lignes permises",
      preTitle:
        "Nouveauté nouvelle fraîche du jour avec beaucoup de bla bla pour valider la longueur de la chaine",
      postTitle:
        "Avec des mises allant de 1$ à 100 000 000$ il y en a pour tout le monde",
      link: "https://google.ca",
      secondaryInfo: "BrkCardSecondaryInfoJackpot",
      showNav: true,
      brkButtonArgs: {
        label: "Play pls!",
        link: "https://google.com",
      },
      brkTripleImagesArgs: {
        bg: [
          {
            path: "/assets/background_macedonia.png",
            width: "300w",
          },
        ],
        character: [
          {
            path: "/assets/KingOfMacedonia.png",
            width: "300w",
          },
        ],
        logo: [
          {
            path: "/assets/logo_macedonia.png",
            width: "300w",
          },
        ],
        alt: "King of Macédonia",
      },
      brkSecondaryInfoArgs: {
        brkImageArgs: {
          src: [
            {
              path: "/assets/logo_MegaJackpotsCleopatra.png",
              width: "300w",
            },
          ],
          alt: "Logo mega jackpot",
        },
        backgroundColor: "#000000",
        text: "MEGA jackpot",
        totalAmount: "10000000",
        format: "en",
      },
      brkCardNavArgs: {
        btnOpenLabel: "Ouvrir le menu du jeu",
        btnCloseLabel: "Fermer le menu du jeu",
        links: [
          { url: "http://www.perdu.com", label: "Perdu", newWindow: true },
          { url: "http://www.google.com", label: "Google", newWindow: false },
          { url: "https://www.nyan.cat/", label: "Nyan Cat", newWindow: true },
        ],
      },
    },

    //Item 4
    {
      title: "Titre du jeu",
      preTitle: "Pré titre",
      postTitle: "Post titre",
      link: "https://google.ca",
      secondaryInfo: "",
      showNav: true,
      brkButtonArgs: {
        label: "Jouer!",
        link: "https://google.com",
      },
      brkTripleImagesArgs: {
        bg: [
          {
            path: "/assets/background_macedonia.png",
            width: "300w",
          },
        ],
        character: [
          {
            path: "/assets/KingOfMacedonia.png",
            width: "300w",
          },
        ],
        logo: [
          {
            path: "/assets/logo_macedonia.png",
            width: "300w",
          },
        ],
        alt: "King of Macédonia",
      },
      brkSecondaryInfoArgs: {
        brkImageArgs: {
          src: [
            {
              path: "/assets/logo_MegaJackpotsCleopatra.png",
              width: "300w",
            },
          ],
          alt: "Logo mega jackpot",
        },
        backgroundColor: "#2d2feb",
        text: "Logo mega jackpot",
        totalAmount: "1000000",
        format: "fr",
      },
      brkCardNavArgs: {
        btnOpenLabel: "Ouvrir le menu du jeu",
        btnCloseLabel: "Fermer le menu du jeu",
        links: [
          { url: "http://www.perdu.com", label: "Perdu", newWindow: true },
          { url: "http://www.google.com", label: "Google", newWindow: false },
          { url: "https://www.nyan.cat/", label: "Nyan Cat", newWindow: true },
        ],
      },
    },

    //Item 5
    {
      title: "Titre du jeu avec petit jackpot :3",
      preTitle: "Pré titre",
      postTitle: "Post titre",
      link: "https://google.ca",
      secondaryInfo: "BrkCardSecondaryInfoJackpot",
      showNav: false,
      brkButtonArgs: {
        label: "Play!",
        link: "https://google.com",
      },
      brkTripleImagesArgs: {
        bg: [
          {
            path: "/assets/background_macedonia.png",
            width: "300w",
          },
        ],
        character: [
          {
            path: "/assets/KingOfMacedonia.png",
            width: "300w",
          },
        ],
        logo: [
          {
            path: "/assets/logo_macedonia.png",
            width: "300w",
          },
        ],
        alt: "King of Macédonia",
      },
      brkSecondaryInfoArgs: {
        brkImageArgs: {
          src: [
            {
              path: "/assets/logo_MegaJackpotsCleopatra.png",
              width: "300w",
            },
          ],
          alt: "Logo mega jackpot",
        },
        backgroundColor: "#ff1aa8",
        text: "Logo mega jackpot",
        totalAmount: "36",
        format: "fr",
      },
      brkCardNavArgs: {
        btnOpenLabel: "Ouvrir le menu du jeu",
        btnCloseLabel: "Fermer le menu du jeu",
        links: [
          { url: "http://www.perdu.com", label: "Perdu", newWindow: true },
          { url: "http://www.google.com", label: "Google", newWindow: false },
          { url: "https://www.nyan.cat/", label: "Nyan Cat", newWindow: true },
        ],
      },
    },
  ],
};
CardHero.storyName = "Carte « Héro »";


