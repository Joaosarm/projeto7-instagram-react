const posts = [
    {userImg: 'assets/img/meowed.svg', user: 'meowed', imgPost: 'assets/img/gato-telefone.svg', userImgLiked: 'assets/img/respondeai.svg', userLiked: 'respondeai', likeNumber: '101.523', type: 'img'},
    {userImg: 'assets/img/barked.svg', user: 'barked', imgPost: 'assets/img/dog.svg', userImgLiked: 'assets/img/adorable_animals.svg', userLiked: 'adorable_animals', likeNumber: '99.159', type: 'img'},
    {userImg: 'assets/img/ursodalagoinha.jpeg', user: 'ursodalagoinha', imgPost: 'assets/video/video.mp4', userImgLiked: 'assets/img/sansaoboy.png', userLiked: 'sansaoboy', likeNumber: '1.435.343', type: 'video', oggPost: 'assets/video/video.ogv'}
]

export default function Posts(){
    return(
        <div className="posts">
        {posts.map(post => Post(post))}
        </div>
    )
}

function Post(props){
    const {userImg, user, imgPost, userImgLiked, userLiked, likeNumber, type, oggPost} = props;
    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                  <img src={userImg} />
                  {user}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className="conteudo">
                <Conteudo imgPost = {imgPost} type = {type} oggPost = {oggPost}/>
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div className="curtidas">
                  <div className='usuario'>
                  <img src={userImgLiked} />
                  </div>
                  <div className="texto">
                    Curtido por <strong>{userLiked}</strong> e <strong>outras {likeNumber} pessoas</strong>
                  </div>
                </div>
            </div>
        </div>
    )
}

function Conteudo ({imgPost, type, oggPost}){
  if(type == 'img'){
  return(
      <img src={imgPost} />
  )
  }else{
    return (
      <video autoPlay muted>
        <source src={imgPost} type="video/mp4"/>
        <source src={oggPost} type="video/ogg"/>
        Your browser does not support the video tag.
      </video>
    )
  }
}