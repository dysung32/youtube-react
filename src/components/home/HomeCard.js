// src/components/home/HomeCard.js
// 영상 하나하나의 데이터를 받아 영상 디자인을 리턴해주는 컴포넌트

function HomeCard(data) {
  return (
    <div>{data['title']}</div>
  );
}

export default HomeCard;