function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // result.sort((a, b) => a.year - b.year); // built-in

  // bukan built-in
  // ini pake bubble sort (membandingkan tiap pasangan elemen dalam array dan menukar posisinya jika urutannya tdk sesuai)
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        // Tukar posisi jika tahun mobil sekarang lebih besar dari tahun mobil berikutnya
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
