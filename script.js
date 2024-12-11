document.getElementById('generateButton').addEventListener('click', generateIdea);

function generateIdea() {
    const ideas = [
        {
            name: "スマート農業プラットフォーム",
            need: "農業の効率化と収穫量の向上",
            solution: "IoTセンサーとAIを活用した農業管理システム"
        },
        {
            name: "リモートワーク支援ツール",
            need: "リモートワークの生産性向上",
            solution: "仮想オフィスとタスク管理機能を統合したプラットフォーム"
        },
        {
            name: "健康管理アプリ",
            need: "個人の健康管理と予防医療",
            solution: "日々の健康データを記録し、AIが健康アドバイスを提供"
        }
    ];

    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>${idea.name}</h2>
        <p><strong>解決するニーズ:</strong> ${idea.need}</p>
        <p><strong>ニーズの解決方法:</strong> ${idea.solution}</p>
    `;
}