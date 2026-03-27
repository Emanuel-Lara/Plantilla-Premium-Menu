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
    // --- DESAYUNOS (AREPAS) ---
    {
        nombre: "Arepa Pelúa Premium",
        precio: "6.00",
        categoria: "desayunos",
        descripcion: "Arepa asada rellena con carne mechada jugosa y queso amarillo fundido.",
        imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500"
    },
    {
        nombre: "Arepa Reina Pepiada",
        precio: "6.00",
        categoria: "desayunos",
        descripcion: "Pollo desmechado con aguacate cremoso y un toque de mayonesa.",
        imagen: "https://plus.unsplash.com/premium_photo-1672242553974-9466e8557b77?q=80&w=500"
    },
    {
        nombre: "Criollo Falconiano",
        precio: "8.50",
        categoria: "desayunos",
        descripcion: "Carne mechada, caraotas, tajadas dulces, queso y arepitas.",
        imagen: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=500"
    },
    // --- ALMUERZOS ---
    {
        nombre: "Hamburguesa de la Luna",
        precio: "10.00",
        categoria: "almuerzos",
        descripcion: "Carne Angus de 200g, cebolla caramelizada y queso azul gourmet.",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500"
    },
    {
        nombre: "Pollo a la Canasta",
        precio: "12.00",
        categoria: "almuerzos",
        descripcion: "Pollo frito crocante con papas trufadas y ensalada de la casa.",
        imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500"
    },
    {
        nombre: "Pasta Carbonara Auténtica",
        precio: "11.50",
        categoria: "almuerzos",
        descripcion: "Pasta fresca con yema de huevo, pimienta, pecorino y guanciale.",
        imagen: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=500"
    },
    // --- POSTRES ---
    {
        nombre: "Cheesecake de Frutos Rojos",
        precio: "5.50",
        categoria: "postres",
        descripcion: "Base crocante con crema de queso suave y topping artesanal.",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500"
    },
    // --- BEBIDAS ---
    {
        nombre: "Limonada Imperial",
        precio: "3.50",
        categoria: "bebidas",
        descripcion: "Refrescante con menta fresca y mucho hielo.",
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500"
    }
];

function cargarMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = "";

    menuData.forEach(item => {
        const card = document.createElement('div');
        // CRUCIAL: Asignamos la categoría como clase para que el filtro funcione
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

function filtrar(cat, e) {
    const cards = document.querySelectorAll('.card-premium');
    cards.forEach(c => {
        if (cat === 'todos') {
            c.style.display = 'block';
        } else {
            // Verifica si la tarjeta tiene la clase de la categoría
            c.style.display = c.classList.contains(cat) ? 'block' : 'none';
        }
    });
    function filtrar(cat, e) {
    const cards = document.querySelectorAll('.card-premium');
    cards.forEach(c => {
        if (cat === 'todos') {
            c.style.display = 'block';
        } else {
            c.style.display = c.classList.contains(cat) ? 'block' : 'none';
        }
    });

    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) {
        e.currentTarget.classList.add('activo');
        // Esto centra el botón automáticamente al tocarlo en móviles
        e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

    // Cambiar estado visual del botón
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) e.currentTarget.classList.add('activo');
}

function abrirModal(item) {
    document.getElementById('modal-titulo').innerText = item.nombre;
    document.getElementById('modal-precio').innerText = `$${item.precio}`;
    document.getElementById('modal-descripcion').innerText = item.descripcion;
    document.getElementById('modal-img').src = item.imagen;

    document.getElementById('btn-wa-modal').onclick = () => {
        const tel = "584120000000"; // Reemplaza con tu número real
        const msg = encodeURIComponent(
            `Hola Luna Café 👋\n\nDeseo pedir: *${item.nombre}*\nPrecio: *$${item.precio}*`
        );
        window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
    };

    document.getElementById('miModal').style.display = "flex";
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

// Cerrar al hacer clic fuera del contenido
window.onclick = (e) => {
    if(e.target == document.getElementById('miModal')) cerrarModal();
};

window.onload = cargarMenu;
