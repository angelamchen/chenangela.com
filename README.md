# 👩🏻‍💻 Personal Website

Second version of my self-designed personal website https://chenangela.com/. 

Good source to find out more about my interests, projects, or experience! (Also made this to refamiliarize myself with 
React 😝)

## 💻 Tech Stack

Created with [React](https://reactjs.org/) and bootstraped using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)\
Deployed using [GitHub Pages](https://pages.github.com/)

## 👩‍🎓Challenges and What I learned

Designing the website was one of the most frustrating yet rewarding things I've ever done. It was very difficult to first decide on fonts, styles and colours that I thought worked well together. Afterwards, enforcing the css to match with the vision I had in my head was another challenge. However, I am overall very happy with the result and currently planning on version 3 with better styling, smother transitions, and less text heavy paragraphs.

Deploying the site was another issue I encountered. At first I was unfamiliar with the process, thus when I ran the `build` scripts, the way I had my deploy command setup resulted in github pages pushing a static version of my site to master. This overwrote all the work I had done and I had to spend a lot of time finding the best way to deploy the site.

I also had a lot of toruble with `React-Router`. Refreshing pages with specific routes resulted in a `404` page. For example, if we refreshed `angelamchen.com/about`, a `404` will be returned. After some researching, this issue occurs since the server, which renders at the indedx, evalues the URL. If we refresh the page, then the browser is looking for the file `/about`, which does not exist, since the routing is done on the client side which has not been laoded. As a solution I followed the suggestion given here: https://github.com/rafgraph/spa-github-pages. This adds a script to the 404 page returned which redirects the browser to a new url containing a query string and hash fragment indicating the current page. GitHub Pages will ignore the query string and redirect the page to `index/html`, which contains a script and that reads the query and route the page correctly.
