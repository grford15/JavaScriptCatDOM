var CAT_ARRAY = [
  {name: "Jim", food: "Cheese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkR859WIv6s6NKRbcBCNXKZanLy06xYujmPYSU_vZSPIdu7gyB"},
  {name: "Boba", food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", food: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}

];

var addCats = function(catsName, catFood, catPic){

  var newCat = createNewCat();
  var catName = createCatName(catsName);
  var faveFood = createCatFood(catFood);
  var catPicture = createCatPic(catPic);

  appendElements(newCat, catName, faveFood, catPicture);

}

var createNewCat = function(){
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');
  return newCat;
}

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.innerText = "Name: " + name;
  return catName;
}

var createCatFood = function(catfood){
  var faveFood = document.createElement('li');
  faveFood.innerText = "Favourite Food: " + catfood;
  return faveFood;
}

var createCatPic = function(catPic){
  var catLi = document.createElement('li');

  var catImage = document.createElement('img');
  catImage.src = catPic;
  catImage.classList.add('img');

  catLi.appendChild(catImage);
  return catLi;
}

var appendElements = function(newCat, catName, faveFood, catPicture){
  newCat.appendChild(catName);
  newCat.appendChild(faveFood);
  newCat.appendChild(catPicture);

  var cats = document.querySelector("#cats");
  cats.appendChild(newCat);
}

var app = function() {
  for(var cat of CAT_ARRAY){
    addCats(cat.name, cat.food, cat.image)
  }
};



window.onload = app;
