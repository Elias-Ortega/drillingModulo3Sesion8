
//POR CONSOLA DEBE mostrar
//   GET nombre
//   SET nombre = ECAMP
//   ecamp



let sitio = {
  nombre: "ecamp",
};

let proxy = new Proxy(sitio, {
  get(target, prop) {
    console.log("GET", prop);
    return Reflect.get(target, prop);
  },
  set(target, prop, val) {
    console.log("SET", prop, "=", val);
    return Reflect.set(target, prop, val);
  },
});

let nombre = proxy.nombre; // obtenemos el valor real de la propiedad "nombre"
proxy.nombre = "ECAMP";

console.log(nombre); // esto mostrará "ecamp" en la consola



