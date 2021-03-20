# qa_rentler

- [Summary](#summary)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [What Do We Test](#what-do-we-test)
- [How Do We Test](#how-do-we-test)
  - [Page Objects](#page-objects)

## Summary

This project was put together to test rentler.com. It uses Jest as a test
runner, and Selenium Webdriver to hook into the browser.

## Setup

This is how to set up our project.

1. clone it!
1. `npm i`

## Running Tests

To run all the tests, use the command: `npm test`

To run a specific test, use the command: `npx jest test_name`

## What Do We Test

Sign-in/Sign-up
Filters, including persistence
Hyperlink navigation
Favoriting listings

## How Do We Test

Broke down testing by the following areas:
1. Sign-in and Favoriting
2. Filtering by bed-bath, filtering by price, searching outside of US
3. Filtering by pets allowed, smoking allowed, property type
4. Filter persistence, hyperlink navigation, main page search button

### Page Objects

We made a base page object rentlerBasePage.ts to include methods in the header that appear on all screens.
Extended that base page by creating page objects for signInUpPage.ts for sign-in related functionality and an aboutUsPage.ts for hyperlink functionality.

Lessons Learned:

Tools/Technologies Used: Use more API testing: Postman, load with JMeter potentially.
Processes Followed: Could have designed our testing more based on standard user workflow. We focused more on how many things we could test verses the standard user workflow.

What went well:

Coverage of tests, tested some good sections of what our website does
Focused a lot on automation testing, save resources
Did manual testing just by going through website
Found quite a few bugs
Were able to work together to get tests to work


What didn't go well:

Not using Postman, presentation could have been improved
Rentler site is really buggy
focus more on the presentation a more

Testing Outcome:

Couldn't automatically sign-up, so had to do that manually

Bugs:
    There were hidden elements for the map that blocked automation for elements on the same page.
    The Search Bar on the main page and Search Bar under Search Listings provide different options in dropdown menu outside of US.
    When choosing outside of North America, the map does not match.
    The map does not match listings when leaving My Places.
    The map widget does not work well is is the main reason for the bugs that we found.

Filter persistence became user experience test. Expected to still remain, but it didn't.

