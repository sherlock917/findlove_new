var win = this;
var libs = [
	{
		mark : 0,
		name : "白羊座",
		match : 8,
		feature : "白羊座的你冲动、爱冒险、慷慨、天不怕地不怕，而且一旦下定决心就会全力以赴。性格与爱情多数“横冲直撞”，但纯真的个性里没有杀伤力，所以不用太担心。白羊座是黄道第一宫，因此他最喜欢成为第一的强者星座……"
	},
	{
		mark : 1,
		name : "金牛座",
		match : 9,
		feature : "金牛座的你不会急躁冲动，只有忍耐，而且还是非常顽固，态度稳定，处世相当慎重，凡事总是考虑后再过滤，属于大器晚成型，情思也比较晚开。但只要一发起脾气来，往往没有人能够阻止。他不喜欢变动，安稳是他的生活态度，一旦决定了的事他不喜欢去改变……"
	},
	{
		mark : 2,
		name : "双子座",
		match : 10,
		feature : "双子座的你在性格方面的最大特征是具有极敏锐的观察力。手艺十分灵巧，在各方面也都能表现出自己的才能。然而也就犯了样样都懂，却样样不精的毛病。变化速度快如风的星座。双重性格常搞的别人和自己头痛万分，对于事业与爱情，如果肯多花点心思经营，应该会是很好的。"
	},
	{
		mark : 3,
		name : "巨蟹座",
		match : 11,
		feature : "巨蟹座的你充满母爱，对外亲和谦恭，颇有公众意识，但是对内则有强烈的防卫本能，不愿私生活受到干扰，非常需要爱与安定的星座。爱猜疑的个性，使你处处显得缺乏安全感，但是带著母爱光辉的你，为了所爱倒是心甘情愿的付出。"
	},
	{
		mark : 4,
		name : "狮子座",
		match : 0,
		feature : "狮子座的你是讲究气派华丽的星座。你有冲劲，虽然粗枝大叶，但为人讲义气，也蛮有人缘。阳光、热情、自信、大方都是狮子的特质。天生的领导才能，喜欢指挥别人和有强大的组织能力，不过过份自信变成自大，有时令人不知如何与狮子相处……"
	},
	{
		mark : 5,
		name : "处女座",
		match : 1,
		feature : "处女座的你追求完美，挑剔和神经紧张，厌不合理的事。有时你并非刻意要去找别人的麻烦，只是天性中便有爱挑毛病的习惯，因此，往往得不到真相。缺乏信心的个性，常在潜意识里责怪自己不够美好；但天生的优点就是放得开，不会就此一蹶不振。"
	},
	{
		mark : 6,
		name : "天秤座",
		match : 2,
		feature : "天秤座的人外型优雅、亲切善良、朋友缘极好、喜欢听别人倾诉，沟通力又强，只不过有犹豫不决的大毛病。对于善恶两极端的想法、保持着很平衡的状态，这是天秤座的个性。天秤座的你生活是平凡和快乐的，你会永远保持绝不受伤害的八面玲珑、圆滑态度，所以，不喜欢表现出内心的真相。"
	},
	{
		mark : 7,
		name : "天蝎座",
		match : 3,
		feature : "天蝎座的你神秘诡谲，令人费疑猜的星座，表面上看似十分静，内心似乎充满着用不完的充沛活动力，拥有惊人的耐力以及意志力。可以很执著，也可以很破坏；在爱情的国度里黑白分明，没有灰色地带，他们对於自己的目标相当清楚，一旦确立就往前冲。天蝎座的人报复心很强，而且又稍胆小，故对保护自己特别敏感。"
	},
	{
		mark : 8,
		name : "射手座",
		match : 4,
		feature : "射手座的人射手座的人乐观、诚实、热情、喜欢挑战，不过很容易浮躁不安，鲁莽行事，是自由浪漫也滥情的星座。不爱受约束的个性使他们很怕被捆绑，多情的天性也使他们四处寻求猎物；性情天真，常会伤了人也不自觉，他是十二宫星座的冒险家，热爱旅行、喜欢赌博性的活动，为人变化多端，有双重牲格的特质"
	},
	{
		mark : 9,
		name : "魔羯座",
		match : 5,
		feature : "摩羯座是严谨刻板，稳重老成的星座，通常以事业为主的，一切都从最现实的观点出发，脚踏实地的从零做起，并追求实实在在的结果。如同攀登山峰一样，摩羯的光辉前程，需要用坚持不懈的努力去换取。他不喜欢碌碌无为，无所事事，在实际感的促使下，他会不断地改进自己的工作质量和生活环境。。虽然他们一向给人呆板的印象，但是呆板的人普遍说来不太耍花样；不管是在事业或爱情上，他们也都以这份特殊气质获胜！"
	},
	{
		mark : 10,
		name : "水瓶座",
		match : 6,
		feature : "水瓶座的人颇富知性，且具有锐利的观察力、推测能力、一样的不爱受约束，一样的博爱，富有冒险的开拓精神。求知欲逐渐加强后，会对任何事物都深入去思考，对于社会种种的不平等以及矛盾现象，总产生怀疑的态度或不平之心，而逐渐倾向反传统的思想。他们较著重於精神层次的提升，是很好的启发对象。"
	},
	{
		mark : 10,
		name : "双鱼座",
		match : 7,
		feature : "人类因为有梦想而伟大，双鱼座因为有梦想才长大。双鱼座的你多愁敏感，脆弱而容易受伤害，爱作梦、幻想。天生多情，使他们常为情字挣扎，情绪的波动起伏也跟脱不了关系；但他们生性柔弱，很喜欢奉献，也不会随意伤人。双鱼座集中了十二星座所有的优点和缺点于一体，由代表双鱼座的两条游向相反的鱼所可以知道这是多重矛盾的一个星座；加上情绪化，可想而知双鱼座的人是多么复杂……"
	}
];


