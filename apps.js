/*
 * PIH Apps — the list of apps shown on the home screen.
 * To add a new project: copy one block, give it a unique id, and paste in
 * the Apps Script web app URL (Deploy → Manage deployments → Web app URL).
 * Leave url blank to show it as "Link not set yet".
 */
window.PIH_APPS = [
  {
    id: 'survey-dashboard',
    name: 'Plumbing Survey Tracker',
    description: 'Schedule surveys, assign operators and track completion.',
    colour: '#16294d',
    url: 'https://script.google.com/macros/s/AKfycbwGMelOij25BnallGeaqHTa3GHHaCCpMsUYgZTpeAJUVlH-TFGHloqk8NOoavb5CAw2zw/exec?page=dashboard'
  },
  {
    id: 'survey-form',
    name: 'Plumbing Survey Form',
    description: 'Complete a survey on site and record materials required.',
    colour: '#d2a53a',
    url: 'https://script.google.com/macros/s/AKfycbwGMelOij25BnallGeaqHTa3GHHaCCpMsUYgZTpeAJUVlH-TFGHloqk8NOoavb5CAw2zw/exec'
  },
  {
    id: 'requisitions',
    name: 'Stock Requisition Tracker',
    description: 'Open, collected and delivered stock requisitions.',
    colour: '#3f8a4f',
    url: 'https://script.google.com/macros/s/AKfycbzrk8_xOPmzYq8YgfVKS777C_Ou13cHDA_igCvVBlb-84rQz_ufmP3tVOiTV8SpfyWe/exec'
  },
  {
    id: 'problematic-cases',
    name: 'Problematic Cases',
    description: 'Case list, completions and Tuesday review calendar.',
    colour: '#c0512f',
    url: 'https://script.google.com/macros/s/AKfycbztU4U1LObUWFW1q6sjdF1d-YdysxkdTKb08YzEqzOWgNk6zimbQFqJmTeQ9qlZ7uKa/exec'
  },
  {
    id: 'tool-ledger',
    name: 'Tool Ledger',
    description: 'Staff tools, tool requests and repair requests.',
    colour: '#2f6f9f',
    url: 'https://script.google.com/macros/s/AKfycbx-u5o3rTivPEMH2fqIGlrGcqD6mwEE_eLScwLcHTJyuFWLT-pb5CQDKMRQpUTph1s_IQ/exec'
  },
  {
    id: 'staff-hub',
    name: 'Staff Hub Checklist',
    description: 'Employee house set-up checklists, room by room.',
    colour: '#6b4fa0',
    url: 'https://script.google.com/macros/s/AKfycby1kPopJiWa4s1C_FjxPtDzZdVVsNoVFVa8WFB3cWUCI6RjWSK-it_vUS-s5HiY-OZQjw/exec?mkey=e9c559d0a8b643a59ef8f89d3615b4bdc6d148b9'
  }
];
