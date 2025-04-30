// 題庫範例（實際可擴充至25題，範例只列出2題）
const questions = [
    {
        question: "Information is printed on _______ sides of the paper.",
        options: ["both", "all", "each", "either"],
        answer: 0,
        explanation: "sides 為複數，只有 both（兩者的）正確；all 用於三者以上，each/either 不適用於複數。"
    },
    {
        question: "Because he doesn't have enough money in his account, Paul _______ cash the checks he made out to me.",
        options: [
            "asked me not to",
            "asked me don't",
            "didn't ask me",
            "asked me not"
        ],
        answer: 0,
        explanation: "正確用法為 ask someone not to do something。"
    },
    // ...（請補足至25題，涵蓋多益與托福常見文法題型）
];

// 錯誤類型分析
const errorTypes = [
    "限定詞用法",
    "動詞片語",
    "時態",
    "主被動",
    "代名詞",
    "連接詞",
    "介系詞",
    "比較級",
    "語意判斷",
    "慣用語",
    "句型結構",
    "詞性選擇",
    "其他"
];

document.addEventListener('DOMContentLoaded', () => {
    const questionList = document.getElementById('question-list');
    const quizForm = document.getElementById('quiz-form');
    const scoreSection = document.getElementById('score-section');
    const scoreSpan = document.getElementById('score');
    const scoreAnalysis = document.getElementById('score-analysis');
    const resultSection = document.getElementById('result-section');
    const resultDetails = document.getElementById('result-details');

    // 顯示所有題目
    questions.forEach((q, idx) => {
        const li = document.createElement('li');
        li.className = 'question-card';
        li.innerHTML = `
      <div class="question-text">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label class="option-label">
            <input type="radio" name="q${idx}" value="${i}" required>
            ${String.fromCharCode(65 + i)}. ${opt}
          </label>
        `).join('')}
      </div>
    `;
        questionList.appendChild(li);
    });

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 收集答案
        let score = 0;
        const wrongs = [];
        const userAnswers = [];
        for (let i = 0; i < questions.length; i++) {
            const radios = document.getElementsByName(`q${i}`);
            let selected = -1;
            for (let r = 0; r < radios.length; r++) {
                if (radios[r].checked) {
                    selected = parseInt(radios[r].value);
                    break;
                }
            }
            userAnswers[i] = selected;
            if (selected === questions[i].answer) {
                score++;
            } else {
                wrongs.push({ idx: i, user: selected });
            }
        }

        // 顯示分數
        scoreSpan.textContent = score;
        scoreSection.classList.remove('hidden');

        // 錯誤類型統計
        // 這裡可根據題庫資料設計每題對應錯誤類型，以下為簡化範例
        const errorCount = {};
        wrongs.forEach(w => {
            // 假設每題有 errorType 屬性，這裡用 "其他"
            const type = questions[w.idx].errorType || "其他";
            errorCount[type] = (errorCount[type] || 0) + 1;
        });

        // 分析顯示
        let analysisHTML = '';
        if (wrongs.length === 0) {
            analysisHTML = '<span style="color:var(--correct);font-weight:bold;">全部答對，太厲害了！</span>';
        } else {
            analysisHTML = '<b>需加強類型：</b><ul>';
            for (const [type, count] of Object.entries(errorCount)) {
                analysisHTML += `<li>${type}：${count} 題</li>`;
            }
            analysisHTML += '</ul>';
        }
        scoreAnalysis.innerHTML = analysisHTML;

        // 顯示詳細解析
        resultDetails.innerHTML = '';
        questions.forEach((q, i) => {
            const isCorrect = userAnswers[i] === q.answer;
            const userSelected = userAnswers[i];
            const correctText = q.options[q.answer];
            const userText = userSelected >= 0 ? q.options[userSelected] : "未作答";
            resultDetails.innerHTML += `
        <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="result-title">
            ${i + 1}. ${q.question}
          </div>
          <div>
            您的答案：${userText} 
            ${isCorrect ? '<span style="color:var(--correct);">✔ 正確</span>' : '<span style="color:var(--incorrect);">✘ 錯誤</span>'}
          </div>
          ${!isCorrect ? `
            <div>正確答案：<b>${correctText}</b></div>
            <div class="result-explanation">解析：${q.explanation}</div>
          ` : ''}
        </div>
      `;
        });

        resultSection.classList.remove('hidden');
        // 滾動到分數區
        scoreSection.scrollIntoView({ behavior: 'smooth' });
    });
});
