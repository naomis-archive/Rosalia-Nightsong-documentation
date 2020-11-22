export interface configCommandInterface {
  call: String;
  result: String;
}

export const configCommands: configCommandInterface[] = [
  {
    call: 'becca!config set prefix [prefix]',
    result:
      'This command determines what symbol the bot looks for to trigger a command. The default is becca!, but you may change this to whatever you wish.',
  },
  {
    call: 'becca!config set log_channel [#channel]',
    result:
      'This command determines the name of the channel where the bot should log things like deleted messages, and kick/ban instances.',
  },
  {
    call: 'becca!config set welcome_channel [#channel]',
    result:
      'This command allows you to set the name of the channel for user welcome/depart messages.',
  },
  {
    call: 'becca!config set restricted_role [@role]',
    result:
      "This command sets the name of the Discord role your server uses to restrict a user's ability to send messages.",
  },
  {
    call: 'becca!config set moderator_role [@role]',
    result:
      "This command sets the name of your server's moderation role. This should be your lowest moderation level, as all moderators will need this role to see the suspended channels.",
  },
  {
    call: 'becca!config set hearts [@user]',
    result:
      'This command adds the id of the user mentioned to the hearts list - the bot automatically add a heart react to the messages of that user. If that user is already set to receive hearts, the bot will remove that user instead.',
  },
  {
    call: 'becca!config set blocked [@user]',
    result:
      'This command adds the id of the user mentioned to the blocked list. The bot will refuse command access to users in the block list. If the user is already present, the bot will remove them instead.',
  },
  {
    call: 'becca!config set thanks ["on"/"off"]',
    result: 'This command will turn the thanks listener on and off.',
  },
  {
    call: 'becca!config set levels ["on"/"off"]',
    result: 'This command will turn the levels listener on and off.',
  },
  {
    call: 'becca!config set custom_welcome [message]',
    result:
      "This command will set a custom welcome message for your server. The value of [message] can be a standard sentence, and supports Discord markup - but must be kept under 1000 characters. Additionally, a couple of special strings will be replaced: {@username} will be replaced with the username of the new member, and {@servername} will be replaced with your server's name.",
  },
  {
    call: 'becca!config set self_roles [@role]',
    result:
      'This command will add or remove a role from the self-assignable list (for use with the role command).',
  },
];
