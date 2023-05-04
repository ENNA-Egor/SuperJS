for (let key in COLOR_PALLETE){
    let row = document.createElement('tr')
    row.innerHTML= `<th colspan="10">${key}</th>`
    document.querySelector('table').append(row)
    for(let i=0; i<COLOR_PALLETE[key].length; i++ ){
        let row = document.createElement('tr')
        row.innerHTML =`
            <td colspan="5" class="pod">${COLOR_PALLETE[key][i][0]}</td>
            `
            document.querySelector('table').append(row)
            for (let n=1;n<COLOR_PALLETE[key][i].length;n++){
            let newrow = document.createElement('td') 
            newrow.innerHTML =`
                <tr></tr>
                `
                document.querySelector('table').append(newrow);
                let bgColor = ('#'+COLOR_PALLETE[key][i][n]);
                newrow.style.backgroundColor = bgColor;
                newrow.classList.add('pallet');
            
                // if(COLOR_PALLETE[key][i][n]==''){
                //     newrow.style.display='none';
                // }
            }
    }
}

