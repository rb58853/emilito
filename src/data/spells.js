const spells =
{
    "fireball": {
        name: "Fireball",
        description: "Lanza una bola de fuego que dana a un obetivo seleccionado...",
        image: "/images/spells/fireball.png",
        cost: "1",
        cooldown:"3",
        damage: "25",
        element: "fire",
        type: "damage",
        per_turn: false

    },
    "thunder": {
        name: "Thunder",
        description: "Mete un rayo que es el de pinga eso, electrocuta a lo que se le pare alante...",
        image: "/images/spells/thunder.png",
        cost: "1",
        cooldown:"4",
        damage: "33",
        element: "electric",
        type: "damage",
        per_turn: false

    },
    "curative_leaf":{
        name: "Curative Leaf",
        description: "Coge una hoja random del piso, la hierve y con el caldio cura lo que sea...",
        image: "/images/spells/curative_leaf.png",
        cost: "1",
        cooldown:"2",
        curation: "16",
        element: "plant",
        type: "healt",
        per_turn: true,
        pt_duration: 4,
        pt_points:6
    },

    "poison-axe":{
        name: "Poison Axe",
        description: "Te da un hachazo envenenao...",
        image: "/images/spells/poison-axe.png",
        cost: "1",
        cooldown:"2",
        damage: "15",
        element: "poison",
        type: "damage",
        per_turn: true,
        pt_duration: 3,
        pt_points:8
    },

    "meteoro-rain":{
        name: "Meteoro Rain",
        description: "Lluvia de meteoros que revienta a to el mundo, se cargo a las lagartijas grandes del jurasico...",
        image: "/images/spells/meteoro.png",
        cost: "2",
        cooldown:"5",
        damage: "95",
        element: "fire",
        type: "damage",
        per_turn: false
    },

    "ice-rain":{
        name: "Ice Rain",
        description: "Mete hielo por toas partes, algunos lo llaman granizo...",
        image: "/images/spells/ice.png",
        cost: "1",
        cooldown:"2",
        damage: "36",
        element: "ice",
        type: "damage",
        per_turn: false
    },

    "sun-light":{
        name: "Sun Light",
        description: "Aumenta la armadura de una carta, elimina el danno por turno de los efectos tipo hielo. Aumenta la resitencia al hielo en 10",
        image: "/images/spells/sun-light.png",
        cost: "2",
        cooldown:"5",
        armor: "30",
        element: "light",
        type: "purge",
        per_turn: true,
        pt_duration: 3,
    },
    "lancer-attack":{
        name: "Lancer Attack",
        description: "Aumenta la armadura de una carta, elimina el danno por turno de los efectos tipo hielo. Aumenta la resitencia al hielo en 10",
        image: "/images/spells/lancer-attack.png",
        cost: "1",
        cooldown:"2",
        damage: "18",
        element: "physic",
        type: "damage",
        per_turn: false,
    },


};

export default spells;