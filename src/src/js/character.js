export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Trying to create character with name length out of range!');
    }
    if (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error(`Trying to create character with type (${type}) not matched the legal type list!`);
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }

    return this;
  }

  /*
    метод damage(points), который меняет внутреннее состояние
    объекта (points - это урон, наносимый персонажу). Метод damage(points) ничего не возвращает
    и рассчитывает итоговое изменение жизни персонажа (health) по формуле:
    health -= points * (1 - defence / 100), учитывая, что значение health >= 0.
  */
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
