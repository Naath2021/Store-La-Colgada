

import Betty1 from "../../assets/image/amarilla-colgante-simple.jpeg"
import Betty2 from "../../assets/image/amarilla-colgante-simple2.jpeg"
import Betty3 from "../../assets/image/amarilla-colgante-simple3.jpeg"

import CosmoWanda1 from "../../assets/image/bicolor-sin-colgante.jpeg"
import CosmoWanda2 from "../../assets/image/bicolor-sin-colgante2.jpeg"
import CosmoWanda3 from "../../assets/image/bicolor-sin-colgante3.jpeg"

import Monroe1 from "../../assets/image/b&w-colgante-simple.jpeg"
import Monroe2 from "../../assets/image/b&w-colgante-simple2.jpeg"
import Monroe3 from "../../assets/image/b&w-colgante-simple3.jpeg"

import Gravity1 from "../../assets/image/gravity-colgante-compuesto.jpeg"
import Gravity2 from "../../assets/image/gravity-colgante-compuesto2.jpeg"
import Gravity3 from "../../assets/image/gravity-colgante-compuesto3.jpeg"

import Bubbles1 from "../../assets/image/posador-bubbles.jpeg"
import Bubbles2 from "../../assets/image/posador-bubbles2.jpeg"
import Bubbles3 from "../../assets/image/posador-bubbles3.jpeg"

import Snowhite1 from "../../assets/image/blanca-colgante-simple.jpeg"
import Snowhite2 from "../../assets/image/blanca-colgante-simple2.jpeg"
import Snowhite3 from "../../assets/image/blanca-colgante-simple3.jpeg"

import Volcano1 from "../../assets/image/colador-volcano.jpeg"
import Volcano2 from "../../assets/image/colador-volcano2.jpeg"
import Volcano3 from "../../assets/image/colador-volcano3.jpeg"

import KittyBubbles1 from "../../assets/image/pet-platos2.jpeg"
import KittyBubbles2 from "../../assets/image/pet-platos.jpeg"
import KittyBubbles3 from "../../assets/image/pet-platos3.jpeg"

import JarraFiltroGarrita1 from "../../assets/image/jarra+filtro.jpeg"
import JarraFiltroGarrita2 from "../../assets/image/jarra+filtro2.jpeg"
import JarraFiltroGarrita3 from "../../assets/image/jarra+filtro3.jpeg"

import PlatoyVasoPicasso1 from "../../assets/image/juego-plato-vaso.jpeg"

import PlatosMonroe from "../../assets/image/platos.jpeg"

import PosadorFemme1 from "../../assets/image/posador-femme.jpeg"
import PosadorFemme2 from "../../assets/image/posador-femme2.jpeg"
import PosadorFemme3 from "../../assets/image/posador-femme3.jpeg"

import PosadorPrimavera1 from "../../assets/image/posador-colores.jpeg"
import PosadorPrimavera2 from "../../assets/image/posador-colores2.jpeg"
import PosadorPrimavera3 from "../../assets/image/posador-colores3.jpeg"

import PosadorICU1 from "../../assets/image/posador+pipa-ojo3.jpeg"
import PosadorICU2 from "../../assets/image/posador+pipa-ojo.jpeg"
import PosadorICU3 from "../../assets/image/posador+pipa-ojo2.jpeg"

import SetMerienda1 from "../../assets/image/set-merienda.jpeg"
import SetMerienda2 from "../../assets/image/set-merienda2.jpeg"
import SetMerienda3 from "../../assets/image/set-merienda3.jpeg"





