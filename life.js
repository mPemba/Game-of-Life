(function() {

	var _ = self.life = function(seed) {
		this.seed = seed;
		this.height = seed.length;
		this.width = seed[0];

		this.prevBoard = [];
		this.board = cloneArray(seed);
	};

	_.prototype = {
		next: function() {
			this.prevBoard = cloneArray(this.board);

		},
		toString: function() {
			return this.board.map(function(row) {
				return row.join(' ');
			}).join('\n');
		}
	};

})();

//Helpers
//WARNING: this will only clone 2D arrays
function cloneArray(array) {
	return array.slice().map(function(row) {
		return row.slice();
	});
}


var game = new Life([
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0],
]);

console.log(game + '');

game.next();

console.log(game + '');