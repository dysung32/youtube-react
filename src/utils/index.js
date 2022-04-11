// src/utils/index.js
// 조회수 구분
// 1천
// 1만
// 10만
// 1억

function ProcessViewCount(viewCount) {
  if (viewCount < 1000) {
    return `조회수 ${viewCount}회`; // 조회수 999회
  } else if (viewCount < 10000) {
    return `조회수 ${(viewCount / 1000).toFixed(1)}천회` // 조회수 1.7천회
  } else if (viewCount < 100000) {
    return `조회수 ${(viewCount / 10000).toFixed(1)}만회`; // 조회수 8.3만회
  } else if (viewCount < 100000000) {
    return `조회수 ${(viewCount / 10000).toFixed(0)}만회`; // 조회수 956만회
  } else {
    return `조회수 ${(viewCount / 100000000).toFixed(0)}억회`; // 조회수 3억회
  }

  
}

export {ProcessViewCount};