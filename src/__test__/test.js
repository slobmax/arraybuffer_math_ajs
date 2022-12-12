import Character from '../app';

test('Тест линейного ослабления атаки', () => {
  const daemon = new Character('Daemon', 100, false, 3);
  expect(daemon.attack).toBe(80);
});

test('Тест ослабления атаки с дурманом', () => {
  const magician = new Character('Magician', 100, true, 2);
  expect(magician.attack).toBe(85);
});

test('Тест метода get attack при attack < 0', () => {
  const magician = new Character('Magician', -50, false, 2);
  expect(magician.attack).toBe(0);
});

test('Тест метода get attack при attack > 100', () => {
  const daemon = new Character('Daemon', 150, true, 3);
  expect(daemon.attack).toBe(100);
});
