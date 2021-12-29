const result = document.getElementById("result");

function executar() {
  let txt = "";

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

  const tensor1d = tf.tensor([1.5]);
  const asScalar = tensor1d.asScalar();

  const tensor2d = tf.tensor([1, 2, 3, 4], [2, 2]);
  const flatten = tensor2d.flatten();

  const tensor1 = tf.tensor([1, 2, 3, 4], [2, 2]);
  const as1D = tensor1.as1D();

  const tensor2 = tf.tensor([1, 2, 3, 4], [2, 2, 1]);
  const as2D = tensor2.as2D(2, 2);

  const tensor3 = tf.tensor([1, 2, 3, 4], [1, 2, 2, 1]);
  const as3D = tensor3.as3D(2, 2, 1);

  const tensor4 = tf.tensor([1, 2, 3, 4]);
  const as4D = tensor4.as4D(1, 2, 2, 1);

  const tensor5 = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8]);
  const as5D = tensor5.as5D(1, 2, 2, 2, 1);

  txt += "asScalar: \n\n";
  txt += "ANTES: \n";
  txt += tensor1d.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += asScalar.toString() + "\n\n";

  txt += "Flatten: \n\n";
  txt += "ANTES: \n";
  txt += tensor2d.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += flatten.toString() + "\n\n";

  txt += "as1D: \n\n";
  txt += "ANTES: \n";
  txt += tensor1.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += as1D.toString() + "\n\n";

  txt += "as2D: \n\n";
  txt += "ANTES: \n";
  txt += tensor2.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += as2D.toString() + "\n\n";

  txt += "as3D: \n\n";
  txt += "ANTES: \n";
  txt += tensor3.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += as3D.toString() + "\n\n";

  txt += "as4D: \n\n";
  txt += "ANTES: \n";
  txt += tensor4.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += as4D.toString() + "\n\n";

  txt += "as5D: \n\n";
  txt += "ANTES: \n";
  txt += tensor5.toString() + "\n\n";
  txt += "DEPOIS: \n";
  txt += as5D.toString() + "\n\n";

  exibir(txt);
}

function exibir(str = "") {
  result.value = "";
  result.value = str;
}
