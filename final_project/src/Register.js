const checkName = () => {
    let name = $("#first-name").val();
    const check = /^([A-ZÀ-Ỹ][a-zà-ỹ]*\s?)+$/;
    if(name === ''){
        $('#errName').html('Khong duoc bo trong');
        return false;
    }
    else if (!check.test(name)) {
        $('#errName').html('Nhap Sai Cu Phap Ho Ten');
        return false;
    }
    $('#errName').html('');
    return true;
};
$("#first-name").blur(function(e) {
    $("#errName").html("");
    checkName();
})