export type Venta = {
    ID_venta: number;
    ID_producto: number;
    cantidad_vendida: number;
    fecha_venta: string;
    ID_cliente: number;
};

export const Ventas: Venta[] =
    [
        { "ID_venta": 1, "ID_producto": 1, "cantidad_vendida": 2, "fecha_venta": "2024-01-15", "ID_cliente": 1 },
        { "ID_venta": 2, "ID_producto": 2, "cantidad_vendida": 2, "fecha_venta": "2024-02-20", "ID_cliente": 3 },
        { "ID_venta": 3, "ID_producto": 5, "cantidad_vendida": 1, "fecha_venta": "2024-03-05", "ID_cliente": 1 },
        { "ID_venta": 4, "ID_producto": 4, "cantidad_vendida": 3, "fecha_venta": "2024-03-18", "ID_cliente": 5 },
        { "ID_venta": 5, "ID_producto": 5, "cantidad_vendida": 4, "fecha_venta": "2024-04-22", "ID_cliente": 2 },
        { "ID_venta": 6, "ID_producto": 6, "cantidad_vendida": 1, "fecha_venta": "2024-05-01", "ID_cliente": 4 },
        { "ID_venta": 7, "ID_producto": 7, "cantidad_vendida": 2, "fecha_venta": "2024-06-30", "ID_cliente": 6 },
        { "ID_venta": 8, "ID_producto": 8, "cantidad_vendida": 1, "fecha_venta": "2024-07-15", "ID_cliente": 8 },
        { "ID_venta": 9, "ID_producto": 9, "cantidad_vendida": 2, "fecha_venta": "2024-08-09", "ID_cliente": 7 },
        { "ID_venta": 10, "ID_producto": 10, "cantidad_vendida": 2, "fecha_venta": "2024-09-25", "ID_cliente": 9 }
    ]
    