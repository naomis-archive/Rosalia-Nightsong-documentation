export interface envVariableInterface {
  name: String;
  optional: String;
  description: String;
}

export const envVariables: envVariableInterface[] = [
  {
    name: 'ROSALIA_GUILD',
    optional: 'REQUIRED',
    description:
      'This is the Discord ID for the server Rosalia should run events in.',
  },
  {
    name: 'ROSALIA_CHANNEL',
    optional: 'REQUIRED',
    description:
      'This is the Discord ID for the channel Rosalia should run events and respond to commands in.',
  },
  {
    name: 'DISCORD_TOKEN',
    optional: 'REQUIRED',
    description:
      'The value of this variable will be your Token from the Discord developer page. It is VERY important that you keep this token a secret - do not upload it to GitHub or share it publicly, as this will allow anyone to access your Discord Bot application.',
  },
  {
    name: 'EVENT_NAME',
    optional: 'OPTIONAL',
    description:
      'The value here determines which event Rosalia should load. If no value is provided, she falls back to the default set of commands.',
  },
  {
    name: 'MONGO_URI',
    optional: 'REQUIRED',
    description:
      'The value of this variable will be your MongoDB authentication URI. Like the token, this needs to be kept secret to prevent unauthorised access to and modification of your database.',
  },
  {
    name: 'OWNER_ID',
    optional: 'OPTIONAL',
    description:
      'This tells Rosalia which Discord account is the owner. She will respond just a little differently to the owner. Leaving this blank WILL lock out some commands.',
  },
  {
    name: 'WH_ID',
    optional: 'OPTIONAL',
    description: 'This is the ID for the Discord webhook.',
  },
  {
    name: 'WH_TOKEN',
    optional: 'OPTIONAL',
    description: 'This is the token for the Discord webhook.',
  },
];
