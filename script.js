// BASE DE DATOS LOCAL PREMIUM
// --- BASE DE DATOS LOCAL PREMIUM COMPLETA ---
const menuData = [
    // --- CAFÉS ---
    {
        nombre: "Espresso Intenso",
        precio: "2.50",
        categoria: "cafes",
        descripcion: "Un shot puro y potente de nuestro grano arábico de Falcón.",
        imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500"
    },
    {
        nombre: "Capuccino Dorado",
        precio: "4.00",
        categoria: "cafes",
        descripcion: "Expresso equilibrado con leche vaporizada y una suave capa de espuma.",
        imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=500"
    },
    {
        nombre: "Latte Macchiato",
        precio: "4.00",
        categoria: "cafes",
        descripcion: "Leche vaporizada 'manchada' con un shot de expreso.",
        imagen: "https://images.unsplash.com/photo-1599398054066-846f28917f38?q=80&w=500"
    },
    {
        nombre: "Mocaccino de la Casa",
        precio: "4.50",
        categoria: "cafes",
        descripcion: "Mezcla de expreso, chocolate negro artesanal y leche cremosa.",
        imagen: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=500"
    },

    // --- DESAYUNOS (AREPAS Y MÁS) ---
    {
        nombre: "Arepa Pelúa Premium",
        precio: "6.00",
        categoria: "desayunos",
        descripcion: "Arepa asada rellena con carne mechada jugosa y queso amarillo tipo cheddar.",
        imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" // Arepa referencial
    },
    {
        nombre: "Arepa Reina Pepiada",
        precio: "6.00",
        categoria: "desayunos",
        descripcion: "Clásica arepa rellena de ensalada de pollo, aguacate y mayonesa.",
        imagen: "https://plus.unsplash.com/premium_photo-1672242553974-9466e8557b77?q=80&w=500" // Arepa referencial
    },
    {
        nombre: "Criollo Falconiano",
        precio: "8.00",
        categoria: "desayunos",
        descripcion: "Pabellón de desayuno: carne mechada, caraotas negras con queso, tajadas y arepitas.",
        imagen: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=500" // Plato criollo referencial
    },
    {
        nombre: "Pancakes de Luna",
        precio: "5.50",
        categoria: "desayunos",
        descripcion: "Torre de pancakes esponjosos con miel de maple, tocineta y frutas rojas.",
        imagen: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=500"
    },

    // --- ALMUERZOS ---
    {
        nombre: "Pollo a la Canasta",
        precio: "12.00",
        categoria: "almuerzos",
        descripcion: "Pollo frito crocante acompañado de papas fritas y ensalada rallada.",
        imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500" // Pollo frito referencial
    },
    {
        nombre: "Hamburguesa de la Luna",
        precio: "10.00",
        categoria: "almuerzos",
        descripcion: "Hamburguesa gourmet con carne angus, queso azul, cebolla caramelizada y rúcula.",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500"
    },
    {
        nombre: "Pasta Carbonara Auténtica",
        precio: "11.00",
        categoria: "almuerzos",
        descripcion: "Pasta fresca con salsa cremosa de huevo, queso pecorino romano y guanciale.",
        imagen: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=500"
    },

    // --- POSTRES ---
    {
        nombre: "Cheesecake de Frutos Rojos",
        precio: "5.50",
        categoria: "postres",
        descripcion: "Base crocante de galleta con crema de queso suave y topping artesanal de frutos del bosque.",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500"
    },
    {
        nombre: "Torta 3 Leches",
        precio: "4.50",
        categoria: "postres",
        descripcion: "Bizcocho húmedo de vainilla empapado en tres leches con merengue suizo.",
        imagen: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=500" // Torta referencial
    },
    {
        nombre: "Brownie con Helado",
        precio: "5.00",
        categoria: "postres",
        descripcion: "Brownie de chocolate caliente con una bola de helado de vainilla y sirope de chocolate.",
        imagen: "https://images.unsplash.com/photo-1589117182061-f3b1856722d5?q=80&w=500"
    },
    {
        nombre: "Helado de la Luna",
        precio: "3.50",
        categoria: "postres",
        descripcion: "Helado artesanal de 2 sabores a elección en copa Premium.",
        imagen: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=500"
    },
    // --- BEBIDAS ---
    {
        nombre: "Limonada Imperial",
        precio: "3.50",
        categoria: "bebidas",
        descripcion: "Refrescante limonada natural con un toque de menta fresca y mucho hielo.",
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500"
    },
    {
        nombre: "Té Frío de Durazno",
        precio: "3.00",
        categoria: "bebidas",
        descripcion: "Té negro infusionado con esencia natural de durazno, servido bien frío.",
        imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=500"
    },
    {
        nombre: "Jugo de Naranja Real",
        precio: "4.00",
        categoria: "bebidas",
        descripcion: "100% natural, recién exprimido con las mejores naranjas de la zona.",
        imagen: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=500"
    },
    {
        nombre: "Malteada de Vainilla",
        precio: "5.50",
        categoria: "bebidas",
        descripcion: "Cremosa malteada de helado de vainilla con topping de crema batida y cereza.",
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500"
    },
    {
        nombre: "Soda Italiana de Fresa",
        precio: "4.50",
        categoria: "bebidas",
        descripcion: "Agua carbonatada con sirope artesanal de fresa y rodajas de fruta fresca.",
        imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=500"
    }
];

// ... (El resto de las funciones: cargarMenu(), abrirModal(), filtrar() se mantienen igual) ...

function cargarMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = "";

    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-premium ${item.categoria}`;
        card.innerHTML = `
            <img src="${item.imagen}" class="card-img" alt="${item.nombre}">
            <div class="card-info">
                <h3>${item.nombre}</h3>
                <span class="card-precio">$${item.precio}</span>
            </div>
        `;
        card.onclick = () => abrirModal(item);
        container.appendChild(card);
    });
}

function abrirModal(item) {
    document.getElementById('modal-titulo').innerText = item.nombre;
    document.getElementById('modal-precio').innerText = `$${item.precio}`;
    document.getElementById('modal-descripcion').innerText = item.descripcion;
    document.getElementById('modal-img').src = item.imagen;
    
    document.getElementById('btn-wa-modal').onclick = () => {
        const tel = "584120000000"; // Reemplazar con el número real
        const mapsLink = "https://maps.google.com/?q=Luna+Cafe+Punto+Fijo";
        const msg = encodeURIComponent(
            `Hola Luna Café 👋\n\nDeseo pedir: *${item.nombre}*\nPrecio: *$${item.precio}*\n\n📍 Ubicación Tienda:\n${mapsLink}`
        );
        window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
    };

    document.getElementById('miModal').style.display = "flex";
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

function filtrar(cat, e) {
    const cards = document.querySelectorAll('.card-premium');
    cards.forEach(c => {
        c.style.display = (cat === 'todos' || c.classList.contains(cat)) ? 'block' : 'none';
    });

    document.getElementById('categoria-actual').innerText = cat === 'todos' ? 'Explora nuestro menú' : `Selección: ${cat}`;
    
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) {
        e.currentTarget.classList.add('activo');
        e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

window.onclick = (e) => { if(e.target == document.getElementById('miModal')) cerrarModal(); };
window.onload = cargarMenu;
