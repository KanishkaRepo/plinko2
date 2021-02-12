class Gallery {
      constructor(){
        this.title=createElement('h1','Gallery');
        this.pic1 = createImg("images/pic1.jpeg");
        this.pic2 = createImg("images/pic2.jpeg");
        this.pic3 = createImg("images/pic3.jpeg");
        this.pic4 = createImg("images/pic4.jpeg");
        this.pic5 = createImg("images/pic5.jpeg");
        this.nextButton
      }  

display (){
        this.title.position(width/2-130,20);
        this.title.style("font-size","40px");

        this.pic1.position(50, height/2);
        this.pic1.size(width/2, height/2);
        this.pic2.size(width/2, height/2);
        this.pic3.size(width/2, height/2);
        this.pic4.size(width/2, height/2);
        this.pic5.size(width/2, height/2);
        
}




hide(){
  this.title.hide();
  this.pic1.hide();
  this.pic2.hide();
  this.pic3.hide();
  this.pic4.hide();
  this.pic5.hide();
}
}