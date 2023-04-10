Steps to follow:

1. Create new angular Project named AngularLearnings
ng new AngularLearnings

2. Go inside the folder AngularLearnings
cd AngularLearnings

3.1 Create new component
ng generate component FirstComp

3.2 Create new component
ng generate component SecondComp

4. Delete all contents of app.component.html

5. Go to first-comp.component.ts file , and copy the selector name 'app-first-comp'
   Paste the selector name in 'app.component.html' in tag as given below

<app-first-comp></app-first-comp>

7. In order to display content of First component, from app component, edit the file 'first-comp.component.html' file

<h1>Hello from First component</h1>
<app-second-comp></app-second-comp>

7.2 In order to display content of Second component, from first component, edit the file 'second-comp.component.html' file
<h1>Hello from Second component</h1>

8. To display on web application
ng serve --o

![image](https://user-images.githubusercontent.com/72671266/230950565-f63ac17a-4a72-466e-9744-b7d67d886e83.png)

