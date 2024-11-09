import './style.css'
import { productos, Producto   } from './productos.ts';
import { Clientes ,Cliente } from './clientes.ts';
import { Ventas, Venta } from './ventas.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
    <h1>Desafío - Objetos y algoritmos en JavaScript</h1>
    <h2>3 Productos mas vendidos</h2>
    <div id="masVendidos"></div>
    <h2>Totales por categoria</h2>
    <div id="totalCategoria"></div>
    <h2>Cliente VIP</h2>
    <div id="clientesVIP"></div>
    <h2>Inventario</h2>
    <div id="reporteInventario"></div>
    </div>
  
`
const masVendidos = (productos: Producto[], ventas: Venta[]): Producto[] => {
    const ventasPorProducto: { [key: number]: number } = {};

    ventas.forEach((venta: Venta) => {
        const productoId = venta.ID_producto;
        ventasPorProducto[productoId] = (ventasPorProducto[productoId] || 0) + venta.cantidad_vendida;
    });

    const productosOrdenados = productos
        .map((producto) => ({
            ...producto,
            totalVendido: ventasPorProducto[producto.ID] || 0
        }))
        .sort((a, b) => b.totalVendido - a.totalVendido);

    return productosOrdenados.slice(0, 3)
};

const totalCategoria = (productos: Producto[], ventas: Venta[]) => {
  const ingresosPorCategoria: { [categoria: string]: number } = {};
  
  ventas.forEach((venta) => {
    const producto = productos.find((p) => p.ID === venta.ID_producto);
      if (producto) {
          const ingreso = producto.precio * venta.cantidad_vendida;
          ingresosPorCategoria[producto.categoría] = (ingresosPorCategoria[producto.categoría] || 0) + ingreso;
      }
  });

  return ingresosPorCategoria;
};


const clientesVIP = (Clientes: Cliente[], productos: Producto[], ventas: Venta[]) => {
  const totalGastadoPorCliente: { [clienteId: number]: number } = {};

  ventas.forEach((venta) => {
      const producto = productos.find((p) => p.ID === venta.ID_producto);
      if (producto) {
          const totalVenta = producto.precio * venta.cantidad_vendida;
          totalGastadoPorCliente[venta.ID_cliente] = (totalGastadoPorCliente[venta.ID_cliente] || 0) + totalVenta;
      }
  });

  const listadoClientes = Clientes
      .map((cliente) => ({
          ...cliente,
          totalGastado: totalGastadoPorCliente[cliente.ID_cliente] || 0
      }))
      .filter((cliente) => cliente.totalGastado > 1000000);

  return listadoClientes;
};


const reporteInventario = (productos: Producto[], ventas: Venta[]) => {
  const cantidadVendidaPorProducto: { [productoId: number]: number } = {};

  ventas.forEach((venta) => {
      cantidadVendidaPorProducto[venta.ID_producto] = (cantidadVendidaPorProducto[venta.ID_producto] || 0) + venta.cantidad_vendida;
  });

  return productos.map((producto) => {
      const cantidadVendida = cantidadVendidaPorProducto[producto.ID] || 0;
      const stockActual = producto.stock - cantidadVendida;

      let status: string;
      if (stockActual < 10) {
          status = "Low Stock";
      } else if (stockActual <= 20) {
          status = "In Stock";
      } else {
          status = "Enough Stock";
      }

      return {
          nombre: producto.nombre,
          categoría: producto.categoría,
          stock: stockActual,
          status: status
      };
  });
};

const generarTabla = (id: string, encabezados: string[], filas: any[][]) => {
  const tabla = `
    <table>
      <thead>
        <tr>${encabezados.map((encabezado) => `<th>${encabezado}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${filas.map((fila) => `<tr>${fila.map((dato) => `<td>${dato}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  `;
  document.getElementById(id)!.innerHTML = tabla;
};

const productosMasVendidos = masVendidos(productos, Ventas);
generarTabla(
  'masVendidos',
  ['ID', 'Nombre', 'Precio', 'Categoría','Total Vendido'],
  productosMasVendidos.map((p) => [p.ID, p.nombre, p.precio, p.categoría, p.totalVendido])
);

const ingresosCategoria = totalCategoria(productos, Ventas);
generarTabla(
  'totalCategoria',
  ['Categoría', 'Ingresos Totales'],
  Object.entries(ingresosCategoria)
);

const clientesVIPListado = clientesVIP(Clientes, productos, Ventas);
generarTabla(
  'clientesVIP',
  ['ID Cliente', 'Nombre', 'Email', 'Total Gastado'],
  clientesVIPListado.map((c) => [c.ID_cliente, c.nombre, c.email, c.totalGastado])
);

const reporteInventarioListado = reporteInventario(productos, Ventas);
generarTabla(
  'reporteInventario',
  ['Nombre', 'Categoría', 'Stock Actual', 'Status'],
  reporteInventarioListado.map((p) => [p.nombre, p.categoría, p.stock, p.status])
);

