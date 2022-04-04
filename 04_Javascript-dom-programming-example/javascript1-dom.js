//Ex6-4 : 노드조작 - 메뉴추가(createTextNode, Element) - HTML 태그 Node 추가/삭제 (약간 개선된 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section6_4");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var titleInput = section.querySelector(".title-input"); 
    var menuListUl = section.querySelector(".menu-list"); 
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    // 노드 추가 (약간 개선된 방법)
    addButton.onclick = function(){
        var title = titleInput.value; // 입력값 가져오기
        var html = '<a href="">' + title + '</a>'; // 입력값으로 a Node 생성 (HTML 태그)
        var liNode = document.createElement("li"); // <li></li> 엘리먼트 노드 생성
        liNode.innerHTML = html; // 지정된 노드의 child로 노드 붙이기 (HTML을 직접 대입)
        
        //menuListUl.appendChild(liNode);       // 지정된 노드의 child로 노드 붙이기
        menuListUl.append(liNode); // (향상된 기능) 지정된 노드의 child로 노드 붙이기

        console.log("생성 txtNode : " + html);
        console.log("--------------------");

        console.log("titleInput : " + titleInput.value);
        console.log("menuListUl : " + menuListUl);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };

    // 노드 삭제 (약간 개선된 방법)
    delButton.onclick = function(){
        //var txtNode = menuListUl.childNodes[0]; // TextNode 가져오기 (전체노드 대상으로 순회, 공백노드 포함)
        var liNode = menuListUl.children[0]; // ListNode 가져오기 (엘리먼트만 순회)
        
        console.log("삭제 txtNode : " + liNode.children[0].textContent);
        console.log("--------------------");
        //menuListUl.removeChild(liNode);         // 지정된 노드의 child 중에서 해당 노드 삭제
        menuListUl.remove(liNode); // (향상된 기능) 지정된 노드의 child 중에서 해당 노드 삭제

        console.log("titleInput : " + titleInput.value);
        console.log("menuListUl : " + menuListUl);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };
});

//Ex6-3 : 노드조작 - 메뉴추가(createTextNode, Element) - HTML 태그 Node 추가/삭제 (비권장 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section6_3");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var titleInput = section.querySelector(".title-input"); 
    var menuListUl = section.querySelector(".menu-list"); 
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    // 노드 추가 (비권장 방법)
    addButton.onclick = function(){
        var title = titleInput.value; // 입력값 가져오기
        var txtNode = '<li><a href="">' + title + '</a></li>'; // 입력값으로 List Node 생성 (HTML 태그)

        //menuListUl.innerHTML = txtNode;// (대체)   지정된 노드의 child로 노드 붙이기 (HTML을 직접 대입)
        menuListUl.innerHTML += txtNode; // (Append) 지정된 노드의 child로 노드 붙이기 (HTML을 직접 대입)

        console.log("생성 txtNode : " + txtNode);
        console.log("--------------------");

        console.log("titleInput : " + titleInput.value);
        console.log("menuListUl : " + menuListUl);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };

    // 노드 삭제 (비권장 방법)
    delButton.onclick = function(){
        //var txtNode = menuListUl.childNodes[0]; // TextNode 가져오기 (전체노드 대상으로 순회, 공백노드 포함)
        var liNode = menuListUl.children[0]; // ListNode 가져오기 (엘리먼트만 순회)
        
        console.log("삭제 txtNode : " + liNode.children[0].textContent);
        console.log("--------------------");
        menuListUl.removeChild(liNode); // 지정된 노드의 child 중에서 해당 노드 삭제

        console.log("titleInput : " + titleInput.value);
        console.log("menuListUl : " + menuListUl);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };
});

//Ex6-2 : 노드조작 - 메뉴추가(createTextNode, Element) - 노가다성 태그 Node 추가/삭제 (비권장 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section6_2");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var titleInput = section.querySelector(".title-input"); 
    var menuListUl = section.querySelector(".menu-list"); 
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    // 노드 추가 (비권장 방법)
    addButton.onclick = function(){
        var title = titleInput.value; // 입력값 가져오기
        var txtNode = document.createTextNode(title); // 입력값으로 TextNode 생성
        
        var aNode = document.createElement("a"); // <a></a> 엘리먼트 노드 생성
        aNode.href=""; // 속성추가 -> <a href=""></a>
        aNode.appendChild(txtNode); // '<a>' 노드 밑에 위에서 생성한 Text 노드를 붙임
        
        var liNode = document.createElement("li"); // <li></li> 엘리먼트 노드 생성
        liNode.appendChild(aNode); // '<li>' 노드 밑에 '<a>' 노드를 붙임
        
        menuListUl.appendChild(liNode); // 지정된 노드의 child로 노드 붙이기


        console.log("생성 txtNode : " + txtNode.textContent);
        console.log("--------------------");
        
        console.log("titleInput : " + titleInput.value);
        console.log("menuListUl : " + menuListUl);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };

    // 노드 삭제 (공백노드도 삭제대상) (비권장 방법)
    delButton.onclick = function(){
        var txtNode = menuListUl.childNodes[0]; // TextNode 가져오기
        menuListUl.removeChild(txtNode); // 지정된 노드의 child 중에서 해당 노드 삭제
        
        console.log("삭제 txtNode : " + txtNode.textContent);
        console.log("--------------------");

        console.log("titleInput : " + titleInput.value);
        console.log("menuListUl : " + menuListUl);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };
});

//Ex6-1 : 노드조작 - 메뉴추가(createTextNode, Element) - 단순 TextNode 추가/삭제 (비정상적인 방법)
window.addEventListener("load", function(){

    // 문서 전체범위에서 id 속성값으로 엘리먼트 찾기 (id는 html 문서 전체에서 unique 해야함)
    var section = document.querySelector("#section6_1");
    
    // 지정범위의 엘리먼트 내의 class 이름으로 엘리먼트 찾기 (querySelector 는 .으로 시작하면 class | #으로 시작하면 id | 기본값은 Tag)
    var titleInput = section.querySelector(".title-input"); 
    var menuListDiv = section.querySelector(".menu-list"); 
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    // 노드 추가 (비정상적인 방법)
    addButton.onclick = function(){
        var title = titleInput.value; // 입력값 가져오기
        var txtNode = document.createTextNode(title); // 입력값으로 TextNode 생성
        menuListDiv.appendChild(txtNode); // 지정된 노드의 child로 노드 붙이기

        console.log("생성 txtNode : " + txtNode.textContent);
        console.log("--------------------");

        console.log("titleInput : " + titleInput.value);
        console.log("menuListDiv : " + menuListDiv);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };

    // 노드 삭제 (공백노드도 삭제대상) (비정상적인 방법)
    delButton.onclick = function(){
        var txtNode = menuListDiv.childNodes[0]; // TextNode 가져오기
        menuListDiv.removeChild(txtNode); // 지정된 노드의 child 중에서 해당 노드 삭제
        
        console.log("삭제 txtNode : " + txtNode.textContent);
        console.log("--------------------");

        console.log("titleInput : " + titleInput.value);
        console.log("menuListDiv : " + menuListDiv);
        console.log("addButton : " + addButton.value);
        console.log("delButton : " + delButton.value);
    };
});

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