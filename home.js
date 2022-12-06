function show() {
    $.ajax({
        type: "GET", url: "http://localhost:8080/students", //xử lý khi thành công
        success: function (data) {
            let str = "";

            for (let i = 0; i < data.length; i++) {
                str += `<tr>
<td>${data[i].id}</td>
<td>${data[i].name}</td>
<td><img src="${data[i].img}" width="200" height="150"> </td>
<td>${data[i].age}</td>
<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal1" onclick="Edit_Demo(${data[i].id})">Edit</button></td>
<td><button type="button" class="btn btn-danger" onclick="delete_Demo(${data[i].id})">Delete</button>
</tr>`
            }

            document.getElementById("tbody").innerHTML = str;
        }, error: function (err) {
            console.log(err)
        }
    })
}

show();


function Create() {
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value;
    let age = document.getElementById("age").value;
    let idClassRoom = document.getElementById("idClassRoom").value;

    let student = {
         name: name, age: age, img: img, classRoom: {id: idClassRoom}
    }

    $.ajax({
        type: "POST", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/students", data: JSON.stringify(student), //xử lý khi thành công
        success: function (data) {
            show()
        }, error: function (err) {
            console.log(err)
        }
    })

    return show();
}


function Edit_Demo(id) {
    $.ajax({
        type: "GET", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }
        , url: "http://localhost:8080/students/edit/" + id, //xử lý khi thành công
        success: function (data) {
            document.getElementById("id").value = data.id;
            document.getElementById("name1").value = data.name;
            document.getElementById("img1").value = data.img;
            document.getElementById("age1").value = data.age;
            document.getElementById("idClassRoom1").value = data.classRoom.id;
        }, error: function (err) {
            console.log(err)
        }
    })
}


function delete_Demo(id) {
    $.ajax({
        type: "Delete",
        headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/students/" + id,
        success: function (data) {
            show()
        }, error: function (err) {
            console.log(err)
        }
    })
}

function Edit() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name1").value;
    let img = document.getElementById("img1").value;
    let age = document.getElementById("age1").value;
    let idClassRoom = document.getElementById("idClassRoom1").value;
    let student = {
        id: id, name: name, age: age, img: img, classRoom: {id: idClassRoom}
    }
    $.ajax({
        type: "POST", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/students/edit", data: JSON.stringify(student), //xử lý khi thành công
        success: function (data) {
            show()
        }, error: function (err) {
            console.log(err)
        }
    })

    return show();
}

function search(){
    let name = document.getElementById("search").value;
    $.ajax({
        type: "GET", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }
        , url: "http://localhost:8080/students/" + name, //xử lý khi thành công
        success: function (data) {
            let str = "";
            for (let i = 0; i < data.length; i++) {
                str += `<tr>
<td>${data[i].id}</td>
<td>${data[i].name}</td>
<td><img src="${data[i].img}" width="200" height="150"> </td>
<td>${data[i].age}</td>
<td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal1" onclick="Edit_Demo(${data[i].id})">Edit</button></td>
<td><button type="button" class="btn btn-danger" onclick="delete_Demo(${data[i].id})">Delete</button>
</tr>`
            }
            document.getElementById("tbody").innerHTML = str;
        }, error: function (err) {
            console.log(err)
        }
    })

}


