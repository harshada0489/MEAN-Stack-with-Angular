Steps to follow:

1. Create new angular Project named AngularLearnings
ng new AngularLearnings

2. Go inside the folder AngularLearnings
cd AngularLearnings

3. Create new component
ng generate component FirstComp

4. Delete all contents of app.component.html

5. Go to first-comp.component.ts file , and copy the selector name 'app-first-comp'

6. Paste the selector name in 'app.component.html' in tag as given below
<app-first-comp></app-first-comp>

7. In order to display content of First component, edit the file 'first-comp.component.html' file
<h1>Hello from First component</h1>

8. To display on web application
ng serve --o

image.png