const ProductsMock = [
    {
        id: "0",
        name: "Betty",
        price: 1300,
        description: "Maceta con colgante simple de cuero vegano, hecha con cerámica.",
        image1: Betty1, image2: Betty2, image3: Betty3
    },

    {
        id: "1", name: "Cosmo & Wanda",
        price: 2150,
        description: "Macetas de cerámica sin colgantes pintada a mano con acrílico resistente. El precio incluye ambas macetas.",
        image1: CosmoWanda1, image2: CosmoWanda2, image3: CosmoWanda3
    },

    {
        id: "2", name: "Monroe",
        price: 1600, description: "Macetas de cerámica con colgante simple de cuero vegano, pintada a mano con acrílico resistente.",
        image1: Monroe1, image2: Monroe2, image3: Monroe3
    },

    {
        id: "3", name: "Gravity",
        price: 1600, description: "Macetas de cerámica con colgantes cumpuestos ultra resistente de cuero vegano, pintada a mano con acrílico.",
        image1: Gravity1, image2: Gravity2, image3: Gravity3
    },

    {
        id: "4", name: "Posador Bubbles",
        price: 500, description: "Mini platitos de cerámica pintados a mano, sirve para posar utensilios, accecorios, etc. Precio es por unidad",
        image1: Bubbles1, image2: Bubbles2, image3: Bubbles3,
    },

    {
        id: "5", name: "Snowhite",
        price: 1300, description: "Macetas de cerámica con colgante simple de cuero vegano, pintada a mano con acrílico resistente.",
        image1: Snowhite1, image2: Snowhite2, image3:Snowhite3 
   },

    {
        id: "6", name: "Colador Volcano",
        price: 650, description: "Colador de alimentos de cerámica pintado a mano. Precio por unidad",
        image1: Volcano1, image2: Volcano2, image3:Volcano3 
  },
    {
        id: "7", name: "Kitty Bubbles",
        price: 2500, description: "Platos de comida y agua para tus mascotas, hechos a mano con cerámica. Precio es por el par. Medidas: 10cm x 15cm",
        image1: KittyBubbles1, image2: KittyBubbles2, image3:KittyBubbles3 
    },
    {
        id: "8", name: "Jarra + filtro Meow",
        price: 2800, description: "Jarra de café que almacena hasta 500ml, más un filtro para colarlo. El precio es por el juego.",
        image1: JarraFiltroGarrita1, image2: JarraFiltroGarrita2, image3:JarraFiltroGarrita3 
    },
    {
        id: "9", name: "Juego de plato y Vaso Picasso",
        price: 2800, description: "Jarra de café de 10cm x 14cm de alto, almacena hasta 500ml, más un filtro de 10cm x 10cm. El precio es por el juego.",
        image1: PlatoyVasoPicasso1, image2: PlatoyVasoPicasso1, image3: PlatoyVasoPicasso1
    },
    {
        id: "10", name: "Platos Monroe",
        price: 700, description: "Platos de 20cm de diámetro hechos a mano con cerámica. Precio es por unidad.",
        image1: PlatosMonroe, image2: PlatosMonroe, image3:PlatosMonroe 
    },
    {
        id: "11", name: "Posador Femme",
        price: 500, description: "Mini platitos de cerámica pintados a mano, sirve para posar utensilios, accecorios, etc. Precio es por unidad",
        image1: PosadorFemme1, image2: PosadorFemme2, image3:PosadorFemme3 
    },
    {
        id: "12", name: "Posador Primavera",
        price: 500, description: "Mini platitos de cerámica pintados a mano, sirve para posar utensilios, accecorios, etc. Precio es por unidad",
        image1: PosadorPrimavera1, image2: PosadorPrimavera2, image3:PosadorPrimavera3 
    },
    {
        id: "13", name: "Posador I See You ",
        price: 1000, description: "Mini platitos de cerámica pintados a mano, más una pipa en forma de ojo. Precio incluye set de un posador y una pipa",
        image1: PosadorICU1, image2: PosadorICU2, image3: PosadorICU3
    },
    {
        id: "14", name: "Set Merienda ",
        price: 2000, description: "El set incluye una jarra de 1 litro, dos tazas grandes de garrita y un posador.",
        image1: SetMerienda1, image2: SetMerienda2, image3: SetMerienda3
    },
]


export default ProductsMock;