import RemoteSQLiteDatabase from "./database/RemoteSQLiteDatabase.js";
import InputView from "./ui/InputView.js";
import ResultView from "./ui/ResultView.js";

const database = new RemoteSQLiteDatabase();

let inputView;

async function init() {
    console.log("### Starting WebTech-App ###"); // eslint-disable-line no-console
    database.connect();
    inputView = new InputView(onRecordAvailable);
}

async function onRecordAvailable(record) {
    if (record.validate()) {
        await database.insertRecord(record);
    }
    inputView.hideUserInput();
    ((new ResultView("green", database))).load();
    ((new ResultView("blue", database))).load();
    ((new ResultView("red", database))).load();
    ((new ResultView("yellow", database))).load();
    ((new ResultView("orange", database))).load();
    ((new ResultView("black", database))).load();
}

init();