function ProfileCard() {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlCTXMgRZDDt1YVa45aw4VKiV-4KFoERoxQ&s"
        alt="user avatar"
        className="avatar"
      />
      <h2>Sosuke Aizen</h2>
      <h3>Captain class: Soul reaper</h3>
      <p>
        Status: <span className="status">Online</span>
      </p>
    </div>
  );
}

export default ProfileCard;
