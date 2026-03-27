const menuData = [
    // --- CAFÉS ---
    {
        nombre: "Espresso Intenso",
        precio: "2.50",
        categoria: "cafes",
        descripcion: "Un shot puro y potente de nuestro grano arábico de Falcón.",
        maridaje: "Perfecto con un bombón de chocolate oscuro o un croissant de mantequilla.",
        imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=65&w=600"
    },
    {
        nombre: "Capuccino Dorado",
        precio: "4.00",
        categoria: "cafes",
        descripcion: "Expresso equilibrado con leche vaporizada y una suave capa de espuma.",
        maridaje: "Ideal para acompañar con galletas de vainilla o una tarta de manzana.",
        imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=65&w=600"
    },
    // --- DESAYUNOS ---
    {
        nombre: "Arepa Pelúa Premium",
        precio: "6.00",
        categoria: "desayunos",
        descripcion: "Carne mechada jugosa con queso amarillo fundido de primera.",
        maridaje: "Recomendado con un jugo de naranja natural o café negro bien caliente.",
        imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=65&w=600"
    },
    // --- ALMUERZOS ---
    {
        nombre: "Hamburguesa de la Luna",
        precio: "10.00",
        categoria: "almuerzos",
        descripcion: "Carne Angus de 200g con cebolla caramelizada y pan artesanal.",
        maridaje: "Combina excelente con una cerveza fría o una soda saborizada.",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=65&w=600"
    },
    {
        nombre: "Pollo a la Canasta",
        precio: "12.00",
        categoria: "almuerzos",
        descripcion: "Pollo frito crocante con papas trufadas y salsa de la casa.",
        maridaje: "Disfrútalo con un té frío con limón para equilibrar sabores.",
        imagen: "https://images.unsplash.com/photo-1562967914-608f82629710?q=65&w=600"
    },
    // --- POSTRES ---
    {
        nombre: "Torta de Terciopelo",
        precio: "5.50",
        categoria: "postres",
        descripcion: "Suave bizcocho Red Velvet con frosting de queso crema.",
        maridaje: "Acompáñala con un Capuccino o un té de frutos rojos.",
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=65&w=600"
    }
];

function cargarMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = "";

    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-premium ${item.categoria}`;
        card.onclick = () => abrirModal(item);
        card.innerHTML = `
            <img src="${item.imagen}" class="card-img" alt="${item.nombre}">
            <div class="card-info">
                <h3>${item.nombre}</h3>
                <span class="card-precio">$${item.precio}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function abrirModal(item) {
    document.getElementById('modal-titulo').innerText = item.nombre;
    document.getElementById('modal-descripcion').innerText = item.descripcion;
    document.getElementById('modal-maridaje').innerHTML = `<strong>Sugerencia de la Casa:</strong><br>${item.maridaje}`;
    document.getElementById('modal-precio').innerText = `$${item.precio}`;
    document.getElementById('modal-img').src = item.imagen;

    document.getElementById('btn-wa-modal').onclick = () => {
        const tel = "584120000000"; // Tu número aquí
        const msg = encodeURIComponent(`Hola Luna Café 👋\nDeseo pedir: *${item.nombre}*\nSugerencia aceptada: _${item.maridaje}_`);
        window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
    };

    document.getElementById('miModal').style.display = \"flex\";
}

function cerrarModal() { document.getElementById('miModal').style.display = \"none\"; }

function filtrar(cat, e) {
    const cards = document.querySelectorAll('.card-premium');
    cards.forEach(c => {
        c.style.display = (cat === 'todos' || c.classList.contains(cat)) ? 'block' : 'none';
    });
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) e.currentTarget.classList.add('activo');
}

window.onclick = (e) => { if (e.target.id === "miModal") cerrarModal(); };
window.onload = cargarMenu;
