# Saber
## Workflow as Code
Saber is a CLI for your team's workfow that allows your team to move faster and work better together.

## Problem
Small and nacent engineering teams oftentimes face a lack of cohesion around development processes, not including the fact that for many teams, development platforms, tools and processes can change from project to project. This creates a landscape where worrying about development process for your team can take more time than shipping features.

## Meet Saber
Like a CLI for AWS or git, Saber abstracts away underlying workflows so that you can focus on shipping features and keeping your engineering team on the same page.

Ex: Suppose that your project use Trello as a way to manage features and user stories, but its always difficult to ensure that each member of your team includes the same necessary information on the Trello card.

## How it Works
Saber focuses on providing the infrastructure for your team to build awesome, shared workflows and businessprocesses in the cloud.
Steps for Saber Success:
1. Create a new team ```saber new team <team_name>```
2. Add teams members to join you (saber add bob@example.com) they will be sent an invitation email
3. Create a new flow using ```saber new action <action_name>```. This opens a vim editor with a prefilled 'result' function that will be returned to the CLI after completion.
4. Publish the new flow for the rest of your team to see ```saber public <action_name>```. Behind the scenes this creates an AWS Lambda function for you that executes the code that was written in step 4.
5. Supercharge your team.


```bash
$saber list actions

=== Actions for An Awesome Team Inc ===

Name: New Issue
Invoked by: saber new issue
Description: Creates a new isssue on Github issues with the necessary issue number and pending status details.

Name: New Feature
Invoked by: saber new feature
Description: Creates a feature branch, adds a new Trello feature card and puts the card under the 'pending list'.

Name: Get Funds Remaining
Invoked by: saber get funds <project_name>
Description: Get the funds remaining for one of the project names
```

```bash
$saber list members

=== Team Members at Awesome Team Inc ===

Ian Tracey
ian@example.com

Some Other Dude
dude@example.com
```

