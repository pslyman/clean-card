# clean-card
A self help repository to getting your first website up and running. Powered by Angular and Heroku. 

# Pre-requisites
Ensure Node, Git, and VSCode (or any other trusted IDE) is installed.

# Clone repo
1. `git clone https://github.com/pslyman/clean-card.git` into a directory of your choosing. 
2. In the destination directory, run `npm install`, then `ng serve`. If the app doesn't open automatically, you can probably find it at `localhost://4200` or a similar port.
3. Now open your destination directory in your IDE (VSCode). You're now ready to customize your app. 

# Customize and build
1. Open angular.json. Beneath `"projects": {` replace `"CleanCard"` with the your name, or the name of your app. Make sure it's one word. You can hyphenate if needed.  
2. In server.js, replace CleanCard the same as above. 
3. Next, navigated to src/index.html. Replace `Clean Card app` with rather your name, or the name of your app. No need to hyphenate or keep as a single word here. This will be the browser tab title. 
4. Now, go to src/app/app.component.ts. The rest of the work will mostly be in here. 
5. Scroll down to `title = "Clean Card"` (about line 93 or so) and replace it with the name you chose above. This will be displayed at the top of your page. If you don't want it, you can open app.component.html and remove the <h1> tag to strip it out (lines 1 -3).
6. Starting a few lines down, you'll notice four sets of data: contact, portfolio, skills, and titles. If you do a find all & replace with your IDE, you can probably rename these if needed. If you explore the app you're running in `localhost://4200`, you'll notice they're represented as four tabs. Following the trend in app.component.ts, replace the demo data with your own. You can add as many as you want, separated by commas. 
 
Note: `tiles` _must_ have incremental `id` with each addition. `big`, `toggled`, and `hide` are required. Leave the latter two as false, and `big` can be true or false depending on if you want that card to be bigger and more prominent. Think if these are your more "notable" experience.

Note: If you decide you need less than four tabs, you can look through app.component.html and pull out the section you won't need, as well as the <h4> item to match it. 

Note: for images in Portfolio, you can stick them in the assets folder and update the links accordingly. 

