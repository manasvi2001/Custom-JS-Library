new ValidateDot({
	'id': "#my-password",
	'matchArray': ['0', '1', '2'],
	'hoverText': "Must contain 0, 1 or 2",
	'matchNumber': 1
});

new ValidateDot({
	'id': "#my-password",
	'matchArray': ['@', '#', '_'],
	'hoverText': "Must contain @, # or _",
	'matchNumber': 2
});