// 탐색 컴포넌트
import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';

function ExploreCard(data, index) {
  return(
    <div>
      <div>{index}.</div>
      <div>제목 : {data.title}</div>
      <div>업로더 : {data.channelTitle}</div>
      <br />
    </div>
  );
}

function Explore() {
  return (
    <Layout activeMenu="explore">
      <ContentsLayout>
        {youtubeData['data'].map(ExploreCard)}
      </ContentsLayout>
    </Layout>
  );
}

export default Explore;