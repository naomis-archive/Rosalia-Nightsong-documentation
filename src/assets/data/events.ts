export interface eventInt {
  name: String;
  envName: String;
  startDate: String;
  endDate: String;
  description: String;
  commands: {
    name: String;
    description: String;
    parameters?: String;
  }[];
}

export const eventList: eventInt[] = [
  {
    name: 'Server Name Contest',
    envName: 'SNC',
    startDate: '20 November 2020',
    endDate: '22 November 2020',
    description:
      'This is a contest for naming the server. Users can submit one entry for the server name - if the user submits an entry again, the first will be overwritten.',
    commands: [
      {
        name: 'help',
        description:
          'Provides an embed containing information on the event and a list of available commands.',
      },
      {
        name: 'submit',
        description:
          'Allows a user to submit [name] as their entry for the contest.',
        parameters: '[name]',
      },
      {
        name: 'view',
        description:
          "Returns an embed containing the user's current submission.F",
      },
    ],
  },
];
