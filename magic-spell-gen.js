/***************
  
   magic-spell-gen.js
   
   Fantasy magic spell name generator.
 
   Methods:
		magicSpellGen.getName() //get one magic spell name (random element)
		magicSpellGen.getElementalName(elem) //get specific element spell name
			Possible string parameter:
				fire, metal, shadow, beast, heaven, light, life, death, chaos

	Example outputs:
		Astral Spirit
		Majestic Storm of Lorimarr
		Words of Justice
		Bolt of Titans
		Serpentine Fists of Styxthus
		

***************/

var magicSpellGen = {
	
	elements: ["fire", "metal", "shadow", "beast", "heaven", "light", "life", "death", "chaos"],

	spells: [ "bolt", "blast", "strike", "wind", "gaze", "comet", "missile","fire","beam","breath","burst", "wave", "spike", "blessing", "hex", "incantation", "sorcery", "curse", "hymn", "song", "litany", "chant", "gift", "roar", "rune","transmutation","spirit", "law", "command", "blade", "hammer", "aspect", "bridge", "cloak", "gate", "words", "storm", "fires", "form", "hand", "cage", "hearts", "omen", "whisper", "shield", "throne", "words", "gateway", "ward", "flames", "call","fists", "gods"
	],
	
	adjectives: {
		fire: ["flaming", "burning", "fiery", "molten", "explosive", "red", "volcanic"],
		metal: ["immortal", "imperial", "invincible", "runic", "onixian", "obsidian", "refined", "golden"],
		shadow: ["creeping", "unseen", "abyssal", "chameleon", "mystic", "phantom", "masked", "arcane"],
		beast: ["primal", "ancient", "wild", "venomous", "savage", "unchained", "serpentine", "toxic", "tribal"],
		heaven: ["celestial", "cosmic", "crescent", "empyrean", "ethereal", "astral", "heavenly"],
		light: ["holy", "divine", "radiant", "righteous", "sanctified", "blessed", "magnificent", "exquisite","angelic"],
		life: ["crystalline", "eternal", "feral", "primordial", "ageless", "majestic", "infinite"],
		death: ["crimson", "cursed", "dark", "deathless", "forgotten", "unliving", "undying","forbidden","black","howling"],
		chaos: ["arcane", "baleful", "blighted", "chaos", "condemned", "desecrated", "fallen", "foul", "black", "nether", "unholy", "demonic", "corrupted", "painful", "dimensional"],
	},
	
	nouns: {
		fire: ["fire", "inferno", "magma","heat","spark"],
		metal: ["gold", "silver", "mercury", "iron", "steel", "magnetism", "immortality", "alchemy", "rust"],
		shadow: ["secrets", "shadow", "serpents",  "snakes", "night", "dusk", "shroud","twilight"],
		beast: ["mountains", "war","warfare","titans", "dragons", "fury" ], 
		heaven: ["thunder","sun", "wind", "sky","heaven", "crystal","angels", "salvation", "aether", "stars", "moon", "starlight", "fate", "destiny", "horizon", "lightning", "storm"],		
		light: ["light","progress", "creation", "order","peace", "solitude", "truth","hope","glory", "justice"],
		life: [ "immortality", "infinity", "fortitude", "life", "harmony","earth","sun", "thorns","seasons", "forest", "stone","winter"],
		death: ["death", "blood", "flesh", "malady","underworld","souls","grave","bone","sorrow", "necromancy", "spirits"],
		chaos: ["madness", "malice", "void", "excess","wrath","blight" ,"malevolence", "pain", "torment", "agony", "hatred", "witchcraft", "witchery", "magick", "chaos","doom", "rage", "terror","betrayal","destruction"],
	},
	

	fantasyCombi1: [ // Prefix 
		'Abad','Aci','Agr','Akri','Alc','Alk','Anv','Arm', 'Arma','Asta','Ast','Bae','Bal','Balth','Barba','Bar','Baar','Basi','Baur','Bhe','Bho','Brak','Bro','Buk','Chim','Cor','Corg','Cyc','Cyr','Dai','Daid','Dak','Dant','Dece','Decu','Dei','Dem','Dhag','Doom','Dram','Dus','Dy','Ep','Eth','Fen','Fer','Gali','Ghe','Gho','Gna','Gunn','Harr','Hek','Hel','Hes','Hor','Hur','Jao','Jaq','Jav','Jum','Kai','Kais','Kaos','Kav','Kerb','Khac','Kha','Khal','Khan','Khao','Khym','Kob','Kos','Kosm','Krae','Kron','Kro','Ky','Kyr','Lev','Magn','Mali','Mal','Medy','Mep','Mino','Min','Mont','Mord','Mox','Muta','Naix','Natu','Nov','Nox','Numi','Nyb','Nyd','Obs','Ocu','Ora','Phal','Phob','Phor','Plu','Poc','Pros','Pyr','Rab','Rein','Roa','Ror','Rub','Scal','Sky','Smul','Spir','Spi','Styx','Syba','Syr','Taif','Tal','Tar','Tem','Tempes','Terb','Tha','Thor','Thro','Tita','Trac','Trun','Tur','Tyb','Tybe','Tych','Typh','Typ','Ty','Vi','Vor','Vuk','Vyp','Vyx','Wor','Zahm','Zeg','Zuf','Bei','Carn','Cas','Ce','Che','Eil','Ele','Exa','Fos','Goi','Jei','Ko','Mont','Mos','Nou','Oab','Pro','Psych','Sak','Scau','Se','Strau','Sum','Ta','Taj','Tas','Trep','Vasc','Vio','Vir','Mega','Giga','Zargo','Ultra'	
	],
	
	fantasyCombi2: [ // Suffix
		'ano','abal','ago','aine','am','aos','aphon','aq','aren','aria','aros','arte','atan','atar','ator','bari','baro','ber','berio','bero','bius','bra','che','chos','cia','cus','da','dan','datar','deo','dine','don','dor','dos','dryl','dud','dysa','eas','el','ene','er','erus','esh','estus','fem','fire','fix','foon','fyr','gad','gath','ger','gnar','gnus','go','gon','hac','han','hez','hm','idus','iel','ilon','imos','ina','ion','ios','iros','iser','isk','ist','ite','iv','jak','kate','ko','kye','lanx','lder','ldris','lia','line','lis','los','loth','lxud','mar','mera','mine','mor','morth','munus','myre','mys','nazz','nides','noa','nos','nox','oark','obos','och','omm','one','ono','onos','or','orax','os','osh','ova','per','pero','phon','phos','rax','rbuk','rene','res','ress','ria','roc','rom','ron','ront','ros','roth','rott','rox','rrus','ruby','rus','ry','sive','sus','tan','taros','thus','tos','tov','tres','tress','tuc','tux','uano','uma','unn','utak','uter','vania','vil','vios','vohk','vuk','vyn','wadus','xadon','xos','yber','ydus','yne','yper','yros','yx','zuno','zoul','ooze'	
	],
	
	folkNames: [ // list of common folklore names: 520 names
		'Acadine','Acheri','Adamastor','aetites','Agta','Ahes','Ahkiyyini','Äi','Aitvaras','Ajatar','Al basti','Alan','Alastyn','Alatyr','Alfar','Alp','Alrunes','Alves','Alvina','Alyosha Popovitch','Am','Amleth','Amphisbaena','angau','Anhangá','Anjanas','Ankou','Anthropophagi','arkan sonney','Arquetu','Asrai','Aswang','Auld Clootie','Azeman','Baba Dochia','Baba Yaga','Babe','Bagat','bánánach','Banshee','Baobhan Sith','Barbegazi','Bardi','Barghest','Basilisk','Bawang','Bean Nighe','Bean Sidhe','Beast epic','Beast of Lettir Dallan','Befana La','Bendith Y Mamau','Beowulf','Bernardo del Caprio','Bertha','bhut','Bicho-Papão','Bicorn','Biersal','Bigfoot','Billy Blin','Bishop-fish','Black Annis','Black Dog','Black Donald','Black Peter','Black Shuck','Blarney Stone','Blemmyes','Bloody-bones','Bogeyman','Boggart','Bogie','Boitatá','Bolla','Boobrie','Booyan','Boto','Bozaloshtsh','Bran Galed','Bran','Brownie','Broxa','Bruin','Bubus','Bucca','Buggane','bunadh beag na farraige','bunadh na croc','Bunyan Paul','Burning Land-measurer','bwbach','Bwca','cìrein cròin','Caballucos del diablo','cabyll-ushtey','Cader Idris','Cadi','Caipora','Caladbolg','Caoránach','Carlin','Cath Palug','Cathleen Ni Hoolihan','Catoblepas','Ceffyl-Dwr','Charcoal Crunchers','Chichevache','Chromandae','Cirein crôin','Clootie','Colbronde','Colt-pixy','copóg Phádraig','Corrigan','Cosanzeana Ileana','crion','Croquemitaine','cuachag','Cuca','Cuegle','Cuero','Culebre','Curupira','Cusith','Cythraul','Dana oShee','Dancing-Water','Daoine maite','Daoine Sidhe','Darrant','Davy Jones','Death Coach','Death-bell','Devils Dyke','Dhol','Djinnestan','Dobrynya Nikititch','Dolya','Dones daigua','Doppelgänger','Dracs','Dragobete','Dragon','Draug','Durandal','Dwarf','Dwende','Dyeduska Vodyanoy','each uisge','Echeneis','El Dorado','Elena','Elf','Ellyon','Engkanto','Erlking','Erreka-Mari','Espumeros','Fabián','Fachan','Fairy','Fálga','Fay','Fear Liath More','Feeorin','Fenoderee','Ferragus','Fetch','Feux follets','Fext','Fifinella','Fir Darrig','Firebird','Firedrake','Flabbaert','Flerus','Flying Dutchman','Foawr','Folklore','Fountain of Youth','Frau Hütt','Frau Welt','Freischütz','Friar Tuck','Fuwch Frech','Gabbara','Gaborchend','Gagana','Gamayun','Gandreid','Garafena','Gardsvor','Gargouille','Gargoyle','Gedembai','Germakochi','Ghillie Dhu','Ghost','Giant','Glaistig','Glas Chairm','Glas Ghaibhneach','Glashtyn','Gnome','Goayr Heddagh','Goblin','Goborchend','Gorgoniy','Gorgonya','goric','Granny Wells','Grant','Greegrees','Green Man','Gremlin','Griffin','Grim Reaper','Gua Langsuir','Guadiana','Guarana','Guaxa','Gwrach y Rhibyn','Gwragedd Annwn','Gwyligi','Gwyllion','Gytrash','Haferbock','Hag','Hakenmann','Halloween','Hampelmann','Hans Hagen','Hans Heiling','Hantu Jarang Gigi','Harrowing Of Hell','Hatim Tai','Havelock the Dane','Hedley Kow','Heinzelmännchen','Herne','Hickathrift Tom','Hide','Hildesheim','Hipilik','Hippogriff','Hobgoblin','Holger Danske','Hombre del Saco','Horn Childe','Humber','Hüvelvény','Iara','Igosha','Ijanas','Ilya Muromets','Imap Imassoursua','Imp','Incubus','Indrik the Beast','Írusán','Island of the Seven Cities The','Itchetiky','Ivan Tsarevich','J','Jabberwock','Jack Frost','Jack In the Green','Jack o Lantern','Jack o the bowl','Jack-in-Irons','jalpari','Janggala','Jenny Greenteeth','Jimaninos','Jinn','John Barleycorn','junacke pesme','Kabouter','Kama-kama','Kapre','Karakoncolos','Karakura','Kaukis','Kekeko','Kelembai','Kelpie','Kenne','Kikimora','Killmoulis','King Horn','Kipriano','Kludde','Knocker','Kobold','Kornmutter','Kraken','Krasue','Kriksy','Kulshedra','La Chusa','La Llorona','Lair bán','Lambton Worm','Lamiñas','Lampalugua','Lange Wapper','Lantarón','Leanan Sidhe','Leprechaun','Leucrota','Liderc','Liekkiö','Little Dutch Boy The','Little Red Ridinghood','Lliannan-She','Lorelei','Luchtigern','Lucy St','Lunantishee','Lutin','Mab Queen','Mae Nak','Magnetic Mountain','Mahr','Maize','Makam Ajaib','Makara','Mamur','Manas','Mandrake','Manoa','Manticore','Mantyo','Mara','Marinka','Marmanhig','Marsk Stig','Masabakes','Mauleon','Máurari','Meigas','Melusine','Men Brayut','Mephistopheles','Mermaid','Merrow','Mhorag','Mimis','Mitmit','Moddey Dhoo','Monocoli','Monster of Loch Ness The','Morans Collar','Moshto','Motho and Mungo','Mu','Muirdris','Mula-sem-Cabeça','Muryans','Naecken','Nahuelito','Nain Rouge','Nang Kwak','Nechistaia Sila','Nechistyi Dukh','Nejma','Nick','Niels Ebessen','Nippel','Nisse','Nixes','Nocnitsa','Noggle','Nuberu','Nuckelavee','Nunus','Ogier the Dane','Ogre','Oilliphéist','Ojancanu','Old Harry','Olifant','Oliver','Orc','Orlando','Orm','Osschaart','Osschaert','Ouzelum Bird','Ox of Dil','Ozaena','Panotii','Panulay','Partridge in a Pear Tree','Paved ponds','Pecos Bill','Pedauque Queen','Peg Powler','Pere Noel','Pey','Phajanak','Phooka','Phra Upakud','Phynnodderee','Pigwidgin','Pillywiggins','Pixie','Plaksy','Plant Rhys Dwfen','Poj Ntxoog','Poki','Pop','Portunes','Prester John','Psezpolnica','Puck','puntianak','Red Cap','Revenant','River of the Princess','Robin Hood','Roblón','Roc','Roland','Rübenzahl','Rusalka','Sací-Pererê','Safat','Sand-Man','Santa Claus','Sarut','Sasquatch','Satirmu','Scheherezade','Sciritae','Scratch','Sea Serpent','Sea Witches','Seelie Court','Selkie','Seua Saming','Shellycoat','Shivering Boy The','sianach','Sidhe','Sigbin','Skogsfru','Skrat','Sleeping Beauty The','sleih veggey yn','Sluag','Sluagh','Spriggan','Sprite','Squant','sthich','Stilzel','Stockwell Ghost','Stray Sod','Struthopodes','Su','Succubus','suileach','Swan May','Swiza','Sylph','Szepasszony','Table Mountain','Tai Hong','Tamawo','Tangie','tarbh uisge','tarroo ushtey','Tatzlwurm','Tavara','Tentirujo','Thayè','Thule','Tianak','Tiddy Ones','Tikbalang','Tomte','Trasgu','Trenti','Troll','Trow','tunnerez noz','Tutivillus','Tylwyth Teg','Uilepheist','Ukoy','Undine','Unicorn','Unseelie Court','Urisk','Vadleany','Vampire','Vättar','Vegetable Lamb','Ventolines','Venusleute','Vitore','Vodnik','Vodyanoi','Vrykolakas','Waldmar King','Walpurgis Night','Wandering Jew','Water Leaper','Werewolf','Will-o-the-wisp','Witte Wieven','Wyvern','Xanas','Xindhi','Yali','Yeti','Zips','Zwarte Madam'	
	],
	
	spaceMarineNames: [
		"Jago","Argel","Gal","Malithos","Cel","Sariel","Talos","Vandred","Eurydice","Ruven","Xarl","Cyrion","Raguel","Maruc","Cassian","Barek","Armanneus","Garlon","Garreon","Kaldemar","Sartak","Variel","Demetar","Darnath","Lexandro","Fafnir","Xeros","Franz","Phosis","Kheron","Tovac","Fal","Koor","Orrin","Anvrex","Ghilus","Phael","Amon","Ankhu","Mhotep","Revuel","Hedara","Azhtar","Herume","Mordant","Hakor","Hasophet","Julius","Solomon","Marius","Saul","Azael","Ravasch","Von","Callion","Jihar","Zarghan","Kadalus","Atesh","Pyriel","Sevatarion","Raldoron","Tal","Vorbak","Corswain","Herec","Stronos","Ferron","Mercutian","Valcoran","Octavian","Anrathi","Malcharion","Mervallion","Montress","Adhemar","Vaughn","Zytos","Corgon","Valthex","Kursh","Kurskt","Prayd","Halbrecht","Polux","Tyr","Lycus","Loken","Hargrim","Boreas","Romuald","Thane","Gorr","Lysander","Taelos","Garadon","Octavius","Rann","Dantarian","Koorland","Carnak","Nereus","Mordelai","Nidon","Julan","Gauthard","Furan","Halasker","Naraka","Ophion","Hellath","Jakr","Jexad","Kergai","Kur","Maas","Skraivok","Silvadi","Tyridal","Berenon","Valzen","Thandos","Rushal","Decimus","Darjyr","Hemek","Vasylisk","Rarth","Venst","Arvida","Promalac","Daast","Manutec","Aphael","Hex","Khayon","Madox","Myrath","Naratt","Temekh","Tolbek","Kaesoron","Demetor","Vairosean","Tarvitz","Kleos","Ruen","Kalimos","Heliton","Daimon","Illios","Cario","Charmosion","Kalda","Zevan","Lorimarr","Lyras","Revellian","Orlantir","Leodrakk","Tarsa","Nemetor","Nubis","Ushorak","Volos","Toharan","Keryon","Urgaresh","Thorast","Skarh","Ghaan","Jerrak","Neroth"
	],	
		
	chance: function(chancePercent) {
		return ( (magicSpellGen.ranNum(1,100) <= chancePercent) ? true : false );
	},
	
	ranNum: function(min,max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;	
	},
	
	selectFrom: function(arr) {
		return arr[magicSpellGen.ranNum(0, arr.length-1)]; 
	},
					
	regex: {
		removeWhitespaces: function(str){
			return str.replace(/\s/g, "");
		},
		
		removeSpecialChars: function(str) {
			return str.replace(/[.]|[,]|[']|[-]/g, ""); 
		}	
	},
	
	capitalize: function(str) {
		return str.charAt(0).toUpperCase() + str.substr(1);
	},
	
	toTitleCase: function(str) {
		var words = str.split(" ");
		for (let i = 0; i < words.length; i++) {
		  words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
		}
		return words.join(" ");
	},

		
	buildFantasyName: function(arr) {
		//Pick one item from the two arrays and combine to form a new unique name
		var app = magicSpellGen;
		return app.selectFrom(app.fantasyCombi1) + app.selectFrom(app.fantasyCombi2); 
	},	
	
	buildFolkName: function() {
		//Pick two folk names, cut both and combine to form a new unique folk name 
		var app = magicSpellGen, ranNum = app.ranNum, selectFrom = app.selectFrom;
		var part1 = (selectFrom(app.folkNames)).toLowerCase();
		part1 = part1.charAt(0).toUpperCase() + part1.substr(1, ranNum(1,5));
		part1 = app.regex.removeWhitespaces(part1);
		part1 = app.regex.removeSpecialChars(part1);
		var part2 = (selectFrom(app.folkNames)).toLowerCase();
		part2 = app.regex.removeWhitespaces(part2);
		part2 = app.regex.removeSpecialChars(part2);
		part2 = part2.substring(part2.length - (ranNum(2, 6)), part2.length); // cut by the end of string
		return part1 + part2;	 
	},	
	
	getSpaceMarineName: function() { 
		var app = magicSpellGen; 
		return app.selectFrom(app.spaceMarineNames);
	},
	
	getCharacterName: function() { 
		var app = magicSpellGen; 
		var arrPossible = [app.buildFantasyName, app.buildFolkName, app.getSpaceMarineName];
		return app.selectFrom(arrPossible)();
	},	
	
	
	createName: function(elem) {
		var app = magicSpellGen;
		var elem = app.selectFrom(app.elements);		
		// (adj) spell (of poss) 		
		
		var adj = app.capitalize(app.selectFrom(app.adjectives[elem]));	
		var spell = app.capitalize(app.selectFrom(app.spells, app.weapons));	
		var noun = app.selectFrom(app.nouns[elem]); //blast of magma
		var charName = app.getCharacterName(); //blast of Nuirn
		
		var poss = app.selectFrom([noun, charName]);
		poss = app.capitalize(poss);
		poss = "of " + poss;


		var str = "";
		
		var useAdj = app.ranNum(0,1);
		
		if(useAdj == 1) {
			str += adj + " ";
		}
		
		str += spell;
		
		if(useAdj == 1) {
			if (app.chance(50)) { str += " " + poss;}
		} else {
			str += " " + poss;
		}
		
		console.log(str+ " ("+app.capitalize(elem)+")");		
		return str;		
		
	},
	
	getName: function() {
		var app = magicSpellGen;
		var elem = app.selectFrom(app.elements);
		return app.createName(elem);
	},
	
	getElementalName: function(elem) {
		return app.createName(elem);
	}
}
