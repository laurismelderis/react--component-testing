const phishingQuizzes = [
  {
    id: "1",
    question: "What is phishing?",
    options: [
      { id: "1", text: "A method of catching fish using a baited hook" },
      {
        id: "2",
        text: "A fraudulent attempt to obtain sensitive information by posing as a trustworthy entity",
      },
      {
        id: "3",
        text: "A type of malware that encrypts files and demands a ransom for their release",
      },
      {
        id: "4",
        text: "An online game where players pretend to be different characters",
      },
    ],
    type: "single",
    answers: [2],
  },
  {
    id: "2",
    question:
      "Which of the following is a common tactic used in email phishing?",
    options: [
      {
        id: "5",
        text: "Sending personalized emails only to friends and family",
      },
      { id: "6", text: "Attaching a virus to an email for malicious purposes" },
      { id: "7", text: "Using a strong password for email security" },
      {
        id: "8",
        text: "Asking for sensitive information like passwords or credit card details",
      },
    ],
    type: "single",
    answers: [3],
  },
  {
    id: "3",
    question: "What is spear phishing?",
    options: [
      { id: "9", text: "A type of fishing done in deep-sea waters" },
      {
        id: "10",
        text: "A targeted phishing attack that focuses on a specific individual or organization",
      },
      { id: "11", text: "Phishing with a spear instead of a fishing rod" },
      { id: "12", text: "An underwater phishing attack" },
    ],
    type: "single",
    answers: [10],
  },
  {
    id: "4",
    question: "How can you identify a suspicious link in an email?",
    options: [
      { id: "13", text: "By clicking on it and checking the destination" },
      {
        id: "14",
        text: "By looking for spelling errors or unusual characters in the URL",
      },
      { id: "15", text: "By ignoring it, as all links in emails are safe" },
      { id: "16", text: "By forwarding the email to friends for verification" },
    ],
    type: "single",
    answers: [13],
  },
  {
    id: "5",
    question: "What is HTTPS?",
    options: [
      { id: "17", text: "Hypertext Transfer Protocol Security" },
      { id: "18", text: "Highly Targeted Email Phishing System" },
      {
        id: "19",
        text: "Home-based Technology for Ensuring Personal Security",
      },
      { id: "20", text: "Hyperlink and Textual Security Protocol" },
    ],
    type: "single",
    answers: [17],
  },
  {
    id: "6",
    question: "What is a common social engineering tactic used in phishing?",
    options: [
      { id: "21", text: "Offering free antivirus software" },
      {
        id: "22",
        text: "Impersonating a trusted authority to manipulate individuals into divulging confidential information",
      },
      { id: "23", text: "Sending genuine emails without any ulterior motive" },
      {
        id: "24",
        text: "Asking for permission before sending phishing emails",
      },
    ],
    type: "single",
    answers: [22],
  },
  {
    id: "7",
    question:
      "Which of the following are signs of a phishing email? (Select all that apply)",
    options: [
      { id: "25", text: "The email is from a known and trusted sender" },
      { id: "26", text: "Urgent language and threats if action is not taken" },
      { id: "27", text: "Generic greetings like 'Dear Customer'" },
      { id: "28", text: "Embedded forms requesting sensitive information" },
    ],
    type: "multiple",
    answers: [26, 27, 28],
  },
  {
    id: "8",
    question: "How can you protect yourself from mobile phishing attacks?",
    options: [
      { id: "29", text: "Install a reputable mobile antivirus app" },
      {
        id: "30",
        text: "Share your mobile number in response to unknown messages",
      },
      { id: "31", text: "Disable screen lock for convenience" },
      { id: "32", text: "Use the same password across all your mobile apps" },
    ],
    type: "single",
    answers: [29],
  },
]

module.exports = phishingQuizzes
