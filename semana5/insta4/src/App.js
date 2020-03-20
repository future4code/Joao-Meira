import React from 'react';
import './App.css';
import styled from 'styled-components'
import iconeCoracaoBranco from './Img/favorite-white.svg'
import iconeComentario from './Img/comment_icon.svg'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 2vw 0;
  align-items: center;
`

const PostContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vw 0;
  padding: 1vw;
  border: black solid 1px;
`


const PostHead = styled.div`
  width: 100%;
  height: 4vw;
  display: flex;
`

const ProfileImg = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  margin-right: 1vw;
`

const Nome = styled.p`
  font-size: 1vw;
`

const PostImg = styled.img`
  width: 18vw;
  height: auto;
`

const PostFoot = styled.div`
  width: 100%;
  padding: 1vw 0;
  margin: 0 2vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `

const Icone = styled.img`
  width: 1vw;
`

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
    const novosPosts = [...this.state.posts, novoPost];
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
        <PostContainer>
          <PostHead>
            <ProfileImg className={'user-photo'} src={post.fotoUsuario} alt={'Imagem do usuario'}/>
            <Nome>{post.nomeUsuario}</Nome>
          </PostHead>
          
          <PostImg className={'post-photo'} src={post.fotoPost} alt={'Imagem do post'}/>
          <PostFoot>
            <Icone src={iconeCoracaoBranco} />
            <Icone src={iconeComentario} />
          </PostFoot>
        </PostContainer>
      );
    });


    return (
      <Container>

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

      </Container>


    );
  }
}

export default Post;
