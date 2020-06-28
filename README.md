# Covid Comfort

Since late December 2019, until now, the world has been changed by a pandemic.
 The Covid-19 (Respiratory disease) virus has spread to all the areas of the world.
  The scale of this pandemic can be compared to the swine flu pandemic in 2010 or the Spanish flu in 1918.
 The pandemic had a massive shock on the stock market.
  This left many essential workers with the short end of the stick.
   The aim of the website is to help the essential workers make ends meet.
    “Covid Comfort” Aims to compensate for the social divide.
     Essential workers normally survive on pay cheque to pay cheque and there are no extra funds for extra expenses.
      “Covid Comfort” wants to bridge that social issue; it aims to supply people on the front line with some funds so that
       they can afford personal protective equipment, 
       help them afford their rent or just help them afford their next meal. 

We- The human race- need to come together and unite now more than ever, 
helping each other, to flatten the curve of the virus so that we can return to our normal 
lives again, as fast as possible. 

 
## UX
 
In this section I want to provide a deep insight into my UX process.
 I have explored [the strategy plane, the scope plane and the structure plane](wireframes/theuxdesign.pdf) in as much depth as I possibly could.
The link should open a pdf file. This should be opened and read, before continuing with this document. 

The colour schemes/pallet used in this website is shades of blue:
- The main landing page is #3611ed. 
- The colours of the links in the navigation bar was supllied by bootstrap
- The callout backgrounds (Slogan and quotes) have a black background (rgba(0,0,0,0.25)) that is slightly transparent which gives a darker blue background.
- The font on the landing page is #ffffff
- The font colour for the learn more section is #000000
- The background of the learn more section is purely negative space: in other words #ffffff
- The secondary navigation bars are coloured #3611ed
- The colours of the buttons were supllied by bootstrap
- The form has a a black background (rgba(0,0,0,0.25))
- The submit button colour was also provided by bootstrap
- The footer background is #1c0686
- The footer font is rgb(255, 255, 255)
- The footer links have no been changed so that they stand out as negative space to draw attention.

I mentioned in the pdf that I will provide a list of User Stories. 
We will assume all Users will start at the landing page. The User can then navigate through the site as they wish to achieve other goals of other users. 

- As a Donator I want to got to the donate section, so that I can donate money to "Covid Comfort", to help an essential worker. 

This is done by clicking the "Donate" button in the main navigation bar. This will take the user to the donate section. The User would then complete the form and click on "Donate". 
If all fields are completed, a modal will appear with feedback to the user that they have successfully donated their amount of money to "Covid Comfort". 

- As an essential worker, I want to apply to "Covid Comfort", to be able to get the benefits they offer.

This feature is not available yet, including a contact section. This will be implemented in future updates.

- As any User, I want to learn more about "Covid Comfort", to see what the company offers and who they are helping. 

This is done by clicking the "Learn More" buttton in the navigation bar. This will take the users to the "Learn more" section where they can read through the content of the page 
and process the information presented. 

- As any user, I want to navigate to other sites that provide more information and accept donations properly.

The user will need to reach the footer in any way they wish. Sites that provide more information are linked under the "Please educate yourself" section. 
Sites that provide the user with the ability to donate to an organisation are linked in under the "If you do wish to donate" section 

- As any user, I want to check the legality of this website, so that I can verify its legitimacy.

The user will need to reach the footer in any way they wish. Under the "Legal" section, it provides more information to the user. 
The user can then decide what to do next. 

I have prepared [wireframes/mockups](wireframes/TheFinal.pdf) created in Balsamiq mockups 3. The desktop and mobile first approaches have been included as part of the design process. 


## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features

- The main navigation bar - It allows all users to navigate through different sections of the site, by them clicking on any links.
- The secondary navigation bar (found at the bottom of each main section) - allows all users to navigate through to other sections of the site, to accomplish ease of navigation for a positive user experience. 
- The external links in the footer - It allows users to go to legitimate sites and read the legality of this site. This was done to try and maintain the image of a proffessional student project.
- The Form - It allows any user wishing to donate to help an essential worker, have them fill out a form that provides users with feedback. It has form validation implemented as well.

