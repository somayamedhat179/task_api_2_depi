fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
.then( function(result){
  return result.json() ;
})
.then( function(json){ // json here is a variable 
    var recipes = json.recipes ; // array of object

    var myText = ""; // empty string

      for (var i = 0; i < recipes.length; i++) {
        var box = `
          <div class="col-md-4 text-center my-3" >
            <img src="${recipes[i].image_url}"class="w-100" style="height:350px">
            <h6>${recipes[i].title}</h6>
            <h5>${recipes[i].publisher}</h5>
            <h5>${recipes[i].id}</h5>
          </div> 
        `;
        myText += box; 
      }

      document.querySelector(".test").innerHTML = myText;

    })