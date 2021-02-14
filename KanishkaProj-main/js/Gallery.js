class Gallery {
      constructor(){
        this.title=createElement('h1','Gallery');
        this.nextButton = createButton("NEXT");
        this.backButton = createButton("BACK");
        this.galleryImg = createImg("images/dummy.jpeg");
      }  

     

display (){
        this.title.position(width/2-130,20);
        this.title.style("font-size","40px");

        this.galleryImg.position(width/2, height/2);
        this.galleryImg.size(width/4, height/4);

        this.nextButton.position(width/2+200,height-70);
        this.nextButton.size(200,50)
        this.nextButton.style("font-size","30px");
        this.nextButton.style("background-color","#000000")
        this.nextButton.style("color","#9d711");

        this.backButton.position(80, 150);
        this.backButton.size(200,50)
        this.backButton.style("font-size","30px");
        this.backButton.style("background-color","#000000")
        this.backButton.style("color","#9d711");

        this.nextButton.mousePressed(()=>{
         this.spawnImages();
        });

        this.backButton.mousePressed(()=>{
                this.galleryImg.hide();
                this.hideGalleryElements();
                homescreen.showMainScreenElements();
               });
}

hideGalleryElements(){
   this.title.hide();
   this.backButton.hide();
   this.nextButton.hide();
   this.galleryImg.hide();
}

spawnImages(){

          //generate random obstacles
          var rand = Math.round(random(1,5));
          
          setTimeout(() =>{
                switch(rand) {
                        case 1: this.galleryImg = createImg("images/pic1.jpeg");
                                break;
                        case 2: this.galleryImg = createImg("images/pic2.jpeg");
                                break;
                        case 3: this.galleryImg = createImg("images/pic3.jpeg");
                                break;
                        case 4: this.galleryImg = createImg("images/pic4.jpeg");
                                break;
                        case 5: this.galleryImg = createImg("images/pic5.jpeg");
                                break;
                        default: break;
                    
                      }
                      this.galleryImg.position(width/2-200, height/2-100);
                    this.galleryImg.size(width/2, height/2);
          }, 1000);
          this.galleryImg.hide();
          
}
      
      
}