function ProfileCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="avatar" />
      <h2>{props.name}</h2>
      <h3>{props.bio}</h3>
      <p>
        Status: <span className="status">{props.status}</span>
      </p>
    </div>
  );
}

export default ProfileCard;
