export interface envVariableInterface {
  name: String;
  optional: String;
  description: String;
}

export const envVariables: envVariableInterface[] = [
  {
    name: 'BOT_GUILD',
    optional: 'REQUIRED',
    description:
      'This is the Discord ID for the server the bot should run events in.',
  },
  {
    name: 'BOT_CHANNEL',
    optional: 'REQUIRED',
    description:
      'This is the Discord ID for the channel the bot should run events and respond to commands in.',
  },
  {
    name: 'DISCORD_TOKEN',
    optional: 'REQUIRED',
    description:
      'The value of this variable will be your Bot Token from the Discord developer page. It is VERY important that you keep this token a secret - do not upload it to GitHub or share it publicly, as this will allow anyone to access your discord bot.',
  },
  {
    name: 'EVENT_NAME',
    optional: 'OPTIONAL',
    description:
      'The value here determines which event the bot should load. If no value is provided, the bot falls back to the default set of commands.',
  },
  {
    name: 'MONGO_URI',
    optional: 'REQUIRED',
    description:
      'The value of this variable will be your MongoDB authentication URI. Like the bot token, this needs to be kept secret to prevent unauthorised access to and modification of your database.',
  },
  {
    name: 'OWNER_ID',
    optional: 'OPTIONAL',
    description:
      'This tells the bot which Discord account is the owner. The bot will respond just a little differently to the owner. Leaving this blank WILL lock out some commands.',
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
