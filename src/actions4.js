const result = document.getElementById("result");

const tensorX = tf.tensor([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]);
const tensorY = tf.tensor([6, 15, 24]);

function exibir(str = "") {
  result.value = "";
  result.value = str;
}

function executar() {
  let txt = "";

  let arrayTensorX = tensorToArray(tensorX);
  let X = [];
  for (let i = 0; i < arrayTensorX.length; i++) {
    let mean = tf.tensor(arrayTensorX[i]).mean();
    X.push(tensorToArray(mean));
  }

  let vectorX = X;
  let vectorY = tensorToArray(tensorY);

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
    let tensorZ = tf.tensor(novoY);

    txt += "Regressão Linear Múltipla: \n";
    txt += "ANTES: \n";
    txt += tensorX.toString() + "\n\n";
    txt += tensorY.toString() + "\n\n";
    txt += "DEPOIS: \n";
    txt += tensorZ.toString() + "\n\n";
  }

  exibir(txt);
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
