class MainScreen {
constructor(){
    this.title=createElement('h1','Hair Treatment');
    this.logoImage=createImg("images/LOGO.jpeg");
    this.contactUs=createButton("Contact Us");
    this.gallery = createButton("Gallery");
    
}

display(){
    this.title.position(width/2-130,20);
    this.title.style("font-size","40px");

    this.logoImage.position(50, 150);
    this.logoImage.size(width/2-100, height-200);

    this.gallery.position(width/2+200, height/2+250);
    this.gallery.size(200,50);
    this.gallery.style("font-size","30px");
    this.gallery.style("background-color","#000000")
    this.gallery.style("color","#9d711");


    this.contactUs.position(width/2+200,height/2);
    this.contactUs.size(200,50)
    this.contactUs.style("font-size","30px");
    this.contactUs.style("background-color","#000000")
    this.contactUs.style("color","#9d711");


    this.gallery.mousePressed(()=>{
        this.title.hide();
        this.logoImage.hide();
        this.gallery.hide();
        this.contactUs.hide();
       galleryScreen =new Gallery();
       galleryScreen.display();
    })

    this.contactUs.mousePressed(()=>{
        this.title.hide();
        this.logoImage.hide();
        this.contactUs.hide();
        this.gallery.hide();
        contactScreen=new ContactUs();
        contactScreen.display();
    })

 
}

hideMainScreenElements(){
    this.title.hide();
    this.logoImage.hide();
    this.contactUs.hide();
    this.gallery.hide();

}

showMainScreenElements(){

    this.title.show();
    this.logoImage.show();
    this.contactUs.show();
    this.gallery.show();
}
}