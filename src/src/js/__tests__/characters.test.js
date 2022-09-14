import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('Character should create right character', () => {
  const personConstructor = new Character('testChar', 'Bowman');
  const personName = {
    name: 'testChar',
    type: 'Bowman',
    level: 1,
    health: 100,
  };
  expect(personConstructor).toEqual(personName);
});

test('Bowman should create character \'bowman\' with correct characteristics', () => {
  const personConstructor = new Bowman('Tom');
  const personName = {
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    name: 'Tom',
    type: 'Bowman',
  };

  expect(personConstructor).toEqual(personName);
});

test('Swordsman should create character \'bowman\' with correct characteristics', () => {
  const personConstructor = new Swordsman('Jack');
  const personName = {
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    name: 'Jack',
    type: 'Swordsman',
  };

  expect(personConstructor).toEqual(personName);
});

test('Magician should create character \'Magician\' with correct characteristics', () => {
  const personConstructor = new Magician('Oleg');
  const personName = {
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Oleg',
    type: 'Magician',
  };

  expect(personConstructor).toEqual(personName);
});

test('Undead should create character \'Undead\' with correct characteristics', () => {
  const personConstructor = new Undead('Carl');
  const personName = {
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    name: 'Carl',
    type: 'Undead',
  };

  expect(personConstructor).toEqual(personName);
});

test('Zombie should create character \'Zombie\' with correct characteristics', () => {
  const personConstructor = new Zombie('Hans');
  const personName = {
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    name: 'Hans',
    type: 'Zombie',
  };

  expect(personConstructor).toEqual(personName);
});

test('Daemon should create character \'Daemon\' with correct characteristics', () => {
  const personConstructor = new Daemon('Phil');
  const personName = {
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Phil',
    type: 'Daemon',
  };

  expect(personConstructor).toEqual(personName);
});

test('Method Character.levelUp() should modify character with correct characteristics', () => {
  const personConstructor = new Daemon('Phil');
  const afterLevelUp = {
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
    name: 'Phil',
    type: 'Daemon',
  };
  expect(personConstructor.levelUp()).toEqual(afterLevelUp);
});

test('Method Character.damage(points) should modify character by damaging it', () => {
  const personConstructor = new Daemon('Phil');
  const damagedHealth = 100 - 10 * (1 - 40 / 100);
  const damaged = {
    health: damagedHealth,
    level: 1,
    attack: 10,
    defence: 40,
    name: 'Phil',
    type: 'Daemon',
  };
  personConstructor.damage(10);

  expect(personConstructor).toEqual(damaged);
});
