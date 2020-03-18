import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
<div>


      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>

      <div className={'app-container'}>
        <Post
          nomeUsuario={'saitama'}
          fotoUsuario={'https://miro.medium.com/max/5760/1*2bjwCLaA8TfH40OXcyLNvA.png'}
          fotoPost={'https://i.imgur.com/GQoJUnT.jpg'}
        />
      </div>

      <div className={'app-container'}>
        <Post
          nomeUsuario={'zima-blue'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR68gkW2l6p1_qY-AfaBikH8XbJuvPJqOAZ84fu0Tk7J-vwQiI_'}
          fotoPost={'https://cdnb.artstation.com/p/assets/images/images/017/123/473/large/skeeva-eugene-golovanchuk-zima-v2-cc.jpg?1554736734'}
        />

      </div>


</div>

    );
  }
}

export default App;
