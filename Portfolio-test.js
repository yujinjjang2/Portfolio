// 변수 선언
let nameFlag = false;
let mailFlag = false;

// Contact Me : Name
document.getElementById("form-name").addEventListener("keyup", function() {

    // span-name 객체 가져오기
    const spanName = document.getElementById("span-name");

    // 한글 2자이상 5자이하 정규표현식
    const regExp = /^[가-힣]{2,5}$/;

    // 값이 없을 경우
    if(this.value == 0) {
        spanName.innerText = "";
        return;
    }

    // 유효성 검사
    if(regExp.test(this.value)) {
        // 값이 유효할 경우
        spanName.innerText = "유효한 형식의 이름입니다.";
        spanName.style.color = "green";
        spanName.style.fontWeight = "bold";
        nameFlag = true;
    } else {
        // 값이 유효하지 않을 경우
        spanName.innerText = "유효하지 않은 형식의 이름입니다.";
        spanName.style.color = "red";
        spanName.style.fontWeight = "bold";
        nameFlag = false;
    }
});

// Contact Me : Email
document.getElementById("form-email").addEventListener("keyup", function() {

    // span-email 객체 가져오기
    const spanEmail = document.getElementById("span-email");

    // 이메일 정규표현식
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    // 값이 없을 경우
    if(this.value == 0) {
        spanEmail.innerText = "";
        return;
    }

    // 유효성 검사
    if(regExp.test(this.value)) {
        // 값이 유효할 경우
        spanEmail.innerText = "유효한 형식의 이메일입니다.";
        spanEmail.style.color = "green";
        spanEmail.style.fontWeight = "bold";
        mailFlag = true;
    } else {
        // 값이 유효하지 않을 경우
        spanEmail.innerText = "유효하지 않은 형식의 이메일입니다.";
        spanEmail.style.color = "red";
        spanEmail.style.fontWeight = "bold";
        mailFlag = false;
    }
});

// Contact Me : Send Button
document.getElementById("send-btn").addEventListener("click", function(event){

    // form-name, form-email 객체 가져오기
    const formName = document.getElementById("form-name");
    const formEmail = document.getElementById("form-email");

    // 이름 NULL 체크 및 유효성 확인
    if(isNull(formName.value)) {
        alert("이름을 입력해주세요.");
        event.preventDefault();
        return;
    } else {
        if(nameFlag == false) {
            alert("유효한 형식의 이름을 입력해주세요.");
            event.preventDefault();
            return;
        }
    }

    // 이메일 NULL 체크 및 유효성 확인
    if(isNull(formEmail.value)) {
        alert("이메일을 입력해주세요.");
        event.preventDefault();
        return;
    } else {
        if(mailFlag == false) {
            alert("유효한 형식의 이메일을 입력해주세요.");
            event.preventDefault();
            return;
        }
    }
});

// NULL 체크 함수
function isNull(str) {
    if(str == "null" || str == "" || str == undefined) {
        return true;
    } else {
        return false;
    }
}

// 다크모드 변경
document.getElementById("color-mode").addEventListener("click", function() {

    // big-section 객체 가져오기
    const bigSection = document.getElementById("big-section");

    // big-section 배경색
    const bgColor = bigSection.style.backgroundColor;

    // 다크모드 변경
    if(bgColor == "white" || isNull(bgColor)) {
        bigSection.style.backgroundColor = "black";
        bigSection.style.color = "yellow";
    } else {
        bigSection.style.backgroundColor = "white";
        bigSection.style.color = "black";
    }
});