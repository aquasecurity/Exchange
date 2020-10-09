var data = [
  {
    type: "integration",
    title: "Integrations",
    headers: ["integration", "description", "compatibility", "repository"],
    rows: [
      {
        name: "AWS Security Hub plug-in",
        description:
          "Sends AWS Security Hub real-time security events in cloud native applications and environments, providing information regarding image vulnerabilities and misconfigurations, cloud host compliance posture, and suspicious or unauthorized events in runtime.",
        compatibility: "Aqua 4.5, 4.6, 5.0",
        linkText: "AWS Security Hub repo",
        linkUrl: "https://github.com/aquasecurity/aws-security-hub-plugin"
      },
      {
        name: "OpsGenie",
        description:
          "Opens tickets in OpsGenie regarding cloud native security incidents, allowing users to track and manage security incidents across images, hosts and workloads.",
        compatibility: "Aqua 4.5, 4.6, 5.0",
        linkText: "OpsGenie repo",
        linkUrl: "https://github.com/aquasecurity/opsgenie-plugin"
      },
      {
        name: "JIRA",
        description:
          "Open a ticket in JIRA when Aqua's vulnerability scanning finds vulnerabilities in images",
        compatibility: "Aqua 5.0",
        linkText: "JIRA Integration",
        linkUrl: "https://github.com/aquasecurity/alm-integration"
      },
      {
        name: "ServiceNow",
        description:
          "Open a ticket in ServiceNow when Aqua's vulnerability scanning finds vulnerabilities in images",
        compatibility: "Aqua 5.0",
        linkText: "ServiceNow",
        linkUrl: "https://github.com/aquasecurity/alm-integration"
      },
      {
        name: "Slack",
        description:
          "Send a message to a Slack channel when Aqua's vulnerability scanning finds vulnerabilities in images",
        compatibility: "Aqua 5.0",
        linkText: "Slack Integration",
        linkUrl: "https://github.com/aquasecurity/alm-integration"
      },
      {
        name: "MS Teams",
        description:
          "Send a message to a MS Teams channel when Aqua's vulnerability scanning finds vulnerabilities in images",
        compatibility: "Aqua 5.0",
        linkText: "MS Teams Integration",
        linkUrl: "https://github.com/aquasecurity/alm-integration"
      }
    ]
  },
  {
    type: "thirdParty",
    title: "3rd Party Apps",
    headers: ["solution", "description", "compatibility", "repository"],
    rows: [
      {
        name: "Sumo Logic",
        description:
          "Aqua Reports is a basic API server that provides reports for the Aqua Security Cloud Native Security Platform (CSP). Aqua Reports does this by pulling information directly from the Aqua CSP API.",
        compatibility: "Aqua 4.5, 4.6",
        linkText: "Aqua Reports",
        linkUrl: "https://github.com/BryanKMorrow/aqua-reports"
      },
      {
        name: "Splunk",
        description: "Coming soon...<br> The Aqua Security App for Splunk",
        compatibility: "Aqua 4.x",
        linkText: "TBD",
        linkUrl: ""
      }
    ]
  },
  {
    type: "extensions",
    title: "Product Extensions",
    headers: ["extension", "description", "compatibility", "repository"],
    rows: [
      {
        name: "Aqua Reports",
        description:
          "Aqua Reports is a basic API server that provides reports for the Aqua Security Cloud Native Security Platform (CSP). Aqua Reports does this by pulling information directly from the Aqua CSP API.",
        compatibility: "Aqua 4.5, 4.6",
        linkText: "Aqua Reports",
        linkUrl: "https://github.com/BryanKMorrow/aqua-reports"
      },
      {
        name: "Email notifications",
        description:
          "Send an email notification when Aqua's vulnerability scanning finds vulnerabilities in images",
        compatibility: "Aqua 5.0",
        linkText: "Email Integration",
        linkUrl: "https://github.com/aquasecurity/alm-integration"
      }
    ]
  },
  {
    type: "support",
    title: "Platform Support",
    headers: ["platform", "description", "compatibility", "repository"],
    rows: [
      {
        name: "ARO 3.11",
        description: "Instuctions and scripts to deploy Aqua on ARO 3.11",
        compatibility: "Aqua 4.5+ & ARO 3.11",
        linkText: "ARO Deployment",
        linkUrl: "https://github.com/aquasecurity/ARO-deployment"
      }
    ]
  }
];
