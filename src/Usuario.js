export default function Usuario(props){
    const {userImg, user, name} = props;
    return (
        <div className="usuario">
            <img src={userImg} />
            <div className="texto">
              <strong>{user}</strong>
              {name}
            </div>
        </div>
    );
}