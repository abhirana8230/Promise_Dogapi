var breedimages="https://dog.ceo/api/breed/hound/images/random/5"

async function dog(){
    try {
        var response = await fetch(breedimages);
        var result = await response.json();
        
        var container=document.createElement('div');
        container.setAttribute('class','container');
        container.classList.add('table-responsive-sm','table-responsive-md','table-responsive-lg','table-responsive-xl');

        var table=document.createElement('table');
        table.setAttribute('class','table');

        var thead=document.createElement('thead');
        thead.setAttribute('class','thead');

        var tr=document.createElement('tr');
        
        var th1=document.createElement('th');
        th1.setAttribute('class','th');
        th1.innerHTML="ID";
        var th2=document.createElement('th');
        th2.setAttribute('class','th');
        th2.innerHTML="URL"

        tr.append(th1,th2);
        thead.appendChild(tr);

        for(let i=0;i<5;i++){
        var tbody=document.createElement('tbody');
        tbody.setAttribute('class','tbody')
        var td=document.createElement('tr');
      
        var td1=document.createElement('td');
        td1.setAttribute('class','td');
        td1.innerHTML=i+1;

        var td2=document.createElement('td');
        td2.setAttribute('class','td');
        
        var anchor=document.createElement('a');
        anchor.href=result.message[i];
        anchor.innerHTML=result.message[i];
        td2.appendChild(anchor);
        
        td.append(td1,td2);
        tbody.appendChild(td);
        table.append(thead,tbody);
        container.appendChild(table);
        document.body.appendChild(container);
        
        }

    } catch (error) {
        console.log(error)
    }
}

dog()