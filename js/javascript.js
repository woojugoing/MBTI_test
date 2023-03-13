const MbtiModule = (function() {
	let types = {
		ISTJ: {site: "result/ISTJ.html"},ISFJ: {site: "result/ISFJ.html"},INFJ: {site: "result/INFJ.html"},INTJ: {site: "result/INTJ.html"},
		ISTP: {site: "result/ISTP.html"},ISFP: {site: "result/ISFP.html"},INFP: {site: "result/INFP.html"},INTP: {site: "result/INTP.html"},
		ESTP: {site: "result/ESTP.html"},ESFP: {site: "result/ESFP.html"},ENFP: {site: "result/ENFP.html"},ENTP: {site: "result/ENTP.html"},
		ESTJ: {site: "result/ESTJ.html"},ESFJ: {site: "result/ESFJ.html"},ENFJ: {site: "result/ENFJ.html"},ENTJ: {site: "result/ENTJ.html"}
	};
	let e, i, s, n, t, f, j, p;
	let type;

	function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
	}

	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
				}
			}
		});
	}

	function calculatePercentages() {
		e = Math.floor(e / 10 * 100);
		i = Math.floor(i / 10 * 100);
		s = Math.floor(s / 10 * 100);
		n = Math.floor(n / 10 * 100);
		t = Math.floor(t / 10 * 100);
		f = Math.floor(f / 10 * 100);
		j = Math.floor(j / 10 * 100);
		p = Math.floor(p / 10 * 100);
	}

	function showResults() {
		type += (e >= i) ? "E" : "I";
		type += (s >= n) ? "S" : "N";
		type += (t >= f) ? "T" : "F";
		type += (j >= p) ? "J" : "P";
		document.querySelector("#type").innerHTML = type;
		document.querySelector("#type-site").href = types[type].site;
	}

	return {
		processForm: function() {
			resetScores();
			getScores();
			showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });
