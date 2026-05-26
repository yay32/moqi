const questions = [
  {
    category: "daily",
    text: "对方心情不好时，你通常能多快察觉？",
    options: [
      { text: "一个眼神或语气变化就能感觉到", points: 10 },
      { text: "相处一会儿后基本能发现", points: 8 },
      { text: "需要对方说出来才比较确定", points: 5 },
      { text: "经常等事情过去了才后知后觉", points: 2 },
    ],
  },
  {
    category: "daily",
    text: "你们对周末安排的偏好一致吗？",
    options: [
      { text: "很一致，几乎不用商量就能想到一起", points: 10 },
      { text: "大方向一致，细节会互相迁就", points: 8 },
      { text: "常常不同，但能轮流满足彼此", points: 6 },
      { text: "差异很大，经常因为安排纠结", points: 3 },
    ],
  },
  {
    category: "daily",
    text: "你知道对方最近最想吃什么或最想去哪里吗？",
    options: [
      { text: "知道，而且能说出具体名字", points: 10 },
      { text: "大概知道是哪一类", points: 8 },
      { text: "偶尔能猜中", points: 5 },
      { text: "基本要问了才知道", points: 2 },
    ],
  },
  {
    category: "memory",
    text: "你们会记得彼此提过的小事吗？",
    options: [
      { text: "会，常常把小事变成惊喜或照顾", points: 10 },
      { text: "重要的会记得，偶尔也有小惊喜", points: 8 },
      { text: "记得一些，但不太稳定", points: 5 },
      { text: "很少记住，更多是当下回应", points: 2 },
    ],
  },
  {
    category: "memory",
    text: "聊起共同回忆时，你们的版本通常怎样？",
    options: [
      { text: "细节都能对上，还会补充彼此忘掉的地方", points: 10 },
      { text: "主要情节一致，细节各自记得不同", points: 8 },
      { text: "只有某些片段记得很清楚", points: 5 },
      { text: "常常像在回忆两件事", points: 2 },
    ],
  },
  {
    category: "love",
    text: "你清楚对方最吃哪种表达爱意的方式吗？",
    options: [
      { text: "很清楚，也会主动用对方喜欢的方式表达", points: 10 },
      { text: "大概知道，平时也有在做", points: 8 },
      { text: "知道一点，但容易按自己的方式表达", points: 5 },
      { text: "不太确定对方真正需要什么", points: 2 },
    ],
  },
  {
    category: "love",
    text: "你们在外人面前的亲密边界一致吗？",
    options: [
      { text: "一致，都知道怎样让对方舒服", points: 10 },
      { text: "基本一致，偶尔会提醒一下", points: 8 },
      { text: "有差异，但能沟通调整", points: 6 },
      { text: "经常有人觉得太多或太少", points: 3 },
    ],
  },
  {
    category: "love",
    text: "对方需要安全感时，你最常给出的回应是？",
    options: [
      { text: "先安抚情绪，再认真解释和行动", points: 10 },
      { text: "会解释，也愿意补一个拥抱或承诺", points: 8 },
      { text: "会讲道理，但有时忽略情绪", points: 5 },
      { text: "容易急着证明自己，沟通会卡住", points: 2 },
    ],
  },
  {
    category: "future",
    text: "你们对未来一年的期待一致吗？",
    options: [
      { text: "很一致，目标和节奏都聊过", points: 10 },
      { text: "方向一致，还有些细节没定", points: 8 },
      { text: "各有想法，但愿意慢慢对齐", points: 6 },
      { text: "很少聊未来，想到时会有点不确定", points: 3 },
    ],
  },
  {
    category: "future",
    text: "遇到花钱、旅行、生活安排这类选择时，你们通常？",
    options: [
      { text: "会一起权衡，很少让某一方委屈", points: 10 },
      { text: "能商量出结果，偶尔需要磨合", points: 8 },
      { text: "常常一方先让步，之后再调整", points: 5 },
      { text: "容易变成争执或沉默", points: 2 },
    ],
  },
  {
    category: "deep",
    text: "你了解对方最近真正的压力来源吗？",
    options: [
      { text: "了解，而且知道怎样陪伴不添乱", points: 10 },
      { text: "大概了解，会主动关心", points: 8 },
      { text: "知道一些表面原因", points: 5 },
      { text: "不太清楚，对方也很少说", points: 2 },
    ],
  },
  {
    category: "deep",
    text: "吵架之后，你们通常怎么修复？",
    options: [
      { text: "能复盘问题，也会照顾情绪", points: 10 },
      { text: "冷静后能说开，多数不会过夜", points: 8 },
      { text: "会和好，但问题有时没有真正解决", points: 5 },
      { text: "靠时间淡化，容易反复出现同类矛盾", points: 2 },
    ],
  },
  {
    category: "deep",
    text: "你们能接受彼此有不同的节奏和爱好吗？",
    options: [
      { text: "能，并且会真心支持对方做自己", points: 10 },
      { text: "大多能接受，偶尔需要确认边界", points: 8 },
      { text: "有时会不安，但愿意沟通", points: 6 },
      { text: "容易把不同理解成不够爱", points: 3 },
    ],
  },
  {
    category: "daily",
    text: "如果对方突然沉默，你第一反应通常是？",
    options: [
      { text: "先判断TA需要空间还是陪伴", points: 10 },
      { text: "温和问一句，给TA选择", points: 8 },
      { text: "会担心，但不一定知道怎么做", points: 5 },
      { text: "容易误会成冷淡或生气", points: 2 },
    ],
  },
  {
    category: "love",
    text: "你们平时会主动表达喜欢和感谢吗？",
    options: [
      { text: "经常表达，爱意不只放在心里", points: 10 },
      { text: "重要时会说，日常也有行动", points: 8 },
      { text: "行动多，说出口比较少", points: 6 },
      { text: "很少表达，默认对方应该懂", points: 3 },
    ],
  },
  {
    category: "future",
    text: "你们有没有共同的小仪式？",
    options: [
      { text: "有，而且一直在认真延续", points: 10 },
      { text: "有几个，只是不一定固定", points: 8 },
      { text: "偶尔会有，看心情和时间", points: 5 },
      { text: "几乎没有，但可以从今天开始", points: 3 },
    ],
  },
];

