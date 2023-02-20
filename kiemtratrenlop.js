let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  let exist = false;
  if (listProduct != null) {
    for (const product of listProduct) {
      if (product.name == name) {
        exist = true;
        break;
      }
    }
  }
});

function readListProduct() {
  //B1. Lấy listProduct từ localStorage
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
  if (listProduct == null) {
    listProduct = [];
  }
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  product.forEach((product, index) => {
    //Hiển thị ra một sản phẩm trong tableBody
    tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.email}</td>
                    <td>${product.phone}</td>
                    <td>${product.address}</td>
                
                </tr>`;
  });
}
