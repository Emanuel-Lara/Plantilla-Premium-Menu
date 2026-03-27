const menuData = [
    { 
        nombre: "Espresso Terciopelo", 
        precio: "2.50", 
        categoria: "cafes", 
        descripcion: "Una extracción pura de granos arábicos seleccionados, con notas de chocolate oscuro.", 
        imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500" 
    },
    { 
        nombre: "Pabellón Luna Real", 
        precio: "12.00", 
        categoria: "almuerzos", 
        descripcion: "Cortes de carne deshebrada cocinados a fuego lento, acompañados de legumbres negras y arroz jazmín.", 
        imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" 
    },
    { 
        nombre: "Red Velvet Infinito", 
        precio: "5.50", 
        categoria: "postres", 
        descripcion: "Bizcocho aterciopelado de cacao fino entrelazado con capas de suave crema de queso.", 
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=500" 
    },
    { 
        nombre: "Papelón Cítrico", 
        precio: "2.50", 
        categoria: "bebidas", 
        descripcion: "Infusión fría de papelón orgánico con cítricos frescos.", 
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500" 
    }
];

function cargarMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = ""; // Limpiar antes de cargar

    // CORRECCIÓN: Usamos template literals para inyectar foto, nombre Y precio
    menuData.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-premium ${item.categoria}`;
        card.onclick = () => abrirModal(item); // La card entera abre el modal
        
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
    document.getElementById('modal-precio').innerText = `$${item.precio}`;
    document.getElementById('modal-img').src = item.imagen;
    
    // BOTÓN WHATSAPP DEL MODAL
    document.getElementById('btn-wa-modal').onclick = () => {
        const msg = encodeURIComponent(`Hola Luna Café 👋\nDeseo solicitar: *${item.nombre}*`);
        window.open(`https://wa.me/584120000000?text=${msg}`, '_blank');
    };
    document.getElementById('miModal').style.display = "flex";
}

// FUNCIONES DE UTILIDAD (PROMO, CERRAR)
function abrirPromo(n, d, p, i) { abrirModal({ nombre: n, descripcion: d, precio: p, imagen: i }); }
function cerrarModal() { document.getElementById('miModal').style.display = "none"; }
function cerrarModalExterno(e) { if(e.target.id === "miModal") cerrarModal(); }

// FUNCIÓN DE FILTRADO BLINDADA (Usa display: flex)
function filtrar(cat, e) {
    const cards = document.querySelectorAll('.card-premium');
    cards.forEach(c => {
        // CORRECCIÓN: Usamos 'flex' para no romper el diseño interno de la card
        if (cat === 'todos' || c.classList.contains(cat)) {
            c.style.display = "flex"; 
        } else {
            c.style.display = "none";
        }
    });

    // Actualizar botones de navegación
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) e.currentTarget.classList.add('activo');
}

window.onload = cargarMenu;
