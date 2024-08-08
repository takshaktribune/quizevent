// Questions and Answers
const questions = [
        {
            question: "1.What does CPU stand for?",
            options: ["Central Processing Unit", "Central Program Unit", "Central Personal Unit", "Computer Personal Unit"],
            answer: "Central Processing Unit"
        },
        {
            question: "2.Which part of the computer performs calculations and logical operations?",
            options: ["RAM", "CPU", "Monitor"],
            answer: "CPU"
        },
        {
            question: "3.What is the primary function of RAM in a computer?",
            options: ["Store data permanently", "Store data temporarily", "Process data", "Display data"],
            answer: "Store data temporarily"
        },
        {
            question: "4.Which of the following is an input device?",
            options: ["Printer", "Monitor", "Keyboard", "Speaker"],
            answer: "Keyboard"
        },
        {
            question: "5.What is the purpose of an operating system?",
            options: ["To manage hardware and software resources", "To perform calculations", "To create documents", "To display images"],
            answer: "To manage hardware and software resources"
        },
        {
            question: "6.Which of these is not an operating system?",
            options: ["Windows", "Linux", "Microsoft Office", "macOS"],
            answer: "Microsoft Office"
        },
        {
            question: "7.What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
            answer: "Uniform Resource Locator"
        },
        {
            question: "8.Which software is used for word processing?",
            options: ["Photoshop", "Excel", "Word", "PowerPoint"],
            answer: "Word"
        },
        {
            question: "9.What is the full form of HTML?",
            options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Hypertext and Media Language", "Hyperlink Text Management Language"],
            answer: "Hypertext Markup Language"
        },
        {
            question: "10.Which one of these is a web browser?",
            options: ["Microsoft Word", "Adobe Photoshop", "Google Chrome", "VLC Media Player"],
            answer: "Google Chrome"
        },
        {
            question: "11.What does LAN stand for?",
            options: ["Local Area Network", "Large Area Network", "Linked Area Network", "Local Access Network"],
            answer: "Local Area Network"
        },
        {
            question: "12.Which device is used to connect to the internet?",
            options: ["Mouse", "Modem", "Printer", "Monitor"],
            answer: "Modem"
        },
        {
            question: "13.Which of the following is a non-volatile storage medium?",
            options: ["RAM", "Cache", "SSD", "CPU Register"],
            answer: "SSD"
        },
        {
            question: "14.Which key is used to delete the character to the right of the cursor?",
            options: ["Backspace", "Enter", "Delete", "Shift"],
            answer: "Delete"
        },
        {
            question: "15.What is the purpose of a firewall?",
            options: ["To manage network traffic", "To protect against unauthorized access", "To provide internet connectivity", "To enhance graphics performance"],
            answer: "To protect against unauthorized access"
        },
        {
            question: "16.Which type of software helps in managing files and folders?",
            options: ["Web browser", "File Manager", "Word Processor", "Spreadsheet"],
            answer: "File Manager"
        },
        {
            question: "17.What does GUI stand for?",
            options: ["Graphical User Interface", "General User Interface", "Graphical Unique Interface", "General Unique Interface"],
            answer: "Graphical User Interface"
        },
        {
            question: "18.Which of the following is a popular email client?",
            options: ["Microsoft Excel", "Microsoft Outlook", "Adobe Illustrator", "Google Chrome"],
            answer: "Microsoft Outlook"
        },
        {
            question: "19.What is the main function of an antivirus software?",
            options: ["To increase system performance", "To manage network traffic", "To protect the system from malware", "To create backups"],
            answer: "To protect the system from malware"
        },
        {
            question: "20.Which file extension is typically associated with a Word document?",
            options: [".txt", ".jpg", ".docx", ".xlsx"],
            answer: ".docx"
        },
        {
            question: "21.What is the function of a printer?",
            options: ["Input", "Output", "Storage", "Processing"],
            answer: "Output"
        },
        {
            question: "22.Which of these is an example of an operating system?",
            options: ["Google Docs", "Windows 10", "Adobe Reader", "Notepad"],
            answer: "Windows 10"
        },
        {
            question: "23.What is the function of the 'Save As' command?",
            options: ["To save a file with a new name", "To print a file", "To open a file", "To delete a file"],
            answer: "To save a file with a new name"
        },
        {
            question: "24.Which of these is a type of software license?",
            options: ["Open Source", "Local Network", "File Transfer Protocol", "Hypertext Transfer Protocol"],
            answer: "Open Source"
        },
        {
            question: "25.What is the primary purpose of a database management system (DBMS)?",
            options: ["To manage and organize data", "To edit images", "To create animations", "To browse the internet"],
            answer: "To manage and organize data"
        }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    document.getElementById('next-button').addEventListener('click', nextQuestion);
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';
    showQuestion();
}
