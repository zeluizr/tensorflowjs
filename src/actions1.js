const result = document.getElementById("result");

// ==========================================================================================
// Seção 14: Regressão Linear Simples

const tensorX = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const tensorY = tf.tensor([11, 22, 33, 44]);

// ==========================================================================================

function exibir(str = "") {
  result.value = "";
  result.value = str;
}

function executar() {
  let txt = "";

  // ==========================================================================================
  // Seção 2: Construção do Tensor

  //   const escalar = tf.scalar(1.5);
  //   const tensor1d = tf.tensor1d([1, 2, 3]);
  //   const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
  //   const tensor3d = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
  //   const tensor4d = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);
  //   const tensor5d = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);
  //   const tensor6d = tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]);

  //   txt += "Tensor Escalar: \n" + escalar.toString() + "\n\n";
  //   txt += "Tensor de 1 Dimensão: \n" + tensor1d.toString() + "\n\n";
  //   txt += "Tensor de 2 Dimensões: \n" + tensor2d.toString() + "\n\n";
  //   txt += "Tensor de 3 Dimensões: \n" + tensor3d.toString() + "\n\n";
  //   txt += "Tensor de 4 Dimensões: \n" + tensor4d.toString() + "\n\n";
  //   txt += "Tensor de 5 Dimensões: \n" + tensor5d.toString() + "\n\n";
  //   txt += "Tensor de 6 Dimensões: \n" + tensor6d.toString() + "\n\n";

  //   const int32 = tf.tensor2d([1, 2, 3, 4], [2, 2], "int32");
  //   const float32 = tf.tensor2d([1.5, 2.6, 3.7, 4.8], [2, 2], "float32");
  //   const bool = tf.tensor2d([true, false, true, false], [2, 2], "bool");
  //   const string = tf.tensor2d(["aaa", "bbb", "ccc", "ddd"], [2, 2], "string");

  //   txt += "Tensor de Tipo int32: \n" + int32.toString() + "\n\n";
  //   txt += "Tensor de Tipo float32: \n" + float32.toString() + "\n\n";
  //   txt += "Tensor de Tipo bool: \n" + bool.toString() + "\n\n";
  //   txt += "Tensor de Tipo string: \n" + string.toString() + "\n\n";

  //   const tensor1 = tf.tensor([1, 2, 3]);
  //   const tensor2 = tf.tensor([1, 2, 3, 4], [2, 2]);
  //   const tensor3 = tf.tensor([
  //     [1, 2],
  //     [3, 4],
  //   ]);

  //   tf.tensor([1, 2, 3]).print();
  //   tf.tensor([1, 2, 3, 4], [2, 2]).print();
  //   tf.tensor([
  //     [1, 2],
  //     [3, 4],
  //   ]).print();

  //   tensor1.print();
  //   tensor2.print();
  //   tensor3.print();

  //   txt += "Tensor de 1 Dimensão: \n" + tensor1.toString() + "\n\n";
  //   txt += "Tensor de 2 Dimensões: \n" + tensor2.toString() + "\n\n";
  //   txt += "Tensor de 3 Dimensões: \n" + tensor3.toString() + "\n\n";

  // ==========================================================================================
  // Seção 3: Funções de Criação

  //   const fill0 = tf.fill([1], 0);
  //   const fill1 = tf.fill([2, 2], 1);
  //   const fill2 = tf.fill([2, 2], 2);

  //   const zero1 = tf.zeros([1]);
  //   const zero2 = tf.zeros([2, 2]);
  //   const zero3 = tf.zeros([2, 4]);

  //   const ones1 = tf.ones([1]);
  //   const ones2 = tf.ones([2, 2]);
  //   const ones3 = tf.ones([2, 4]);

  //   const linspace1 = tf.linspace(0, 9, 10);
  //   const linspace2 = tf.linspace(1, 10, 10);
  //   const linspace3 = tf.linspace(1, 15, 15);

  //   const range1 = tf.range(1, 11, 1);
  //   const range2 = tf.range(0, 21, 2);
  //   const range3 = tf.range(0, 101, 10);

  //   txt += "Fill: \n\n";
  //   txt += fill0.toString() + "\n\n";
  //   txt += fill1.toString() + "\n\n";
  //   txt += fill2.toString() + "\n\n";

  //   txt += "Zeros: \n\n";
  //   txt += zero1.toString() + "\n\n";
  //   txt += zero2.toString() + "\n\n";
  //   txt += zero3.toString() + "\n\n";

  //   txt += "Ones: \n\n";
  //   txt += ones1.toString() + "\n\n";
  //   txt += ones2.toString() + "\n\n";
  //   txt += ones3.toString() + "\n\n";

  //   txt += "Linspace: \n\n";
  //   txt += linspace1.toString() + "\n\n";
  //   txt += linspace2.toString() + "\n\n";
  //   txt += linspace3.toString() + "\n\n";

  //   txt += "Range: \n\n";
  //   txt += range1.toString() + "\n\n";
  //   txt += range2.toString() + "\n\n";
  //   txt += range3.toString() + "\n\n";

  // ==========================================================================================
  // Seção 4: Manipulação de Classes

  //   const tensor1d = tf.tensor([1.5]);
  //   const asScalar = tensor1d.asScalar();

  //   const tensor2d = tf.tensor([1, 2, 3, 4], [2, 2]);
  //   const flatten = tensor2d.flatten();

  //   const tensor1 = tf.tensor([1, 2, 3, 4], [2, 2]);
  //   const as1D = tensor1.as1D();

  //   const tensor2 = tf.tensor([1, 2, 3, 4], [2, 2, 1]);
  //   const as2D = tensor2.as2D(2, 2);

  //   const tensor3 = tf.tensor([1, 2, 3, 4], [1, 2, 2, 1]);
  //   const as3D = tensor3.as3D(2, 2, 1);

  //   const tensor4 = tf.tensor([1, 2, 3, 4]);
  //   const as4D = tensor4.as4D(1, 2, 2, 1);

  //   const tensor5 = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8]);
  //   const as5D = tensor5.as5D(1, 2, 2, 2, 1);

  //   const tensor6 = tf.tensor([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8]);
  //   const asType = tensor6.asType("int32");

  //   txt += "asScalar: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1d.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += asScalar.toString() + "\n\n";

  //   txt += "Flatten: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2d.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += flatten.toString() + "\n\n";

  //   txt += "as1D: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += as1D.toString() + "\n\n";

  //   txt += "as2D: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += as2D.toString() + "\n\n";

  //   txt += "as3D: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += as3D.toString() + "\n\n";

  //   txt += "as4D: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += as4D.toString() + "\n\n";

  //   txt += "as5D: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += as5D.toString() + "\n\n";

  //   txt += "asType: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += asType.toString() + "\n\n";

  //   const tensor1 = tf.tensor([
  //     [1, 2],
  //     [3, 4],
  //   ]);

  //   const tensor2 = tf.tensor([true, false, true, false]);
  //   const toFloat = tensor2.toFloat();

  //   const tensor3 = tf.tensor([1.1, 2.2, 3.3, 4.4]);
  //   const toInt = tensor3.toInt();

  //   const tensor4 = tf.tensor([1, 0, 1, 0]);
  //   const toBool = tensor4.toBool();

  //   const tensor5 = tf.tensor([1, 2, 3, 4]);
  //   const reshape = tensor5.reshape([2, 2]);

  //   const tensor6 = tf.tensor([
  //     [1, 2],
  //     [3, 4],
  //   ]);
  //   let tensor7 = tf.tensor([5, 6, 7, 8]);
  //   const reshapeAs = tensor6.reshapeAs(tensor7);

  //   txt += "Dispose: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   tensor1.dispose();
  //   txt += "DEPOIS: \n";
  //   txt += "Memória Liberada\n\n";

  //   txt += "toFloat: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += toFloat.toString() + "\n\n";

  //   txt += "toInt: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += toInt.toString() + "\n\n";

  //   txt += "toBool: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += toBool.toString() + "\n\n";

  //   txt += "reshape: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += reshape.toString() + "\n\n";

  //   txt += "reshapeAs: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += reshapeAs.toString() + "\n\n";

  //   const tensor1 = tf.tensor([1, 2, 3, 4]);
  //   const expandDims = tensor1.expandDims(1);

  //   const tensor2 = tf.tensor([[1], [2], [3], [4]]);
  //   const squeeze = tensor2.squeeze();

  //   const tensor3 = tf.tensor([1, 2, 3, 4]);
  //   const cumsum = tensor3.cumsum();

  //   const tensor4 = tf.tensor([5, 6, 7, 8]);
  //   const clone = tensor4.clone(tensor4);

  //   txt += "expandDims: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += expandDims.toString() + "\n\n";

  //   txt += "squeeze: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += squeeze.toString() + "\n\n";

  //   txt += "cumsum: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += cumsum.toString() + "\n\n";

  //   txt += "clone: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += clone.toString() + "\n\n";

  //   const tfdata1 = tf.tensor([1, 2, 3, 4]);
  //   const tfdata2 = tf.tensor([
  //     [5, 6],
  //     [7, 8],
  //   ]);
  //   const tfdata3 = tf.scalar(2);
  //   const dataSync1 = tfdata1.dataSync();
  //   const dataSync2 = tfdata2.dataSync();
  //   const dataSync3 = tfdata3.dataSync();

  //   const tfarray1 = tf.tensor([1, 2, 3, 4]);
  //   const tfarray2 = tf.tensor([
  //     [5, 6],
  //     [7, 8],
  //   ]);
  //   const tfarray3 = tf.scalar(2);
  //   const arraySync1 = tfarray1.arraySync();
  //   const arraySync2 = tfarray2.arraySync();
  //   const arraySync3 = tfarray3.arraySync();

  //   txt += "dataSync: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tfdata1.toString() + "\n\n";
  //   txt += tfdata2.toString() + "\n\n";
  //   txt += tfdata3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += "[" + dataSync1.toString() + "]\n\n";
  //   txt += "[" + dataSync2.toString() + "]\n\n";
  //   txt += "[" + dataSync3.toString() + "]\n\n";

  //   txt += "arraySync: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tfarray1.toString() + "\n\n";
  //   txt += tfarray2.toString() + "\n\n";
  //   txt += tfarray3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += JSON.stringify(arraySync1) + "\n\n";
  //   txt += JSON.stringify(arraySync2) + "\n\n";
  //   txt += JSON.stringify(arraySync3) + "\n\n";

  // ==========================================================================================
  // Seção 5: Manipulação de Elementos

  //   const tensor1 = tf.tensor([1, 2, 3, 4]);
  //   const pad = tensor1.pad([[1, 2]]);

  //   const tensor2 = tf.tensor([1, 2]);
  //   const tensor3 = tf.tensor([3, 4]);
  //   const concat = tensor2.concat(tensor3);
  //   const concat = tensor2.concat([tensor2, tensor3]);

  //   const tensor4 = tf.tensor([1, 2]);
  //   const tensor5 = tf.tensor([3, 4]);
  //   const stack = tf.stack([tensor4, tensor5]);

  //   const tensor6 = tf.tensor([1, 2, 3, 4], [2, 2]);
  //   const reverse = tensor6.reverse();

  //   const tensor7 = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
  //   const [tensor8, tensor9] = tf.split(tensor7, 2, 1);

  //   const tensor10 = tf.tensor([1, 2]);
  //   const tile = tensor10.tile([4]);

  //   txt += "pad: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += pad.toString() + "\n\n";

  //   txt += "concat: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += concat.toString() + "\n\n";

  //   txt += "stack: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += stack.toString() + "\n\n";

  //   txt += "reverse: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += reverse.toString() + "\n\n";

  //   txt += "split: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += tensor9.toString() + "\n\n";

  //   txt += "tile: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor10.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += tile.toString() + "\n\n";

  // ==========================================================================================
  // Seção 6: Randomização de Elementos

  //   const randomNormal = tf.randomNormal([2, 2]);
  //   const randomUniform = tf.randomUniform([3, 4], 10, 200);

  //   txt += "randomNormal: \n\n";
  //   txt += randomNormal.toString() + "\n\n";

  //   txt += "randomUniform: \n\n";
  //   txt += randomUniform.toString() + "\n\n";

  // ==========================================================================================
  // Seção 7: Operações Aritiméticas

  //   const tensor1 = tf.tensor([1, 2, 3, 4]);
  //   const tensor2 = tf.tensor([10, 20, 30, 40]);
  //   const add = tensor1.add(tensor2);

  //   const tensor3 = tf.tensor([10, 20, 30, 40]);
  //   const tensor4 = tf.tensor([1, 2, 3, 4]);
  //   const sub = tensor3.sub(tensor4);

  //   const tensor5 = tf.tensor([1, 2, 3, 4]);
  //   const tensor6 = tf.tensor([1, 4, 5, 4]);
  //   const mul = tensor5.mul(tensor6);

  //   const tensor7 = tf.tensor([7, 2, 3, 4]);
  //   const tensor8 = tf.tensor([2, 4, 5, 4]);
  //   const div = tensor7.div(tensor8);

  //   const tensor9 = tf.tensor([7, 22, 13, 41]);
  //   const tensor10 = tf.tensor([2, 4, 5, 4]);
  //   const floorDiv = tensor9.floorDiv(tensor10);

  //   const tensor11 = tf.tensor([1, 3]);
  //   const tensor12 = tf.tensor([2, 4]);
  //   const tensor13 = tf.tensor([1, 1]);
  //   const addN = tf.addN([tensor11, tensor12, tensor13]);

  //   txt += "add: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += add.toString() + "\n\n";

  //   txt += "sub: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sub.toString() + "\n\n";

  //   txt += "mul: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += mul.toString() + "\n\n";

  //   txt += "div: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += div.toString() + "\n\n";

  //   txt += "floorDiv: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor9.toString() + "\n\n";
  //   txt += tensor10.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += floorDiv.toString() + "\n\n";

  //   txt += "addN: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor11.toString() + "\n\n";
  //   txt += tensor12.toString() + "\n\n";
  //   txt += tensor13.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += addN.toString() + "\n\n";

  //   const tensor1 = tf.tensor([1, 2, 3, 4]);
  //   const tensor2 = tf.tensor([0, 5, 1, 3]);
  //   const maximum = tensor1.maximum(tensor2);

  //   const tensor3 = tf.tensor([1, 2, 3, 4]);
  //   const tensor4 = tf.tensor([0, 5, 1, 3]);
  //   const minimum = tensor3.minimum(tensor4);

  //   const tensor5 = tf.tensor([8, 2, 3, 4]);
  //   const tensor6 = tf.tensor([2, 5, 1, 3]);
  //   const mod = tensor5.mod(tensor6);

  //   const tensor7 = tf.tensor([1, 2, 3, 4]);
  //   const tensor8 = tf.tensor([2, 5, 1, 3]);
  //   const pow = tensor7.pow(tensor8);

  //   const tensor9 = tf.tensor([1, 2, 3, 4]);
  //   const tensor10 = tf.tensor([2, 5, 1, 3]);
  //   const squaredDifference = tensor9.squaredDifference(tensor10);

  //   txt += "maximum: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += maximum.toString() + "\n\n";

  //   txt += "minimum: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += minimum.toString() + "\n\n";

  //   txt += "mod: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += mod.toString() + "\n\n";

  //   txt += "pow: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += pow.toString() + "\n\n";

  //   txt += "squaredDifference: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor9.toString() + "\n\n";
  //   txt += tensor10.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += squaredDifference.toString() + "\n\n";

  //   const tensor1 = tf.tensor([-1, 2, -3, 4]);
  //   const abs = tensor1.abs(); // valor positivo

  //   const tensor2 = tf.tensor([1, -1]);
  //   const acos = tensor2.acos(); // arco cosseno

  //   const tensor3 = tf.tensor([1, 2.5]);
  //   const acosh = tensor3.acosh(); // arco cosseno hiperbólico

  //   const tensor4 = tf.tensor([1, -1]);
  //   const asin = tensor4.asin(); // arco seno

  //   const tensor5 = tf.tensor([1, -1]);
  //   const asinh = tensor5.asinh(); // arco seno hiperbólico

  //   const tensor6 = tf.tensor([1, -1]);
  //   const atan = tensor6.atan(); // arco tangente

  //   const atan2 = tf.atan2(1, -1); // arco tangente do coeficiente dos argumentos passados

  //   const tensor7 = tf.tensor([1.2, 2.5, 3.8]);
  //   const ceil = tensor7.ceil(); // arredondamento para cima
  //   const floor = tensor7.floor(); // arredondamento para baixo

  //   const tensor8 = tf.tensor([1, 2]);
  //   const cos = tensor8.cos(); // cosseno

  //   const tensor9 = tf.tensor([1, 2]);
  //   const cosh = tensor9.cosh(); // cosseno hiperbólico

  //   txt += "abs: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += abs.toString() + "\n\n";

  //   txt += "acos: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += acos.toString() + "\n\n";

  //   txt += "acosh: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += acosh.toString() + "\n\n";

  //   txt += "asin: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += asin.toString() + "\n\n";

  //   txt += "asinh: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += asinh.toString() + "\n\n";

  //   txt += "atan: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += atan.toString() + "\n\n";

  //   txt += "atan2: \n\n";
  //   txt += "atan2 de 1 e -1: \n";
  //   txt += atan2.toString() + "\n\n";

  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += "ceil: \n\n";
  //   txt += ceil.toString() + "\n\n";
  //   txt += "floor: \n\n";
  //   txt += floor.toString() + "\n\n";

  //   txt += "cos: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += cos.toString() + "\n\n";

  //   txt += "cosh: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor9.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += cosh.toString() + "\n\n";

  // ==========================================================================================
  // Seção 8: Cálculo Matemáticos

  //   const tensor1 = tf.tensor([1, 2]);
  //   const exp = tensor1.exp(); // eleva a contante de Euler aos elementos do tensor

  //   const tensor2 = tf.tensor([1, 2]);
  //   const expm1 = tensor2.expm1(); // eleva a contante de Euler aos elementos do tensor menos 1

  //   const tensor3 = tf.tensor([1, 2]);
  //   const log = tensor3.log(); // logaritmo natural dos elementos do tensor

  //   const tensor4 = tf.tensor([-1, 2]);
  //   const neg = tensor4.neg(); // inverte os sinais

  //   const tensor5 = tf.tensor([1.2, 2.5, 3.8]);
  //   const round = tensor5.round(); // arredonda para casa mais proxima

  //   const tensor6 = tf.tensor([9, 25]);
  //   const rsqrt = tensor6.rsqrt(); // 1 dividido a raiz quadrada do elemento

  //   const tensor7 = tf.tensor([-1, 2, -3, 0]);
  //   const sign = tensor7.sign(); // -1 para negativo, 0 para zero e 1 para positivo

  //   const tensor8 = tf.tensor([2, -2]);
  //   const sin = tensor8.sin(); // seno

  //   const tensor9 = tf.tensor([2, -2]);
  //   const sinh = tensor9.sinh(); // seno hiperbólico

  //   const tensor10 = tf.tensor([9, 25, 49, 100]);
  //   const sqrt = tensor10.sqrt(); // raiz quadrada

  //   const tensor11 = tf.tensor([1, 2, 3, 4, 5]);
  //   const square = tensor11.square(); // elevados ao quadrado

  //   const tensor12 = tf.tensor([1, 2, 3, 4, 5]);
  //   const tan = tensor12.tan(); // tangente

  //   txt += "exp: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += exp.toString() + "\n\n";

  //   txt += "expm1: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += expm1.toString() + "\n\n";

  //   txt += "log: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += log.toString() + "\n\n";

  //   txt += "neg: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += neg.toString() + "\n\n";

  //   txt += "round: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += round.toString() + "\n\n";

  //   txt += "rsqrt: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += rsqrt.toString() + "\n\n";

  //   txt += "sign: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sign.toString() + "\n\n";

  //   txt += "sin: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sin.toString() + "\n\n";

  //   txt += "sinh: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor9.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sinh.toString() + "\n\n";

  //   txt += "sqrt: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor10.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sqrt.toString() + "\n\n";

  //   txt += "square: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor11.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += square.toString() + "\n\n";

  //   txt += "tan: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor12.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += tan.toString() + "\n\n";

  // ==========================================================================================
  // Seção 9: Operações Matriciais

  //   const tensor1 = tf.tensor([1, 2, 3, 4], [2, 2]);
  //   const tensor2 = tf.tensor([5, 6, 7, 8], [2, 2]);
  //   const matMul = tensor1.matMul(tensor2);

  //   const tensor3 = tf.tensor([1, 2, 3]);
  //   const tensor4 = tf.tensor([3, 4, 5]);
  //   const outerProduct = tf.outerProduct(tensor3, tensor4);

  //   const tensor5 = tf.tensor([1, 2, 3, 4, 5, 6], [2, 3]);
  //   const transpose = tensor5.transpose();

  //   txt += "matMul: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += matMul.toString() + "\n\n";

  //   txt += "outerProduct: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += outerProduct.toString() + "\n\n";

  //   txt += "transpose: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += transpose.toString() + "\n\n";

  // ==========================================================================================
  // Seção 10: Funções de Redução

  //   const tensor1 = tf.tensor([true, false, true]);
  //   const all = tensor1.all();
  //   const tensor1 = tf.tensor([true, true, true]);
  //   const all = tf.all(tensor1); // verifica se todos os elementos são diferente de false

  //   const tensor2 = tf.tensor([1, 2, 3, 4]);
  //   const max = tensor2.max(); // retorna o maior elemento

  //   const tensor3 = tf.tensor([1, 2, 3, 4]);
  //   const min = tensor3.min(); // retorna o menor elemento

  //   const tensor4 = tf.tensor([1, 2, 3, 4]);
  //   const mean = tensor4.mean(); // retorna a média dos elementos

  //   const tensor5 = tf.tensor([1, 2, 3, 4]);
  //   const prod = tensor5.prod(); // retorna o produto dos elementos

  //   const tensor6 = tf.tensor([1, 2, 3, 4]);
  //   const sum = tensor6.sum(); // retorna a soma dos elementos

  //   txt += "all: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += all.toString() + "\n\n";

  //   txt += "max: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += max.toString() + "\n\n";

  //   txt += "min: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += min.toString() + "\n\n";

  //   txt += "mean: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += mean.toString() + "\n\n";

  //   txt += "prod: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += prod.toString() + "\n\n";

  //   txt += "sum: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sum.toString() + "\n\n";

  // ==========================================================================================
  // Seção 11: Operações Lógicas

  //   const tensor1 = tf.tensor([1, 2, 3, 7]);
  //   const tensor2 = tf.tensor([1, 0, 3, 5]);
  //   const equal = tensor1.equal(tensor2); // true para valores iguais

  //   const tensor3 = tf.tensor([1, 2, 3, 4]);
  //   const tensor4 = tf.tensor([1, 0, 3, 5]);
  //   const greater = tensor3.greater(tensor4); // true para valores maiores

  //   const tensor5 = tf.tensor([0, 2, 3, 7]);
  //   const tensor6 = tf.tensor([1, 0, 3, 5]);
  //   const greaterEqual = tensor5.greaterEqual(tensor6); // true para valores maiores ou iguais

  //   const tensor7 = tf.tensor([1, 2, 1, 7]);
  //   const tensor8 = tf.tensor([1, 0, 3, 5]);
  //   const less = tensor7.less(tensor8); // true para valores menores

  //   const tensor9 = tf.tensor([1, 2, 3, 7]);
  //   const tensor10 = tf.tensor([1, 0, 3, 5]);
  //   const lessEqual = tensor9.lessEqual(tensor10); // true para valores menores ou iguais

  //   txt += "equal: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += equal.toString() + "\n\n";

  //   txt += "greater: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += greater.toString() + "\n\n";

  //   txt += "greaterEqual: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += greaterEqual.toString() + "\n\n";

  //   txt += "less: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += less.toString() + "\n\n";

  //   txt += "lessEqual: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor9.toString() + "\n\n";
  //   txt += tensor10.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += lessEqual.toString() + "\n\n";

  //   const tensor1 = tf.tensor([false, false, true, true]);
  //   const tensor2 = tf.tensor([false, true, false, true]);
  //   const logicalAnd = tensor1.logicalAnd(tensor2);

  //   const tensor3 = tf.tensor([false, false, true, true]);
  //   const tensor4 = tf.tensor([false, true, false, true]);
  //   const logicalOr = tensor3.logicalOr(tensor4);

  //   const tensor5 = tf.tensor([false, false, true, true]);
  //   const tensor6 = tf.tensor([false, true, false, true]);
  //   const logicalXor = tensor5.logicalXor(tensor6);

  //   const tensor7 = tf.tensor([false, false, true, true]);
  //   const tensor8 = tf.tensor([false, true, false, true]);
  //   const notEqual = tensor7.notEqual(tensor8);

  //   const tensor9 = tf.tensor([1, 2.5, 3, 4.5]);
  //   const tensor10 = tf.tensor([2, 1.5, 3, 4.5]);
  //   const notEqualNumero = tensor9.notEqual(tensor10);

  //   txt += "logicalAnd: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += logicalAnd.toString() + "\n\n";

  //   txt += "logicalOr: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += logicalOr.toString() + "\n\n";

  //   txt += "logicalXor: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += logicalXor.toString() + "\n\n";

  //   txt += "notEqual: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor7.toString() + "\n\n";
  //   txt += tensor8.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += notEqual.toString() + "\n\n";

  //   txt += "notEqualNumero: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor9.toString() + "\n\n";
  //   txt += tensor10.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += notEqualNumero.toString() + "\n\n";

  // ==========================================================================================
  // Seção 12: Matriz de Confusão

  //   const tensor1 = tf.tensor([1, 2, 1]);
  //   const tensor2 = tf.tensor([1, 2, 1]);
  //   const confusionMatrix = tf.math.confusionMatrix(tensor1, tensor2, 4);

  //   txt += "confusionMatrix: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += confusionMatrix.toString() + "\n\n";

  //   const tensor1 = tf.tensor([0, 0, 0, 1, 1, 1, 1, 1, 1, 1]);
  //   const tensor2 = tf.tensor([0, 1, 1, 0, 0, 0, 1, 1, 1, 1]);
  //   const confusionMatrix = tf.math.confusionMatrix(tensor1, tensor2, 2); // Compara a expectativa com a realidade

  //   txt += "confusionMatrix: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += confusionMatrix.flatten().toString() + "\n\n";

  //   const tensor1 = tf.tensor([false,false,false,false,false,false,false,true,true,true,]);
  //   const tensor2 = tf.tensor([ false, false, false, false, true, true, true, false, false, true, ]);
  //   const confusionMatrix = tf.math.confusionMatrix(tensor1, tensor2, 2); // Compara a expectativa com a realidade

  //   txt += "confusionMatrix: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += confusionMatrix.flatten().toString() + "\n\n";

  // ==========================================================================================
  // Seção 13: Funções de Ativação

  //   const tensor1 = tf.tensor([-1, 0, 1, 2]);
  //   const tanh = tensor1.tanh(); // Tangente hiperbólica (-1, 1)

  //   const tensor2 = tf.tensor([-1, 0, 1, 2]);
  //   const sigmoid = tensor2.sigmoid(); // Função sigmoid (0, 1)

  //   const tensor3 = tf.tensor([-1, 0, 1, 2]);
  //   const relu = tensor3.relu(); // ReLU (transforma número negativo em 0)

  //   const tensor4 = tf.tensor([-1, 0, 1, 2]);
  //   const leakyRelu = tensor4.leakyRelu(); // Leaky ReLU (divide número menores que 0 por 5)

  //   const tensor5 = tf.tensor([-1, 0, 1, 2]);
  //   const softmax = tensor5.softmax(); // Softmax (0,1)

  //   const tensor6 = tf.tensor([-1, 0, 1, 2]);
  //   const softplus = tensor6.softplus(); // Softplus (coloca números negativos entre 0 e 1)

  //   txt += "tanh: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor1.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += tanh.toString() + "\n\n";

  //   txt += "sigmoid: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor2.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += sigmoid.toString() + "\n\n";

  //   txt += "relu: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor3.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += relu.toString() + "\n\n";

  //   txt += "leakyRelu: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor4.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += leakyRelu.toString() + "\n\n";

  //   txt += "softmax: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor5.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += softmax.toString() + "\n\n";

  //   txt += "softplus: \n\n";
  //   txt += "ANTES: \n";
  //   txt += tensor6.toString() + "\n\n";
  //   txt += "DEPOIS: \n";
  //   txt += softplus.toString() + "\n\n";

  // ==========================================================================================
  // Seção 14: Regressão Linear Simples

  let vectorX = tensorToArray(tensorX);
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

    txt += "Regressão Linear Simples: \n\n";
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
