const result = document.getElementById("result");

let arrX = [];
let arrY = [];
let arrInpu = [];

function exibir(str = "") {
  result.value = "";
  result.value = str;
}

function abrir(event) {
  let file = event.target.value;
  file = file.replace(/\\/g, "-");
  let arr = file.split("-");
  carregar(arr[arr.length - 1]);
}

function carregar(str = "") {
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = e.target.result;

    let caractere = ",";
    if (data.indexOf(";") >= 0) caractere = ";";
    let arrLinha = data.split("\r\n");

    let titulos = arrLinha[0].split(caractere);
    let qtdEntradas = titulos.filter(function (x) {
      return x == "input";
    });
    let X = [];
    let Y = [];
    for (let i = 0; i < arrLinha.length; i++) {
      let celulasX = [];
      let celulasY = [];
      let arrCelula = arrLinha[i].split(caractere);

      for (let j = 0; j < arrCelula.length; j++) {
        if (arrCelula[j].toString().trim().length > 0) {
          if (j < qtdEntradas) {
            celulasX.push(parseFloat(arrCelula[j]));
          } else {
            celulasY.push(parseFloat(arrCelula[j]));
          }

          if (celulasX.length > 0) X.push(celulasX);
          if (celulasY.length > 0) Y.push(celulasY);
        }
      }
      let difference = X.length - Y.length;
      let inputs = X.slice(X.length - difference, X.length);

      X.splice(X.length - difference, difference);

      arrX = X;
      arrY = Y;
      arrInpu = inputs;

      exibir("dados carregados com sucesso");
    }
  };
  reader.readAsText(str);
}

function executar() {
  exibir("...processando");

  let txt = "";

  let units = Number(arrY[0].length);
  let inputsShape = Number(arrX[0].length);
  let linesX = Number(arrX.length);
  let linesInput = Number(arrInpu.length);

  const model = tf.sequential();
  const inputLayer = tf.layers.dense({
    units: units,
    inputShape: [inputsShape],
  });
  model.add(inputLayer);
  model.complile({
    loss: "meanSquaredError",
    optimizer: tf.train.sgd(0.05),
  });
  const x = tf.tensor(arrX, [linesX, inputsShape]);
  const y = tf.tensor(arrY);
  const input = tf.tensor(arrInpu, [linesInput, inputsShape]);

  model
    .fit(x, y, {
      epochs: 500,
    })
    .then(() => {
      let output = model.predict(input).dataSync();
      output = converteArray(output);
      let z = tf.tensor(output);

      txt += "Regressão Linear Múltipla com Rede Neural\n";
      txt += "Treinamento: \n";
      txt += x.toString() + "\n\n";
      txt += y.toString() + "\n\n";
      txt += "Entrada: \n";
      txt += input.toString() + "\n\n";
      txt += "Saída: \n";
      txt += z.toString() + "\n\n";

      exibir(txt);
    });
}

function converteArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(Math.ceil(array[i].toFixed(0)));
  }
  return result;
}
