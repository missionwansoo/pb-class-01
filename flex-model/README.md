# flex

## flex : 컨테이너에 display: flex;를 적용하는게 시작
1. flex, inline-flex

## flex-direction : 아이템들이 배치되는 축의 방향을 결정하는 속성
1. flex-direction: row; 아이템들이 행(가로) 방향으로 배치
2. flex-direction: column; 아이템들이 열(세로) 방향으로 배치
3. flex-direction: row-reverse; 아이템들이 역순으로 가로 배치
4. flex-direction: column-reverse; 아이템들이 역순으로 세로 배치

## flex-wrap : 아이템 줄바꿈을 어떻게 할지 결정하는 속성
1. flex-wrap: nowrap; 줄바꿈을 하지 않음
2. flex-wrap: wrap; 줄바꿈
3. flex-wrap: wrap-reverse; 줄바꿈을 하는데, 아이템을 역순

## flex-flow : flex-direction과 flex-wrap을 한꺼번에 지정
1. flex-flow: row wrap;

## justify-content : X축 방향으로 아이템을들 정렬
1. justify-content: flex-start; 
  * 아이템들을 시작점
  * flex-direction이 row(가로 배치)일 때는 왼쪽, column(세로 배치)일 때는 위
2. justify-content: flex-end; 
  * 아이템들을 종료점으로 정렬
  * flex-direction이 row(가로 배치)일 때는 오른쪽, column(세로 배치)일 때는 아래
3. justify-content: center; 
  * 아이템들을 가운데
4. justify-content: space-between; 
  * 상하 아이템들간의 사이를 똑같이 맞춰줌
5. justify-content: space-around; 
  * 상하 종료점과 시작점을 포함 각 아이템들간의 사이를 똑같이 맞춰줌
6. justify-content: space-evenly; 
  * 상 하 종료점과 시작점을 포함 각 아이템들간의 사이를 똑같이 맞춰줌

## align-items : Y축 방향으로 아이템을들 정렬
1. align-items: stretch;
  * 아이템들이 수직축 방향으로 끝까지 쭈욱 늘어납니다.
2. align-items: flex-start;
  * 아이템들을 시작점으로 정렬
  * flex-direction이 row(가로 배치)일 때는 위, column(세로 배치)일 때는 왼쪽
3. align-items: flex-end;
  * 아이템들을 끝으로 정렬
  * flex-direction이 row(가로 배치)일 때는 위, column(세로 배치)일 때는 왼쪽
4. align-items: center;
  * 아이템들을 가운데로 정렬
5. align-items: baseline;
  * 아이템들을 텍스트 베이스라인 기준으로 정렬

## align-content : flex-wrap: wrap;이 설정된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정
1. align-content: stretch;
1. align-content: flex-start;
1. align-content: flex-end;
1. align-content: center;
1. align-content: space-between;
1. align-content: space-around;
1. align-content: space-evenly;