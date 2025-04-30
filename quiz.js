// quiz.js

// 25題多益/托福常見文法題庫，含解析、題型
const questions = [
    {
        question: "She _____ to the office every day.",
        options: ["go", "goes", "going", "gone"],
        answer: 1,
        explanation: "主詞 She 為第三人稱單數，動詞需加 s，正確為 goes。",
        type: "動詞變化"
    },
    {
        question: "If I _____ enough money, I would buy a new car.",
        options: ["have", "had", "has", "having"],
        answer: 1,
        explanation: "If 虛擬語氣，與現在事實相反，應用過去式 had。",
        type: "假設語氣"
    },
    {
        question: "Our human resources department will help you acclimate to the San Francisco area __________ your arrival there.",
        options: ["when", "while", "upon", "if"],
        answer: 2,
        explanation: "upon arrival = 一到達時，upon 表示動作發生的時點。",
        type: "介系詞"
    },
    {
        question: "For being the top ________ real estate saleswoman of the quarter, Susan Miller received the accolades of her manager.",
        options: ["produce", "production", "produced", "producing"],
        answer: 3,
        explanation: "producing 修飾 saleswoman，作為現在分詞形容詞。",
        type: "形容詞"
    },
    {
        question: "Your accommodations at the Pan-Pacific Hotel in Vancouver __________ been confirmed for two nights.",
        options: ["having", "has", "have", "have to"],
        answer: 2,
        explanation: "accommodations 為複數，需用 have。",
        type: "主謂一致"
    },
    {
        question: "President Smith's ________ assistant will accompany her on her trip to New York this week.",
        options: ["executing", "executive", "execution", "executable"],
        answer: 1,
        explanation: "executive assistant（特助）為常見職稱，需用 executive。",
        type: "形容詞"
    },
    {
        question: "Talks have broken off because the two companies have been unable ________ an accord.",
        options: ["to reach", "reaching", "reach", "they reached"],
        answer: 0,
        explanation: "be unable to + 原形動詞，正確為 to reach。",
        type: "不定詞"
    },
    {
        question: "The manager asked that the report ________ by Friday.",
        options: ["is finished", "be finished", "was finished", "has finished"],
        answer: 1,
        explanation: "ask that + 原形動詞，為虛擬語氣，正確為 be finished。",
        type: "假設語氣"
    },
    {
        question: "The new policy will be implemented ________ January 1st.",
        options: ["on", "in", "at", "by"],
        answer: 0,
        explanation: "日期前用 on，正確為 on January 1st。",
        type: "介系詞"
    },
    {
        question: "Neither the manager nor the employees ________ satisfied with the new schedule.",
        options: ["is", "are", "was", "be"],
        answer: 1,
        explanation: "nor 連接，靠近動詞的主詞為複數，故用 are。",
        type: "主謂一致"
    },
    {
        question: "The project, ________ was delayed by weather, is now complete.",
        options: ["who", "which", "where", "when"],
        answer: 1,
        explanation: "先行詞為物，需用 which。",
        type: "關係代名詞"
    },
    {
        question: "He is responsible ________ preparing the monthly report.",
        options: ["to", "for", "of", "with"],
        answer: 1,
        explanation: "be responsible for 為固定用法。",
        type: "介系詞"
    },
    {
        question: "The documents ________ yesterday.",
        options: ["was sent", "were sent", "sent", "are sent"],
        answer: 1,
        explanation: "documents 為複數，且 yesterday 表過去，故用 were sent。",
        type: "被動語態"
    },
    {
        question: "She was late ________ the heavy traffic.",
        options: ["because", "because of", "due", "so"],
        answer: 1,
        explanation: "because of + 名詞，正確為 because of the heavy traffic。",
        type: "連接詞"
    },
    {
        question: "He has worked here ________ five years.",
        options: ["since", "for", "during", "from"],
        answer: 1,
        explanation: "for + 一段時間，正確為 for five years。",
        type: "介系詞"
    },
    {
        question: "The company will hire more staff ________ the workload increases.",
        options: ["unless", "if", "although", "since"],
        answer: 1,
        explanation: "if 表條件，正確為 if the workload increases。",
        type: "連接詞"
    },
    {
        question: "Not only the students but also the teacher ________ present.",
        options: ["are", "is", "were", "be"],
        answer: 1,
        explanation: "not only...but also... 動詞依靠近者，teacher 為單數，故用 is。",
        type: "主謂一致"
    },
    {
        question: "The meeting was postponed ________ the CEO's absence.",
        options: ["because", "because of", "although", "so"],
        answer: 1,
        explanation: "because of + 名詞，正確為 because of the CEO's absence。",
        type: "連接詞"
    },
    {
        question: "He is ________ than his brother.",
        options: ["tall", "taller", "tallest", "as tall"],
        answer: 1,
        explanation: "比較級，兩者比較用 taller。",
        type: "比較級"
    },
    {
        question: "If she ________ harder, she would have passed the exam.",
        options: ["studied", "had studied", "studies", "studying"],
        answer: 1,
        explanation: "與過去事實相反，if + had + p.p.，正確為 had studied。",
        type: "假設語氣"
    },
    {
        question: "We cannot count on ________ changing their negotiating position because their response to our latest offer was adamant.",
        options: ["they", "their", "them", "theirs"],
        answer: 1,
        explanation: "count on one's + V-ing，需用所有格 their。",
        type: "所有格"
    },
    {
        question: "The addendum to the agreement has yet to be formulated but ________ crucial points which must be worded carefully.",
        options: ["include", "includes", "including", "its including"],
        answer: 1,
        explanation: "主詞為單數 addendum，故用 includes。",
        type: "主謂一致"
    },
    {
        question: "Please note that the address which is listed on our business card has been changed ________ 512 Valencia Avenue.",
        options: ["in", "on", "by", "to"],
        answer: 3,
        explanation: "change to + 新地址，正確為 to。",
        type: "介系詞"
    },
    {
        question: "I would like to send this letter by ________ return receipt so that the addressee will have to sign for it.",
        options: ["certify", "certification", "certifiable", "certified"],
        answer: 3,
        explanation: "by certified return receipt 為固定用法。",
        type: "形容詞"
    },
    {
        question: "________ our program this afternoon, the meeting will be adjourned promptly at 5:00 p.m.",
        options: ["In accordance by", "To accord with", "According to", "Accord in"],
        answer: 2,
        explanation: "According to + 名詞，正確為 According to our program。",
        type: "連接詞"
    }
];

