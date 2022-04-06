// Ex3-1 : 이벤트 버블링 멈추기
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section3_1");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        console.log("event target nodeName : " + e.target.nodeName);
        console.log("event target value : " + e.target.value);
        console.log("currentContent : " + currentImg.textContent);
    };

    addButton.onclick = function(e){
        console.log("event target nodeName : " + e.target.nodeName);
        console.log("event target value : " + e.target.value);
        console.log("currentContent : " + currentImg.textContent);
    };
});


//Ex2-2 : 이벤트 버블링을 이용해 사용자 이벤트 처리하기 - event Bubbling (효율적인 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section2_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var recordList = section.querySelector(".record-list");

    // 삭제버튼 클릭 event 발생 (Function이 계속 만들어짐, 메모리 누수) (비효율적 방법)
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