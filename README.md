# Absent
Absent is a location based attendance application for teachers and students. I started to develope the Absent for a school project and so it became my first Flutter application. In fact, it was only for iOS and Android, and therefore the web version doesn't look that well. 

# Purpose
The main purpose of the Absent is to ease the attendance process that takes place in schools for both students and teachers. Using the Absent, students and teachers can complete the attendance process via their phones without the need for any paper or pens.

# Very short use case example
<ul>
<li> Teacher and students register to the Absent
<li> The teacher creates a lesson to represent his real lesson
<li> Each student joins the lesson that teacher created
<li> The teacher starts to take attendance
<li> Each student attend to the attendance that the teacher started to take
<li> The teacher finishes the attendance
<li> The teacher and students can see the old attendance records
</ul>

# How does the attendance process work?
The whole attendance process in the Absent is done according to the location of the teacher and students. When the teacher wants to take attendance, he needs to determine the valid radius ([8-99] meters). In order for students to attend the attendance, they have to be in the radius that the teacher determined, otherwise they encounter an error message. For example, if the radius is 10 meters, students who are more than 10 meters away from the teacher are not be able to attend the attendance.

# Screenshots of the main screens (Android)
Absent also has many dialogs (sub-screens), but they are not included.
## Login Screen 
![](screenshots/login_screen.jpg) 
## Sign Up Screen
![](screenshots/signup_screen_student.jpg) ![](screenshots/signup_screen_teacher.jpg)
## Teacher Lesson List Screen
![](screenshots/teacher/teacher_lesson_list_screen_empty.jpg) ![](screenshots/teacher/teacher_lesson_list_screen_not_empty.jpg)
## Teacher Lesson Screen
![](screenshots/teacher/teacher_lesson_screen_lesson.jpg) ![](screenshots/teacher/attendance_process.jpg)
## Teacher Attendance Lists Screen
![](screenshots/teacher/nonexpanded.jpg) ![](screenshots/teacher/expanded.jpg)
## Teacher Classroom Screen
![](screenshots/teacher/screen.jpg) ![](screenshots/teacher/pin.jpg)
## Teacher Menu Screen
![](screenshots/teacher/menu_teacher.jpg) 
## Teacher Account Screen
![](screenshots/teacher/account.jpg) 
## Student Available Lessons Screen
![](screenshots/student/no_lessons.jpg) ![](screenshots/student/lessons.jpg)
## Student Joined Lessons Screen
![](screenshots/student/no_attendance.jpg) ![](screenshots/student/active_attendance.jpg) ![](screenshots/student/close.jpg)
## Student Attendance Lists Screen
![](screenshots/student/nonexpanded.jpg) ![](screenshots/student/expanded.jpg)
## Student Menu Screen
![](screenshots/student/menu.jpg)
## Student Account Screen
![](screenshots/student/account.jpg) 
