const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;

var json = require('./data/datos.json');
hbs.registerHelper('texto', function() {
    var da = JSON.stringify(json);
    var trans = JSON.parse(da);
    let out = '';
    for (let i = 0; i < trans.length; i++) {
        out = out + 
        '<aside>' +
        '<h2>' + trans[i].titulo2 + '</h2>' +
        '<h1>' + trans[i].titulo1 + '</h1>' +
        '<p>' + trans[i].parrafo + '</p>' +
        '<a id="inventario" href="">' + trans[i].button + '</a>' +
        '</aside>' +
        '<div>' + 
        '<figure>'+
        '<img class ="ImgProd" src="'+ trans[i].img1 +'" alt="">'+
        '<h3>'+ trans[i].descpastel1 +'</h3>'+
        '<h2>'+ trans[i].precio1 +'</h2>'+
        '</figure>'+
        '</div>' +

        '<div>' + 
        '<figure>'+
        '<img class ="ImgProd" src="'+ trans[i].img2 +'" alt="">'+
        '<h3>'+ trans[i].descpastel2 +'</h3>'+
        '<h2>'+ trans[i].precio2 +'</h2>'+
        '</figure>'+
        '</div>' +

        '<div>' + 
        '<figure>'+
        '<img class ="ImgProd" src="'+ trans[i].img3 +'" alt="">'+
        '<h3>'+ trans[i].descpastel3 +'</h3>'+
        '<h2>'+ trans[i].precio3 +'</h2>'+
        '</figure>'+
        '</div>'
    }
    return out;
});

app.use( express.static(__dirname + '/public'));

//express HBS view engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


app.get('/', (req, res)=> {
    res.render('home', {
        autor: "Bryan Jacome"    
    });
});

app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
}); 