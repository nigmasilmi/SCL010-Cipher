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

    it('debería retornar "3456789:;2" para "1234567890"con offset 34', ()=>{
      assert.equal(cipher.encode(34, '1234567890'), '3456789:;2');
    
    });

    it('debería retornar "lzwlyv xbl mbujpvul" para "espero que funcione" con offset 33', ()=>{
      assert.equal(cipher.encode(33, 'espero que funcione'), 'lzwlyv xbl mbujpvul');
    
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

    it('debería retornar "1234567890" para "3456789:;2"con offset 34', ()=>{
      assert.equal(cipher.decode(34, '3456789:;2'), '1234567890');
    
    });

    it('debería retornar "espero que funcione" para "lzwlyv xbl mbujpvul" con offset 33', ()=>{
      assert.equal(cipher.decode(33, 'lzwlyv xbl mbujpvul'), 'espero que funcione');
    
    });
    
  });

});
});

