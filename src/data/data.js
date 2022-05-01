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
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 07:56"),
            duration: 65,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Mon Apr 25 2022 13:30"),
            duration: 30,
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
        time: [
          {
            isDone: true,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 4:30"),
            duration: 75,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Mon Apr 25 2022 10:30"),
            duration: 30,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Mon Apr 25 2022 14:30"),
            duration: 150,
          },
          {
            isDone: false,
            id: 1,
            startDate: new Date("Tue Apr 26 2022 4:30"),
            duration: 75,
          },
          {
            isDone: false,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 10:30"),
            duration: 30,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Tue Apr 26 2022 14:30"),
            duration: 150,
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
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 3:30"),
            duration: 120,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Mon Apr 25 2022 8:30"),
            duration: 85,
          },
          {
            isDone: false,
            id: 3,
            startDate: new Date("Mon Apr 25 2022 15:30"),
            duration: 15,
          },
          {
            isDone: false,
            id: 1,
            startDate: new Date("Tue Apr 26 2022 3:30"),
            duration: 120,
          },
          {
            isDone: false,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 8:30"),
            duration: 85,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Tue Apr 26 2022 15:30"),
            duration: 15,
          },
          {
            isDone: true,
            id: 1,
            startDate: new Date("Wed Apr 27 2022 3:30"),
            duration: 120,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Wed Apr 27 2022 8:30"),
            duration: 85,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Wed Apr 27 2022 15:30"),
            duration: 15,
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
        time: [
          {
            isDone: true,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 4:30"),
            duration: 25,
          },
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon Apr 25 2022 9:30"),
            duration: 90,
          },
          {
            isDone: false,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 10:30"),
            duration: 100,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 4:30"),
            duration: 30,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Wed Apr 27 2022 14:30"),
            duration: 60,
          },
          {
            isDone: true,
            id: 1,
            startDate: new Date("Mon May 2 2022 4:30"),
            duration: 25,
          },
          {
            isDone: false,
            id: 1,
            startDate: new Date("Mon May 2 2022 9:30"),
            duration: 90,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue May 3 2022 10:30"),
            duration: 100,
          },
          {
            isDone: false,
            id: 2,
            startDate: new Date("Tue May 3 2022 4:30"),
            duration: 30,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Wed May 4 2022 14:30"),
            duration: 60,
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
        repeatTime: 3,
        time: [
          {
            isDone: false,
            id: 1,
            startDate: new Date("Sun Apr 24 2022 4:30"),
            duration: 40,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue Apr 26 2022 10:30"),
            duration: 130,
          },
          {
            isDone: false,
            id: 3,
            startDate: new Date("Thu Apr 28 2022 14:30"),
            duration: 110,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Thu Apr 28 2022 11:00"),
            duration: 180,
          },
          {
            isDone: false,
            id: 1,
            startDate: new Date("Sun May 1 2022 4:30"),
            duration: 40,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue May 3 2022 10:30"),
            duration: 130,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Thu May 3 2022 14:30"),
            duration: 110,
          },
          {
            isDone: false,
            id: 3,
            startDate: new Date("Thu May 3 2022 11:00"),
            duration: 180,
          },
          {
            isDone: true,
            id: 1,
            startDate: new Date("Sun May 8 2022 4:30"),
            duration: 40,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Tue May 10 2022 10:30"),
            duration: 130,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Thu May 10 2022 14:30"),
            duration: 110,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Thu May 10 2022 11:00"),
            duration: 180,
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
            duration: 150,
          },
          {
            isDone: true,
            id: 2,
            startDate: new Date("Wed Apr 27 2022 10:30"),
            duration: 70,
          },
          {
            isDone: true,
            id: 3,
            startDate: new Date("Fri Apr 29 2022 14:30"),
            duration: 50,
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
