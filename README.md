# Cloning YouTube with React

### 시작 전 필요한 **데이터 Check !!**

> **홈 화면**
> * 영상 제목
> * 영상 썸네일
> * 유튜브 채널 이름
> * 조회수
> * 업로드 시간
> * 유튜브 채널 썸네일
> * 영상 필터링 위한 영상의 종류

<br>

> **탐색 화면**
> * 영상 제목
> * 영상 썸네일
> * 유튜브 채널 이름
> * 조회수
> * 업로드 시간
> * 영상 설명

<br>

> **구독 화면**
> * 영상 제목
> * 영상 썸네일
> * 유튜브 채널 이름
> * 조회수
> * 업로드 시간
> * 유튜브 채널 썸네일
> * 영상 설명

<br>
<hr />

### **데이터 준비**
유튜브에서 제공하는 API 사용 *(정제된 ver.)*

**youtubeData.json** 구조 파악

| API key | 설명 |
| ----- | ----- |
| id | 영상의 링크 주소 |
| channelID | 유튜브 채널 id |
| date | 업로드 시각 |
| title | 영상의 제목 | 
| thumbnail | 영상 썸네일 |
| description | 영상 설명 |
| channelTitle | 유튜브 채널 이름 |
| category | 영상 종류 |
| viewCount | 조회수 |
| likeCount | 좋아요 수 |
| channelUrl | 유튜브 채널 링크 |
| channelThumbnail | 유튜브 채널 썸네일 |

<br>
<hr />

### **컴포넌트 분리**
<br>

**공통(Common)** 컴포넌트

| 컴포넌트 명 | 설명 |
| ----- | ----- |
| Header | 상단 고정 바 |
| Menu | 좌측 메뉴 바 |
| Layout | 컨텐츠 영역 |

