

//  Practice problems

// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal

/* Your answer here*/


//  a=5, b=10;
//   console.log(a);

// let a=45;
//  a=65;
//  let b=60;
//  b=70;
//  console.log(a,b)
//  if(a==b){
//     console.log("number 1&number 2 is equal");
//  }else{
//      console.log("number1 and number2 are not equal");
//  }

//  console.log(!a==b ? "number1and number2 are equal": "number1and number2 are not equal");

























// 2. Write a  program to check whether a given number is even or odd.
//  Test Data : 15
//  Expected Output :
//  15 is an odd integer



//  let a=15;
//  if(a % 2==0){
//      console.log(a, " is a EVEN integer")
//  }else{
//      console.log(a,"is ODD integer")
//  }
































// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
/* Your answer here*/




//  let a=15;
//  if(a>=0){
//      console.log("POSITIVE")
//  }
//  else{
//      console.log("NEGATIVE")
//  }




















// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here*/

// let year=2016;
// if (((year%4==0) && ((year%400==0) || (year%100!==0)) ))
//    {
//     console.log("YES");
//   }else {
//     console.log("NO");
//   }






















// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
/* Your answer here*/

// let a=21;
// if(a>=18){
//     console.log("Congratulation! You are eligible for casting your vote.")
// }else{
//     console.log("sorry! You are not eligible for casting your vote.")
// }























// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here*/
// let m=0,n;
//  if(m>0)



// {
//     n=1
//      console.log(n)
//  }else if( m===0){
//       n=0;
//       console.log(n)
//   }else{
//     n=-1
//     console.log(n)
//   }



















// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here*/

// let a=167;
// if (a < 150.0){ 
//         console.log("The person is Dwarf");
// }
//     else if ((a >= 150.0) && (a < 165.0)){
//       console.log("The person is  average heighted");

//     }
        
//     else if ((a >= 165.0) && (a <= 195.0)){ 

//       console.log("The person is taller");
//     }
        
//     else{
//       console.log("Abnormal height");

//     }
        
























// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here*/


// let a=12, b=25, c=52, d;

// if(a>b && a>c && a>d){
//   console.log(" The 1st Number is the greatest among three",a);
// }else if(b>a && b>c && b>d) {
//   console.log(" The 2nd Number is the greatest among three",b);
// }else if(c>a && c>b && c>d){
//   console.log(" The 3rd Number is the greatest among three",c);
// }





















// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here*/


// let co1=-7, co2=-9;
// if( co1 > 0 && co2 > 0)
// 	  console.log("The coordinate point lies in the First quandrant.",co1,co2);
// 	else if( co1 < 0 && co2 > 0)
//   console.log("The coordinate point lies in the Second quandrant.",co1,co2);
// 	else if( co1 < 0 && co2 < 0)
//   console.log("The coordinate point lies in the Third quandrant.",co1,co2);
// 	else if( co1 > 0 && co2 < 0)
//   console.log("The coordinate point ies in the Fourth quandrant.",co1,co2);
// 	else if( co1 == 0 && co2 == 0)
//   console.log("The coordinate point lies at the origin.",co1,co2);



















// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140

// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.

/* Your answer here*/

// let p=65, c=51,m=72;
// let total1=p+c+m;
// let total2=m+p;
// console.log("Total marks of Maths, Physics and Chemistry :",total1)
// console.log("Total marks of Maths and Physics :",total2)
// if(m>=65 && p>=55 && c>=50 && total1>=190 && total2>=140){
//   console.log("The candidate is eligible for admission.")
// }else{
//   console.log("The candidate is not eligible for admission.")
// }































// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here*/

// let a=1, b=5, c=7, r1, r2;
// let d=Math.pow(b,2)-4*a*c;
// if(d>0){
//   let r1 = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
//    let r2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
//    console.log("the real roots", r1,r2)

// }else if(d==0){
//       r1 = -1*b/(2*a);
//       r2 = -1*b/(2*a);
//       console.log(" the roots are equal", r1, r2);
// }else
// console.log("Roots are imaginary");


 



















// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here*/

// let n=784, n2="james", p=70,c=80, ca=90;

// console.log("Roll No :",n)
// console.log("Name of the student", n2)
// console.log("Marks in Physics", p)
// console.log("Marks in Chemistry ", c)
// console.log("Marks in Computer Application", ca)

// let total = p+c+ca;
// console.log("Total Marks", total)
// let per = total/3.0;
// console.log("Percentage:",per)
//     if (per>=60)
//     console.log("division First");
//     else
// 	if (per<60 && per>=48)
//   console.log(" division Second");
// 	else
// 	    if (per<48 && per>=36)
//       console.log("division Pass");
// 	     else
//        console.log(" division Fail");

























// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here*/

// let temp=21;
// if(temp<10){
//   console.log("Freezing weather")
// }else if(temp<0){
//   console.log("very cold weather")
// }else if(temp<20){
//   console.log("Cold weather")
// }else if(temp<30){
//   console.log("Normal in Temp")
// }
// else if(temp<40){
//   console.log("Its Hot")
// }
// else {
//   console.log(" Its Very Hot")
// }






















// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
/* Your answer here*/


// let side1=50, side2=50, side3=60;
//    console.log("Enter sides of triangle:");
//    if(side1 == side2 && side2 == side3)
//    {
//     console.log("The Given Triangle is equilateral");

//    }
      
//    else if(side1 == side2 || side2 == side3 || side3 == side1)
//       console.log("The given Triangle is isosceles\n");
//    else
//       console.log("The given Triangle is scalene\n");





















// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here*/

// let anga=45, angb=55, angc=65, sum; 
// sum = anga + angb + angc;
// if(sum == 180)   
//     {  
//         console.log("The triangle is valid.",sum);  
//     }  
//     else  
//     {  
//         console.log("The triangle is not valid.",sum);  
//     }  





















// 16. Write a program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here*/

// let ch="@";
// if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
//     {
//         console.log("this is alphabet.", ch);
//     }
//     else if(ch >= '0' && ch <= '9')
//     {
//         console.log("this is digit.", ch);
//     }
//     else 
//     {
//         console.log("this is special character.", ch);
//     }























// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
/* Your answer here*/

// let ch="e";
// if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
// ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') 
//  {
// console.log("the alphabet is a VOWEL.", ch);
// }else{
//   console.log("The alphabet is a CONSONANT.",ch)
// }





















// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You can booked your profit amount : 200
/* Your answer here*/

// let sp=700, bp=500, pf,ls;
// console.log("Input buy price:",bp);
// console.log("Input sell price:",sp);
// if(sp>bp){
//   pf=sp-bp
//   console.log("You can booked your profit amount :",pf)
// }else if(bp>sp){
//   ls=bp-sp;
//   console.log("You can booked your loss amount :",ls)
// }else{
//   console.log("no profit and loss")
// }
























// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :

// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-

// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here*/



 let id=1001, b="james", a=800;
 console.log("Customer ID-NO:", id);
 console.log("Customer Name:",b);
 console.log("unit Consumed :", a)

 let amount = 0;
   if(a <= 199){
 	  amount = a*1.20;
   }else if(a >=200 && a<400){
 	  amount = a*1.50;
   }else if(a >= 400 && a<600){
 	  amount = a*1.80
   }else{
 	  amount = a*2; 
     console.log("Amount Charges @Rs. 2.00 per unit:",amount)
   } 	
   let new_amount = 0;
   if(amount>400){
 	  new_amount = amount + amount*15/100;
 	  console.log("Net Amount paid by the customer:",new_amount);
  }else{
    console.log(amount);
   } 




















// 20. Write a program to accept a grade and declare the equivalent description :

// Grade    Description
// E    Excellent
// V    Very Good
// G    Good
// A    Average
// F    Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
/* Your answer here*/

// let grade= "E";

