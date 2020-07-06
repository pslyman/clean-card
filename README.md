# clean-card
A self help repository to getting your first website up and running. Powered by Angular and Heroku. Example website: porterlyman.com. 

- Contains styling for mobile devices, tablets, and computer screens. 
- Has URL hashes so you can share your website with certain tabs or experience tiles already open. 
- Is minimal, no nonsense, to the point. Just how I like it. 
- Oooh pretty animations. Just how you like it.

# Pre-requisites
- Ensure Node, Git, and VSCode (or any other trusted IDE) is installed. 

- Create Github and Heroku accounts.

# Fork, then clone repo
1. Fork this directory, then clone that fork with the terminal command: `git clone https://github.com/pslyman/clean-card.git` into a directory of your choosing. 
2. In the destination directory, run `npm install`, then `ng serve`. If the app doesn't open automatically, you can probably find it at the URL `localhost://4200` or a similar port.
3. Now open your destination directory in your IDE (VSCode). You're now ready to customize your app. 

# Customize and build
1. Open `angular.json`. Beneath `"projects": {` replace `"CleanCard"` with the your name, or the name of your app. Make sure it's one word. You can hyphenate if needed. Scroll down and replace every other instance.
2. In `server.js`, replace `CleanCard` with the same as above. 
3. Next, navigated to `src/index.html`. Replace `Clean Card app` with rather your name, or the name of your app. No need to hyphenate or keep as a single word here. This will be the browser tab title. 
4. Now, go to `src/app/app.component.ts`. The rest of the work will mostly be in here. 
5. Scroll down to `title = "Clean Card"` (about line 93 or so) and replace it with the name you chose above. This will be displayed at the top of your page. If you don't want it, you can open `app.component.html` and remove the `<h1>` tag to strip it out (lines 1 -3), or leave `title` empty. 
6. Starting a few lines down, you'll notice four sets of data: contact, portfolio, skills, and titles. If you do a find all & replace with your IDE, you can probably rename these if needed. If you explore the app you're running in `localhost://4200`, you'll notice they're represented as four tabs. Following the trend in app.component.ts, replace the demo data with your own. You can add as many as you want, separated by commas. 
 
Note: `tiles` _must_ have incremental `id` with each addition. `big`, `toggled`, and `hide` are required. Leave the latter two as false, and `big` can be true or false depending on if you want that card to be bigger and more prominent. Think if these are your more "notable" experience.

Note: If you decide you need less than four tabs, you can look through app.component.html and pull out the section you won't need, as well as the `<h4>` item to match it. 

Note: for images in Portfolio, you can stick them in the assets folder and update the links accordingly. 

7. Now `git add .` (note the dot), `git commit -m 'initial commit'`, and `git push` to stage, commit, and push your changes to Github. The `initial commit`, if you make more changes in the future should say something different, usually a short description of what changes you made. For example `git commit -m 'added item to portfolio'`.

### You're done with that!

# Host app with Heroku

1. Login to your new Heroku account. Click `Create new app`

2. Give your app a name (will be apart of the URL)

3. From the dashboard of your app controls, click the `Deploy` tab, and under `Deployment Method` and select GitHub. From here, give Heroku permission to access GitHub, and select your project. Click Connect. 

4. Enable Automatic Deployment. This means any time you push code changes, the site will update automatically.

5. That should be it! If you go to your `Activity`, you'll see a build in progress. If it fails, you'll get output logs here. 

6. When the build is done, click `Open app` at the top. Note your URL. It should be something like `https://myAppName.herokuapp.com`

7. If you'd like to update/replace your tab icon, swap out `src/favicon.ico` with your desired icon. If you need something simple and quick, take a look at https://favicon.io/favicon-generator/. 

# Host app with Heroku on my own domain (remove `herokuapp.com`)
### Note: this will run you about $12 a year. 

1. Go to domains.google.com, login, and search up the domain you want. An unclaimed `.com` address will cost you about $12 (tax is included in price). 

2. Buy it. 

Note: It'll take "24 to 72 hours to propagate". Although for me it was a couple of hours.

3. Go to your Heroku account, click your profile avatar, then Account settings. Go to Billing and add a credit card. Unless you get moderate to heavy traffic on your site, you won't be charged. You can keep track of that information on that page.

4. Go back to you main section in Heroku, then click the `settings` tab. Scroll down to `Domains` and click `Add domain`. Add enter in your desired website URL, following this format: `www.CleanCards.com`. `www` and `.com` are crucial. Once entered, Heroku will show you a `DNS Target`. Copy it to use later. 

5. Go back to Google Domains, then DNS, then Synthetic Records. Go to Add a Domain
