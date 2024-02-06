# 🤟 TuntsRocks's Challenge 
An API developed with node.js, which is used to connect to a Google Sheets spreadsheet using the Google Sheets API as well. Rules that were used to build the code:
<ul>
  <li>Calculate the situation of each student based on the average of the 3 tests (P1, P2 and P3), according to the table:
    <ul>
      <li> Average (m) Situation:</li>
        <ul>
          <li> m < 5 - Failed by Grade</li>
           <li> 5 <= m < 7 - Final Exam </li>
            <li> m >= 7 - Approved</li>
        </ul>
    </ul>
  </li>
  <li> If the number of absences exceeds 25% of the total number of classes, the student will have the status "Failed due to Absence", regardless of the average.</li>
  <li> If the situation is "Final Exam", it is necessary to calculate the "Final Approval Grade" (naf) for each student according to the following formula: 5 <= (m + naf)/2</li>
  <li> If the student's situation is different from "Final Exam", fill in the "Grade for Final Approval" field with 0.</li>
  <li> Round the result to the next whole number (increase) if necessary.</li>
  <li> Use log lines to monitor application activities.</li>
</ul>

### 👾 "How do I use this?" 
First of all, you must clone this repository and have the node.js installed in your machine. After this:
<ul>
  <li> Open the terminal on your code editor;</li>
  <li>Type these commands: </li>
  
    ```
     npm install
    ```
  
    ```
     npm start 
    ```
    
</ul>

### 🔧 "What did you use to create this?" 
I used the following commands to create this project:
    ```
    npm init 
    ```
     ```
    npm install express googleapis nodemon 
    ```

### 🤔 "Why did you do this?" 
I did this for a challenge in the selection process for an intern vacancy for the company TuntsRocks.

### 👩‍💻 "Are you the unic author?" 
Yes, I used the google and youtube for references, but I did it by myself.

### 🍀 THANK YOU! 
<p> 
  Thanks for reading and enjoy this! You can follow me on my Linkedin Profile:
  <a href = "https://www.linkedin.com/in/maria-fernanda-leonel-bertelli-252480257"> Maria Fernanda Leonel Bertelli! </a>
</p>

 
