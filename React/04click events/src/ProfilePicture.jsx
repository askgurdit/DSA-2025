/*function ProfilePicture () {
    const imageUrl = './assets/WhatsApp Image 2024-10-16 at 23.12.24_666545b3.jpg';

    return (<img src={imageUrl}></img>);

}

export default ProfilePicture; */

import imageUrl from './assets/WhatsApp Image 2024-10-16 at 23.12.24_666545b3.jpg';

function ProfilePicture() {
    //const handleClick = () => console.log("OUCH!");

    const handleClick = (e) => e.target.style.display = "none";  //e.target.style.display = "none" is used to hide the image when clicked

    //return <img onClick={handleClick} className="img" src={imageUrl} alt="Profile" />;

    return <img onClick={(e) => handleClick(e)} className="img" src={imageUrl} alt="Profile" />;
}

export default ProfilePicture;
