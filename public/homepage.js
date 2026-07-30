fetch("http://localhost:3000/notifyhistory")
.then(res => res.json())
.then(data=>
{
    console.log(data);
}
)