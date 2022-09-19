

import Betty1 from "../../assets/image/amarilla-colgante-simple.jpeg"
import Betty2 from "../../assets/image/amarilla-colgante-simple2.jpeg"
import Betty3 from "../../assets/image/amarilla-colgante-simple3.jpeg"

// serán promocionado
// import CosmoWanda1 from "../../assets/image/bicolor-sin-colgante.jpeg"
// import CosmoWanda2 from "../../assets/image/bicolor-sin-colgante2.jpeg"
// import CosmoWanda3 from "../../assets/image/bicolor-sin-colgante3.jpeg"

import Monroe1 from "../../assets/image/b&w-colgante-simple.jpeg"
import Monroe2 from "../../assets/image/b&w-colgante-simple2.jpeg"
import Monroe3 from "../../assets/image/b&w-colgante-simple3.jpeg"

import Gravity1 from "../../assets/image/gravity9-colgante-compuesto.jpeg"
import Gravity2 from "../../assets/image/gravity9-colgante-compuesto2.jpeg"
import Gravity3 from "../../assets/image/gravity9-colgante-compuesto3.jpeg"

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

import Salpicrete from "../../assets/image/juego-plato-vaso.jpeg"

import PlatosMonroe from "../../assets/image/platos.jpeg"

import CeniceroPerrito1 from "../../assets/image/posador-femme.jpeg"
import CeniceroPerrito2 from "../../assets/image/posador-femme2.jpeg"
import CeniceroPerrito3 from "../../assets/image/posador-femme3.jpeg"

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
        category:"macetas", id: "1",
        name: "Araguaney",
        price: 4700,
        description: "maceta de cerámica con colgantes de cuero. Medidas aproximadas: 15cm x 15cm.",
        image1: Betty1, image2: Betty2, image3: Betty3
    },

    {
        category:"macetas", id: "2", name: "Monroe",
        price: 4700, description: "maceta de cerámica con colgantes de cuero. Medidas aproximadas: 15cm x 15cm.",
        image1: Monroe1, image2: Monroe2, image3: Monroe3
    },

    {
        category:"macetas", id: "3", name: "Gravity",
        price: 5700, description: "maceta de cerámica con colgantes doble de cuero. Medidas aproximadas: 15cm x 15cm.",
        image1: Gravity1, image2: Gravity2, image3: Gravity3
    },

    {
        category:"utensilios", id: "4", name: "Posador Bubbles",
        price: 2000, description: "platitos de cerámica pintados a mano, sirve para posar utensilios, accecorios, etc. Precio es por unidad. Medidas aproximadas: 15cm x 10cm",
        image1: Bubbles1, image2: Bubbles2, image3: Bubbles3,
    },

    {
        category:"macetas", id: "5", name: "Snowhite",
        price: 4700, description: "maceta de cerámica con colgantes de cuero. Medidas aproximadas: 15cm x 15cm.",
        image1: Snowhite1, image2: Snowhite2, image3: Snowhite3
    },

    {
        category:"utensilios", id: "6", name: "Colador Volcano",
        price: 650, description: "colador de alimentos de cerámica pintado a mano. Precio por unidad. Medidas aproximadas: 15cm de diámetro, 10cm de alto.",
        image1: Volcano1, image2: Volcano2, image3: Volcano3
    },
    {
        category:"platos", id: "7", name: "Kitty Bubbles",
        price: 6250, description: "platos para tus mascotas. Precio es por unidad. Medidas: 7cm x 15cm",
        image1: KittyBubbles1, image2: KittyBubbles2, image3: KittyBubbles3
    },
    {
        category:"combos", id: "8", name: "Jarra + filtro Garrita",
        price: 8700, description: "jarra de 750ml con filtro para colar café o té. El precio es por el juego.",
        image1: JarraFiltroGarrita1, image2: JarraFiltroGarrita2, image3: JarraFiltroGarrita3
    },
    {
        category:"combos", id: "9", name: "Juego de plato y Vaso Salpicrete",
        price: 2800, description: "precio incluye un plato de 20cm de diámetro y taza de té, ambas de cerámica, pintadasa mano.",
        image1: Salpicrete, image2: Salpicrete, image3: Salpicrete
    },
    {
        category:"platos", id: "10", name: "Platos Monroe",
        price: 700, description: "platos de 20cm de diámetro hechos a mano con cerámica. Precio es por unidad.",
        image1: PlatosMonroe, image2: PlatosMonroe, image3: PlatosMonroe
    },
    {
        category:"ceniceros", id: "11", name: "cenicero carita",
        price: 500, description: "cenicero de cerámica en forma de carita pintado a mano. Precio es por unidad",
        image1: CeniceroPerrito1, image2: CeniceroPerrito2, image3: CeniceroPerrito3
    },
    {
        category:"platos", id: "12", name: "Posador Primavera",
        price: 500, description: "Mini platitos de cerámica pintados a mano, sirve para posar utensilios, accecorios, etc. Precio es por unidad",
        image1: PosadorPrimavera1, image2: PosadorPrimavera2, image3: PosadorPrimavera3
    },
    {
        category:"ceniceros", id: "13", name: "ceniceros i see you ",
        price: 1000, description: "cenicero de cerámica pintados a mano, más una pipa en forma de ojo. Precio incluye set de un posador y una pipa",
        image1: PosadorICU1, image2: PosadorICU2, image3: PosadorICU3
    },
    {
        category:"combos", id: "14", name: "Set Merienda ",
        price: 2000, description: "el set incluye una jarra de 1 litro, dos tazas grandes de garrita y un posador.",
        image1: SetMerienda1, image2: SetMerienda2, image3: SetMerienda3
    },
]


export default ProductsMock;