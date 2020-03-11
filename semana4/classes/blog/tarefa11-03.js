class post {
    constructor (titulo, autor, texto)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.texto = texto;
    }

}

function criarPost()
{
    
    variosPosts = [];
    console.log(variosPosts);

    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const texto = document.getElementById("texto");
    console.log(titulo.value, autor.value, texto.value);

    const meuPost = new post (titulo.value, autor.value, texto.value);
    variosPosts.push(meuPost);


    titulo.value = ""
    autor.value = ""
    texto.value = ""
    

}