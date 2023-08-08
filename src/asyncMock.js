const products = [
    {
        id: '1',
        name: "Nuka Cola Quantum",
        price: 50,
        category: "bebida",
        img: "https://images.fallout.wiki/thumb/e/e6/Fallout4_Nuka_Cola_Quantum.png/300px-Fallout4_Nuka_Cola_Quantum.png",
        stock: 25,
        description: "Descubre Nuka-Cola Quantum, con su deslumbrante color azul y sabor refrescante, cada botella es una obra de arte"
    },
    {
        id: '2',
        name: "Grognak el Bárbaro",
        price: 100,
        category: "revista",
        img: "https://i.pinimg.com/originals/62/49/89/624989e2f8f3bb39f40cd18087b0145e.jpg",
        stock: 25,
        description: "Una serie de historietas publicadas por Hubris Comics. Las historietas relatan las aventuras de Grognak, el personaje principal, en un mundo prehistórico."
    },
    {
        id: '3',
        name: "Power Cycle 1000",
        price: 2000,
        category: "otros",
        img: "https://fallout-wiki.com/thumb.php?f=FO4_Cyclotron_1000.png&width=640",
        stock: 25,
        description: "¡Eleva tu supervivencia con el Power Cycle 1000! Combina el ejercicio con la generación de energía en un solo dispositivo. Pedalea para mantener tus dispositivos cargados y tu cuerpo en forma en este mundo postapocalíptico. ¡El futuro de la supervivencia y el bienestar está en tus manos con el Power Cycle 1000!"
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
}