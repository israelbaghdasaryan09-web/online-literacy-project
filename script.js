document.getElementById('check-quiz').addEventListener('click', function() {
    let score = 0;
    const totalQuestions = 3;
    let feedbackHTML = ''; // Բացատրությունների համար նախատեսված նոր փոփոխական

    // Ճիշտ պատասխաններ և Բացատրություններ
    const questionsData = [
        { id: 1, correct: 'b', explanation: 'Հարց 1: Այս հղումը կեղծ է։ Պաշտոնական կայքերը երբեք չեն օգտագործում կասկածելի դոմեյններ։ Միշտ ստուգեք հղումը։' },
        { id: 2, correct: 'a', explanation: 'Հարց 2: Ճիշտ նշաններից մեկն այն է, որ նամակը պահանջում է անհապաղ գործողություն, ինչը ֆիշինգի տիպիկ նշան է։' },
        { id: 3, correct: 'b', explanation: 'Հարց 3: Երկփուլային նույնականացումը (2FA) անվտանգության լավագույն մեթոդն է, քանի որ այն պահանջում է ոչ միայն գաղտնաբառ, այլև Ձեր հեռախոսի կոդը։' }
    ];

    // Ստուգում բոլոր հարցերը
    questionsData.forEach(q => {
        const selectedAnswer = document.querySelector(`input[name="q${q.id}"]:checked`)?.value;
        const questionResultElement = document.getElementById(`question-result-${q.id}`); // Եթե ունեք առանձին դաշտեր ամեն հարցի տակ

        // Դատարկում ենք նախորդ ցուցադրումը
        if (questionResultElement) {
            questionResultElement.innerHTML = '';
        }

        if (selectedAnswer) {
            if (selectedAnswer === q.correct) {
                score++;
            } else {
                // Ավելացնել բացատրությունը feedbackHTML-ին
                feedbackHTML += `<div class="explanation-box error">❌ Հարց ${q.id}՝ Սխալ է։ **Ինչու՞ սխալ.** ${q.explanation}</div>`;
            }
        } else {
            // Եթե պատասխան չի ընտրվել
            feedbackHTML += `<div class="explanation-box warning">Հարց ${q.id}՝ Խնդրում ենք, ընտրել պատասխան։</div>`;
        }
    });
    
    // Արդյունքի Ցուցադրում
    const resultElement = document.getElementById('quiz-result');
    resultElement.innerHTML = `Դուք հավաքեցիք **${score} / ${totalQuestions}** միավոր։`;

    // Ընդհանուր կարգավիճակի ոճավորում
    if (score === totalQuestions) {
        resultElement.className = 'quiz-success';
        resultElement.innerHTML += '<br>Շնորհավորում ենք։ Դուք գերազանց եք տիրապետում կանոններին։';
    } else if (score >= 1) {
        resultElement.className = 'quiz-warning';
        resultElement.innerHTML += `<br>Ձեր արդյունքն է ${score}։ Խնդրում ենք վերանայել նյութը և ուշադրություն դարձնել սխալներին։`;
    } else {
        resultElement.className = 'quiz-fail';
        resultElement.innerHTML += '<br>Խնդրում ենք կրկին ուսումնասիրել նյութը։';
    }

    // Ավելացնել բացատրությունները հիմնական արդյունքի տակ
    resultElement.innerHTML += feedbackHTML; 
});
