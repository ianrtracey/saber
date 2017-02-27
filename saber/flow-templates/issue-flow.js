module.exports = {
  name: "New Issue",
  webhookUrl: 'https://hooks.zapier.com/hooks/catch/258659/msxf2m/',
  description: "Creates a new issue to trello",
  schema: {
    issue_name: "",
    issue_description: "",
    issue_label: "",
    assigned_to: ""
  }
};
