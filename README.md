# TuntsRocks's Challenge
An API developed with node.js, which is used to connect to a Google Sheets spreadsheet using the Google Sheets API as well. Rules that were used to build the code:
<ul>
  <li>Calculate the situation of each student based on the average of the 3 tests (P1, P2 and P3), according to the table:
   <li> Average (m) Situation: m < 5 - Failed by Grade</li>
   <li> 5 <= m < 7 - Final Exam </li>
   <li> m >= 7 - Approved</li>
  </li>
  <li> If the number of absences exceeds 25% of the total number of classes, the student will have the status "Failed due to Absence", regardless of the average.</li>
  <li> If the situation is "Final Exam", it is necessary to calculate the "Final Approval Grade" (naf) for each student according to the following formula: 5 <= (m + naf)/2</li>
  <li> If the student's situation is different from "Final Exam", fill in the "Grade for Final Approval" field with 0.</li>
  <li> Round the result to the next whole number (increase) if necessary.</li>
  <li> Use log lines to monitor application activities.</li>
</ul>

### 👾 "How do I use this?" 
You can use the <a href="https://www.onlinegdb.com/" > Online GDB!</a> for testing the exercises if you prefer to.
<ul>
  <li> Each exercise already have the statement before the code;</li>
  <li> It's just you copy the code here (Ctrl A + Ctrl C) and paste on the Online GDB with the right language selected;</li>
  <li> Careful: in Java, you can change the name for "Main" when you compile the code on Online GDB.</li>
</ul>

But, you can go on my beecrowd's profile: <a href = "https://www.beecrowd.com.br/judge/en/profile/723855"> maria.fer.l.b</a> and see the exercises that I already solved. 
<ul>
  <li> It's not ALL the exercises that I will put here. Some of them I did in a long time ago (those on my profile);</li>
  <li> So, the exercises here are the same that I started to solve since July 2023 - when I was thinking about this repository.</li>
</ul>

### 🤔 "Why are you doing this?" 
Because I wanted to try to do an exercise per day and pratice my programmation skills.

### 👩‍💻 "Are you the unic author?" 
Yes, I used the google and youtube for references, but I did it by myself.

### 🍀 THANK YOU! 
<p> 
  Thanks for reading and enjoy the exercises! You can follow me on my Linkedin Profile:
  <a href = "https://www.linkedin.com/in/maria-fernanda-leonel-bertelli-252480257"> Maria Fernanda Leonel Bertelli! </a>
</p>

 
