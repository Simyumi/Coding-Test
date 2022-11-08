function addNum() {

  var sum = 0;                                // 합을 저장할 변수 sum을 선언함.

  for (var i = 0; i < arguments.length; i++) { // 전달받은 인수의 총 수만큼 반복함.
    sum += arguments[i];                    // 전달받은 각각의 인수를 sum에 더함.

  }

  return sum;

}

addNum(1, 2, 3); // 6

addNum(1, 2);    // 3

addNum(1);       // 1

addNum();        // 0

addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55