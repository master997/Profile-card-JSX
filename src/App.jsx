import ProfileCard from "./profileCard";
import "./App.css";
const users = [
  {
    name: "Sosuke Aizen",
    bio: "Captain class. Soul reaper",
    status: "Online",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlCTXMgRZDDt1YVa45aw4VKiV-4KFoERoxQ&s",
  },
  {
    name: "Ichigo Kurosaki",
    bio: "Substitute Soul Reaper.",
    status: "Offline",
    image:
      "https://cdn.rafled.com/anime-icons/images/6b76f368a62c762d59d4048f579b5ca031bfe72607322b463131ee906e195b26.jpg",
  },
  {
    name: "Toshiro Hitsugaya",
    bio: "Captain Class Soul Reaper",
    status: "Online",
    image:
      "https://preview.redd.it/my-best-attempt-at-toshiro-hitsugaya-adult-v0-9xm6xnxa9u191.jpg?width=640&crop=smart&auto=webp&s=9a4d322d2fc971bff04fc9cc7e3b9f7aa56007bf",
  },
];

function App() {
  return (
    <div>
      <div className="card-list">
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            bio={user.bio}
            status={user.status}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
