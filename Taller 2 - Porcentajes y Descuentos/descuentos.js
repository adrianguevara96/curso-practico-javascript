const precioOriginal = 100;
const descuento = 15;

const coupons = [
    {
        name: "Coupon10",
        discount: 10
    },
    {
        name: "Coupon15",
        discount: 15
    },
    {
        name: "Coupon20",
        discount: 20
    }
]

function calcularPrecioConDescuento2(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = 
        (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioConDescuento(precio, descuento){
    var precioConDescuento = precio - (precio * (descuento/100));
    //console.log(precioConDescuento);
    return document.getElementById('resultPrice').innerText = `${precioConDescuento}`;
}

function validarCupones(isCoupon){
    var couponFind = coupons.find( (coupon) => {
        return coupon.name == isCoupon;
    })

    return couponFind;
}

function selectChangeValue(discount){
    document.getElementById("resultPrice").innerText = ``;
    if(discount.value == 1){
        var descuentoPorcentual = document.getElementById("descuentoPorcentual");
        descuentoPorcentual.style.display = "grid";
        descuentoPorcentual.style.gridTemplateColumns = "1fr 1fr";
        descuentoPorcentual.style.gridColumn = "1/3";
        document.getElementById("cupon").style.display = "none";
        document.getElementById("couponDiscount").value = "";
    }else{
        var coupon = document.getElementById("cupon");
        coupon.style.display = "grid";
        coupon.style.gridTemplateColumns = "1fr 1fr";
        coupon.style.gridColumn = "1/3";
        document.getElementById("descuentoPorcentual").style.display = "none";
        document.getElementById("discount").value = null;
    }
}

function calcularDescuento(price, select){

    if(document.getElementById("price").value == null || document.getElementById("price").value == "") {
        document.getElementById("resultPrice").innerText = `Ingrese el valor del producto`;
        return;
    }

    if(document.getElementById("discountSelect").value == 0){
        document.getElementById("resultPrice").innerText = `Seleccione un tipo de descuento`;
        return;
    }

    if(select == 1){
        var descuento = document.getElementById("discount").value;
        calcularPrecioConDescuento(price, descuento);
    }else if(select == 2){
        if(document.getElementById("couponDiscount").value == ""){
            document.getElementById("resultPrice").innerText = `Ingrese el nombre de su cupón`;
            return;
        }
        var coupon = document.getElementById("couponDiscount").value;

        var validCoupon = validarCupones(coupon);

        if(!validCoupon){
            document.getElementById("resultPrice").innerText = `El cupón ingresado no es válido`;
            return;
        }

        calcularPrecioConDescuento(price, validCoupon.discount)
    }
}