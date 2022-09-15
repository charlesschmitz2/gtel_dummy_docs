---
id: contributions
title: Making Contributions
sidebar_label: How to Contribute 
---

## Clone the Repository Locally
* ``` git clone repository_url ```

## Pull the Latest Code
* ``` git pull --all ```

## Create Local Workspace
In the root directory, run the commands:

* Create a new feature branch from ```main```
  * ```git checkout main```
  * ```git checkout -b newBranch oldBranch```

  We try to stick with the naming sceme (initials)-(featureName)-(versionNumber)

* Update the remote repository with the new branch
  * ```git push --set-upstream origin branchName```

* Checkout the new branch
  * ```git checkout branchName```

* You can use the ``` git branch -all ``` command to view all available branches. Make sure to ```git pull``` when grabbing new features pushed by other people.

## Start Development

* *Ensure that you are following best practices and giving descriptive commits.*


* *Commit often.*

## Pull Requests / Merge

* Pull Requests can be used to submit contributions to the `main` branch. When features are finished and tested they can submit pull requests.

* Go to the GitHub repository where your branch is located, click on "Pull Requests", select the button `New pull request`.

* Remember this is a team project, so whether pull requests are used or not, it is important to remember that all members should ensure each feature is well tested and agree upon merging it into the `main` branch.

* If you want to merge feature branches into main, you have to be careful. Many issues can and will arise so take extra time to ensure everything is merged properly. To find the commands and instructions on merging refer to this source [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).
