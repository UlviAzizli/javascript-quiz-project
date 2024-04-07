class Quiz {
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

     getQuestion() {
        return this.questions[this.currentQuestionIndex];
     }
    


    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }


    shuffleQuestions() {
        for(let i = this.questions.length; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[random]] = [this.questions[random], this.questions[i]];
        }
    }


    checkAnswer(answer) {
        if(this.getQuestion().answer === answer) {
            this.correctAnswers++
        }
    }


    hasEnded() {
        if(this.currentQuestionIndex < this.questions.length) {
            return false;
        } else  {
            return true;
        }
    }


    filterQuestionsByDifficulty(difficulty) {
        if(typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
            return;
        }
       this.questions = this.questions.filter(question => question.difficulty === difficulty);
    }

    averageDifficulty() {
       const sumQuestionsDifficulty = this.questions.reduce((acc, question) => {
        return acc + question.difficulty;
       }, 0);
       const averageQuestionsDifficulty = sumQuestionsDifficulty / this.questions.length;
       return averageQuestionsDifficulty;
    }
}