### Features Left to Implement
- A contact page will be needed in the future. This will be done once the main offices have been established (I do not want to display somebody else's address or possible contact information unknowingly).
- A registration form will need to be implemented but will require a lot more legal inestigation due to the site being scaled to an international audience.
- In the future a possible e-commerce backend could be implemented but only once the required skills have been gained. 

## Technologies Used

In this section, I will mention all of the languages, frameworks, libraries, and any other tools that I have used to construct this project.
 For each, I provided its name, a link to its official site and a short sentence of why it was used. 
 Some of these are sites where code was taken from or media was taken from. 
 Due to my understanding of the term "libraries" I have included all the sites I have used to create this website.

### Lanuages 

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Tools 

- [Palletton](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)
- [Logomakr](https://logomakr.com/)
- [Autoprefixer](https://autoprefixer.github.io/)
- [Unsplash](https://unsplash.com/)
- [Markup Validation service](https://validator.w3.org/) 
- [Contrast ratio](https://contrast-ratio.com/) 
- [HTMLCheatSheets - css](https://htmlcheatsheet.com/css/)
- [GitHub](https://github.com/)
- [Git](https://git-scm.com/)
- [Gitpod](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki?hl=en)
- [VSC](https://code.visualstudio.com/download) 
- [Microsoft Office](https://www.office.com/)
- [favicon](https://www.favicon.cc/) and a [tutorial](https://tutorialehtml.com/en/what-is-favicon-ico-usage/)  

### Frameworks

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome icons](https://fontawesome.com/icons?d=gallery)
- [Google fonts](https://fonts.google.com/)

### libraries
- [JQuery](https://jquery.com)


## Testing

In this section, I will provide information on testing to demonstrate that the site works well.
 Essentially, in this part I want to go over all of my user stories from the UX section and ensure that they all work as intended, 
 with the project providing an easy and straightforward way for the users to achieve their goals. 
 I will also be demonstrating the positive user experience by testing additional features as well.

1. The Donate form 
    1. Go to the donate section by clicking the various "donate" links (in the main navigation bar or the secondary navigation bars) or scroll to the section. 
    2. Press Donate without filling out any data, a error message appears in the "First Name" input field.
    3. Added data to "First Name", clicked "donate", error message appears in the "Last Name" input field.
    4. Added data to "Last Name", clicked "donate", error message appears in the "Email Address" input field.
    5. Added data to "Email Address", clicked "donate", error message appears in the "Amount you wish to donate" input field.
    6. Added data to "Amount you wish to donate", clicked "donate", a modal appears providing feedback to user that the form was filled out successfully.

If any data is missing from any input field, the modal will not activate. Thus the form works as expected.

2. The main navigation bar on the landing page.
    1. Clicking on the logo takes user to the landing page.
    2. Clicking on the "Home" link takes user to the landing page.
    3. Clicking on the "Learn More" link takes the user to the "Learn more" section.
    4. Clicking on the "Donate" link takes the user to the "Donate" section.

The main navigation bar works as expected

3. The secondary navigation bar in the "Learn more" section. 
    1. Clicking on the "Back to Home" button takes the user to the landing page.
    2. Clicking on the "Donate now" button takes the user to the "Donate" section.

The secondary navigation bar in the "learn more" section works as expected. 

4. The secondary navigation bar in the "Donate" section. 
    1. Clicking on the "Back to Home" button takes the user to the landing page.
    2. Clicking on the "Back to Leatn More" button takes the user to the "Learn more" section.

The secondary navigation bar in the "Donate" section works as expected. 

5. Testing external links in the footer.
    1. Clicking on the "World Health Organisation" link takes users to the covid-19 WHO page. 
    2. Clicking on the "World Meter" link takes users to the "World Meter" site displaying the pandemic statistics
    3. Clicking the "USBG" link takes the users to the Bartender Emergency Assistance Program
    4. Clicking on the "Restaurant Workers Community Foundation" link takes users to the Restaurant Workers’ Community Foundation official site.

The external links in the footer works as expected. 

The project works on different browsers and screen sizes in the same manner. The browsers tested were: Microsoft edge, Google Chrome and Mozilla firefox. 
The project displays on mobile devices in the same manner as in the [wireframes/mockups](wireframes/TheFinal.pdf). 

During testing it was decided that the attribute `target="_blank"` needed to be applied to the external links, this has been done. 


## Deployment

This section describes the process I went through to deploy the project to a hosting platform (in this case: GitHub Pages).

### Deploying a Live link

All seperate branches were merged into the master branch to create the final product. 
To deploy my live project I followed these instructions: 

1. In my repository on GitHub
    1. Go to settings
    2. Scroll down to Github Pages
    3. select "master branch" on my "Source" drop down list. 

Then a link was provided to me. The link took me to my deployed web page.  

The main difference between the deployed version and the development version (Using developer tools built into google chrome) was;
- The development version had an issue where on mobile devices the user was able to slightly scroll horizontally, This was not the case in the deployed version.
    - This was tested in the early phases by sharing the live link to a mobile device and seeing that being able to scroll horizontally was not possible

### Deploying the project locally 
The device used by the creator of this project has windows 10 OS. Thus these instructions will be designed for windows

This is how to view the project locally (clone): 
1. Download the repository to a local device by clicking the button clone/download button on GitHub
2. Follow the pop up screens to save the repository in a file you choose.
3. The website can be launched by double clicking the index.html file. 

To inspect and edit (develop) the files locally: 
1. Right clicking on the file 
2. hover over, "Open with"
3. Chose a app that can display the code (VSC/Notepad etc). 
4. The code will be displayed locally. 

## Credits

### Content
- The text for content ("Learn more") was researched from the [South African Government - Essential services - Coronoavirus Covid-19](https://www.gov.za/Coronavirus/essential-services), [Ontario](https://www.ontario.ca/page/list-essential-workplaces) and [KQED](https://www.kqed.org/news/11809643/the-many-challenges-of-being-an-essential-service-worker-in-a-pandemic). 
- As this is a fictitious website content from "When will essential workers be receiving the donations?", is made up by me.
- As this is a fictitious website content from the landing page (Quotes) is also made up.
- The slogan of the company was made up on the spot. There was research done and no company appeared when the slogan was googled. 
- The Form was personally designed by myself.
- The Legal statement made in the footer was made up as well and has not been proccessed by legal company. 
- The content in the footer was phrased by myself.

### Media
- The photos used in the landing page were obtained from [Unsplash](https://unsplash.com/)
    - [School Girls](https://images.unsplash.com/photo-1574465636377-7781c5117a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80)
    - [Farmer](https://images.unsplash.com/photo-1504224357642-c87eacea1da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80)
    - [Garbage Man](https://images.unsplash.com/photo-1564838344856-ad3ed7d0e964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80)
    - [Care taker](https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80)

- Two photos on the landing page came from a Google Image search for "retail worker" and "Waiters"
    - [Retail worker](https://media.istockphoto.com/photos/businessman-checking-inventory-in-a-digital-tablet-at-a-supermarket-picture-id999084240?k=6&m=999084240&s=612x612&w=0&h=qpXTsB7r22GgXwuIFZkQdEqPIEu2rDL1L3w6qWPpVNE=)
    - [Waiters](https://i0.wp.com/www.wantcv.com/wp-content/uploads/2019/07/Waiter-resume-writing.jpg?fit=1024%2C559&ssl=1&resize=1200%2C900)

- The Logo was custom designed on [Logomakr](https://logomakr.com/) and then a screenshot was taken and cropped. 

- The background image in the "Donate" section was from a Google Image search for "man dying of covid"
    - [Background Image](https://www.google.com/search?q=man+dying+of+covid&sxsrf=ALeKk034w2t-0i7vJAZf9Vb8XReMjg0egQ:1590670374942&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjMqpz1zNbpAhUNi1wKHVsNCpQQ_AUoAXoECAsQAw&biw=1536&bih=760#imgrc=bL4gztUlBHecIM)
    - [Here is the image address I Used](https://www.washingtonpost.com/resizer/gksHoZzAbWAG0s6iG39TisVzO6o=/arc-anglerfish-washpost-prod-washpost/public/A6BFFMCKMAI6VELE2MKUVWFFZU.jpg)

### Acknowledgements

- Scott (Tutor) from the Code Institute helped with errors in the navigation bar burger Icon.  
- Tim (Tutor) from the Code Institute helped with understanding and executing media queries.
- [Dick Vlaanderen](https://github.com/dickvla) (mentor) from the Code Institute helpped with wrting the Java Script code for the form validation. 
# JScodeTester
