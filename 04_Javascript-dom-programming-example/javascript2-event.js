//Ex10-1 : 마우스 이벤트 객체 - 드래그 드랍 - draggable 속성
// window.addEventListener("load", function(){
// });

//Ex9-2 : 마우스 이벤트 객체 : [마우스 캡쳐링] 박스의 offset 영역 좌표 이용하기 (향상된 권장방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section9_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    
    // 마우스 드래그 동작중 Flag
    var dragging = false;

    // Container offset 위치값
    var left = container.offsetLeft;
    var top = container.offsetTop;
    //console.log(left);
    //console.log(top);

    // Box offset 위치값
    var offset = {x:0, y:0}; // Dictionary
    var currentBoxNode = null; // 현재 선택된 Box

    // 컨테이너의 부모 영역 Mouse Down (document 또는 section 등등)
    document.onmousedown = function(e){
        if (e.target.classList.contains("box")) { // 현재 선택된 객체가 Box 인지 확인 (class="box")
            dragging = true;
            currentBoxNode = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    // 컨테이너의 부모 영역 Mouse Up (document 또는 section 등등)
    document.onmouseup = function(e){
        dragging = false;
    };

    // 컨테이너의 부모 영역 Mouse Move - 객체의 디폴트 position 설정값을 css로 이동 (document 또는 section 등등)
    document.onmousemove = function(e){
        if (!dragging) return;

        // 이벤트 객체 위치정보 얻기
        var x = e.pageX - offset.x - left;
        var y = e.pageY - offset.y - top;
        // console.log("x : " + e.x + ", y : " + e.y); // 일반적으로 clientX,clientY 와 동일값
        // console.log("clientX : " + e.clientX + ", clientY : " + e.clientY);
        // console.log("pageX : " + e.pageX + ", pageY : " + e.pageY);
        // console.log("offsetX : " + e.offsetX + ", offsetY : " + e.y);

        // Box 객체 좌표 설정 (포지션 : absolute + pageX)(화면사이즈 or 스크롤시 정상 동작)
        // 객체의 디폴트 position 설정값을 css로 이동
        currentBoxNode.style.left = x + "px";
        currentBoxNode.style.top = y + "px";
        status.innerText = "(x,y):("+x+","+y+")";
    };
});

//Ex9-1 : 마우스 이벤트 객체 : 박스의 offset 영역 좌표 이용하기 (컨테이너 좌표 이용)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section9_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    
    // 마우스 드래그 동작중 Flag
    var dragging = false;

    // Container offset 위치값
    var left = container.offsetLeft;
    var top = container.offsetTop;
    //console.log(left);
    //console.log(top);

    // Box offset 위치값
    var offset = {x:0, y:0}; // Dictionary
    var currentBoxNode = null; // 현재 선택된 Box

    // 컨테이너 영역 Mouse Down
    container.onmousedown = function(e){
        if (e.target.classList.contains("box")) { // 현재 선택된 객체가 Box 인지 확인 (class="box")
            dragging = true;
            currentBoxNode = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    // 컨테이너 영역 Mouse Up
    container.onmouseup = function(e){
        dragging = false;
    };

    // 컨테이너 영역 Mouse Move - 객체의 디폴트 position 설정값을 css로 이동
    container.onmousemove = function(e){
        if (!dragging) return;

        // 이벤트 객체 위치정보 얻기
        var x = e.pageX - offset.x - left;
        var y = e.pageY - offset.y - top;
        // console.log("x : " + e.x + ", y : " + e.y); // 일반적으로 clientX,clientY 와 동일값
        // console.log("clientX : " + e.clientX + ", clientY : " + e.clientY);
        // console.log("pageX : " + e.pageX + ", pageY : " + e.pageY);
        // console.log("offsetX : " + e.offsetX + ", offsetY : " + e.y);

        // Box 객체 좌표 설정 (포지션 : absolute + pageX)(화면사이즈 or 스크롤시 정상 동작)
        // 객체의 디폴트 position 설정값을 css로 이동
        currentBoxNode.style.left = x + "px";
        currentBoxNode.style.top = y + "px";
        status.innerText = "(x,y):("+x+","+y+")";
    };
});

