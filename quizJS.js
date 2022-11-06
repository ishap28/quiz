
var score = 0;
var home = document.getElementById("home-page")
var startBtn = document.getElementById("start");
var quiz = document.getElementById("quiz-page");
var submit = document.getElementById("submit");
var next = document.getElementById("next");
var question = document.getElementById("question");
var op1 = document.getElementById("opt1");
var op2 = document.getElementById("opt2");
var op3 = document.getElementById("opt3");
var op4 = document.getElementById("opt4");
var ansKey = document.getElementById("answerKey");
var res = document.getElementById("restart");
var ele = document.getElementsByTagName("input");
var time = document.getElementById("time");

const ARRanswers = ["All of the Above", "Both A & B", "Var", "Xmlns", "It is used to structure documents", "Transitions", "Defaultstatus", "a wrapper", "XML is used to describe hierarchically organized information", "Orthogonal Hotspot Tool"];

const questions = [
	{
		id : 1,
		ques : "1. Which of the following JavaScript cannot do?",
		option1 : " JavaScript can react to events",
		option2 : " JavaScript can manipulate HTML elements",
		option3 : " JavaScript can be use to validate data",
		option4 : " All of the Above",
		correctAns : "ans4"
	},
	{
		id : 2,
		ques : "2. Whats so great about XML?",
		option1 : " Easy data exchange",
		option2 : " High speed on network",
		option3 : " Only B.is correct",
		option4 : " Both A & B",
		correctAns : "ans4"
	},
	{
		id : 3,
		ques : "3. _________ keyword is used to declare variables in javascript.",
		option1 : " Var",
		option2 : " Dim",
		option3 : " String",
		option4 : " None of the above",
		correctAns : "ans1"
	},
	{
		id : 4,
		ques : "4. The attribute used to define a new namespace is.",
		option1 : " XMLNS",
		option2 : " XmlNameSpace",
		option3 : " Xmlns",
		option4 : " XmlNs",
		correctAns : "ans3"
	},
	{
		id : 5,
		ques : "5. Which of the following options is correct with regard to HTML?",
		option1 : " It is a modelling language",
		option2 : " It is a scripting language",
		option3 : " It is a partial programming language",
		option4 : " It is used to structure documents",
		correctAns : "ans4"
	},
	{
		id : 6,
		ques : "6. Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
		option1 : " Associations",
		option2 : " Transitions",
		option3 : " Transistor",
		option4 : " None of the above",
		correctAns : "ans2"
	},
	{
		id : 7,
		ques : "7. ____________ is the tainted property of a window object.",
		option1 : " Pathname",
		option2 : " Protocol",
		option3 : " Defaultstatus",
		option4 : " Host",
		correctAns : "ans3"
	},
	{
		id : 8,
		ques : "8. In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
		option1 : " a wrapper",
		option2 : " a link",
		option3 : " a cursor",
		option4 : " a form",
		correctAns : "ans1"
	},
	{
		id : 9,
		ques : "9. Identify the most accurate statement about the application of XML:",
		option1 : " XML must be used to produce XML and HTML output",
		option2 : " XML cannot specify or contain presentation information",
		option3 : " XML is used to describe hierarchically organized information",
		option4 : " XML performs the conversion of information between different e-business applications",
		correctAns : "ans3"
	},
	{
		id : 10,
		ques : "10. Which of the following is NOT a Hotspot tool?",
		option1 : " Orthogonal Hotspot Tool",
		option2 : " Rectangular Hotspot Tool",
		option3 : " Oval Hotspot Tool",
		option4 : " Polygon Hotspot Tool",
		correctAns : "ans1"
	},
];

var stimer = 600;
var clock;

function uncheckALL(){
	for(var i=0; i<ele.length; i++){
			if(ele[i].type == "radio"){
				if(ele[i].checked){
					ele[i].checked = false;
				}

			}
	}
}



startBtn.addEventListener("click", commenceTest);
var q = 0;

