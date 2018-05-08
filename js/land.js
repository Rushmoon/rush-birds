function Land(ctx,img,speed) {
    Land.len++;
    this.ctx=ctx;
    this.img=img;
    this.speed=speed||2;
    this.width=this.img.width;
    this.height=this.img.height;
    this.x=this.width*(Land.len-1);
    this.y=this.ctx.canvas.height-this.height;


    // console.log(this.ctx,this.img,this.width,this.x);
}
Land.len = 0 ;
Land.prototype={
    constructor : Land,
    draw: function() {
        console.log("landY"+this.y);
        this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    },
    update:function () {
        this.x +=-this.speed;
        if (this.x<-this.width){
            this.x=this.width*(Land.len-1);
        }
    }
};