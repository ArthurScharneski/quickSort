function startApp() {
  console.log("Start App()");
  console.log("-------------------");
  let vetorBase = [
    7, 2, 1, 5, 3, 8, 4, 6, 10, 15, 54, 19, 9, 24, 37, 90, 18, 21, 20, 32, 62,
  ];
  console.log("Vetor Base => " + vetorBase);
  console.log("-------------------");
  inicio = 0;
  fim = vetorBase.length - 1;
  quickSort(vetorBase, inicio, fim);
  console.log("Vetor Ordenado => " + vetorBase);
}

function particiona(vetor, inicio, fim) {
  let pivo = vetor[inicio];
  while (inicio < fim) {
    while (vetor[inicio] < pivo) {
      inicio++;
    }
    while (vetor[fim] > pivo) {
      fim--;
    }
    if (inicio <= fim) {
      let aux = vetor[inicio];
      vetor[inicio] = vetor[fim];
      vetor[fim] = aux;
      inicio++;
      fim--;
    }
  }
  return inicio;
}

function quickSort(vetor, inicio, fim) {
  if (inicio < fim) {
    let pos = particiona(vetor, inicio, fim);
    quickSort(vetor, inicio, pos - 1);
    quickSort(vetor, pos, fim);
  }
  return vetor;
}

startApp();
