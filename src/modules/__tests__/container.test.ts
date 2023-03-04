import Container from '#modules/container';
import 'jest';

describe('Container', () => {
  test('pass', () => {
    const c = new Container('hello');
    expect(c.name).toEqual('hello');
  });
});
