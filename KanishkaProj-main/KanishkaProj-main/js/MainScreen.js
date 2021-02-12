class MainScreen {
constructor(){
    this.title=createElement('h1','Hair Treatment');
    this.image=createImg("images/LOGO.jpeg");
    this.contactUs=createButton("Contact Us");
    this.gallery = createButton("Gallery");
    
}

display(){
    this.title.position(width/2-130,20)
    this.title.style("font-size","40px")


    this.image.position(width/3.5-200, height/4.2-200);

    this.gallery.position(width/2+300, height/2-200);
    this.gallery.size(200,50);
    this.gallery.style("font-size","30px");
    this.gallery.style("background-color","#000000")
    this.gallery.style("color","#9d711");


    this.contactUs.position(width/2+300,height/4);
    this.contactUs.size(200,50)
    this.contactUs.style("font-size","30px");
    this.contactUs.style("background-color","#000000")
    this.contactUs.style("color","#9d711");

    this.contactUs.mousePressed(()=>{
        this.title.hide();
        this.image.hide();
        contactScreen=new ContactUs();
        contactScreen.display();
    })

    this.gallery.mousePressed(()=>{
        this.title.hide();
        this.image.hide();
        contactScreen.hide();
       galleryScreen =new Gallery();
       galleryScreen.display();
    })
}



}