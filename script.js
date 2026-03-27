const menuData = [
    // CAFÉS
    { nombre: "Espresso Intenso", precio: "2.50", categoria: "cafes", descripcion: "Shot puro de grano arábico seleccionado.", imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500" },
    { nombre: "Capuccino Dorado", precio: "4.00", categoria: "cafes", descripcion: "Equilibrio perfecto de espuma y aroma.", imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=500" },
    
    // ALMUERZOS (Nueva Categoría)
    { nombre: "Pabellón Gourmet", precio: "12.00", categoria: "almuerzos", descripcion: "Arroz, caraotas, tajadas y carne mechada premium.", imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" },
    { nombre: "Asado Negro", precio: "14.00", categoria: "almuerzos", descripcion: "Corte tierno bañado en salsa oscura tradicional.", imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500" },
    { nombre: "Pollo a la Brasa", precio: "10.00", categoria: "almuerzos", descripcion: "Medio pollo jugoso con papas fritas y ensalada.", imagen: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500" },

    // POSTRES
    { nombre: "Red Velvet Cake", precio: "5.50", categoria: "postres", descripcion: "Bizcocho aterciopelado con crema de queso.", imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=500" },
    { nombre: "Quesillo Criollo", precio: "3.50", categoria: "postres", descripcion: "Textura cremosa con caramelo artesanal.", imagen: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?q=80&w=500" },

    // BEBIDAS
    { nombre: "Papelón con Limón", precio: "2.00", categoria: "bebidas", descripcion: "Refrescante y natural para acompañar tu comida.", imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500" }
];

function cargarMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = menuData.map(item => `
        <div class="card-premium ${item.categoria}" onclick='abrirModal(${JSON.stringify(item)})'>
            <img src="${item.imagen}" class="card-img">
            <div class="card-info">
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
        const msg = encodeURIComponent(`Hola Luna Café 👋\nDeseo ordenar: *${item.nombre}*`);
        window.open(`https://wa.me/584120000000?text=${msg}`, '_blank');
    };
    document.getElementById('miModal').style.display = "flex";
}

function abrirPromo(n, d, p, i) { abrirModal({ nombre: n, descripcion: d, precio: p, imagen: i }); }
function cerrarModal() { document.getElementById('miModal').style.display = "none"; }
function cerrarModalExterno(e) { if(e.target.id === "miModal") cerrarModal(); }

function filtrar(cat, e) {
    document.querySelectorAll('.card-premium').forEach(c => {
        c.style.display = (cat === 'todos' || c.classList.contains(cat)) ? 'flex' : 'none';
    });
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    e.currentTarget.classList.add('activo');
}

window.onload = cargarMenu;
