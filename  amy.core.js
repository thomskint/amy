(function (global ) { var amy = {
	VERSION : '0.0.1' ,
	lesson : 'Part 1: Library Architecture' };
	if (global .amy ) {
		throw new Error ('amy has already been defined'
	} else {
		global .amy = amy ;
	}
})( typeof window === 'undefined' ? this : window );