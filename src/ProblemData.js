
 
const ProblemData ={
    "d1": {
    "status" : false,
    "id": "1",
      "title": "Palindrome",
      "descriptionhtml": "Program to check if a string is Palindrome",
      "constraints": "Empty string should return true",
      "example": [
        {
          "exampleid": "1",
          "input": "sheep",
          "output": "false",
          "explanation": "sheep not equals its reverse form peehs"
        },
        {
          "exampleid": "2",
          "input": "malayalam",
          "output": "state={myData}",
          "explanation": "malayalam equals its reverse malayalam"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"sheep",
        "testOutput":"false"        
      },
      {
        "testId":"2",
        "testInput":"malayalam",
        "testOutput":"true"        
      },
      {
        "testId":"3",
        "testInput":"cSharp",
        "testOutput":"false"        
      },
      {
        "testId":"4",
        "testInput":"",
        "testOutput":"true"        
      },
      {
        "testId":"5",
        "testInput":"abcba",
        "testOutput":"true"        
      },
      {
        "testId":"6",
        "testInput":"123321",
        "testOutput":"true"        
      },
      {
        "testId":"7",
        "testInput":"111",
        "testOutput":"true"        
      },
      {
        "testId":"8",
        "testInput":"ad21f12da",
        "testOutput":"true"        
      },
      {
        "testId":"9",
        "testInput":"jDoodle",
        "testOutput":"false"        
      },
      {
        "testId":"10",
        "testInput":"siva",
        "testOutput":"false"        
      }
    ]
    },
    "d2": {
      "status" : false,
      "id": "2",
      "title": "Add two numbers",
      "descriptionhtml": "Program to add two numbers",
      "constraints": "Make sure to support negative numbers",
      "example": [
        {
          "exampleid": "1",
          "input": "2 3",
          "output": "5",
          "explanation": "Addition  of two numbers 2 and 3 makes 5"
        },
        {
          "exampleid": "2",
          "input": "3 -1",
          "output": "2",
          "explanation": "Addition  of two numbers 3 and -1 makes 5"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"3 2",
        "testOutput":"5"        
      },
      {
        "testId":"2",
        "testInput":"4 0",
        "testOutput":"4"        
      },
      {
        "testId":"3",
        "testInput":"0 -5",
        "testOutput":"-5"        
      },
      {
        "testId":"4",
        "testInput":"8 -3",
        "testOutput":"5"        
      },
      {
        "testId":"5",
        "testInput":"2 10",
        "testOutput":"12"        
      },
      {
        "testId":"6",
        "testInput":"8 23",
        "testOutput":"31"        
      },
      {
        "testId":"7",
        "testInput":"-9 -3",
        "testOutput":"-12"        
      },
      {
        "testId":"8",
        "testInput":"0 0",
        "testOutput":"0"        
      },
      {
        "testId":"9",
        "testInput":"10 1",
        "testOutput":"11"        
      },
      {
        "testId":"10",
        "testInput":"5 5",
        "testOutput":"10"        
      }
    ]
    },
    "d3": {
        "status" : false,
    "id": "3",
      "title": "sum of digits",
      "descriptionhtml": "Program to find the sum of individual digits of a number",
      "constraints": "consider the number is a positive number",
      "example": [
        {
          "exampleid": "1",
          "input": "123",
          "output": "6",
          "explanation": "the individual digits of the given number 123 are 1,2,3 which sums to 6 , 1+2+3 = 6"
        },
        {
          "exampleid": "2",
          "input": "67329",
          "output": "27",
          "explanation": "the individual digits of the given number 123 are 6,7,3,2,9 which sums to 6 , 6+7+3+2+9= 27"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"123",
        "testOutput":"6"        
      },
      {
        "testId":"2",
        "testInput":"321",
        "testOutput":"6"        
      },
      {
        "testId":"3",
        "testInput":"12345",
        "testOutput":"15"        
      },
      {
        "testId":"4",
        "testInput":"54123",
        "testOutput":"15"        
      },
      {
        "testId":"5",
        "testInput":"987",
        "testOutput":"24"        
      },
      {
        "testId":"6",
        "testInput":"879",
        "testOutput":"24"        
      },
      {
        "testId":"7",
        "testInput":"1",
        "testOutput":"1"        
      },
      {
        "testId":"8",
        "testInput":"0",
        "testOutput":"0"        
      },
      {
        "testId":"9",
        "testInput":"209",
        "testOutput":"11"        
      },
      {
        "testId":"10",
        "testInput":"901",
        "testOutput":"10"        
      }
    ]
    },
    "d4": {
        "status" : false,
    "id": "4",
      "title": "Max numbers",
      "descriptionhtml": "Program to find the max of two numbers",
      "constraints": "Both positive and negative numbers be given",
      "example": [
        {
          "exampleid": "1",
          "input": "1 2",
          "output": "2",
          "explanation": "The maximum of the given two numbers is 2"
        },
        {
          "exampleid": "2",
          "input": "-5 0",
          "output": "0",
          "explanation":  "The maximum of the given two numbers is 0"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"1 2",
        "testOutput":"2"        
      },
      {
        "testId":"2",
        "testInput":"2 -9",
        "testOutput":"2"        
      },
      {
        "testId":"3",
        "testInput":"0 -5",
        "testOutput":"0"        
      },
      {
        "testId":"4",
        "testInput":"67 45",
        "testOutput":"67"        
      },
      {
        "testId":"5",
        "testInput":"89 56",
        "testOutput":"89"        
      },
      {
        "testId":"6",
        "testInput":"11 10",
        "testOutput":"11"        
      },
      {
        "testId":"7",
        "testInput":"1 -1",
        "testOutput":"1"        
      },
      {
        "testId":"8",
        "testInput":"0 0",
        "testOutput":"0"        
      },
      {
        "testId":"9",
        "testInput":"-9 -9",
        "testOutput":"-9"        
      },
      {
        "testId":"10",
        "testInput":"8 8",
        "testOutput":"8"        
      }
    ]
    },
    "d5": {
        "status" : false,
    "id": "5",
      "title": "Reverse of string",
      "descriptionhtml": "Program to find reverse of string",
      "constraints": "string is a single word",
      "example": [
        {
          "exampleid": "1",
          "input": "sheep",
          "output": "peehs",
          "explanation": "The reverse of the given string is peehs"
        },
        {
          "exampleid": "2",
          "input": "java",
          "output": "avaj",
          "explanation": "The reverse of the given string is avaj"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"abc",
        "testOutput":"cba"        
      },
      {
        "testId":"2",
        "testInput":"abc123",
        "testOutput":"321cba"        
      },
      {
        "testId":"3",
        "testInput":"output",
        "testOutput":"tuptuo"        
      },
      {
        "testId":"4",
        "testInput":"number",
        "testOutput":"rebmun"        
      },
      {
        "testId":"5",
        "testInput":"store",
        "testOutput":"erots"        
      },
      {
        "testId":"6",
        "testInput":"defined",
        "testOutput":"denifed"        
      },
      {
        "testId":"7",
        "testInput":"either",
        "testOutput":"rehtie"        
      },
      {
        "testId":"8",
        "testInput":"value",
        "testOutput":"eulav"        
      },
      {
        "testId":"9",
        "testInput":"expected",
        "testOutput":"detcepxe"        
      },
      {
        "testId":"10",
        "testInput":"missing",
        "testOutput":"gnissim"        
      }
    ]
    },
    "d6": {
        "status" : false,
    "id": "6",
      "title": "Anagram",
      "descriptionhtml": "Program to check if two strings are anagram",
      "constraints": "both strings are single word",
      "example": [
        {
          "exampleid": "1",
          "input": "listen silent",
          "output": "true",
          "explanation": "The words listen  and silent are built by the same number of character rearanged and positioned to form the word"
        },
        {
            "exampleid": "2",
            "input": "listen violent",
            "output": "false",
            "explanation": "The words listen  and violent are not built by the same number of character rearanged and positioned to form the word"
          },
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"listen silent",
        "testOutput":"true"        
      },
      {
        "testId":"2",
        "testInput":"listen svilent",
        "testOutput":"false"        
      },
      {
        "testId":"3",
        "testInput":"angel glean",
        "testOutput":"true"        
      },
      {
        "testId":"4",
        "testInput":"arc car",
        "testOutput":"true"        
      },
      {
        "testId":"5",
        "testInput":"arc tree",
        "testOutput":"false"        
      },
      {
        "testId":"6",
        "testInput":"cat act",
        "testOutput":"true"        
      },
      {
        "testId":"7",
        "testInput":"cat fact",
        "testOutput":"false"        
      },
      {
        "testId":"8",
        "testInput":"bored robed",
        "testOutput":"true"        
      },
      {
        "testId":"9",
        "testInput":"bored trobed",
        "testOutput":"false"        
      },
      {
        "testId":"10",
        "testInput":"inch chin",
        "testOutput":"true"        
      }
    ]
    },
    "d7": {
        "status" : false,
    "id": "7",
      "title": "Sum of 1 to n numbers",
      "descriptionhtml": "Program to find sum of 1 to n natural numbers",
      "constraints": "n is a positive number",
      "example": [
        {
          "exampleid": "1",
          "input": "3",
          "output": "6",
          "explanation": "The sum of 1,2,3 is 6 (1+2+3)"
        },
        {
          "exampleid": "2",
          "input": "8",
          "output": "36",
          "explanation": "The sum of 1,2,3...8 is 36 (1+2+3+...+8)"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"2",
        "testOutput":"3"        
      },
      {
        "testId":"2",
        "testInput":"5",
        "testOutput":"15"        
      },
      {
        "testId":"3",
        "testInput":"6",
        "testOutput":"21"        
      },
      {
        "testId":"4",
        "testInput":"16",
        "testOutput":"136"        
      },
      {
        "testId":"5",
        "testInput":"11",
        "testOutput":"66"        
      },
      {
        "testId":"6",
        "testInput":"21",
        "testOutput":"231"        
      },
      {
        "testId":"7",
        "testInput":"10",
        "testOutput":"55"        
      },
      {
        "testId":"8",
        "testInput":"25",
        "testOutput":"325"        
      },
      {
        "testId":"9",
        "testInput":"20",
        "testOutput":"210"        
      },
      {
        "testId":"10",
        "testInput":"100",
        "testOutput":"5050"        
      }
    ]
    },
    "d8": {
        "status" : false,
    "id": "8",
      "title": "Find nth character in a string",
      "descriptionhtml": "Program to find the nth character in a string",
      "constraints": "n is a positive number , string is a single word , if n> length return null",
      "example": [
        {
          "exampleid": "1",
          "input": "findMaxNumber 2",
          "output": "i",
          "explanation": "The character at the 2nd position of the given input string is i"
        },
        {
            "exampleid": "2",
            "input": "Expected 5",
            "output": "c",
            "explanation": "The character at the 5th position of the given input string is c"
          },
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"sheep 3",
        "testOutput":"e"        
      },
      {
        "testId":"2",
        "testInput":"defined 1",
        "testOutput":"d"        
      },
      {
        "testId":"3",
        "testInput":"never 2",
        "testOutput":"e"        
      },
      {
        "testId":"4",
        "testInput":"not 1",
        "testOutput":"n"        
      },
      {
        "testId":"5",
        "testInput":"testInput 6",
        "testOutput":"n"        
      },
      {
        "testId":"6",
        "testInput":"dependency 3",
        "testOutput":"p"        
      },
      {
        "testId":"7",
        "testInput":"sheep",
        "testOutput":"false"        
      },
      {
        "testId":"8",
        "testInput":"missing 10",
        "testOutput":"null"        
      },
      {
        "testId":"9",
        "testInput":"include 3",
        "testOutput":"c"        
      },
      {
        "testId":"10",
        "testInput":"useEffect 5",
        "testOutput":"f"        
      }
    ]
    },
    "d9": {
        "status" : false,
        "id": "9",
      "title": "Factorial",
      "descriptionhtml": "Program to find the factorial of a given number n",
      "constraints": "n is always a positive number",
      "example": [
        {
          "exampleid": "1",
          "input": "3",
          "output": "6",
          "explanation": "The factorial of the number 3 is 3! = 1*2*3 = 6"
        },
        {
          "exampleid": "2",
          "input": "1",
          "output": "1",  
          "explanation": "The factorial of the number 1 is 1! = 1"
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"1",
        "testOutput":"1"        
      },
      {
        "testId":"2",
        "testInput":"2",
        "testOutput":"2"        
      },
      {
        "testId":"3",
        "testInput":"3",
        "testOutput":"6"        
      },
      {
        "testId":"4",
        "testInput":"4",
        "testOutput":"24"        
      },
      {
        "testId":"5",
        "testInput":"5",
        "testOutput":"120"        
      },
      {
        "testId":"6",
        "testInput":"6",
        "testOutput":"720"        
      },
      {
        "testId":"7",
        "testInput":"7",
        "testOutput":"5040"        
      },
      {
        "testId":"8",
        "testInput":"8",
        "testOutput":"40320"        
      },
      {
        "testId":"9",
        "testInput":"10",
        "testOutput":"362880"        
      },
      {
        "testId":"10",
        "testInput":"10",
        "testOutput":"3628800"        
      }
    ]
    },
    "d10": {
        "status" : false,
    "id": "10",
      "title": "Prime Number",
      "descriptionhtml": "Program to find the nth Prime number",
      "constraints": "n is a positive number",
      "example": [
        {
          "exampleid": "1",
          "input": "3",
          "output": "5",
          "explanation": "The 3rd prime number is 5 as the list of prime number goes 1,3,5,7....."
        },
        {
          "exampleid": "2",
          "input": "5",
          "output": "11",
          "explanation": "The 3rd prime number is 11 as the list of prime number goes 1,3,5,7,11,13....."
       
        }
      ],
      "testCases":[{
        "testId":"1",
        "testInput":"1",
        "testOutput":"1"        
      },
      {
        "testId":"2",
        "testInput":"2",
        "testOutput":"3"        
      },
      {
        "testId":"3",
        "testInput":"3",
        "testOutput":"5"        
      },
      {
        "testId":"4",
        "testInput":"4",
        "testOutput":"7"        
      },
      {
        "testId":"5",
        "testInput":"5",
        "testOutput":"11"        
      },
      {
        "testId":"6",
        "testInput":"6",
        "testOutput":"13"        
      },
      {
        "testId":"7",
        "testInput":"47",
        "testOutput":"211"        
      },
      {
        "testId":"8",
        "testInput":"18",
        "testOutput":"61"        
      },
      {
        "testId":"9",
        "testInput":"29",
        "testOutput":"109"        
      },
      {
        "testId":"10",
        "testInput":"90",
        "testOutput":"463"        
      }
    ]
    },
    
  };
export default ProblemData;