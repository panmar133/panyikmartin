fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => kirak(json))

function kirak(adat) {
    for (let index = 0; index < adat.length; index++) {
        document.getElementById("kiiratas_p").innerHTML += adat[index].title + "<br>";

        console.log(adat[index].title);
    }
}