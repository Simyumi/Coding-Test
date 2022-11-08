//등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
//제한사항
//1. 2 < common의 길이 < 1,000
//2. -1,000 < common의 원소 < 2,000
//3. 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
//4. 공비가 0인 경우는 없습니다.

//solution 

function solution(common) {
  var answer = 0;
  if ((common[1] - common[0]) == (common[2] - common[1])) {
    answer = common[common.length - 1] + (common[1] - common[0]);
  } else {
    answer = common[common.length - 1] * (common[1] / common[0]);
  }
  return answer;
}