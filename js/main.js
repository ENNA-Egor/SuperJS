for (let key in COLOR_PALLETE){
    let row = document.createElement('tr')
    row.innerHTML= `<th colspan="5">${key}</th>`
    document.querySelector('table').append(row)
    for(let i=0; i<COLOR_PALLETE[key].length; i++ ){
        let row = document.createElement('tr')
        row.innerHTML =`
            <td colspan="4" class="pod">${COLOR_PALLETE[key][i][0]}</td>
            `
            document.querySelector('table').append(row)
            const table = document.querySelector('table');
            let colCount = 0;
            let currentRow = document.createElement('tr');
            table.append(currentRow);

            for (let n = 1; n < COLOR_PALLETE[key][i].length; n++) {
              let newCol = document.createElement('td');
              let bgColor = ('#' + COLOR_PALLETE[key][i][n]);
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

