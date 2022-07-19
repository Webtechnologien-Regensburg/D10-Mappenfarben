class Record {

    age;
    yearStart;
    yearEnd;
    state;
    subjectForGreen;
    subjectForBlue;
    subjectForRed;
    subjectForYellow;
    subjectForOrange;
    subjectForBlack;

    updateAge(age) {
        this.age = age;
    }

    updateYearStart(year) {
        this.yearStart = year;
    }

    updateYearEnd(year) {
        this.yearEnd = year;
    }

    updateState(state) {
        this.state = state;
    }

    updateSubjectFor(color, subject) {
        switch (color) {
            case "green":
                this.subjectForGreen = subject;
                break;
            case "blue":
                this.subjectForBlue = subject;
                break;
            case "red":
                this.subjectForRed = subject;
                break;
            case "yellow":
                this.subjectForYellow = subject;
                break;
            case "orange":
                this.subjectForOrange = subject;
                break;
            case "black":
                this.subjectForBlack = subject;
                break;
            default:
                break;
        }
    }

    validate() {
        return (this.age !== undefined && this.yearStart !== undefined && this.yearEnd !== undefined && this.state !== undefined && this.subjectForGreen !== undefined && this.subjectForBlue !== undefined && this.subjectForRed !== undefined && this.subjectForYellow !== undefined && this.subjectForOrange !== undefined && this.subjectForBlack !== undefined);
    }
}

export default Record;