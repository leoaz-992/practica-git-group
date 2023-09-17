const sinCobertura =  450;
const oreo = 480;
const frutilla =  500;
const chocolate =  520;
const caramelo = 550;

let stock_sinCobertura = 20;
let stock_oreo =  10;
let stock_frutilla = 15;
let stock_chocolate = 20;
let stock_caramelo = 0;

//function pedir_Postre()
//let postre;
// document.write('Programa de calculo de Postre');
window.onload=()=>{
    
    pedido_postre = prompt("Elige un postre: oreo, frutilla, chocolate,caramelo").toLowerCase();
    pedido_cantidad = parseInt( prompt("Cantidad"));
    calcularTotalPostre(pedido_postre,pedido_cantidad);
}

function calcularTotalPostre(postre,cantidad){
let compra = 0;
for(let i = 1; i <= cantidad;i++){
    
 switch(postre){
    case 'sinCobertura':
        if(stock_sinCobertura == 0){
            return 'Nos quedamos sin postres';
        }else{
            stock_sinCobertura--;
            compra += sinCobertura;//compra = compra + sinCobertura
        }
        break;
    case 'oreo':
        if(stock_oreo == 0){
            if(stock_sinCobertura > 0){
                compra += sinCobertura;
                stock_sinCobertura--;
            }else{
                return 'Nos quedamos sin postres';
            }
        }else{
            compra += oreo;
            stock_oreo--;
        }
        break;
    case 'frutilla':
        if(stock_frutilla == 0){
            if(stock_sinCobertura > 0){
                compra += sinCobertura;
                stock_sinCobertura--;//stock_sinCobertura = stock_sinCobertura - 1;
            }else{
                return 'Nos quedamos sin postres';
            }
        }else{
            compra += frutilla;
            stock_frutilla--;
        }
        break;
    case 'chocolate':
        if(stock_chocolate == 0){
            if(stock_sinCobertura > 0){
                compra += sinCobertura;
                stock_sinCobertura--;
            }else{
                return 'Nos quedamos sin postres';
            }
        }else{
            compra += chocolate;
            stock_chocolate--;
        }
        break;
    case 'caramelo':
        if(stock_caramelo == 0){
            if(stock_sinCobertura > 0){
                compra += sinCobertura;
                stock_sinCobertura--;
            }else{
                return 'Nos quedamos sin postres';
            }
        }else{
            compra += caramelo;
            stock_caramelo--;
        }
        break;

}
}
return console.log(compra);
}

//return compra;     