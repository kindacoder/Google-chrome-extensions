function setup(){
  noCanvas();
  let r=floor(random(20))+1;
  let img=createImg('images/'+r+'.png');
  img.size(windowWidth,windowHeight);
  img.position(0,0);

}
setup();
