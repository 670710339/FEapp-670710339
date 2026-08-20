import React from "react";
import Header from "./Component/Header";
import MovieList from "./Component/MovieList";
import Footer from "./Component/Footer";
import Greeting from "./Component/Greeting";
import Card from "./Component/Card";
import ProfileCard from "./Component/ProfileCard";

const members = [
  { id: 1, name: 'สรินทร์ชัย มีศิลป์', nickname: 'ปลื้ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'ณัฐดนัย สันติชวลิตสกุล', nickname: 'ตี๋',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'สุนัข'] },
  { id: 3, name: 'กฤษฏา นาคะพงศ์', nickname: 'พีท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กาแฟ', 'นก'] },  
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;