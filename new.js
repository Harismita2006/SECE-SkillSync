document.getElementById('userInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    let userInput = this.value.trim();
    if (userInput) {
      const result = processQuestion(userInput);
      const responseContainer = document.getElementById('responseContainer');
      responseContainer.textContent = result;
      console.log('Response:', result);
    }
    this.value = '';
  }
});


function processQuestion(userQuestion) {
  const questionLowerCase = userQuestion.toLowerCase();
  let isContextMatch = false;
  let response = '';

  const context = [
    'Cognizant Interview Questions',
    'Capgemini Interview Questions',
    
  ];

  for (const contextItem of context) {
    if (questionLowerCase.includes(contextItem.toLowerCase())) {
      isContextMatch = true;
      response = getResponseForContextItem(contextItem);
      break;
    }
  }

  if (isContextMatch) {
    return response;
  } else {
    return 'I am tuned to only answer questions related to the provided context.';
  }
}

function getResponseForContextItem(contextItem) {
  let response = '';

  switch (contextItem) {
    case 'Cognizant Interview Questions':
      response = 'Here are some interview questions for Cognizant: ...\nQ21. What are the different data types in C?\nAnswer: Data types in C are used to store different kinds of information.Primary data types like integers (int), floating-point numbers (float), characters (char), and doubles (double) represent basic values.\nDerived data types like arrays, structures, and unions allow you to group and manage data more effectively.\nQ2. Briefly explain what a function is in programming.\nAnswer: A function in programming is a reusable block of code that performs a specific task. It can take input values (parameters) and optionally return an output value. Functions promote code modularity, reusability, and organization.\nQ3. Explain the concept of loops in C.\nAnswer: Loops in C are powerful tools for repeating a block of code a specific number of times or until a certain condition is met. Common loops include while loops, for loops, and do-while loops, which execute a code block a predetermined number of times.\nWhile Loops: It continues a query execution as long as a condition remains true\nDo-while Loops: It executes the code block at least once before checking the condition.\nQ24. What is the difference between a structure and a union in C?\nAnswer: Both structures and unions are user-defined data types that group variables under a single name. However, they differ in how they manage memory allocation. Structures allocate separate memory locations for each member variable, allowing them to hold different data types simultaneously. Unions, on the other hand, share the same memory location for all members, meaning only one member can have a value at a time.\nQ5. What are the different access modifiers in a class (e.g., public, private, protected) and how do they affect visibility?\nAnswer: Access modifiers are keywords that control access to class members (variables, methods) from other parts of the program.\nPublic: They are accessible from anywhere in the program.\nPrivate: They are only accessible within the same class.\nProtected: They are accessible within the same class and subclasses (inheritance).\nAccess modifiers help manage data encapsulation and prevent unintended modifications from other parts of the code.\nQ6. Briefly explain inheritance in object-oriented programming.\nAnswer: Inheritance is a fundamental concept in object-oriented programming that allows the creation of new classes (derived classes) that inherit properties and methods from existing classes (base classes). This promotes code reusability and simplifies development by enabling derived classes to leverage functionalities established in the base class, potentially with modifications or extensions.';
      break;
    case 'Capgemini Interview Questions':
      response = 'Here are some interview questions for Capgemini: ...';
      break;
    

    default:
      response = 'I am not equipped to answer questions related to this context item.';
      break;
  }

  return response;
}