//Ex8-1 : 마우스 이벤트 객체 : 여러개 박스 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section8_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var container = section.querySelector(".container");
    
    // 마우스 드래그 동작중 Flag
    var dragging = false;

    // Box offset 위치값
    var offset = {x:0, y:0}; // Dictionary
    var currentBoxNode = null; // 현재 선택된 Box

    // 컨테이너 영역 Mouse Down
    container.onmousedown = function(e){
        if (e.target.classList.contains("box")) { // 현재 선택된 객체가 Box 인지 확인 (class="box")
            dragging = true;
            currentBoxNode = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    // 컨테이너 영역 Mouse Up
    container.onmouseup = function(e){
        dragging = false;
    };

    // 컨테이너 영역 Mouse Move - 객체의 디폴트 position 설정값을 css로 이동
    container.onmousemove = function(e){
        if (!dragging) return;

        // 이벤트 객체 위치정보 얻기
        // console.log("x : " + e.x + ", y : " + e.y); // 일반적으로 clientX,clientY 와 동일값
        // console.log("clientX : " + e.clientX + ", clientY : " + e.clientY);
        // console.log("pageX : " + e.pageX + ", pageY : " + e.pageY);
        // console.log("offsetX : " + e.offsetX + ", offsetY : " + e.y);

        // Box 객체 좌표 설정 (포지션 : absolute + pageX)(화면사이즈 or 스크롤시 정상 동작)
        // 객체의 디폴트 position 설정값을 css로 이동
        currentBoxNode.style.left = (e.pageX - offset.x) + "px";
        currentBoxNode.style.top = (e.pageY - offset.y) + "px";
    };
});

//Ex7-2 : 마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기 - Mouse Move/Down/Up + offsetX,offsetY
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section7_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    
    // 마우스 드래그 동작중 Flag
    var dragging = false;

    // Box offset 위치값
    var offset = {x:0, y:0}; // Dictionary

    // Box 영역 Mouse Down
    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };

    // 컨테이너 영역 Mouse Down
    container.onmousedown = function(e){
        if (e.target === box) { // 객체 타입 비교
            dragging = true;
        }
    };

    // 컨테이너 영역 Mouse Up
    container.onmouseup = function(e){
        dragging = false;
    };

    // 컨테이너 영역 Mouse Move - 객체의 디폴트 position 설정값을 css로 이동
    container.onmousemove = function(e){
        if (!dragging) return;

        // 이벤트 객체 위치정보 얻기
        // console.log("x : " + e.x + ", y : " + e.y); // 일반적으로 clientX,clientY 와 동일값
        // console.log("clientX : " + e.clientX + ", clientY : " + e.clientY);
        // console.log("pageX : " + e.pageX + ", pageY : " + e.pageY);
        // console.log("offsetX : " + e.offsetX + ", offsetY : " + e.y);

        // Box 객체 좌표 설정 (포지션 : absolute + pageX)(화면사이즈 or 스크롤시 정상 동작)
        // 객체의 디폴트 position 설정값을 css로 이동
        box.style.left = (e.pageX - offset.x) + "px";
        box.style.top = (e.pageY - offset.y) + "px";
    };
});

//Ex7-1 : 마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기 - Mouse Move
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section7_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    // 컨테이너 영역 Mouse Move - 객체의 디폴트 position 설정값을 css로 이동
    container.onmousemove = function(e){
        // 이벤트 객체 위치정보 얻기
        // console.log("x : " + e.x + ", y : " + e.y); // 일반적으로 clientX,clientY 와 동일값
        // console.log("clientX : " + e.clientX + ", clientY : " + e.clientY);
        // console.log("pageX : " + e.pageX + ", pageY : " + e.pageY);
        // console.log("offsetX : " + e.offsetX + ", offsetY : " + e.y);

        // Box 객체 좌표 설정 (포지션 : absolute + pageX)(화면사이즈 or 스크롤시 정상 동작)
        box.style.left = e.pageX+"px";
        box.style.top = e.pageY+"px";
    };
});

