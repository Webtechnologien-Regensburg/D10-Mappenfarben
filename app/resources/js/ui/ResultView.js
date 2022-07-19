class ResultView {

    #color;
    #database;

    constructor(color, database) {
        this.#color = color;
        this.#database = database;
    }

    async load() {
        let results = await this.#database.runQuery(`SELECT ${this.#color} AS subject, COUNT(${this.#color}) AS frequency FROM data GROUP BY ${this.#color} ORDER BY frequency DESC`),
            sum = 0,
            resultsElement = document.querySelector(`.${this.#color} .usage`);
        results.resultSet.forEach((result) => sum += result.frequency);
        results.resultSet.forEach((result) => {
            let el = document.createElement("li"),
                percentage = Math.floor((result.frequency / sum) * 100); // eslint-disable-line no-magic-numbers
            el.innerHTML = `<li>\
            <span class="subject">${result.subject}</span>\
            <span class="percentage-number">${percentage}</span>\
        </li>`;
            resultsElement.append(el);
        });
        resultsElement.classList.remove("hidden");
    }

}

export default ResultView;