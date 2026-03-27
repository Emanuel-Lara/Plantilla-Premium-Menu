const menuData = [
    { 
        nombre: "Espresso Terciopelo", 
        precio: "2.50", 
        categoria: "cafes", 
        descripcion: "Una extracción pura de granos arábicos seleccionados, con notas de chocolate oscuro y una crema densa color avellana.", 
        imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500" 
    },
    { 
        nombre: "Pabellón Luna Real", 
        precio: "12.00", 
        categoria: "almuerzos", 
        descripcion: "Cortes de carne deshebrada cocinados a fuego lento en su propio jugo, acompañados de legumbres negras en su punto y arroz jazmín.", 
        imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" 
    },
    { 
        nombre: "Asado Meloso Real", 
        precio: "14.00", 
        categoria: "almuerzos", 
        descripcion: "Pieza de res caramelizada en una reducción artesanal de papelón y especias, logrando una textura melosa y única.", 
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500" 
    },
    { 
        nombre: "Pasta del Chef", 
        precio: "11.50", 
        categoria: "almuerzos", 
        descripcion: "Linguine al dente envuelto en una sedosa salsa de quesos madurados y finas hierbas del huerto.", 
        imagen: "https://images.unsplash.com/photo-1645112481338-316274476041?q=80&w=500" 
    },
    { 
        nombre: "Red Velvet Infinito", 
        precio: "5.50", 
        categoria: "postres", 
        descripcion: "Bizcocho aterciopelado de cacao fino, entrelazado con capas de suave crema de queso y un toque de vainilla Bourbon.", 
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=500" 
    },
    { 
        nombre: "Cheesecake de Oro", 
        precio: "6.00", 
        categoria: "postres", 
        descripcion: "Textura cremosa sobre una base crocante de galleta artesanal, coronada con una coulis de frutos del bosque.", 
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500" 
    },
    { 
        nombre: "Papelón Cítrico", 
        precio: "2.50", 
        categoria: "bebidas", 
        descripcion: "Infusión fría de papelón orgánico con cítricos frescos, ideal para un maridaje refrescante.", 
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500" 
    }
];

function cargarMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = "";

    menuData.forEach(item => {
        const card = document.createElement('div');
        // Importante: Mantener exactamente estas clases para que el CSS funcione
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

function filtrar(cat, e) {
    const cards = document.querySelectorAll('.card-premium');
    cards.forEach(c => {
        // CORRECCIÓN: Usamos 'flex' en lugar de 'block' para no romper el diseño
        if (cat === 'todos' || c.classList.contains(cat)) {
            c.style.display = "flex"; 
        } else {
            c.style.display = "none";
        }
    });

    // Estilo de botones activos
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) e.currentTarget.classList.add('activo');
}

function abrirModal(item) {
    document.getElementById('modal-titulo').innerText = item.nombre;
    document.getElementById('modal-descripcion').innerText = item.descripcion;
    document.getElementById('modal-precio').innerText = `$${item.precio}`;
    document.getElementById('modal-img').src = item.imagen;
    
    document.getElementById('btn-wa-modal').onclick = () => {
        const msg = encodeURIComponent(`Hola Luna Café 👋\nDeseo solicitar: *${item.nombre}*`);
        window.open(`https://wa.me/584120000000?text=${msg}`, '_blank');
    };
    document.getElementById('miModal').style.display = "flex";
}

function abrirPromo(n, d, p, i) { abrirModal({ nombre: n, descripcion: d, precio: p, imagen: i }); }
function cerrarModal() { document.getElementById('miModal').style.display = "none"; }
function cerrarModalExterno(e) { if(e.target.id === "miModal") cerrarModal(); }

window.onload = cargarMenu;
