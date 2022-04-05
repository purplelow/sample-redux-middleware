const myLogger = (store) => (next) => (action) => {
  console.log("\t 업데이트 이전의 상태", store.getState());
  console.log("미들웨어 에서 액션 출력 로그", action); // 먼저 액션을 출력한다.
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달한다.
  console.log("resut 로그", result);

  // 업데이트 이후의 상태를 조회합니다.
  console.log("\t\t 업데이트 이후의 상태", store.getState()); // '\t' 탭

  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 된다. 기본:undefined
};

export default myLogger;
