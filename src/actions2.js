const eixoXval = document.getElementById("eixoX");
const eixoYval = document.getElementById("eixoY");

console.log(eixoX.value);

function executar() {
  // ==========================================================================================
  // Seção 14: Regressão Linear Simples

  let eixoX = eixoXval.value;
  let eixoY = eixoYval.value;

  let arrX = eixoX.split(",");
  let arrY = eixoY.split(",");

  let vectorX = converteNumero(arrX);
  let vectorY = converteNumero(arrY);

  let tamX = vectorX.length;
  let tamY = vectorY.length;

  let tempX = vectorX.slice(0, tamY);
  let tempY = vectorY;

  let dif = tamX - tamY;

  if (dif > 0) {
    let regressao = [];
    for (let i = 0; i < dif; i++) {
      let temp = regressaoLinear(tempX, tempY, vectorX[tamY + i]);
      regressao.push(temp);
    }
    let novoY = tempY.concat(regressao);
    eixoYval.value = novoY.toString().replace(/,/g, ", ");
  }
}

function tensorToArray(tensor) {
  let array = [];
  let strTensor = tensor.toString().replace("Tensor", "").trim();
  eval("array = " + strTensor);
  return array;
}

function arraytoTensor(array) {
  let tensor = tf.tensor(array);
  return tensor;
}

function converteNumero(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(parseFloat(array[i].toString().trim()));
  }
  return temp;
}

function regressaoLinear(arrX, arrY, p) {
  let x = arraytoTensor(arrX);
  let y = arraytoTensor(arrY);

  let resultado1 = x.sum().mul(y.sum()).div(x.size);
  let resultado2 = x.sum().mul(x.sum()).div(x.size);
  let resultado3 = x.mul(y).sum().sub(resultado1);
  let resultado4 = resultado3.div(x.square().sum().sub(resultado2));
  let resultado5 = y.mean().sub(resultado4.mul(x.mean()));

  let tensor = resultado4.mul(p).add(resultado5);
  let array = tensorToArray(tensor);
  return array;
}
