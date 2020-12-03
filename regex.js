const patterns = {
	username: /^(\w|\d){5,12}$/i,
	password: /^(\w|@|-){8,18}$/,
	email: /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
	telephone: /^\d{10}$/,
};

const alert_message = document.querySelectorAll('p')[1];

document.querySelector('#form').addEventListener('keyup', (event) => {
	const val = event.target.value;
	const pattern = event.target.attributes.name.value;
	console.log(val);

	if (patterns[pattern].test(val) != true) {
		event.target.style = 'color:green';
		alert_message.innerText = 'not valid';
	} else {
		event.target.style = 'black';
		alert_message.innerText = 'done';
	}
});

/**
 * g -> global.
 * i -> case insensitive.
 * [some string] -> either from the given stirng.
 * [^] -> for exclude the characters.
 * [a-z] -> include all alphabets of lowercase.
 * [A-Z] -> include all alphabets of uppercse.
 * [0-9] -> include numbers from 0 to 9
 * [] -> character Set.
 * + -> the one or more quantifier.
 * \ -> the escape character.
 * []{limit} -> define exact length.
 * limit could be between range.
 * \d -> match any digit character.
 * \w -> match any word character.
 * \s -> match a whitespace character.
 * \t -> match a tab character.
 * ? -> optional.
 * . -> any character.
 * * -> all characters.
 * ^ -> start,
 * $ -> end.
 * | -> or.
 */
