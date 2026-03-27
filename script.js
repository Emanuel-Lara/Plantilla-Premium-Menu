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
        descripcion: "Cortes de carne deshebrada cocinados a fuego lento en su propio jugo, acompañados de legumbres negras y arroz jazmín.", 
        imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" 
    },
    { 
        nombre: "Red Velvet Infinito", 
        precio: "5.50", 
        categoria: "postres", 
        descripcion: "Bizcocho aterciopelado de cacao fino, entrelazado con capas de suave crema de queso y un toque de vainilla Bourbon.", 
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=500" 
    }
];

function cargarMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = menuData.map(item => `
        <div class="card-premium ${item.categoria}">
            <img src="${item.imagen}" class="card-img" onclick='abrirModal(${JSON.stringify(item)})'>
            <div class="card-info" onclick='abrirModal(${JSON.stringify(item)})'>
                <h3>${item.nombre}</h3>
                <span class="card-precio">$${item.precio}</span>
            </div>
        </div>
    `).join('');
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

function filtrar(cat, e) {
    document.querySelectorAll('.card-premium').forEach(c => {
        if (cat === 'todos' || c.classList.contains(cat)) {
            c.style.display = "flex"; 
        } else {
            c.style.display = "none";
        }
    });
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    if(e) e.currentTarget.classList.add('activo');
}

window.onload = cargarMenu;
