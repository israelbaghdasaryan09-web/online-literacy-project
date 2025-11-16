document.getElementById('check-quiz').addEventListener('click', function() {
    let score = 0;
    const totalQuestions = 3;

    // Ստանալ ընտրված պատասխանները
    const q1_answer = document.querySelector('input[name="q1"]:checked')?.value;
    const q2_answer = document.querySelector('input[name="q2"]:checked')?.value;
    const q3_answer = document.querySelector('input[name="q3"]:checked')?.value;
    
    // Ստուգում 1
    if (q1_answer === 'b') {
        score++;
    }

    // Ստուգում 2
    if (q2_answer === 'a') {
        score++;
    }

    // Ստուգում 3
    if (q3_answer === 'b') {
        score++;
    }

    // Արդյունքի Ցուցադրում
    const resultElement = document.getElementById('quiz-result');
    resultElement.innerHTML = `Դուք հավաքեցիք **${score} / ${totalQuestions}** միավոր։`;

    if (score === totalQuestions) {
        resultElement.className = 'quiz-success';
        resultElement.innerHTML += '<br>Շնորհավորում ենք։ Դուք գերազանց եք տիրապետում ֆիշինգից պաշտպանվելու կանոններին։';
    } else if (score >= 1) {
        resultElement.className = 'quiz-warning';
        resultElement.innerHTML += `<br>Ձեր արդյունքն է ${score}։ Խնդրում ենք վերանայել նյութը և ուշադրություն դարձնել սխալներին։`;
    } else {
        resultElement.className = 'quiz-fail';
        resultElement.innerHTML += '<br>Խնդրում ենք կրկին ուսումնասիրել նյութը։';
    }
});