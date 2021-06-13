const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers =["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers=[];
let responses=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question(`Candidate Name: `);
}

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let candidateAnswer = input.question(question);

  return candidateAnswer;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
let grade;

 let correctAnswersLowerCased =[];

  //Convert reponses to lower case
  for(let i = 0; i < responses.length; i++){
    candidateAnswers.push(responses[i].toLowerCase());
  }
  //convert correctAnswer to lower case
  for(let i=0; i < correctAnswers.length; i++){
    correctAnswersLowerCased.push(correctAnswers[i].toLowerCase());
  }

let score = 0;


for(let i = 0; i < questions.length; i++){
  if(correctAnswers[i].toLowerCase()===responses[i].toLowerCase()){
      score += 1;
      console.log(`\n\n${i+1})${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
                 
}else{
       console.log(`${i+1}) ${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
  }
}

grade = (score/correctAnswers.length)*100;
let status;
if(grade >= 80){
  status ="Passed";
}else{
  status = "Failed";
}

console.log(`>>> Overall Grades: ${grade}% (${score} out of ${correctAnswers.length}) <<<\n`);
console.log(`>>> Status: ${status} <<<\n`);


  
 return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Greetings, "+ candidateName)
  for(let i = 0; i < questions.length; i++){
  
  responses[i] = askQuestion(questions[i]);
  
 }
  // askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};