win.Constellation = {
	libs : libs,
	analysis : function(birth){
		var objs = birth.split("-");
		var month = parseInt(objs[1],10);
		var day = parseInt(objs[2],10);
		switch(month){
			case 1 :
				if(day <= 19)
					return  win.Constellation.libs[9];
				else
					return win.Constellation.libs[10];
				break;
			case 2 : 
				if(day <= 18)
					return  win.Constellation.libs[10];
				else
					return win.Constellation.libs[11];
				break;
			case 3 : 
				if(day <= 20)
					return  win.Constellation.libs[11];
				else
					return win.Constellation.libs[0];
				break;
			case 4 : 
				if(day <= 20)
					return  win.Constellation.libs[0];
				else
					return win.Constellation.libs[1];
				break;
			case 5 : 
				if(day <= 20)
					return  win.Constellation.libs[1];
				else
					return win.Constellation.libs[2];
				break;
			case 6 : 
				if(day <= 21)
					return  win.Constellation.libs[2];
				else
					return win.Constellation.libs[3];
				break;
			case 7 : 
				if(day <= 22)
					return  win.Constellation.libs[3];
				else
					return win.Constellation.libs[4];
				break;
			case 8 : 
				if(day <= 22)
					return  win.Constellation.libs[4];
				else
					return win.Constellation.libs[5];
				break;
			case 9 : 
				if(day <= 22)
					return  win.Constellation.libs[5];
				else
					return win.Constellation.libs[6];
				break;
			case 10 : 
				if(day <= 22)
					return  win.Constellation.libs[6];
				else
					return win.Constellation.libs[7];
				break;
			case 11 : 
				if(day <= 21)
					return  win.Constellation.libs[7];
				else
					return win.Constellation.libs[8];
				break;
			case 12 : 
				if(day <= 21)
					return  win.Constellation.libs[8];
				else
					return win.Constellation.libs[9];
				break;
		}
		
	},
	match : function(obj,year,month,day){

	}
};

