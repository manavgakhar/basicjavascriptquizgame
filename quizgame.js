console.log("connected");

var questions=["The metal whose salts are sensitive to light is ?","Which soil is suitable for agriculture ?","The World's Largest desert is ?"]

var options=[['Zinc','Silver','Copper','Aluminium'],['Red Soil',"Sand","Black Soil","Peaty"],['Thar','Kalahari','Gobi','Sahara']]

var correct=["D","B","D"];

var question=document.getElementById("question");

var option=document.getElementsByClassName("opt_text");

var buttons=document.querySelectorAll("#btt");

var score=document.getElementById("bleh");

var last=document.getElementById("last");

var score_count=0;

question.innerText=questions[2];
	count=0;
	options[2].forEach(function(item){
	option[count].innerText=item;
	count++;
});

var i=0
function main(i){
	if(i<2){
	question.innerText=questions[i];
	count=0;
	options[i].forEach(function(item){
	option[count].innerText=item;
	count++;
});
}
	else if(i>=2){
		score.innerText="score is: "+score_count;
		question.innerText="Thank you for playing";
		last.innerText="";
		
	}
}

console.log(buttons);

buttons.forEach(function(item){
	item.addEventListener("click",function(){
		if(item.innerText===correct[i]){
			score_count+=1;
		}
		main(i);
		

		
		i=i+1;
		
	})
});


















