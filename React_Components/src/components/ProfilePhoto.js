import personelImg from "../img.jpg";
function ProfilePhoto(){
    return (
        <img className="rounded" src={personelImg} width="600px" />
    );
}

export default ProfilePhoto;