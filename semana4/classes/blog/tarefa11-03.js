class post {
    constructor (titulo, autor, texto, imagem)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.texto = texto;
        this.imagem = imagem;
    }

}

function criarPost()
{
    


    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const texto = document.getElementById("texto");
    const imagem = document.getElementById("imagem");

    const meuPost = new post (titulo.value, autor.value, texto.value, imagem.value);
    conteudoPost.push(meuPost);

    const novoPost = document.getElementById("preview")
    novoPost.innerHTML += "<h3>PREVIEW</h3>" + "</p>Título: " + titulo.value + "</p>" + "<p>Autor: "+ autor.value + "</p>" + "<p>Texto: " + texto.value + "</p> <br>" + "<img src='" + imagem.value + "'/img>"

    titulo.value = ""
    autor.value = ""
    texto.value = ""

    //location.replace("./index2.html")
}

conteudoPost = [];
console.log(conteudoPost);

function onLoad () {
    
    //alert("Pagina Carregada! Onload funfando!")
    //console.log(conteudoPost);

    /*
    for(elemento of conteudoPost )
    {
        const novoPost = document.getElementById("postado")
        novoPost.innerHTML += "<p>" + elemento + "</p>"
    }
    */
}