// 錯誤類型對應的加強建議
const typeAdvice = {
    "動詞變化": "請加強第三人稱單數動詞變化規則。",
    "假設語氣": "請複習 If 虛擬語氣的結構與用法。",
    "時態": "請複習動詞時態的基本用法。",
    "介系詞": "請多練習常見介系詞搭配。",
    "關係代名詞": "請複習 who, which, that 等關係代名詞用法。",
    "主謂一致": "請複習主詞與動詞一致的規則。",
    "被動語態": "請複習主動與被動語態的轉換。",
    "連接詞": "請加強連接詞的正確使用時機。",
    "比較級": "請複習比較級與最高級的用法。",
    "所有格": "請複習所有格與動名詞的搭配。",
    "不定詞": "請複習 to + 原形動詞的用法。",
    "形容詞": "請複習形容詞與分詞修飾名詞的用法。"
};

const questionList = document.getElementById('question-list');
const quizForm = document.getElementById('quiz-form');
const scoreSection = document.getElementById('score-section');
const scoreSpan = document.getElementById('score');
const summaryDiv = document.getElementById('summary');
const analysisSection = document.getElementById('analysis-section');
const analysisList = document.getElementById('analysis-list');

// 動態產生題目
function renderQuestions() {
    questionList.innerHTML = '';
    questions.forEach((q, idx) => {
        const block = document.createElement('li');
        block.className = 'question-block';
        block.innerHTML = `
      <div class="question-title">${idx + 1}. ${q.question}</div>
      <div class="options">
        ${q.options.map((opt, i) =>
            `<div class="option">
            <input type="radio" name="q${idx}" id="q${idx}o${i}" value="${i}">
            <label for="q${idx}o${i}">${opt}</label>
          </div>`
        ).join('')}
      </div>
    `;
        questionList.appendChild(block);
    });
}

// 統計錯誤類型
function countErrorTypes(results) {
    const errorCount = {};
    results.forEach(r => {
        if (!r.correct) {
            errorCount[r.type] = (errorCount[r.type] || 0) + 1;
        }
    });
    return errorCount;
}

// 顯示總結與建議
function showSummary(score, results) {
    scoreSpan.textContent = score;
    const errorTypes = countErrorTypes(results);
    if (score === questions.length) {
        summaryDiv.textContent = "恭喜全對！英文文法基礎扎實！";
    } else {
        let html = "需加強：";
        if (Object.keys(errorTypes).length === 0) {
            html += "請檢查未作答題目。";
        } else {
            html += Object.entries(errorTypes).map(([type, cnt]) =>
                `${type}（${cnt}題）：${typeAdvice[type] || ""}`
            ).join("<br>");
        }
        summaryDiv.innerHTML = html;
    }
}

// 顯示題目解析
function showAnalysis(results) {
    analysisList.innerHTML = '';
    results.forEach((r, idx) => {
        const block = document.createElement('div');
        block.className = 'analysis-block ' + (r.correct ? 'correct' : 'incorrect');
        block.innerHTML = `
      <div class="analysis-title">${idx + 1}. ${questions[idx].question}</div>
      <div>
        ${r.correct
            ? `<span class="analysis-correct">✔ 正確</span>`
            : `<span class="analysis-incorrect">✘ 錯誤</span>
            <br>您的答案：${r.yourAnswer !== null && r.yourAnswer !== undefined ? questions[idx].options[r.yourAnswer] : '未作答'}
            <br>正確答案：${questions[idx].options[questions[idx].answer]}
            <br>解析：${questions[idx].explanation}
            <br>建議：${typeAdvice[questions[idx].type] || ''}`
        }
      </div>
    `;
        analysisList.appendChild(block);
    });
}

// 送出表單
quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const results = [];
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const radios = document.getElementsByName(`q${i}`);
        let selected = null;
        for (let r = 0; r < radios.length; r++) {
            if (radios[r].checked) {
                selected = parseInt(radios[r].value, 10);
                break;
            }
        }
        const correct = selected === questions[i].answer;
        if (correct) score++;
        results.push({
            correct,
            yourAnswer: selected,
            type: questions[i].type
        });
    }
    showSummary(score, results);
    showAnalysis(results);
    scoreSection.classList.remove('hidden');
    analysisSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 初始化
renderQuestions();
