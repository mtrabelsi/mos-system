Task:

In a json file you'll find the mocked data, which one of our backend services provides.
You need to create 2 pages:
* index page: includes only the spreadsheet with "_id", "criticality", "verified" and "address" fields from json for every incident. Click on any spreadsheet row moves user to the detail page;
* detail page: shows all fields for appropriate incident. User can change every field excluding "_id";

Requirements:
* we're using the React, but you may also use Angular/Vue/Svelte
* when user change the data on detail page and goes to index page - all changes must exist there;
* some design;