//Ex6-1 : 마우스 이벤트 객체 : 마우스 좌표
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section6_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    // 컨테이너 영역 클릭
    container.onclick = function(e){
        // 이벤트 객체 위치정보 얻기
        console.log("x : " + e.x + ", y : " + e.y); // 일반적으로 clientX,clientY 와 동일값
        console.log("clientX : " + e.clientX + ", clientY : " + e.clientY);
        console.log("pageX : " + e.pageX + ", pageY : " + e.pageY);
        console.log("offsetX : " + e.offsetX + ", offsetY : " + e.y);

        // Box 객체 좌표 설정 (포지션 : absolute + clientX)(화면사이즈 or 스크롤시 비정상 동작)
        // box.style.position = "absolute"; // 객체의 디폴트 position 설정값은 'static' 이고, 이것을 변경하지 않으면 위치이동은 안먹힘
        // box.style.left = e.clientX+"px";
        // box.style.top = e.clientY+"px";

        // Box 객체 좌표 설정 (포지션 : absolute + pageX)(화면사이즈 or 스크롤시 정상 동작)
        box.style.position = "absolute"; // 객체의 디폴트 position 설정값은 'static' 이고, 이것을 변경하지 않으면 위치이동은 안먹힘
        box.style.left = e.pageX+"px";
        box.style.top = e.pageY+"px";
    };
});

//Ex5-1 : 이벤트 트리거
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section5_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    // 파일선택 글자 클릭
    fileTriggerButton.onclick = function(){
        // 이벤트 생성 (IE에서 하는 방법)
        // var event = document.createEvent("MouseEvent");
        // event.initEvent("click", true, true); // eventType, bubbles, cancelable
        
        // 이벤트 생성 (신규 브라우저 기능, IE 안됨)
        var event = new MouseEvent("click", {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        
        // 1. 'fileTriggerButton' onclick 이벤트 발생
        // 2. 전달할 이벤트를 정의
        // 3. 'fileButton' 에게 이벤트를 전달 (Trigger 처럼 동작됨)
        fileButton.dispatchEvent(event);
    };
});

//Ex4-1 : 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section4_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var tbody = section.querySelector(".notice-list tbody"); // .notice-list 클래스 내부의 tbody 태그만 선택
    var recordList = section.querySelector(".record-list");

    // tbody 내에 자식들 중 클릭 이벤트 발생시 수행됨
    tbody.onclick = function(e){
        // 기본 행위 수행금지 (A태그=페이지리로딩, Input버튼=onclick)
        e.preventDefault();

        // 이벤트 대상 저장
        var target = e.target;

        // INPUT 버튼 + A 태그를 클릭했을때만 처리
        if (!((target.nodeName == "INPUT") || (target.nodeName == "A"))) return;

        // 버튼별 분기 로직
        if (target.classList.contains("sel-button")) 
        {
            // TR 노드 찾기 (부모 노드) - 클릭한 레코드 저장
            var tr = target.parentElement;
            for (; tr.nodeName != "TR"; tr=tr.parentElement);

            // 색 변경
            tr.style.background = "yellow";
        } 
        else if (target.classList.contains("edit-button")) 
        {
            // TR 노드 찾기 (부모 노드) - 클릭한 레코드 저장
            var tr = target.parentElement;
            for (; tr.nodeName != "TR"; tr=tr.parentElement);

            // 제목 변경
            var titleNode = tr.children[1].children[0];
            console.log("변경전 제목 : " + titleNode.textContent);
            titleNode.textContent = "제목 변경 클릭";
            console.log("변경후 제목 : " + titleNode.textContent);
        } 
        else if (target.classList.contains("del-button")) 
        {
            // TR 노드 찾기 (부모 노드) - 클릭한 레코드 저장
            var tr = target.parentElement;
            for (; tr.nodeName != "TR"; tr=tr.parentElement);

            // 클릭한 레코드 삭제
            tr.remove();
        }        

        console.log("event target nodeName : " + e.target.nodeName);
        console.log("event target value : " + e.target.value);
        console.log("currentContent : " + tr.textContent);
    };
});

// Ex3-1 : 이벤트 버블링 멈추기
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section3_1");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        console.log("event 발생 : imgList.onclick"); // 자식노드에서 이벤트 버블링 발생시, 부모도 이벤트 발생함 (원치않는 로직으로 중복 수행됨)

        // 이미지를 클릭했을때만 처리
        if (e.target.nodeName != "IMG") return;

        // 클릭한 이미지로 현재 이미지 교체
        currentImg.src = e.target.src;

        // console.log("event target : " + e.target.nodeName);
        // console.log("currentImg : " + currentImg.src);
        // console.log("event target nodeName : " + e.target.nodeName);
        // console.log("event target value : " + e.target.value);
    };

    // 이미지 추가 버튼 클릭 (이벤트 버블링 발생)
    addButton.onclick = function(e){
        console.log("event 발생 : addButton.onclick");

        // 이벤트 버블링 멈추기 (주석하고 주석풀고 차이점 확인)
        e.stopPropagation();

        // 추가할 이미지 Tag 엘리먼트 생성
        var img = document.createElement("img");
        img.src = "images/img1.jpg";

        // 현재 이미지의 다음자리에(afterend) 신규 이미지 추가
        currentImg.insertAdjacentElement("afterend", img);

        // console.log("event target nodeName : " + e.target.nodeName);
        // console.log("event target value : " + e.target.value);
    };
});

