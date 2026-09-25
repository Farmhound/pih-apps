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
    url: ''   // paste the Requisition Tracker web app URL here
  }
];
