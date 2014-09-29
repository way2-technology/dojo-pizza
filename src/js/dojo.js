//Para cada sabor de pizza disponível, cada um deve indicar uma nota para ele (nota 1, se a pessoa detesta o sabor e nota 5 se a pessoa adora o sabor). Depois de processar esses dados, cada pessoa vai saber quais as pessoas que tem o gosto mais parecido que o seu (e que provavelmente irá dividir uma pizza com você). 

function getPreferencias () {
	return {
		geciane: 	{ marguerita : 2, escarola : 1, portuguesa : 5, frango : 4, napolitana : 3 },
		marcelo: 	{ marguerita : 3, escarola : 1, portuguesa : 3, frango : 5, napolitana : 2 },
		lenon: 		{ marguerita : 4, escarola : 2, portuguesa : 1, frango : 1, napolitana : 3 },
		renata: 	{ marguerita : 4, escarola : 1, portuguesa : 1, frango : 3, napolitana : 4 },
		heitor: 	{ marguerita : 1, escarola : 2, portuguesa : 1, frango : 4, napolitana : 3 },
		tino: 		{ marguerita : 1, escarola : 1, portuguesa : 4, frango : 3, napolitana : 2 },
		luca: 		{ marguerita : 5, escarola : 3, portuguesa : 4, frango : 3, napolitana : 2 }
	};
}

function getPessoa(nome){
	return getPreferencias()[nome];
}

function getSabores() {
	var pessoa1 = getPreferencias()['geciane'];
	var sabores = [];
	for (key in pessoa1) {
		sabores.push(key);
	}
	return sabores;
}

function compareGosto(nome1, nome2, sabor) {
	return Math.abs(getPessoa(nome1)[sabor] - getPessoa(nome2)[sabor]);
}

function calculeAfinidade(pessoa1, pessoa2) {
	var afinidade = 0;
	var sabores = getSabores();
	for (var i = 0 ; i < sabores.length; i++) {
			afinidade += compareGosto(pessoa1, pessoa2, sabores[i]);
	};
	return afinidade;
}

function retorneMaiorAfinidade(nome) {
	var pessoas = ['geciane', 'marcelo', 'lenon', 'renata', 'heitor', 'tino', 'luca'];
	var ehTuNegao;
	var ehTuNegaoScore;
	for (var i = 0; i < pessoas.length; i++) {
		if(nome == pessoas[i]){
			continue;
		}
		var score = calculeAfinidade(nome, pessoas[i]);
		if (ehTuNegaoScore == undefined || score < ehTuNegaoScore) {
			ehTuNegaoScore = score;
			ehTuNegao = pessoas[i];
		}
	}
	return ehTuNegao;
}
