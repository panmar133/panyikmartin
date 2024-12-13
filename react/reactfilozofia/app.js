//Natív megoldás
const btn = document.createElement("button");
btn.onclick = function () {
    alert("Natív gomb megnyomva!")
}
btn.innerHTML = "Natív gomb";

//hozzáfűzi lényegében a divhez a gombot.
document.getElementById("nativ-button-container").appendChild(btn);


//Reactos megoldás

const gomb = React.createElement("button", 
    {
        onClick: function()
        {
            alert("React gomb megnyomva!");
        },
    },
    "React Gomb"
)
//első paraméter az elemet ami használni szeretnénk
//második paraméter egy referencia egy nativ DOM elemre, hivatkozásipont megadása
ReactDOM.render(gomb, document.getElementById("react-button-container"));