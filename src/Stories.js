const stories = [
    {title : '9gag', img : 'assets/img/9gag.svg'},
    {title : 'meowed', img : 'assets/img/meowed.svg'},
    {title : 'barked', img : 'assets/img/barked.svg'},
    {title : 'nathanwpylestrangeplanet', img : 'assets/img/nathanwpylestrangeplanet.svg'},
    {title : 'wawawicomics', img : 'assets/img/wawawicomics.svg'},
    {title : 'respondeai', img : 'assets/img/respondeai.svg'},
    {title : 'filomoderna', img : 'assets/img/filomoderna.svg'},
    {title : 'memeriagourmet', img : 'assets/img/memeriagourmet.svg'}
]

export default function Stories(){
    return(
        <div className="stories">
        {stories.map(story => Story(story))}
        <Setinha />
        </div>
    )
}

function Story(props){
    const {title, img} = props;
    return (
        <div className="story">
            <div className="imagem">
                <img src={img} />
            </div>
            <div className="usuario">
                {title}
            </div>
        </div>
    )
}

function Setinha(){
    return (
        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}