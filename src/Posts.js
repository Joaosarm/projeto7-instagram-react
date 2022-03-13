const posts = [
    {userImg: 'assets/img/meowed.svg', user: 'meowed', imgPost: 'assets/img/gato-telefone.svg', userImgLiked: 'assets/img/respondeai.svg', userLiked: 'respondeai', likeNumber: '101.523'},
    {userImg: 'assets/img/barked.svg', user: 'barked', imgPost: 'assets/img/dog.svg', userImgLiked: 'assets/img/adorable_animals.svg', userLiked: 'adorable_animals', likeNumber: '99.159'},
]

export default function Posts(){
    return(
        <div className="posts">
        {posts.map(post => Post(post))}
        </div>
    )
}

function Post(props){
    const {userImg, user, imgPost, userImgLiked, userLiked, likeNumber} = props;
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
                <img src={imgPost} />
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
                  <img src={userImgLiked} />
                  <div className="texto">
                    Curtido por <strong>{userLiked}</strong> e <strong>outras {likeNumber} pessoas</strong>
                  </div>
                </div>
            </div>
        </div>
    )
}