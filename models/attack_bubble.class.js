class Attack_Bubble extends AttackObject {
    attack_damage = 200;
    constructor() {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.world = world;
        this.x = this.world.character.x + this.world.character.width;
        this.y = this.world.character.y + 35;
        this.moveBubble()
    }
}