function finalFinish(){
	quiz.style.display = "none";
	ansKey.style.display = "block";
	var sc = document.getElementById("scoreS");
	sc.innerHTML = "SCORE : " + score;

	var correctans = document.getElementById("correctAns"); 
	for(var i=0; i<questions.length; i++){

		var item = document.createElement("h3");
		item.setAttribute("id", "i");
		item.style.margin = "5px";
		// var cAns = questions[i].correctAns;
		var str = ARRanswers[i];
		var final = str.fontcolor("white");
		item.innerHTML = questions[i].ques + " : " + final ;
		correctans.appendChild(item);
	}
}

function commenceTest(event){
	//start timer
	clock = setInterval(function(){

		if(stimer==0){
			//stop timer and submit
			finalFinish();
		}

		var mm = parseInt((stimer/60)%60);
		var ss = parseInt(stimer%60);

		time.innerHTML = mm + " m " + ss + " s";

		stimer--;
	},1000);


	//hide given page data
	home.style.display = "none";
	quiz.style.display = "block";
	submit.disabled = false;
	submit.innerHTML = "Submit";
	uncheckALL();

	question.innerHTML = questions[q].ques;
	op1.innerHTML = questions[q].option1;
	op2.innerHTML = questions[q].option2;
	op3.innerHTML = questions[q].option3;
	op4.innerHTML = questions[q].option4;
}

//read selected option and compare with correct ans
submit.addEventListener("click", handleSubmit);


function handleSubmit(event){
	//read selected ans
	
	var sel;


	//uncheck all
	

	for(var i=0; i<ele.length; i++){
		if(ele[i].type == "radio"){
			if(ele[i].checked){
				sel = ele[i].id;
			}

		}
	}
	//check correct or incorrect
	if(sel !== undefined){
		if(sel == questions[q].correctAns){
			submit.innerHTML = "correct";
			submit.style.color = "red";
			score++;
		}
		else{
			submit.innerHTML = "incorrect";
			submit.style.backgroundColor = "red";
			submit.style.color = "yellow";
		}
	
		submit.disabled = true;

		
		
	}
	
}

next.addEventListener("click", handleNext);

function someCode(q){
	console.log(q);
	submit.innerHTML = "submit";
	submit.style.backgroundColor = "lightblue";
	submit.style.color = "floralwhite";
	submit.disabled = false;
	if(q<10){
		question.innerHTML = questions[q].ques;

	}
	op1.innerHTML = questions[q].option1;
	op2.innerHTML = questions[q].option2;
	op3.innerHTML = questions[q].option3;
	op4.innerHTML = questions[q].option4;

	var ele = document.getElementsByTagName("input");
	var sel;
	for(var i=0; i<ele.length; i++){
		if(ele[i].type == "radio"){
			if(ele[i].checked){
				sel = ele[i].id;
			}

		}
	}
	//correct
	if(sel !== undefined){
		if(sel == questions[q].correctAns){
			submit.innerHTML = "correct";
			submit.style.color = "red";
			score++;
		}
		else{
			submit.innerHTML = "incorrect";
			submit.style.backgroundColor = "red";
			submit.style.color = "yellow";
		}
	
		submit.disabled = true;

	}

}


                                //HANDLE NEXT BUTTON

function handleNext(event){
	uncheckALL();
	submit.disabled = false;
	submit.innerHTML = "Submit";
	q++;

	if(q==9){
		next.innerHTML = "Finish test";
		
		someCode(q);

		next.addEventListener("click", handleFinish);

	}

	else if(q<9){
		
		someCode(q);
	
	}
		

}

                    //HANDLE FINISH BUTTON

//display result page
function handleFinish(event){
	
	//clear clock and reset stimer
	setTimeout(function() {
		clearInterval(clock);
	},0);
	finalFinish();
	

}

                       // HANDLE RESET BUTTON



res.addEventListener("click", handleRes);
function handleRes(event) {
	q = 0;
	score = 0;

	stimer = 600;

	next.innerHTML = "Next";
	for(var i=0; i<10; i++){
		var element = document.getElementById("i");
		element.remove();
	}
	home.style.display = "block";
	quiz.style.display = "none";
	ansKey.style.display = "none";
	next.removeEventListener("click", handleFinish);
	startBtn.addEventListener("click", commenceTest);
	
}	