const categoryNames = {
  all: "混合题",
  daily: "日常偏好",
  memory: "共同回忆",
  love: "表达爱意",
  future: "未来计划",
  deep: "深层理解",
};

const $ = (selector) => document.querySelector(selector);

const state = {
  deck: [],
  round: 0,
  score: 0,
  maxScore: 0,
  answers: [],
};

const els = {
  roundCount: $("#roundCount"),
  categorySelect: $("#categorySelect"),
  startBtn: $("#startBtn"),
  quizArea: $("#quizArea"),
  resultArea: $("#resultArea"),
  turnLabel: $("#turnLabel"),
  questionTitle: $("#questionTitle"),
  categoryTag: $("#categoryTag"),
  roleHint: $("#roleHint"),
  choiceList: $("#choiceList"),
  scoreNow: $("#scoreNow"),
  progressBar: $("#progressBar"),
  resultTitle: $("#resultTitle"),
  resultText: $("#resultText"),
  resultMeter: $("#resultMeter"),
  restartBtn: $("#restartBtn"),
  newSetBtn: $("#newSetBtn"),
};

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildDeck() {
  const category = els.categorySelect.value;
  const amount = Number(els.roundCount.value);
  const pool = category === "all" ? questions : questions.filter((item) => item.category === category);
  return shuffle(pool).slice(0, Math.min(amount, pool.length));
}

function startQuiz() {
  state.deck = buildDeck();
  state.round = 0;
  state.score = 0;
  state.answers = [];
  state.maxScore = state.deck.length * 10;
  els.quizArea.classList.remove("hidden");
  els.resultArea.classList.add("hidden");
  document.querySelector(".hero").classList.add("hidden");
  renderRound();
}

function renderRound() {
  const question = state.deck[state.round];
  els.turnLabel.textContent = `第 ${state.round + 1} 题 / 共 ${state.deck.length} 题`;
  els.questionTitle.textContent = question.text;
  els.categoryTag.textContent = categoryNames[question.category];
  els.roleHint.textContent = "选择最符合你们真实相处状态的一项";
  els.scoreNow.textContent = state.score;
  els.progressBar.style.width = `${(state.round / state.deck.length) * 100}%`;
  els.choiceList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${option.text}</strong>`;
    button.addEventListener("click", () => chooseAnswer(option, index));
    els.choiceList.appendChild(button);
  });
}

function chooseAnswer(option, index) {
  state.score += option.points;
  state.answers.push({
    question: state.deck[state.round].text,
    choice: index,
    points: option.points,
  });
  state.round += 1;

  if (state.round >= state.deck.length) {
    showResult();
    return;
  }

  renderRound();
}

function showResult() {
  const percent = Math.round((state.score / state.maxScore) * 100);
  let title = "温柔同频";
  let text = "你们有不错的默契，也愿意为彼此调整。那些分数没满的题，正适合在散步或睡前慢慢聊开。";

  if (percent >= 88) {
    title = "心有灵犀";
    text = "你们很懂彼此的情绪、偏好和边界，爱意不是只靠猜，而是被一次次认真看见。";
  } else if (percent >= 72) {
    title = "稳定同频";
    text = "你们已经形成了舒服的相处节奏，偶尔不同步也能靠沟通补上，是很可靠的一组默契。";
  } else if (percent >= 55) {
    title = "正在靠近";
    text = "你们有不少相互理解的地方，也还有新的题目值得一起探索。分数不是终点，答案背后的聊天才是。";
  } else {
    title = "重新认识";
    text = "你们可能还在学习彼此的表达方式。别急着给关系下结论，从一两个具体习惯开始靠近就很好。";
  }

  els.quizArea.classList.add("hidden");
  els.resultArea.classList.remove("hidden");
  els.resultTitle.textContent = `${title} · ${percent} 分`;
  els.resultText.textContent = text;
  els.resultMeter.style.width = `${percent}%`;
  els.progressBar.style.width = "100%";
}

els.startBtn.addEventListener("click", startQuiz);
els.restartBtn.addEventListener("click", () => {
  document.querySelector(".hero").classList.remove("hidden");
  els.resultArea.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
els.newSetBtn.addEventListener("click", startQuiz);
