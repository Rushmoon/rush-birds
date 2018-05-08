function Bird(ctx,img,x,y,speed) {
    this.ctx=ctx;
    this.img=img;
    this.speed=speed||2;
    this.speedPlus=0.5;
    this.width=this.img.width/3;
    this.height=this.img.height;
    this.NowFpsW=0;
    this.NowFpsH=0;



    this.x=x;
    this.y=y;
}
Bird.prototype={
    constructor : Bird,
    draw: function() {
        var MaxAngle=Math.PI/4;
        var MinAngle=10*Math.PI/180;
        var angle=this.speed*MinAngle;

        if (angle>MaxAngle){
            angle=MaxAngle;
        }

        this.ctx.save();
        this.ctx.translate(this.x+this.width/2,this.y+this.height/2);
        this.ctx.rotate(angle);
        console.log(angle);
        this.ctx.drawImage(this.img,this.NowFpsW*this.width,this.NowFpsH*this.height,this.width,this.height,
            -this.width/2,-this.height/2,this.width,this.height);
        this.ctx.restore();
    },
    update:function () {

        this.y +=this.speed;
        this.speed+=this.speedPlus;
        this.NowFpsW++;
        if (this.NowFpsW>2){
            this.NowFpsW=0;
        }
        this.BildEvent();
    },
    BildEvent:function () {
        var _this=this;
        _this.ctx.canvas.onclick=function () {
            _this.speed=-6;
        }
    }
};