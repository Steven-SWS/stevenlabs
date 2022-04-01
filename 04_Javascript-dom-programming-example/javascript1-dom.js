//Ex5-4 : 엘리먼트 노드의 속성 & CSS 속성 변경 - 스타일 속성 변경 (테두리 색깔 변경)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section5_4");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    // 이미지 선택 변경 + 스타일 속성 변경 (테두리 색깔 변경)
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;

        // CSS 스타일 변경에는 방법이 2가지 있음
        img.style["border-color"] = colorInput.value; // Case-1. key값을 이용한 접근
        img.style.borderColor = colorInput.value; // Case-2. 속성값을 이용한 접근 (낙타 표기)
        
        // class 속성 접근시에는 'className' 으로 접근
        console.log("img 엘리먼트의 class 속성 : " + img.className);
        console.log("--------------------");

        console.log("srcInput : " + srcInput.value);
        console.log("changeButton : " + changeButton.value);
        console.log("img : " + img.src);
        console.log("colorInput : " + colorInput.value);
    };
});

//Ex5-3 : 엘리먼트 노드의 속성 & CSS 속성 변경 - 이미지 선택 변경 (선택옵션 입력받기 - datalist/option) (html5 신규)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section5_3");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    // 이미지 선택 변경 (선택옵션 입력받기 - datalist/option)
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;

        console.log("srcInput : " + srcInput.value);
        console.log("changeButton : " + changeButton.value);
        console.log("img : " + img.src);
    };
});

//Ex5-2 : 엘리먼트 노드의 속성 & CSS 속성 변경 - 이미지 선택 변경 (선택옵션 입력받기 - select/option)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section5_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-list");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    // 이미지 선택 변경 (선택옵션 입력받기 - select/option)
    changeButton.onclick = function(){
        img.src = "images/" + imgSelect.value;

        console.log("srcInput : " + srcInput.value);
        console.log("imgSelect : " + imgSelect.value);
        console.log("changeButton : " + changeButton.value);
        console.log("img : " + img.src);
    };
});

//Ex5-1 : 엘리먼트 노드의 속성 & CSS 속성 변경 - 단순 이미지 변경 (파일명 입력받기)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section5_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    // 단순 이미지 변경 (파일명 입력받기)
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;

        console.log("srcInput : " + srcInput.value);
        console.log("changeButton : " + changeButton.value);
        console.log("img : " + img.src);
    };
});

//Ex4-2 : 엘리먼트 찾기 시 children() 을 이용한 노드 선택 (일반적인 상황에 사용)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section4 = document.querySelector("#section4_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var box = section4.querySelector(".box");
    
    // 지정범위의 엘리먼트 내의 'input' 태그에서 'name' 속성값이 특정 keyword 인 엘리먼트 찾기
    var btnOK = section4.querySelector("input[name='btn-ok']");

    // children 은 태그 엘리먼트 노드만 순회
    var input1 = box.children[0];
    var input2 = box.children[1];
    var input3 = box.children[2];

    // children() 결과 출력
    btnOK.onclick = function(){
        input1.value = "children()-1번";
        input2.value = "children()-2번";
        //input3.value = input3;

        console.log("input1 : " + input1.value);
        console.log("input2 : " + input2.value);
        console.log("input3 : " + input3.value);
    };
});

//Ex4-1 : 엘리먼트 찾기 시 childeNodes() 를 이용한 노드 선택 (특수한 상황에 사용)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section4 = document.querySelector("#section4_1");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var box = section4.querySelector(".box");

    // 지정범위의 엘리먼트 내의 'input' 태그에서 'name' 속성값이 특정 keyword 인 엘리먼트 찾기
    var btnOK = section4.querySelector("input[name='btn-ok']");

    // childNodes 은 모든 엘리먼트 순회 (태그 엘리먼트 노드 + 속성 노드 + 텍스트 노드 + 주석 노드)
    var input1 = box.childNodes[0];
    var input2 = box.childNodes[1];    
    var input3 = box.childNodes[2];

    // childNodes() 결과 출력 (html 한줄로 수정하면 결과 잘나옴)
    btnOK.onclick = function(){
        input1.value = "childNodes()-1번";
        input2.value = "childNodes()-2번";
        //input3.value = input3;

        console.log("input1 : " + input1.value);
        console.log("input2 : " + input2.value);
        console.log("input3 : " + input3.value);
    };    
});

//Ex3-2 : Selectors API Level(1) - 1.getElementById() -> 2.querySelector() - Tag 내의 속성값으로 Element 찾기 (CSS Selector 문법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section3 = document.getElementById("section3_2");

    // 지정범위의 엘리먼트 내의 'input' 태그에서 'name' 속성값이 특정 keyword 인 엘리먼트 찾기
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector("input[name='y']");
    var btnAdd = section3.querySelector("input[name='btn-add']");
    var txtSum = section3.querySelector("input[name='sum']");

    // 입력받은 값 더하기 (x + y)
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

        console.log("txtX : " + txtX.value);
        console.log("txtY : " + txtY.value);
        console.log("btnAdd : " + btnAdd.value);
        console.log("txtSum : " + txtSum.value);
    };
});

//Ex3-1 : Selectors API Level(1) - 1.getElementById() -> 2.querySelector() - Tag 내의 class 이름으로 Element 찾기
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section3 = document.getElementById("section3_1");

    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (.으로 시작하면 class | .이 없으면 Tag | #으로 시작하면 id | .앞에는 * 이 생략됨)
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    // 입력받은 값 더하기 (x + y)
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

        console.log("txtX : " + txtX.value);
        console.log("txtY : " + txtY.value);
        console.log("btnAdd : " + btnAdd.value);
        console.log("txtSum : " + txtSum.value);
    };
});

//Ex2-2 : Element 선택방법 개선하기 - 1.getElementById() -> 2.getElementsByClassName()
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section2 = document.getElementById("section2_2");

    // 지정범위의 엘리먼트 내의 class 이름으로 Element 찾기
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    // 입력받은 값 더하기 (x + y)
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

        console.log("txtX : " + txtX.value);
        console.log("txtY : " + txtY.value);
        console.log("btnAdd : " + btnAdd.value);
        console.log("txtSum : " + txtSum.value);
    };
});

//Ex2-1 : Element 선택방법 개선하기 - 1.getElementById() -> 2.getElementsByTagName()
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section2 = document.getElementById("section2_1");

    // 지정범위의 엘리먼트 내의 Tag 이름으로 엘리먼트 찾기 (배열로 리턴)
    var inputs = section2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];

    // 입력받은 값 더하기 (x + y)
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

        console.log("txtX : " + txtX.value);
        console.log("txtY : " + txtY.value);
        console.log("btnAdd : " + btnAdd.value);
        console.log("txtSum : " + txtSum.value);
    };
});

//Ex1 : getElementById() 테스트
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");
   
    // 입력받은 값 더하기 (x + y)
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

        console.log("txtX : " + txtX.value);
        console.log("txtY : " + txtY.value);
        console.log("btnAdd : " + btnAdd.value);
        console.log("txtSum : " + txtSum.value);
    };
});