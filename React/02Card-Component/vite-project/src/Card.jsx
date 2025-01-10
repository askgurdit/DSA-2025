import profilePic from './assets/WhatsApp Image 2024-10-15 at 15.01.34_47f61b80.jpg'


function Card () {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">askgurdit</h2>
            <p className="card-text">I make valubale code pieces which makes people live easier</p>

        </div>

    )
}

export default Card;