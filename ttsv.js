

// const ttsv_new = {
//     studentHoTen: "Tô Thái Linh",
//     studentEmail: "linh.tt215414@sis.hust.edu.vn",
//     studentKhoa: "Trường Công nghệ thông tin và Truyền thông",
//     studentMSSV: '20215414',
//     studentKhoaHoc: '66',
//     studentLop: "Khoa học máy tính 02",
//     studentGioiTinh: 'Nam',
//     studentNamVaoTruong: "2021",
//     studentTinhTrangHocTap: "Học",
//     studentChuongTrinh: "Khoa học Máy tính 2021",
//     studentBacDaoTao: "Đại học đại trà",
//     srcImage: "./Contents/Images/person.png"
// }



// function createBG() {
//     document.getElementById("HoTen").innerHTML = ttsv_new["studentHoTen"];
//     document.getElementById("MSSV").innerHTML = ttsv_new["studentMSSV"];
//     document.getElementById("NamVaoTruong").innerHTML = ttsv_new["studentNamVaoTruong"];
//     document.getElementById("BacDaoTao").innerHTML = ttsv_new["studentBacDaoTao"];
//     document.getElementById("ChuongTrinh").innerHTML = ttsv_new["studentChuongTrinh"];
//     document.getElementById("Khoa").innerHTML = ttsv_new["studentKhoa"];
//     document.getElementById("TinhTrangHocTap").innerHTML = ttsv_new["studentTinhTrangHocTap"];
//     document.getElementById("GioiTinh").innerHTML = ttsv_new["studentGioiTinh"];
//     document.getElementById("Lop").innerHTML = ttsv_new["studentLop"];
//     document.getElementById("KhoaHoc").innerHTML = ttsv_new["studentKhoaHoc"];
//     document.getElementById("Email").innerHTML = ttsv_new["studentEmail"];
//     document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttsv_new["srcImage"];
// }
// createBG();

// var srcImage_new;
// function chooseFile(fileInput) {
//     if (fileInput.files && fileInput.files[0]) {
//         var reader = new FileReader();
//         var imagePre = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage");

//         reader.onload = function (e) {
//             imagePre.src = e.target.result;
//             srcImage_new = e.target.result;
//         }
//         reader.readAsDataURL(fileInput.files[0]);
//     }
// }

// document.getElementById("myImage").addEventListener('change', function () {
//     chooseFile(this)
// });


/

function editInfor() {
    document.getElementById("edit").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function cancelEditInfor() {
    document.getElementById("edit").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function checkRequiredFields() {
    let requiredInputs = document.querySelectorAll("input[required], select[required]");
    for (let i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i].value === "") {
            alert("Hãy nhập đầy đủ tất cả thông tin");
            requiredInputs[i].focus();
            return false;
        }
    }
    return true;
}

function save() {
    if (!checkRequiredFields()) {
        return;
    }

    let studentInfo = {
        Image: document.getElementById("editImage").files[0],
        MSSV: document.getElementById("editMSSV").value,
        FullName: document.getElementById("editFullName").value,
        Year: document.getElementById("editYear").value,
        Degree: document.getElementById("editDegree").value,
        Major: document.getElementById("editMajor").value,
        Faculty: document.getElementById("editFaculty").value,
        Status: document.getElementById("editStatus").value,
        Sex: document.getElementById("editSex").value,
        ClassStudent: document.getElementById("editClassStudent").value,
        Course: document.getElementById("editCourse").value,
        Email: document.getElementById("editEail").value,

    };
    // document.getElementById("edit").style.display = "none";
    // document.getElementById("main").style.display = "block";
}

