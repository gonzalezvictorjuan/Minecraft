function generarCoordenadasCirculo(radio, cantidadCoordenadas) {
  const coordenadas = [];
  const anguloIncremento = (2 * Math.PI) / cantidadCoordenadas;

  for (let i = 0; i < cantidadCoordenadas; i++) {
    const angulo = i * anguloIncremento;
    const x = Math.round(radio * Math.cos(angulo));
    const y = Math.round(radio * Math.sin(angulo));
    coordenadas.push({ x, y });
  }

  return coordenadas;
}

// Ejemplo de uso:
const distancia = 1000;
const cantidadCoordenadas = 10;
const coordenadas = generarCoordenadasCirculo(distancia, cantidadCoordenadas);
console.log(coordenadas);

function recalcularCoordenada(coordenada, nuevoRadio) {
  const angulo = Math.atan2(coordenada.y, coordenada.x);
  const x = Math.round(nuevoRadio * Math.cos(angulo));
  const y = Math.round(nuevoRadio * Math.sin(angulo));
  return { x, y };
}

// Ejemplo de uso:
// const coordenadaOriginal = coordenadas[coordenadas.length - 1];
// const nuevoRadio = 250;
// const nuevaCoordenada = recalcularCoordenada(coordenadaOriginal, nuevoRadio);
// console.log(nuevaCoordenada);
