export interface defCommandInt {
  name: String;
  description: String;
  parameters?: String;
}

export const defCommands: defCommandInt[] = [
  {
    name: 'about',
    description:
      "Returns an embed containing Rosalia's Discord link, repository link, number of commands, and number of events.",
  },
  {
    name: 'announce',
    description: 'Restricted to the OWNER_ID account, this command will have Rosalia send [message] to the BOT_CHANNEL in the BOT_GUILD.',
    parameters: "[message]"
  }, {
    name: 'help',
    description: 'This command returns a list of the available default commands. If [command] is provided, it returns additional information on that command.',
    parameters: "[?command]"
  }
];