const ttsv_default = {
    studentHoTen: "Hà Vĩnh Phước",
    studentEmail: "Phuoc.HV215455@sis.hust.edu.vn",
    studentKhoa: "Trường Công nghệ thông tin và Truyền thông",
    studentMSSV: '20215455',
    studentKhoaHoc: '66',
    studentLop: "Khoa học máy tính 02",
    studentGioiTinh: 'Nam',
    studentNamVaoTruong: "2021",
    studentTinhTrangHocTap: "Học",
    studentChuongTrinh: "Khoa học Máy tính 2021",
    studentBacDaoTao: "Đại học đại trà",
    srcImage: "./Contents/Images/person.png"
}

function createBG() {
    document.getElementById("HoTen").innerHTML = ttsv_new["studentHoTen"];
    document.getElementById("MSSV").innerHTML = ttsv_new["studentMSSV"];
    document.getElementById("NamVaoTruong").innerHTML = ttsv_new["studentNamVaoTruong"];
    document.getElementById("BacDaoTao").innerHTML = ttsv_new["studentBacDaoTao"];
    document.getElementById("ChuongTrinh").innerHTML = ttsv_new["studentChuongTrinh"];
    document.getElementById("Khoa").innerHTML = ttsv_new["studentKhoa"];
    document.getElementById("TinhTrangHocTap").innerHTML = ttsv_new["studentTinhTrangHocTap"];
    document.getElementById("GioiTinh").innerHTML = ttsv_new["studentGioiTinh"];
    document.getElementById("Lop").innerHTML = ttsv_new["studentLop"];
    document.getElementById("KhoaHoc").innerHTML = ttsv_new["studentKhoaHoc"];
    document.getElementById("Email").innerHTML = ttsv_new["studentEmail"];
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttsv_new["srcImage"];
}
createBG();


