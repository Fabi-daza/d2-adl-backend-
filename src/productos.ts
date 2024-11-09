export type Producto = {
    ID: number;
    nombre: string;
    precio: number;
    categoría: string;
    stock: number;
    totalVendido?: number;
};

export const productos: Producto[] = 
    [
        { "ID": 1, "nombre": "Notebook", "precio": 500000, "categoría": "Electrónica", "stock": 10 },
        { "ID": 2, "nombre": "Teclado", "precio": 15000, "categoría": "Hogar", "stock": 5 },
        { "ID": 3, "nombre": "Mouse", "precio": 10000, "categoría": "Juguetes", "stock": 25 },
        { "ID": 4, "nombre": "Audifonos", "precio": 20000, "categoría": "Libros", "stock": 7 },
        { "ID": 5, "nombre": "Monitor", "precio": 150000, "categoría": "Deportes", "stock": 6 },
        { "ID": 6, "nombre": "Mousepad", "precio": 12000, "categoría": "Papelería", "stock": 12 },
        { "ID": 7, "nombre": "Tablet", "precio": 100000, "categoría": "Electrónica", "stock": 2 },
        { "ID": 8, "nombre": "Escritorio", "precio": 90000, "categoría": "Moda", "stock": 4 },
        { "ID": 9, "nombre": "Silla Gamer", "precio": 120000, "categoría": "Hogar", "stock": 5 },
        { "ID": 10, "nombre": "Microfono", "precio": 20000, "categoría": "Libros", "stock": 8 }
];

