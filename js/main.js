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


// delete COLOR_PALLETE.Custom.Золотой;
// console.log(COLOR_PALLETE.Custom);
// COLOR_PALLETE.Custom={'Новый':['5b82b3', '86cab9', 'd5e390', 'fafa98', 'c1faec']},

//   console.log(COLOR_PALLETE.Custom);