var srcImage_new;
function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        var imagePre = document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage");

        reader.onload = function (e) {
            imagePre.src = e.target.result;
            srcImage_new = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

document.getElementById("myImage").addEventListener('change', function () {
    chooseFile(this)
});


function edit() {
    addButton.style.display = 'block';
    myImage.style.display = 'block';

    document.getElementById("HoTen").innerHTML = `<input type="text" id="editName" name="editName" value="${ttsv_new.studentHoTen}" />`;
    document.getElementById("NamVaoTruong").innerHTML = `<input type="text" id="editNamVaoTruong" name="editNamVaoTruong" value="${ttsv_new.studentNamVaoTruong}" />`;
    document.getElementById("BacDaoTao").innerHTML =
        '<select id="editBacDaoTao" name="editBacDaoTao">' +
        '<option value="Đào tạo đại trà">Đào tạo đại trà</option>' +
        '<option value="Chương trình tiên tiến">Chương trình tiên tiến</option>' +
        '<option value="Chương trình tài năng">Chương trình tài năng</option>' +
        '<option value="Khác">Khác</option>' +
        '</select>';
    document.getElementById("ChuongTrinh").innerHTML = `<input type="text" id="editChuongTrinh" name="editChuongTrinh" value="${ttsv_new.studentChuongTrinh}" />`;
    document.getElementById("Khoa").innerHTML =
        '<select id="editKhoa">' +
        '<option value="Trường Công nghệ Thông tin và Truyền Thông">Trường Công nghệ Thông tin và Truyền thông</option>' +
        '<option value="Trường Cơ khí" >Trường Cơ khí</option>' +
        '<option value="Trường Điện - Điện tử" >Trường Điện - Điện tử</option>' +
        '<option value="Trường Hóa và Khoa học sự sống">Trường Hoá và Khoa học sự sống</option>' +
        '<option value="Trường Vật Liệu">Trường Vật liệu</option>' +
        '<option value="Khoa Toán - Tin" >Khoa Toán - Tin</option>' +
        '<option value="Khoa vật lý Kỹ thuật" >Khoa Vật lý Kỹ thuật</option>' +
        '<option value="Viện kinh tế và Quản lý" >Viện Kinh tế và Quản lý</option>' +
        '<option value="Khoa Ngoại ngữ" >Khoa Ngoại ngữ</option>' +
        '<option value="Khoa Khoa học và Công nghệ Giáo dục" >Khoa Khoa học và Công nghệ Giáo dục</option>' +
        '</select>';
    document.getElementById("TinhTrangHocTap").innerHTML =
        `<select id="editTinhTrangHocTap" name="editTinhTrangHocTap">
        <option value="Học">Học</option>
        <option value="Thôi học">Thôi học</option>
        <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
        </select>`;
    document.getElementById("GioiTinh").innerHTML =
        `<form style="font-weight: normal !important;">
        <input type="radio" id="nam" name="gioi_tinh" value="Nam" checked>
        <label for="nam">Name</label>
        <input type="radio" id="nu" name="gioi_tinh" value="Nữ">
        <label for="nu">Nữ</label>
        <input type="radio" id="khac" name="gioi_tinh" value="Khác">
        <label for="khac">Khác</label>
        </form>`
    document.getElementById("Lop").innerHTML = `<input type="text" id="editLop" name="editLop" value="${ttsv_new.studentLop}" />`;
    document.getElementById("KhoaHoc").innerHTML = `<input type="text" id="editKhoaHoc" name="editKhoaHoc" value="${ttsv_new.studentKhoaHoc}" />`;
    document.getElementById("Email").innerHTML = `<input type="text" id="editEmail" name="editEmail" value="${ttsv_new.studentEmail}" />`;

    function OK() {
        ttsv_new.studentHoTen = document.getElementById("editName").value;
        ttsv_new.studentNamVaoTruong = document.getElementById("editNamVaoTruong").value;
        ttsv_new.studentBacDaoTao = document.getElementById("editBacDaoTao").value;
        ttsv_new.studentChuongTrinh = document.getElementById("editChuongTrinh").value;
        ttsv_new.studentKhoa = document.getElementById("editKhoa").value;
        ttsv_new.studentTinhTrangHocTap = document.getElementById("editTinhTrangHocTap").value;
        ttsv_new.studentLop = document.getElementById("editLop").value;
        ttsv_new.studentKhoaHoc = document.getElementById("editKhoaHoc").value;
        ttsv_new.studentEmail = document.getElementById("editEmail").value;
        ttsv_new.srcImage = srcImage_new;

        let selecter = document.querySelector("input[name='gioi_tinh']:checked").value;
        ttsv_new.studentGioiTinh = selecter;

        addButton.style.display = 'none';
        myImage.style.display = 'none';
        createBG();
        console.log(ttsv_new);
    }


    function reset() {
        Object.assign(ttsv_new, ttsv_default);

        document.getElementById("HoTen").innerHTML = ttsv_default["studentHoTen"];
        document.getElementById("MSSV").innerHTML = ttsv_default["studentMSSV"];
        document.getElementById("NamVaoTruong").innerHTML = ttsv_default["studentNamVaoTruong"];
        document.getElementById("BacDaoTao").innerHTML = ttsv_default["studentBacDaoTao"];
        document.getElementById("ChuongTrinh").innerHTML = ttsv_default["studentChuongTrinh"];
        document.getElementById("Khoa").innerHTML = ttsv_default["studentKhoa"];
        document.getElementById("TinhTrangHocTap").innerHTML = ttsv_default["studentTinhTrangHocTap"];
        document.getElementById("GioiTinh").innerHTML = ttsv_default["studentGioiTinh"];
        document.getElementById("Lop").innerHTML = ttsv_default["studentLop"];
        document.getElementById("KhoaHoc").innerHTML = ttsv_default["studentKhoaHoc"];
        document.getElementById("Email").innerHTML = ttsv_default["studentEmail"];
        document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttsv_default["srcImage"];

        addButton.style.display = 'none';
        myImage.style.display = 'none';
        console.log(ttsv_default);
    }

    function cancel() {
        createBG();
        addButton.style.display = 'none';
        myImage.style.display = 'none';
        console.log(ttsv_new);
    }
}