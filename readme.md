                  LEARNING GULP

****************************************************
                  Random Notes
****************************************************

1. In Gulp you write tasks and then you tell Gulp to
   run those tasks.
2. To install: 
   npm install -g gulp
   sudo npm install -g gulp
   
   If you want to install it for a node project you 
   most likely need: 
   sudo npm install --save-dev gulp
   
3. We will write our tasks in the file gulpfile.js

4. To run a default task all you would need to do is
   type gulp on the command line.
   
5. We can add plugins to Gulp to add functionality.
   gulpjs.com/plugins

6. npm install --save-dev gulp-uglify
   gulp-uglify is to minify javascript.
   
7. We can give the default gulp task an array in order
   to run multiple tasks.
   
8. To run a named task, you can type gulp and then 
   the name of the task.

9. You can create a watch task to watch a file. This 
   can also call another task by also giving it an
   array.
   
10. npm install --save-dev gulp-ruby-sass
    We are editing our styles task to compile sass.

11. We can make an almost identical task to compile
    our sass files.

12. The plumber package allows you to keep watching files
    even if you save incomplete code.
    
13. npm install --save-dev gulp-plumber

14. You can avoid installing plumber by placing an on error
    event before gulp.dest. You can also create a func.

15. Implemeting live reload. You need the live reload
    extension for your browser.
    
16. npm install --save-dev gulp-livereload. We can add a
    pipe method with livereload to refresh when saved.
    
17. Compressing images with gulp.

18. npm install --save-dev gulp-imagemin