const menuData = [
    { nombre: "Espresso Intenso", precio: "2.50", categoria: "cafes", descripcion: "Shot puro y potente de nuestro grano arábico.", imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500" },
    { nombre: "Arepa Pelúa", precio: "6.00", categoria: "desayunos", descripcion: "Carne mechada jugosa con queso amarillo premium.", imagen: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500" },
    { nombre: "Red Velvet", precio: "5.50", categoria: "postres", descripcion: "Suave bizcocho con auténtico frosting de queso.", imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=500" }
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
