//describe es a quien yo quiero testear con una funcion que describe lo que se va a testear

describe('cipher', () => {

  // el it recibe lo que se va a testear en específico
  //se testea primero siempre si es un objeto, cuando estamos trabajando con estructura de objetos
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
    it('debería retornar "hijklmnopqrstuvwxyxz" para "abcdefghijklmnopqrstuvwxyzabcdefg" con offset 33', ()=>{
    assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
  });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
    it('debería retornar "abcdefghijklmnopqrstuvwxyzabcdefg" para "hijklmnopqrstuvwxyxzabcdefg"con offset 33', ()=>{
      assert.equal(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');

    });
  });

 

});
