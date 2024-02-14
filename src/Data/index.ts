import Americano from "../assets/americano.png"
import Tradicional from "../assets/tradicional.png"
import Cremoso from "../assets/cremoso.png"
import Gelado from "../assets/gelado.png"
import Leite from "../assets/Leite.png"
import Latte from "../assets/latte.png"
import Capuccino from "../assets/capuccino.png"
import Macchiato from "../assets/macchiato.png"
import Mochaccino from "../assets/mochaccino.png"
import Chocolate from"../assets/chocalate.png"
import Cubano from "../assets/cubano.png"
import Havaiano from "../assets/havaiano.png"
import Arabe from "../assets/arabe.png"
import Irlandes from "../assets/irlandes.png"

export const coffeProducts = [
    {
        id: '1',
        image: Tradicional,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        type: ['TRADICIONAL']
    },
    {
        id: '2',
        image: Americano,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        type: ['TRADICIONAL']
    },
    {
        id: '3',
        image: Cremoso,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        type: ['TRADICIONAL']
    },
    {
        id: '4',
        image: Gelado,
        name: 'Expresso Gelado',
        description: 'O tradicional café feito com água quente e grãos moídos',
        type: ['TRADICIONAL', 'GELADO']
    },
    {
        id: '5',
        image: Leite,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        type: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: '6',
        image: Latte,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        type: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: '7',
        image: Capuccino,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        type: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: '8',
        image: Macchiato,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        type: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: '9',
        image: Mochaccino,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        type: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: '10',
        image: Chocolate,
        name: 'Chocolate',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        type: ['TRADICIONAL', 'COM LEITE']
    },
    {
        id: '11',
        image: Cubano,
        name: 'Cuabano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        type: ['TRADICIONAL', 'COM LEITE', 'ALCOÓLICO']
    },
    {
        id: '12',
        image: Havaiano,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        type: ['ESPECIAL']
    },
    {
        id: '13',
        image: Arabe,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        type: ['ESPECIAL']
    },
    {
        id: '14',
        image: Irlandes,
        name: 'Irlândes',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        type: ['ESPECIAL', 'ALCOÓLICO']
    }
];
