'use strict';

// Controller is created for quiz flow .

angular.module('quizApp',[])
  .controller('quizAppController', ['$scope','$http','quizFactory','$timeout',
    function ($scope,$http,quizFactory,$timeout) {
    $scope.level_score=0;
	$scope.total_score=0;
	$scope.counter=0
	var quizData=quizFactory.getQuizData();
	var total_marks=(parseInt(quizData.questions.level[0]._total_questions)* parseInt(quizData.questions.level[0]._points_per_question))+(parseInt(quizData.questions.level[1]._total_questions)* parseInt(quizData.questions.level[1]._points_per_question))+(parseInt(quizData.questions.level[2]._total_questions)* parseInt(quizData.questions.level[2]._points_per_question))
	console.log(total_marks);
	var total_levels=quizData.questions.level.length;
	$scope.currentQuestn=0;
	$scope.currentLevel=0;
	$scope.level_completed=false;
	$scope.show_total_quiz=false;
	
	$scope.onTimeout = function () {
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout, 1000);
    };
    var mytimeout = $timeout($scope.onTimeout, 1000);
 
   //watch the timer for each question....
	$scope.$watch('counter', checkTime);
	function checkTime() {
       if($scope.show_total_quiz)
		{
			$scope.stop();
		}else
		{
        if ($scope.counter ===$scope.time_limit) {
           alert("your time is over for this question");
		$scope.currentQuestn++;
		$scope.loadQuiz()
	}
		}
    }
	
    $scope.stop = function () {
        $timeout.cancel(mytimeout);
    }
	//when option was selected...
	$scope.selectAnswer=function(option)
    {
		$scope.counter=0;
	if(option===$scope.answer)
	 {
	$scope.level_score=parseInt($scope.level_score)+parseInt($scope.points_per_question);
	 }
	// alert($scope.level_score);
	 $scope.currentQuestn++;
	 $scope.loadQuiz()
	 
   if(($scope.currentQuestn)==$scope.level_total_questions)
   {
   $scope.level_completed=true;	
   $scope.total_score=$scope.total_score+$scope.level_score;
   if($scope.currentLevel===total_levels-1)
   {
	   
			 $scope.show_total_quiz=true;
			var percentage=($scope.total_score/total_marks)*100
			//console.log(percentage)
		
			if(percentage=0)
			{
			
			$scope.result=quizData.final_score_rules.rule[0].__text
			}
			  if(percentage<=25||percentage<50)
			  {
		
			  $scope.result=quizData.final_score_rules.rule[1].__text
			  }
			else if(percentage=50||percentage<75)
			  {
			
			  $scope.result=quizData.final_score_rules.rule[2].__text
			  }
			 else if(percentage=75||percentage<100)
			  {
			  	
			  $scope.result=quizData.final_score_rules.rule[3].__text
			  }
			else  if(percentage=75||percentage<100)
			  {
			 	
			  $scope.result=quizData.final_score_rules.rule[4].__text
			  }
			  
			
		}
	
	 }
	};
 
 
 //LOAD NEXT LEVEL......
	$scope.LoadNextLevel=function()
	{
		$scope.counter=0;
		$scope.level_completed=false;
		$scope.currentLevel++;
		 $scope.level_score=0;
		 $scope.currentQuestn=0;
		 $scope.loadQuiz();
	};
		 
	
//LOAD QUIZ WITH LEVEL/	
	$scope.loadQuiz=function()
	{
	var level_data=quizData.questions.level[$scope.currentLevel].question;
	level_data=level_data.sort(function () {
      return Math.random() - 0.9;
     })
	 
	$scope.item=level_data[$scope.currentQuestn];
	$scope.time_limit=parseInt(quizData.questions.level[$scope.currentLevel]._seconds_per_question);
	$scope.level_title=quizData.questions.level[$scope.currentLevel]._title;
	$scope.question=$scope.item.title;
	for(var i=0;i<$scope.item.answer.length;i++)
	{
	if($scope.item.answer[i]._correct)
		
		{
		$scope.answer=$scope.item.answer[i].__text;
		$scope.item.answer[i]=$scope.item.answer[i].__text;
		}
		
		}
	$scope.level_total_questions=quizData.questions.level[$scope.currentLevel]._total_questions
	$scope.points_per_question=quizData.questions.level[$scope.currentLevel]._points_per_question
	$scope.options=$scope.item.answer;
   $scope.counter=0;
	}
	}
  ]);
