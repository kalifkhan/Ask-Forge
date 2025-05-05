export default function generatePromptFromPayload({ content, complexity, levels }) {
    const levelDescriptions = {
      L1: "Beginner - understands basic concepts and syntax.",
      L2: "Intermediate - able to apply concepts and solve problems.",
      L3: "Advanced - can design and optimize systems or processes.",
      L4: "Expert - mastery level including edge cases, performance, and architecture.",
    };
  
    const levelSection = levels
      .map((level) => `${level}: ${levelDescriptions[level]}`)
      .join("\n");
  
    return `
  You are a Subject Matter Expert (SME) helping to generate assessment questions.
  
  Context:
  ${content}
  
  Instruction:
  Based on the above context, generate questions with the following requirements:
  - Complexity: ${complexity}
  - Proficiency Levels: ${levels.join(", ")}
  - Each level should have at least 3 unique questions.
  - Every set of 5 questions should include at least 1 Yes/No type question.
  - Each question should include answer options.
  - Avoid duplication, ensure variety in question types.
  
  Proficiency Level Definitions:
  ${levelSection}
  
  Output:
  For each level, return questions in this format:
  {
    "level": "L1",
    "complexity": "${complexity}",
    "question": "What is encapsulation in Java?",
    "response_type": "Single/Multiple/YesNo",
    "question_type": "Scenario/Syntax/Conceptual/etc.",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct_answer": "Option A"
  }
  `.trim();
  }