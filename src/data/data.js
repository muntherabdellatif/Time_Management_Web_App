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
        isRepeat: true,
        repeatTime: 5,
        time: [
          {
            id: 1,
            startHour: 12,
            startMin: 45,
            endHour: 14,
            endMin: 0,
          },
          {
            id: 2,
            startHour: 9,
            startMin: 0,
            endHour: 10,
            endMin: 0,
          },
          {
            id: 3,
            startHour: 6,
            startMin: 30,
            endHour: 8,
            endMin: 15,
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
        repeatTime: 5,
        time: [
          {
            id: 1,
            startHour: 11,
            startMin: 45,
            endHour: 12,
            endMin: 0,
          },
          {
            id: 2,
            startHour: 8,
            startMin: 0,
            endHour: 9,
            endMin: 30,
          },
          {
            id: 3,
            startHour: 6,
            startMin: 20,
            endHour: 7,
            endMin: 15,
          },
        ],
      },
    },
    {
      id: 3,
      name: "work 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      progress: 30,
      isDone: false,
      relatedTo: "health",
      times: {
        repeat: "weekly",
        isRepeat: true,
        repeatTime: 5,
        time: [
          {
            id: 1,
            startHour: 7,
            startMin: 45,
            endHour: 12,
            endMin: 0,
          },
          {
            id: 2,
            startHour: 8,
            startMin: 0,
            endHour: 12,
            endMin: 30,
          },
          {
            id: 3,
            startHour: 15,
            startMin: 20,
            endHour: 20,
            endMin: 15,
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
      times: [
        {
          id: 1,
          repeat: "weekly",
          day: "sunday",
          dayInMonth: "14",
          isRepeat: true,
          repeatTime: 10,
          startHour: 1,
          startMin: 30,
          endHour: 4,
          endMin: 0,
        },
      ],
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
