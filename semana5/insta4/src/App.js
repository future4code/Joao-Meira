import React from 'react';
import './App.css';



class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150",
        },
        {
          nomeUsuario: "saitama",
          fotoUsuario: "https://miro.medium.com/max/5760/1*2bjwCLaA8TfH40OXcyLNvA.png",
          fotoPost: "https://i.imgur.com/GQoJUnT.jpg",
        },
        {
          nomeUsuario: "zima-blue",
          fotoUsuario: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR68gkW2l6p1_qY-AfaBikH8XbJuvPJqOAZ84fu0Tk7J-vwQiI_",
          fotoPost: "https://cdnb.artstation.com/p/assets/images/images/017/123/473/large/skeeva-eugene-golovanchuk-zima-v2-cc.jpg?1554736734",
        },

      ],

      valorInputNome: "",
      valorInputUrlPerfil: "",
      valorInputUrlPost: "",

    };
  }



  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputUrlPerfil,
      fotoPost: this.state.valorInputUrlPost,
    };
    const novosPosts = [...this.state.pessoas, novoPost];
    this.setState({ posts: novosPosts });
  };


  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value });
  };


  onChangeInputUrlPerfil = event => {
    this.setState({ valorInputUrlPerfil: event.target.value });
  };


  onChangeInputUrlPost = event => {
    this.setState({ valorInputUrlPost: event.target.value });
  };


  render() {

    const listaDePosts = this.state.posts.map(post => {
      return (
        <div>
          <div>
            <img className={'user-photo'} src={post.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{post.nomeUsuario}</p>
          </div>
          
          <img className={'post-photo'} src={post.fotoPost} alt={'Imagem do post'}/>
        </div>
      );
    });


    return (
      <div>

          <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputUrlPerfil}
            onChange={this.onChangeInputUrlPerfil}
            placeholder={"Endereço da Foto do Perfil"}
          />
          <input
            value={this.state.valorInputUrlPost}
            onChange={this.onChangeInputUrlPost}
            placeholder={"Endereço da Foto do Post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        
        <div>{listaDePosts}</div>

      </div>


    );
  }
}

export default Post;