//Ex2-2 : 이벤트 버블링을 이용해 사용자 이벤트 처리하기 - event Bubbling (효율적인 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section2_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var recordList = section.querySelector(".record-list");

    // 삭제버튼 클릭 event 발생 (이벤트 버블링)
    recordList.onclick = function(e){
        // 삭제버튼을 클릭했을때만 처리
        if (!(e.target.nodeName == "INPUT" && e.target.value == "삭제")) return;

        // 클릭한 레코드 저장
        var tr = e.target.parentElement.parentElement;

        console.log("event target nodeName : " + e.target.nodeName);
        console.log("event target value : " + e.target.value);
        console.log("currentContent : " + tr.textContent);

        // 클릭한 레코드 삭제
        tr.remove();
    };
});

//Ex2-1 : 선택된 레코드 삭제하기 - event target (비효율적 방법, Function이 계속 만들어짐, 메모리 누수)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section2_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var delButtons = section.querySelectorAll(".del-button");

    for (var i=0; i < delButtons.length; i++) {
        // 삭제버튼 클릭 event 발생 (Function이 계속 만들어짐, 메모리 누수) (비효율적 방법)
        delButtons[i].onclick = function(e){
            // 클릭한 레코드 저장
            var tr = e.target.parentElement.parentElement;

            console.log("event target : " + e.target.nodeName);
            console.log("currentContent : " + tr.textContent);

            // 클릭한 레코드 삭제
            tr.remove();
        };
    };
});

//Ex1-3 : 이벤트 버블링을 이용해 사용자 이벤트 처리하기 - event Bubbling (효율적인 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section1_3");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    
     // 이미지 클릭 event 발생 (이미지 Parent Node 에 event 구현, 이벤트 버블링에 의해 이벤트 전달됨)
    imgList.onclick = function(e){
        // 이미지를 클릭했을때만 처리
        if (e.target.nodeName != "IMG") return;

        // 클릭한 이미지로 현재 이미지 교체
        currentImg.src = e.target.src;

        console.log("event target : " + e.target.nodeName);
        console.log("currentImg : " + currentImg.src);
    };
});

//Ex1-2 : 선택된 이미지 보여주기 - event target (비효율적 방법, Function이 계속 만들어짐, 메모리 누수)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section1_2");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
    for (var i=0; i < imgs.length; i++) {
        // 이미지 클릭 event 발생 (Function이 계속 만들어짐, 메모리 누수) (비효율적 방법)
        imgs[i].onclick = function(e){
            // 클릭한 이미지로 현재 이미지 교체
            currentImg.src = e.target.src;

            console.log("event target : " + e.target.nodeName);
            console.log("currentImg : " + currentImg.src);
        };
    };
});

//Ex1-1 : 선택된 이미지 보여주기 - event target (비효율적 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section1_1");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
    // 1번째 이미지 클릭 event 발생
    imgs[0].onclick = function(e){
        // 클릭한 이미지로 현재 이미지 교체
        currentImg.src = e.target.src;

        console.log("event target : " + e.target.nodeName);
        console.log("currentImg : " + currentImg.src);
    };

    // 2번째 이미지 클릭 event 발생
    imgs[1].onclick = function(e){
        // 클릭한 이미지로 현재 이미지 교체
        currentImg.src = e.target.src;

        console.log("event target : " + e.target.nodeName);
        console.log("currentImg : " + currentImg.src);
    };
    
    // 3번째 이미지 클릭 event 발생
    imgs[2].onclick = function(e){
        // 클릭한 이미지로 현재 이미지 교체
        currentImg.src = e.target.src;

        console.log("event target : " + e.target.nodeName);
        console.log("currentImg : " + currentImg.src);
    };
});