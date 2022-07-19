import Record from "../database/Record.js";

class InputView {
    
    #record = new Record();
    #callback;

    constructor(onRecordAvailable) {
        this.#callback = onRecordAvailable;
        document.querySelectorAll("select[name=subject]").forEach((el) => el.addEventListener("change", (event) => this.onSubjectChanged(event)));
        document.querySelectorAll("#user .user-data-selector").forEach((el) => el.addEventListener("change", (event) => this.onUserDataChanged(event)));
        document.querySelector("#user input[type=button").addEventListener("click", () => this.onSendButtonClicked());
    }

    onSubjectChanged(event) {
        let color = event.target.closest(".folder-container").className.split(" ")[1],
            subject = event.target.value;
        this.#record.updateSubjectFor(color, subject);
    }

    onUserDataChanged(event) {
        switch (event.target.name) {
            case "age":
                this.#record.updateAge(event.target.value);
                break;
            case "start-school-year":
                this.#record.updateYearStart(event.target.value);
                break;
            case "end-school-year":
                this.#record.updateYearEnd(event.target.value);
                break;
            case "state":
                this.#record.updateState(event.target.value);
                break;
            default:
                break;

        }
    }

    onSendButtonClicked() {
        this.#callback(this.#record);
    }

    hideUserInput() {
        document.querySelector("#user").classList.add("hidden");
    }
}

export default InputView;