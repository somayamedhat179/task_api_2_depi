fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    var products = json.products;
    var myText = "";

    for (var i = 0; i < products.length; i++) {
      var box = `
          <div class="col-md-4 text-center my-3" >
            <img src="${products[i].images[0]}"class="w-100" style="height:350px">
            <h6>${products[i].title}</h6>
            <h5>${products[i].category}</h5>
            <h5>${products[i].price}$</h5>
            <h5>${products[i].rating}</h5>
            <h5>${products[i].id}</h5>
          </div> 
        `;
      myText += box;
    }

    document.querySelector(".test").innerHTML = myText;
  });
