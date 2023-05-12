for (let key in COLOR_PALLETE){
    let row = document.createElement('tr')
    row.innerHTML= `<th colspan="5">${key}</th>`
    document.querySelector('table').append(row)
    for(let key2 in COLOR_PALLETE[key]){
        let row = document.createElement('tr')
        row.innerHTML =`
            <td colspan="4" class="pod">${key2}</td>
            `
            document.querySelector('table').append(row)
            const table = document.querySelector('table');
            let colCount = 0;
            let currentRow = document.createElement('tr');
            table.append(currentRow);

            for (let n = 1; n < COLOR_PALLETE[key][key2].length; n++) {
              let newCol = document.createElement('td');
              let bgColor = ('#' + COLOR_PALLETE[key][key2][n]);
              newCol.style.backgroundColor = bgColor;
              newCol.classList.add('pallet');
            
              currentRow.append(newCol);
              colCount++;
            
              if (colCount == 5) {
                currentRow = document.createElement('tr');
                table.append(currentRow);
                colCount = 0;
              }
            }
    }
}

var btn = document.querySelector('.btn');
btn.addEventListener('click', function (event) {
  console.log('Произошло событие', event.type)
  const title = prompt('Выбери название цветовой схемы', 100);
  console.log(title);
  COLOR_PALLETE.Custom[title] = ['fafa98','1f8a70'];
  console.log(COLOR_PALLETE.Custom);
});

var btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function (event) {
  alert('Ok');
  localStorage.setItem('test', JSON.stringify(COLOR_PALLETE));
});

var btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', function () {
  delete localStorage.test;
});

var btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', function () {
  alert( localStorage.getItem('test'));
});



delete COLOR_PALLETE.Custom.Золотой;
console.log(COLOR_PALLETE.Custom);
COLOR_PALLETE.Custom.Новый =['fafa98','1f8a70', 'bedb39', 'ffff1a', '7f7fff', 'c1faec', 'd5e390', '628f2e', '14dcdc','fafa98','1f8a70', 'bedb39', 'ffff1a', '7f7fff']

  // console.log(COLOR_PALLETE.Custom);
// COLOR_PALLETE.Custom.Золотой =['5b82b3', '86cab9', 'd5e390', 'fafa98', 'c1faec'],

//   console.log(COLOR_PALLETE.Custom);