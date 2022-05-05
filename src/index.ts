rotulo1.innerHTML = "Ingresar monto: ";
rotulo2.innerHTML = "Ingresar cantidad: ";

btncalc.addEventListener("click", () => {
  let monto: number = dato1.value;
  let cantidad: number = dato2.value;
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let precioTotal: number = 0;
  precioTotal = monto * cantidad;
  if (precioTotal >= 1000) {
    descuento = (precioTotal * 10) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
  }
});