// if(grade==="A")
// {
//   console.log("You have chosen : Average")
// }
// else if(grade==="F")
// {
//   console.log("You have chosen : fail")
// }
// else if(grade==="G")
// {
//   console.log("You have chosen : good")
// }
// else if(grade==="V")
// {
//   console.log("You have chosen : very good")
// }
// else if(grade==="E")
// {
//   console.log("You have chosen : excellent")
// }else{
//   console.log("invalid!")
// }


























// 21. Write a program to read any day number in integer and display day name in the word.
// Test Data :
// 4
// Expected Output :
// Thursday
/* Your answer here*/


// let week=4
// if(week == 1)
//     {
//          console.log("Monday");
//     }
//     else if(week == 2)
//     {
//          console.log("Tuesday");
//     }
//     else if(week == 3)
//     {
//          console.log("Wednesday");
//     }
//     else if(week == 4)
//     {
//          console.log("Thursday");
//     }
//     else if(week == 5)
//     {
//          console.log("Friday");
//     }
//     else if(week == 6)
//     {
//          console.log("Saturday");
//     }
//     else if(week == 0)
//     {
//         console.log("Sunday");
//     }
//     else
//     {
//         console.log("invalid!")
//     }
     

















// 22. Write a program to read any digit, display in the word.
// Test Data :
// 4
// Expected Output :
// Four
/* Your answer here*/

// let digit=4
// switch(digit)
//    {
// 	 case 0:
// 	       console.log("Zero");
// 	       break;
 
// 	 case 1:
//     console.log("one");
// 	       break;
// 	case 2:
//     console.log("Two");
// 	       break;
// 	case 3:
//     console.log("Three");
// 	       break;
// 	case 4:
//     console.log("Four");
// 	       break;
// 	case 5:
//     console.log("Five");
// 	       break;
// 	case 6:
//     console.log("Six");
// 	       break;
// 	case 7:
//     console.log("Seven");
// 	       break;
// 	case 8:
//     console.log("Eight");
// 	       break;
// 	case 9:
//     console.log("Nine");
// 	       break;
// 	default:
//     console.log("invalid digit.");
// 	       break;
//       }



















// 23. Write a program to read any Month Number in integer and display Month name in the word.
// Test Data :
// 4
// Expected Output :
// April
/* Your answer here*/

// let month=4
// if(month==1)
// {
//   console.log("january")
// }
// if(month==2)
// {
//   console.log("february")
// }
// if(month==3)
// {
//   console.log("march")
// }
// if(month==4)
// {
//   console.log("april")
// }
// if(month==5)
// {
//   console.log("may")
// }
// if(month==6)
// {
//   console.log("june")
// }
// if(month==7)
// {
//   console.log("july")
// }
// if(month==8)
// {
//   console.log("august")
// }
// if(month==9)
// {
//   console.log("september")
// }
// if(month==10)
// {
//   console.log("october")
// }
// if(month==11)
// {
//   console.log("november")
// }
// if(month==12)
// {
//   console.log("december")
// }





























// 24. Write a program to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days

// let month =7;
// if(month == 1)
//     {
//          console.log("Month have 31 days");
//     }
//     else if(month == 2)
//     {
//          console.log("Month have 30 days");
//     }
//     else if(month == 3)
//     {
//          console.log("Month have 31 days");
//     }
//     else if(month == 4)
//     {
//          console.log("Month have 30 days");
//     }
//     else if(month == 5)
//     {
//          console.log("Month have 31 days");
//     }
//     else if(month == 6)
//     {
//          console.log("SMonth have 30 days");
//     }
//     else if(month == 7)
//     {
//         console.log("Month have 31 days");
//     }
//     else if(month == 8)
//     {
//          console.log("TMonth have 30 days");
//     }
//     else if(month == 9)
//     {
//          console.log("WMonth have 31 days");
//     }
//     else if(month == 10)
//     {
//          console.log("TMonth have 30 days");
//     }
//     else if(month == 11)
//     {
//          console.log("FMonth have 31 days");
//     }
//     else if(month == 12)
//     {
//          console.log("SMonth have 30 days");
//     }
    
    




//     else
//     {
//         console.log("invalid!")
//     }
     