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
    
    variosPosts = [];
    console.log(variosPosts);


    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const texto = document.getElementById("texto");
    const imagem = document.getElementById("imagem");

    const meuPost = new post (titulo.value, autor.value, texto.value, imagem.value);
    variosPosts.push(meuPost);

    const preview = document.getElementById("preview")
    preview.innerHTML += "<p>" + "Título:" + titulo.value + "<br>" + "Autor: "+ autor.value + "<br>" + "Texto: " + texto.value + "<br>" + "<img src='" + imagem.value + "' </img>" + "</p>"


    titulo.value = ""
    autor.value = ""
    texto.value = ""

}

