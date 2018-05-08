
(function (w) {


function GameStar(ctx,imoge,role) {
    this.ctx=ctx;
    this.imoge=imoge;
    this.role=role;
}
GameStar.prototype={
    constructor : GameStar,
    draw:function () {
        for (var z=0 ; z<2 ;z++){
          role.push(new Sky(ctx,imoge.sky));
        }
        for (var i=0;i<6;i++){
            role.push(new PipeUp(ctx,imoge.pipeUp,imoge.pipeDown,imoge.land.height));
        }
        for (var j=0;j<4;j++){
            role.push(new Land(ctx,imoge.land));
        }
        this.birds=new Bird(ctx,imoge.bird,10,10);
        role.push(this.birds);
    },
    update:function () {
        var birdPox = this.birds.x+this.birds.width/2;
        var birdPoy = this.birds.y+this.birds.height/2;


        if (birdPoy<0 || birdPoy>this.ctx.canvas.height-this.imoge.land.height || this.ctx.isPointInPath(birdPox,birdPoy)){
            // clearInterval(time);
            this.ctx.beginPath();
            this.ctx.fillStyle="rgba(0,0,0,0.5)";
            this.ctx.fillRect(0,0,ocanVas.width,ocanVas.height);
            this.ctx.beginPath();
            this.ctx.fillStyle='white';
            this.ctx.textAlign='center';
            this.ctx.textBaseline='middle';
            this.ctx.font='100px "微软雅黑"';
            this.ctx.fillText('GAME OVER',ocanVas.width/2,ocanVas.height/2);
        }
        else {
            this.ctx.beginPath();
            this.role.forEach(function (role, i) {
                role.draw();
                role.update();
            })
        }
    }
};

w.getGameStar = new GameStar()
})(window);