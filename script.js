let i = 0;
let arr = [];
let e = "";
function addProduct() {
    arr[i] = document.getElementById("input").value;
    i++;
    document.getElementById("input").value = "";
}
function displayProduct() {
    e = "<tr>";
    for (i = 0; i < arr.length; i++) {
        e += '<td>' + "Product" + Number(i+1) + ": " + arr[i] + '</td>';
        e += '<td>' + '<button type="button" onclick="editProduct(this)" id=' + i + '>Edit</button>' + '</td>';
        e += '<td>' + '<button type="button" onclick="deleteProduct(this)" id=' + i + '>Delete</button>' + '</td>';
        e += '</tr>';
    }
    document.getElementById("showProduct").innerHTML = e;
    alert("Dear sir! OK");
}
function editProduct(e) {
    i = Number(e.getAttribute('id'));
    document.getElementById('display').innerHTML = '<button type="button" onclick="updateProduct()">Update</button>';
    document.getElementById('input').value = arr[i];
}
function deleteProduct(e) {
    i = Number(e.getAttribute('id'));
    document.getElementById('input').value = arr[i];
    arr.splice(i, 1);//xóa mảng tại i 1 phần tử
    displayProduct();
    document.getElementById("input").value = "";
}
function updateProduct() {
    arr[i] = document.getElementById("input").value;
    displayProduct();
    document.getElementById("input").value = "";
}