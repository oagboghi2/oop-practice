// Your code here
let Song = {
	title : "Still Feel Like Your Man",
	length : "3:54",
	album : "The Search for Everything",
	artist : "John Mayer",
	track : 1,
	play : function(){
		return "now playing " + this.title;
	},
	pause : function(){
		return "paused " + this.title;
	}

}

Song.play;