### *This project is deprecated

# clean-card

A self help repository to getting your first website up and running. Powered by Angular and Vercel (or Heroku). My hope is that this will get you started, and you can make it much better than it is now. Example website: <a href="https://www.clean-card.devlay.com/">clean-card.devlay.com</a>. 

- Contains styling for mobile devices, tablets, and computer screens. 
- Has URL params so you can share your website with certain tabs or experience tiles already open (I've added in routing). 
- Is minimal, no nonsense, to the point. Just how I like it. 
- Oh and pretty animations. Just how you like it.

# Pre-requisites
- Ensure Node, Git, and VSCode (or any other trusted IDE) is installed. 

- Create free Github and Vercel (Heroku, if going that route) accounts.

# Fork, then clone repo

1. Fork this directory, then clone that fork with the terminal command: `git clone https://github.com/pslyman/clean-card.git` into a directory of your choosing. 
2. In the destination directory, run `npm install`, then `ng serve`. If the app doesn't open automatically, you can probably find it at the URL `localhost://4200` or a similar port.
3. Now open your destination directory in your IDE (VSCode). You're now ready to customize your app. 

    If you know how, I'd recommend just creating a new repository, cloning, then pushing privately to your own. 

# Customize and build
1. Open `angular.json`. Beneath `"projects": {` replace `"CleanCard"` with the your name, or the name of your app. Make sure it's one word. You can hyphenate if needed. Scroll down and replace every other instance.
2. In `server.js`, replace `CleanCard` with the same as above. 
3. Next, navigated to `src/index.html`. Replace `Clean Card app` with rather your name, or the name of your app. No need to hyphenate or keep as a single word here. This will be the browser tab title. 
4. Now, go to `src/app/app.component.ts`. The rest of the work will mostly be in here. 
5. Scroll down to `title = "Clean Card"` (about line 93 or so) and replace it with the name you chose above. This will be displayed at the top of your page. If you don't want it, you can leave `title` set to empty quotes `title = "";`. 
6. Starting a few lines down, you'll notice four sets of data: contact, portfolio, skills, and titles. If you do a find all & replace with your IDE, you can probably rename these if needed. If you explore the app you're running in `localhost://4200`, you'll notice they're represented as four tabs. Following the trend in app.component.ts, replace the demo data with your own. You can add as many as you want, separated by commas. 
 
    **Note**: `tiles` _must_ have incremental `id` with each addition. `big`, `toggled`, and `hide` are required. Leave the latter two as false, and `big` can be true or false depending on if you want that card to be bigger and more prominent. Think if these are your more "notable" experience.

    **Note**: If you decide you need less than four tabs, you can look through app.component.html and pull out the section you won't need, as well as the `<h4>` item to match it. 

    **Note**: for images in Portfolio, you can stick them in the assets folder and update the links accordingly. 

7. Now `git add .` (note the dot), `git commit -m 'initial commit'`, and `git push` to stage, commit, and push your changes to Github. The `initial commit`, if you make more changes in the future should say something different, usually a short description of what changes you made. For example `git commit -m 'added item to portfolio'`.

### You're done with that!

# METHOD 1: Host app with Vercel
1. Login to your Vercel account
2. Click "Import Project" (authenticate with Github)
3. Copy and paste the url to your repository where you've got your clean-card project.
4. From the dropdown, select Angular, then click "Deploy"

You will be presented with an auto generated URL you can open to view your website. Congrats! 

If you've purchased a domain and would like to use it, you can:

# Host app with Vercel on my own domain (remove `vercel.com`)
### Note: this will run you about $12 a year. 

1. Go to domains.google.com, login, and search up the domain you want. An unclaimed `.com` address will cost you about $12 (tax is included in price). 

2. Buy it. 

    **Note**: It'll take "24 to 72 hours to propagate". Although for me it was a couple of hours.

3. Go to your Vercel account, click your active website project, then settings, then Domains.

4. Enter your domain name (www.yourWebsiteName.com) and click Add. 

5. Below you'll be given a Type (CNAME), Name (www) and Value (cname.vercel-dns.com). 

6. In another tab, go back to Google Domains, then DNS, then Synthetic Records. 

    a. Put `@` as subdomain. 

    b. Put your `http://www.myAppName.com` (or whatever your domain is) to the next field (Destination URL).
    
    note: use `http`, not `https` here.

    c. Click `Add`. 

7. Scroll down to `Custom Resource Records`.

    a. In the first field enter `www`

    b. From the drop-down, select `CNAME`

    c. Leave `1H` how it is. 

    d. In the last field (`IPv4 address`), enter your CNAME that Vercel gave you. 

    e. Click `Add`.

8. Within a few minutes you should be able to go to your URL from step 5:b and see your website wtihout the `vercel.com` attached. You're done!

# Set up email alias

If you want to be able to email from your website name, like `mail@myWebsite.com`. Google Domains does have an option to purchase the Google Suite which will give you your own email for a fee, _but_ if you want to just use an email alias from your existing email, you totally can. It's free. 

1. Go to your Google Domains account, and select your Domain, then go to `Email`.

2. Click `Add email alias`

3. If you wish to do `mail@myWebsite.com`, enter `mail` into the first box, and your personal email address (Gmail account) into the second. Click add. 

4. Login to your Gmail account. You should have received a verification email. Open it and follow the instructions. You're almost done.

5. Click on your top-right corner profile icon, then click `Manage your Google Account`. Go to `Security`. 

6. Click `App passwords`

    **Note**: if you don't have 2-Step Verification, you will need to go do that as a prerequisite. If you have it set up already, continue. 

7. In the first drop-down, select `Mail`. In the second, click `Other`. For that you will need to enter your domain (`myAppName.com`).

8. Click `Generate`. 

9. A 16-character password will appear. Copy it, and keep it safe! We'll be using it later. 

10. Go back to your email, and click the cog/settings icon in the top right corner, then `See all settings`, then go to Accounts and Import. 

11. Scroll to `Send mail as:` and click `Add another email address`. 

12. Enter your information:

    a. Name: The name you want people to see

    b. Email address: The same email address you set up from Google Domains. i.e. `mail@myAppName.com`

    (click `Next Step`)

    c. SMTP Server: `smtp.gmail.com`

    d. Port: `465`

    e. Username: the Gmail account you're using right now

    f. Password: The geenrated app password you copied from step 9

13. Click `Add Account`

14. You'll get a new confirmation email. Open it and follow the instructions provided within.

15. Now when you write or respond to emails, in the `from` box you can click the drop-down triangle button, and choose your new email as a source to respond from. 

# METHOD 2: Host app with Heroku
This was the original method, but the free tier does not offer SSL encryption (https) and the server falls asleep. 

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

    **Note**: It'll take "24 to 72 hours to propagate". Although for me it was a couple of hours.

3. Go to your Heroku account, click your profile avatar, then Account settings. Go to Billing and add a credit card. Unless you get moderate to heavy traffic on your site, you won't be charged. You can keep track of that information on that page.

4. Go back to you main section in Heroku, then click the `settings` tab. Scroll down to `Domains` and click `Add domain`. Add enter in your desired website URL, following this format: `www.myAppName.com`. Note that `www` and `.com` are crucial. Once entered, Heroku will show you a `DNS Target`. Copy it to use later. 

5. Go back to Google Domains, then DNS, then Synthetic Records. Go to Add a Domain.

    a. Put `@` as subdomain. 

    b. Put your `http://www.myAppName.com` (or whatever your domain is) to the next field (Destination URL).
    
    note: use `http`, not `https` here.

    c. Click `Add`. 

6. Scroll down to `Custom Resource Records`.

    a. In the first field enter `www`

    b. From the drop-down, select `CNAME`

    c. Leave `1H` how it is. 

    d. In the last field (`IPv4 address`), enter your `DNS Target` address that you copied from Heroku in step 4.

    e. Click `Add`.

7. Within a few minutes you should be able to go to your URL from step 5:b and see your website wtihout the `herokupp.com` attached. You're done!


    **Note**: If you're looking to use `https` instead of `http`, you'll need to purchase an SSL certificate and integrate it. If you want to use a free SSL certificate, unfortunately there aren't any loopholes to use those and you'll need to upgrade your Heroku account to Hobbyist (as of Oct. 2020, it's $7 a month). If you upgrade, Heroku will get and manage SSL certficiate as part of the upgrade. Either way, you'll probably have to pay. But you got this far for only $12, right? All things considered the price to pay isn't bad, and the benefits of the upgrade are nice. 



## You're done! 

   **Note about Heroku's free plan**: In order to preserve costs, Heroku's hosting server will fall asleep after 30 minutes. You may notice that the first time you try to visit your hosted site, it could take up to 20 seconds to load. Subsequent loads are immediate until you leave the website alone for a while, at which point it'll have to be visited again to wake it up (another 20 seconds). It's the "price" to pay for paying nothing. If you upgrade your account to Hobbyist (as of Oct. 2020, $7 a month) that problem will be resolved and loading will always be immediate. Plus, Heroku will handle getting you an SSL certficate at that point, as an added benefit. 

   **Note about Vercel**: You won't need any of the server.js stuff (file, and in package.json) because this is a static site independent of node.js.

Sources:

Email alias setup: https://medium.com/builduniversity/how-to-hook-up-a-custom-domain-email-to-your-free-gmail-account-ead660884d11


Heroku related sources: 

Set up webapp (Angular) with Heroku: A lot of sources, Googling. But most of the setup is already done for you in this repository. If you need more information, Google "Host github Angular app on Heroku" or something to that extent, and there are great articles at the ready. 

Edit: This was intrumental and contains most of what needs to be done. There's some variance in the server.js file, but the rest is correct: https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147

Point Domain to Heorku app: https://medium.com/@david.gagne/set-up-a-custom-domain-for-your-heroku-application-using-google-domains-guaranteed-a2b2ff934f97
