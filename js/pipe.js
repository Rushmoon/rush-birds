
function PipeUp(ctx,imgU,imgD,landHeight,speed,space) {
    PipeUp.len++;
    this.landHeight=landHeight;
    this.space=space||150;
    this.ctx=ctx;
    this.imgU=imgU;
    this.imgD=imgD;
    this.speed=speed||2;
    this.width=this.imgU.width;
    this.height=this.imgU.height;
    this.x=300+(PipeUp.len-1)*3*this.width;
    this.minHeight=50;
    this.init();
    // this.yDown=0;
    // this.yUp=this.heightD;
    // console.log(this.ctx,this.img,this.width,this.x);
}
PipeUp.len = 0 ;
PipeUp.i=0;
PipeUp.prototype={
    constructor : PipeUp,
    init: function () {
        this.MaxHeight=this.ctx.canvas.height-this.landHeight-this.minHeight-this.space;
        this.heightDown=Math.floor(Math.random()*(this.MaxHeight-this.minHeight)+this.minHeight);
        this.yDown=this.heightDown-this.height;
        this.yUp=this.heightDown+this.space;
    },
    draw: function() {
            this.ctx.drawImage(this.imgD, this.x, this.yDown, this.width, this.height);
            this.ctx.drawImage(this.imgU, this.x, this.yUp, this.width, this.height);

            this.ctx.rect(this.x, this.yDown, this.width, this.height);
            this.ctx.rect(this.x, this.yUp, this.width, this.height);
    },
    update:function () {
        this.x +=-this.speed;
        ctx.fillStyle='rgb(105,0,103)';
        ctx.textBaseline='top';
        ctx.font='30px "微软雅黑"';
        ctx.fillText('得分:'+PipeUp.i,0,0);
        if (this.x<-this.width){
            this.init();
            this.x+=(PipeUp.len)*3*this.width;
            PipeUp.i++;
        }
    }
};