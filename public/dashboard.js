window.onload=function(){
    fetch("/showOrders")
    .then(res=>res.json())
    .then(data => {
    
        const tableBody=document.querySelector(".bookings-table tbody");

        data.forEach(item =>{
            const row= document.createElement("tr");
            console.log("Here is - ",data);
            
            const tuid=document.createElement("td");
            tuid.textContent=item.id;
            const titems=document.createElement("td");
            titems.textContent=item.item;
            const tquantity=document.createElement("td");
            tquantity.textContent=item.quantity;
            const ttime=document.createElement("td");
            ttime.textContent=item.time;
            const tstatus=document.createElement("td");
            tstatus.textContent=item.status;

            row.appendChild(tuid);
            row.appendChild(titems);
            row.appendChild(tquantity);
            row.appendChild(ttime);
            row.appendChild(tstatus);
            tableBody.appendChild(row);
            
        });
    })
        .catch(err=>console.log("Cant show orders due to - ",err));
        
        
};
