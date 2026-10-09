let page = document.getElementById("page_content");

class ParentClass(){
  constructor(id, src){
    this.id = id;
    this.src = src;
  }
}

class Image{
  constructor(id, src, border="black"){
    super(id, src);
    this.border = border;
  }

  showImage(){
    page.innerHTML = '<img id="'+this.id'"></img>';
    let pic = document.getElementById(this.id);
    pic.border = "7px solid";
    pic.style.setProperty("border-color", this.border);
  }
  clearing(){
    let pic = document.getElementById("img")[0];
    if(typeof pic != 'undefined'){
      if(pic.src.includes(this.src)){
        pic.style.display="none";
      }
    }
  }
}

var cat = new Image("cat", "cat.jpg");
var flw = new Image("flw", "flower.jpg");
var cld = new Image("cld", "cloud.jpg");


page.textContent = cat.id;
page.textContent = flw.id;
page.textContent = cld.id;


function clear_img(){
  cat.clearing();
  flw.clearing();
  cld.clearing();
}

function showPic(obj){
  obj.showImage();
}
