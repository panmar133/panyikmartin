//Natív megoldás
const btn = document.createElement("button");
btn.onclick = function () {
    alert("Natív gomb megnyomva!")
}
btn.innerHTML = "Natív gomb";
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

ReactDOM.render(gomb, document.getElementById("react-button-container"));