var ttsv_default = {
    studentFullName: "Hà Vĩnh Phước",
    studentMSSV: "20215455",
    studentYear: "2021",
    studentDegree: "Đại học đại trà",
    studentMajor: "Khoa học máy tính",
    studentFaculty: "Trường Công nghệ thông tin và Truyền thông",
    studentStatus: "Học",
    studentSex: "Nam",
    studentClassStudent: "IT1-02",
    studentCourse: "66",
    studentEmail: "Phuoc.HV215455@sis.hust.edu.vn",
    srcImage: "./Contents/Images/person.png"
}

var ttsv_new = {
    studentFullName: "Hà Vĩnh Phước",
    studentMSSV: "20215455",
    studentYear: "2021",
    studentDegree: "Đại học đại trà",
    studentMajor: "Khoa học máy tính",
    studentFaculty: "Trường Công nghệ thông tin và Truyền thông",
    studentStatus: "Học",
    studentSex: "Nam",
    studentClassStudent: "IT1-02",
    studentCourse: "66",
    studentEmail: "Phuoc.HV215455@sis.hust.edu.vn",
    srcImage: "./Contents/Images/person.png"
}

function createBG() {
    document.getElementById("mssv").innerHTML = ttsv_new["studentMSSV"];
    document.getElementById("fullName").innerHTML = ttsv_new["studentFullName"];
    document.getElementById("year").innerHTML = ttsv_new["studentYear"];
    document.getElementById("degree").innerHTML = ttsv_new["studentDegree"];
    document.getElementById("major").innerHTML = ttsv_new["studentMajor"];
    document.getElementById("faculty").innerHTML = ttsv_new["studentFaculty"];
    document.getElementById("status").innerHTML = ttsv_new["studentStatus"];
    document.getElementById("sex").innerHTML = ttsv_new["studentSex"];
    document.getElementById("classStudent").innerHTML = ttsv_new["studentClassStudent"];
    document.getElementById("course").innerHTML = ttsv_new["studentCourse"];
    document.getElementById("email").innerHTML = ttsv_new["studentEmail"];
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttsv_new["srcImage"];
}
createBG();

var srcImage_new = ttsv_new.srcImage;
function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        var imagePreview = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage");

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            srcImage_new = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

document.getElementById("fileInput").addEventListener('change', function () {
    chooseFile(this)
});


function editInfor() {
    edit_btn.style.display = 'none';
    button.style.display = 'block';
    fileInput.style.display = 'block';

    document.getElementById("fileInput").value = "";
    srcImage_new = ttsv_new.srcImage;
    document.getElementById("mssv").innerHTML = `<input type="text" id="MSSV" name="MSSV" value="${ttsv_new.studentMSSV}" />`;
    document.getElementById("fullName").innerHTML = `<input type="text" id="FullName" name="FullName" value="${ttsv_new.studentFullName}" />`;
    document.getElementById("year").innerHTML = `<input type="text" id="Year" name="Year" value="${ttsv_new.studentYear}" />`;
    document.getElementById("degree").innerHTML = `<input type="text" id="Degree" name="Degree" value="${ttsv_new.studentDegree}" />`;
    document.getElementById("major").innerHTML = `<input type="text" id="Major" name="Major" value="${ttsv_new.studentMajor}" />`;
    document.getElementById("faculty").innerHTML = `<input type="text" id="Faculty" name="Faculty" value="${ttsv_new.studentFaculty}" />`;
    document.getElementById("status").innerHTML =
        `<select id="Status" name="Status">
        <option value="Học">Học</option>
        <option value="Đã thôi học">Đã thôi học</option>
        </select>`;
    document.querySelector(`option[value="${ttsv_new.studentStatus}"]`).selected = true;
    document.getElementById("sex").innerHTML =
        `<select id="Sex" name="Sex">
    <option value="Nam">Nam</option>
    <option value="Nữ">Nữ</option>
    <option value="Khác">Khác</option> +
    </select>`;
    document.querySelector(`option[value="${ttsv_new.studentSex}"]`).selected = true;
    document.getElementById("classStudent").innerHTML = `<input type="text" id="ClassStudent" name="ClassStudent" value="${ttsv_new.studentClassStudent}" />`;
    document.getElementById("course").innerHTML = `<input type="text" id="Course" name="Course" value="${ttsv_new.studentCourse}" />`;
    document.getElementById("email").innerHTML = `<input type="text" id="Email" name="Email" value="${ttsv_new.studentEmail}" />`;

}

function save() {
    ttsv_new.studentMSSV = document.getElementById("MSSV").value;
    ttsv_new.studentFullName = document.getElementById("FullName").value;
    ttsv_new.studentYear = document.getElementById("Year").value;
    ttsv_new.studentDegree = document.getElementById("Degree").value;
    ttsv_new.studentMajor = document.getElementById("Major").value;
    ttsv_new.studentFaculty = document.getElementById("Faculty").value;
    ttsv_new.studentStatus = document.getElementById("Status").value;
    ttsv_new.studentSex = document.getElementById("Sex").value;
    ttsv_new.studentClassStudent = document.getElementById("ClassStudent").value;
    ttsv_new.studentCourse = document.getElementById("Course").value;
    ttsv_new.studentEmail = document.getElementById("Email").value;
    ttsv_new.srcImage = srcImage_new;

    button.style.display = 'none';
    edit_btn.style.display = 'block';
    fileInput.style.display = 'none';
    createBG();
    console.log(ttsv_new);
}


function reset() {
    Object.assign(ttsv_new, ttsv_default);

    document.getElementById("mssv").innerHTML = ttsv_default["studentMSSV"];
    document.getElementById("fullName").innerHTML = ttsv_default["studentFullName"];
    document.getElementById("year").innerHTML = ttsv_default["studentYear"];
    document.getElementById("degree").innerHTML = ttsv_default["studentDegree"];
    document.getElementById("major").innerHTML = ttsv_default["studentMajor"];
    document.getElementById("faculty").innerHTML = ttsv_default["studentFaculty"];
    document.getElementById("status").innerHTML = ttsv_default["studentStatus"];
    document.getElementById("sex").innerHTML = ttsv_default["studentSex"];
    document.getElementById("classStudent").innerHTML = ttsv_default["studentClassStudent"];
    document.getElementById("course").innerHTML = ttsv_default["studentCourse"];
    document.getElementById("email").innerHTML = ttsv_default["studentEmail"];
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttsv_default["srcImage"];

    button.style.display = 'none';
    edit_btn.style.display = 'block';
    fileInput.style.display = 'none';
    console.log(ttsv_default);
}

function cancelEditInfor() {
    createBG();
    button.style.display = 'none';
    edit_btn.style.display = 'block';
    fileInput.style.display = 'none';
    console.log(ttsv_new);
}
