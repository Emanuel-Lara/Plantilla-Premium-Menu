const menuData = [
    { nombre: "Espresso Intenso", precio: "2.50", categoria: "cafes", descripcion: "Shot puro de grano arábico seleccionado.", imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500" },
    { nombre: "Capuccino de la Casa", precio: "4.00", categoria: "cafes", descripcion: "Espuma cremosa con un toque de canela.", imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=500" },
    
    { nombre: "Pabellón Luna", precio: "12.00", categoria: "almuerzos", descripcion: "Arroz, caraotas, tajadas y carne mechada gourmet.", imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" },
    { nombre: "Asado Negro Premium", precio: "14.00", categoria: "almuerzos", descripcion: "Corte tierno bañado en reducción artesanal.", imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500" },
    { nombre: "Pasta Alfredo", precio: "11.00", categoria: "almuerzos", descripcion: "Cremosa con trozos de pollo y parmesano.", imagen: "https://images.unsplash.com/photo-1645112481338-316274476041?q=80&w=500" },

    { nombre: "Torta Red Velvet", precio: "5.50", categoria: "postres", descripcion: "Bizcocho aterciopelado con crema de queso.", imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=500" },
    { nombre: "Cheesecake Frutos Rojos", precio: "6.00", categoria: "postres", descripcion: "Cremoso sobre base de galleta crocante.", imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500" },

    { nombre: "Jugo Natural", precio: "2.00", categoria: "bebidas", descripcion: "Fruta fresca del día 100% natural.", imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500" }
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
        window.open(`https://wa.me/584120000000?text=Hola Luna Café 👋, deseo ordenar: *${item.nombre}*`, '_blank');
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
