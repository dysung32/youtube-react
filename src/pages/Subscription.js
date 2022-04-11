// 구독 컴포넌트
import Layout from '../components/shared/Layout';
import 'moment/locale/ko'; // 시간의 차이를 한글로 출력해줌
import moment from 'moment'; // moment 객체 불러오기

function Subscription() {
  console.log('년:', moment().year());
  console.log('월:', moment().month() + 1);
  console.log('일:', moment().date());
  console.log('시:', moment().hour());
  console.log('분:', moment().minute());
  console.log('초:', moment().second());
  return (
    <Layout activeMenu="subscription">
      <div>*구독</div>
    </Layout>
  );
}

export default Subscription;