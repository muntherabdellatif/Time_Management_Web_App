export const userData = {
  id: 1,
  userFirstName: "Monther",
  userLastName: "Abdellatif",
  works: [
    {
      id: 1,
      name: "work 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 50,
      isDone: false,
      relatedTo: "skills",
      times: {
        repeat: "daily",
        isRepeat: false,
        repeatTime: 0,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 07:56"),
            endDate: new Date("Mon Apr 25 2022 10:56"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Mon Apr 25 2022 13:30"),
            endDate: new Date("Mon Apr 25 2022 15:00"),
          },
        ],
      },
    },
    {
      id: 2,
      name: "work 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 30,
      isDone: false,
      relatedTo: "health",
      times: {
        repeat: "daily",
        isRepeat: true,
        repeatTime: 20,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 4:30"),
            endDate: new Date("Mon Apr 25 2022 7:00"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Mon Apr 25 2022 10:30"),
            endDate: new Date("Mon Apr 25 2022 12:00"),
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Mon Apr 25 2022 14:30"),
            endDate: new Date("Mon Apr 25 2022 17:30"),
          },
        ],
      },
    },
    {
      id: 3,
      name: "work 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 50,
      isDone: false,
      relatedTo: "skills",
      times: {
        repeat: "daily",
        isRepeat: true,
        repeatTime: 1,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 3:30"),
            endDate: new Date("Mon Apr 25 2022 7:00"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Mon Apr 25 2022 8:30"),
            endDate: new Date("Mon Apr 25 2022 12:00"),
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Mon Apr 25 2022 15:30"),
            endDate: new Date("Mon Apr 25 2022 17:30"),
          },
        ],
      },
    },
    {
      id: 4,
      name: "work 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 30,
      isDone: false,
      relatedTo: "health",
      times: {
        repeat: "weekly",
        isRepeat: true,
        repeatTime: 1,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 4:30"),
            endDate: new Date("Mon Apr 25 2022 7:00"),
          },
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 9:30"),
            endDate: new Date("Mon Apr 25 2022 12:00"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 10:30"),
            endDate: new Date("Tue Apr 26 2022 12:00"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 4:30"),
            endDate: new Date("Tue Apr 26 2022 5:15"),
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Wed Apr 27 2022 14:30"),
            endDate: new Date("Wed Apr 27 2022 17:30"),
          },
        ],
      },
    },
    {
      id: 5,
      name: "work 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 30,
      isDone: false,
      relatedTo: "health",
      times: {
        repeat: "weekly",
        isRepeat: true,
        repeatTime: 10,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Sun Apr 24 2022 4:30"),
            endDate: new Date("Sun Apr 24 2022 7:00"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 10:30"),
            endDate: new Date("Tue Apr 26 2022 12:00"),
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Thu Apr 28 2022 14:30"),
            endDate: new Date("Thu Apr 28 2022 17:30"),
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Thu Apr 28 2022 11:00"),
            endDate: new Date("Thu Apr 28 2022 12:30"),
          },
        ],
      },
    },
  ],
  projects: [
    {
      id: 1,
      name: "project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 85,
      isDone: true,
      relatedTo: "health",
      times: {
        repeat: "weekly",
        isRepeat: true,
        repeatTime: 10,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 4:30"),
            endDate: new Date("Mon Apr 25 2022 7:00"),
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Wed Apr 27 2022 10:30"),
            endDate: new Date("Wed Apr 27 2022 12:00"),
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Fri Apr 29 2022 14:30"),
            endDate: new Date("Fri Apr 29 2022 17:30"),
          },
        ],
      },
      steps: [
        {
          id: 1,
          name: "step 1",
          isDone: true,
        },
        {
          id: 2,
          name: "step 2",
          isDone: false,
        },
      ],
    },
  ],
};
