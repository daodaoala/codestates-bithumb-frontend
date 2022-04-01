# codestates-bithumb-frontend
codestates-bithumb-frontend Project


### 완성된 GIF 파일 및 배포 링크

![Hnet-image](https://user-images.githubusercontent.com/67010327/161239205-d724f342-790a-4587-9197-967bf1ddba3a.gif)


배포 링크 : https://codestates-bithumb-frontend.herokuapp.com/

### 프로젝트 실행 방법
1. clent 폴더 이동
2. node_module 설치 (npm install) 
3. 프로젝트 실행 (npm start) 

### 사용한 스택 목록
- javascript
- CSS
- React
- react-chartjs-2

### 구현한 기능 목록 (Software Requirement Specification)
- 헤더 구현 
    - 헤더 hover & click 이벤트
    - 로고 홈 화면 이동 구현
    - 언어 select ui 구현

- 본문 
    - 체결내역 데이터 조회 리스트 구현 (시간/가격/직전시세와 비교 처리)
    - 세계시세 데이터 조회 리스트 구현
    - 호가창 데이터 조회 리스트 구현 
    - 고가, 저가, 종가, 시가 데이터를 이용한 차트 & 애니메이션 구현
    - 1H 단위로한 시가 데이터 미니 차트 & 애니메이션 구현

### 구현 방법 및 구현하면서 어려웠던 점


#### 구현 방법
- 빗썸 홈페이지를 참고하여 전반적인 UI를 구현
- 데이터 종류마다 컴포넌트를 분리하여 웹소켓을 연결한뒤 해당 데이터 값을 담아서 map함수로 뿌려줌
- chart.js 라인 그래프를 이용해서 받아온 데이터를 화면에 그려줌


#### 어려웠던 점
- 웹소켓을 통해 받은 데이터를 어떻게 가공해서 써야하는지 어려웠고, 웹소켓을 통해 3종류의 많은 량의 데이터가 들어오다보니 성능이 떨어지는 문제가 생겨 해당 부분을 해결하는데 어려움이 있었습니다.


### 성능 최적화에 대해서 고민하고 개선한 방법
- 성능 부하를 줄이기 위해 컴포넌트를 분리를 시켜 불필요한 렌더링을 방지하였습니다. 
- 대규모 데이터로 인한 성능 최적화로는 따로 시간을 설정하여 일정 시간이 지난 데이터는 삭제하는 방식으로 최적화하면 어떨까 고민해봤습니다.

