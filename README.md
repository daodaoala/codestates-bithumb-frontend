# codestates-bithumb-frontend

빗썸에서 제공하는 Public WebSocket API를 활용해 실시간으로 빗썸 거래소에서 제공되고 있는 비트코인 정보를 보여주는 웹 앱을 구현하였습니다.

코인 마켓의 코인 리스트
- 빗썸의 Public API(REST API)를 활용하여 빗썸에 모든 코인의 정보와 실시간 시세, 변동률, 거래 금액 조회가능하도록 구현하였습니다.
- 원화 마켓/BTC 마켓 변동률 Top5 코인 이름과 실시간 시세 및 변동률을 차트와 함께 나타나도록 구현하였습니다.
- 즐겨찾기 버튼을 클릭하여 원하는 코인을 사용자가 관심있는 코인을 즐겨찾기 탭에서 확인 가능하도록 구현하였습니다.
- 원화 마켓/BTC 마켓의 다양한 코인 리스트들 중에서 검색어에 따라 결과를 필터링해서 보여줄 수 있도록 검색어 기능을 구현하였습니다.

코인 변동률 차트
   - 전체 코인 리스트 조회 가능한 사이드바 구현하였습니다.
   - 빗썸의 Public API(Websocket)을 활용하여 비트코인 현재가, 호가, 체결에 대한 정보를 실시간으로 제공해주도록 구현하였습니다.
   - 빗썸의 Public API(Websocket)을 활용하여 비트코인 일자, 시간, 시가, 종가, 저가, 고가 등의 데이터를 Chart.js를 이용해 변동 곡선을 구현하였습니다.
   - 빗썸의 Public API(Websocket)을 활용하여 비트코인 주문타입(bid/ask)에 따라 분류된 호가, 잔량, 건수를 나타내도록 구현하였습니다.
   - 빗썸의 Public API(Websocket)을 활용하여 체결된 통화코드의 체결종류, 체결가격, 체결수량, 체결금액을 실시간 리스트로 제공하였습니다.

### 완성된 GIF 파일 및 배포 링크

<!-- ![Hnet-image](https://user-images.githubusercontent.com/67010327/161239205-d724f342-790a-4587-9197-967bf1ddba3a.gif) -->


배포 링크 : https://codestates-bithumb-frontend.herokuapp.com/

### 프로젝트 실행 방법
1. client 폴더 이동
2. node_module 설치 (npm install) 
3. 프로젝트 실행 (npm start) 

### 사용한 스택 목록
- Javascript
- CSS
- React
- react-chartjs-2
- Chart.js
- Axios
- RestAPI
- WebSocket

### 구현한 기능 목록 (Software Requirement Specification)
- 헤더 구현 
    - 헤더 hover & click 이벤트
    - 로고 홈 화면 이동 구현

- 코인 마켓의 코인 리스트
    - 빗썸의 Public API(REST API)를 활용하여 빗썸에 모든 코인의 정보와 실시간 시세, 변동률, 거래 금액 조회
    - 원화 마켓/BTC 마켓 변동률 Top5 코인 이름과 실시간 시세 및 변동률을 Chart.js를 활용해 보여줌
    - 원화 마켓/BTC 마켓에 해당하는 빗썸에 모든 코인의 정보와 실시간 시세, 변동률, 거래 금액 조회
    - 즐겨찾기 버튼을 클릭하여 원하는 코인을 사용자가 관심있는 코인을 즐겨찾기 탭에서 확인 가능하며 10개 이상일 경우 페이지네이션으로 처리
    - 원화 마켓/BTC 마켓의 다양한 코인 리스트들 중에서 검색어에 따라 결과를 필터링해서 보여줄 수 있도록 검색어 기능 구현
    

- 코인 변동률 차트 
    - 체결내역 데이터 조회 리스트 구현 (시간/가격/직전시세와 비교 처리)
    - 세계시세 데이터 조회 리스트 구현
    - 호가창 데이터 조회 리스트 구현 
    - 1H 단위의 고가, 저가, 종가, 시가 데이터를 이용한 차트 & 애니메이션 구현
    - 1H 단위로한 시간 데이터 미니 차트 & 애니메이션 구현
    - 전체 코인 리스트 조회 가능한 사이드바 구현
    
- 푸터 구현


### 구현 방법
- 화면 UI는 빗썸 홈페이지를 참고하여 전반적인 UI를 구현하였습니다.
- 화면 구성에 필요한 데이터는 Rest API와 WebSocket API를 사용하여 다양한 데이터를 사용자에게 제공할 수 있도록 구현하였습니다.
- 사용자에게 직관적인 UI를 제공하기 위해 Chart.js 라인 그래프를 활용해서 받아온 데이터를 화면에 그려서 제공하였습니다.


### 어려웠던 점
- Top5마켓 그래프와 호가 페이지 미니 그래프의 UI를 구현하기 위해 Chart.js UI 수정하는 것이 어려웠습니다.
- 호가 페이지에서 웹소켓을 통해 3종류의 많은 량의 데이터가 들어오다보니 데이터가 많이 쌓이게 되면 성능이 느려져서 이를 해결하는데 어려움이 있었습니다.


### 성능 최적화에 대해서 고민하고 개선한 방법
- 성능 부하를 줄이기 위해 컴포넌트를 분리를 시켜 불필요한 렌더링을 방지하였고, 대규모 데이터로 인한 성능 최적화로는 조회에 필요한 만큼의 데이터만 남겨놓고 오래된 데이터는 삭제하는 방식으로 하여 성능을 24% 개선시켰습니다.
