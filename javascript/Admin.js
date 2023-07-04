document = document.getElementsByClassName("contact-right").addEventListener("submit", submitFun1);

var studentDataArr =JSON.parse(localStorage.getItem("info"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var Name = document.querySelector("#name").value;
    var Email = document.querySelector("#email").value;
    var Comments = document.querySelector("#subject").value;
    var Message = document.querySelector("#msg").value;

    var studentObj = {
        name: name,
        number: number,
        city: city,
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("StudentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr)
}