describe('dojo pizza', function(){
	var pref;
	beforeEach(function(){
		pref = getPreferencias();
	});
	afterEach(function(){
	});
	it('deve possuir preferencias', function(){
		expect(pref).not.toBeUndefined();
	});
	it('getPessoa deve trazer pessoa :)', function() {
		expect(getPessoa('geciane')).not.toBeUndefined();
	});
	it('getSabores deve trazer os sabores :)', function() {
		expect(getSabores()).not.toBeUndefined();
	});
	it('getSabores deve ter 5 sabores', function() {
		expect(getSabores().length).toEqual(5);
	});
	it('a Geciane e o Lenon nao tem o mesmo gosto por marguerita', function() {
		expect(compareGosto('geciane', 'lenon', 'marguerita')).toEqual(2);
	});
	it('a Geciane e o Marcelo tem o mesmo gosto por escarola', function() {
		expect(compareGosto('geciane', 'marcelo', 'escarola')).toEqual(0);
	});
	it('a Geciane e o Marcelo tem afinidade 5', function() {
		expect(calculeAfinidade('geciane', 'marcelo')).toEqual(5);
	});
	it('a Geciane e o Lenon tem afinidade 10', function() {
		expect(calculeAfinidade('geciane', 'lenon')).toEqual(10);
	});
	it('a Geciane tem mais afinidade com Tino', function(){
		expect(retorneMaiorAfinidade('geciane')).toEqual('tino');
	});
	it('a Geciane nao pode dividir com ela mesma', function(){
		expect(retorneMaiorAfinidade('geciane')).not.toBe('geciane');
	});
});