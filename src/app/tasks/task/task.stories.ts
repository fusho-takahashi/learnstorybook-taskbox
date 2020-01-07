import { TaskComponent } from "./task.component";
import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";

export const task = {
  id: "1",
  title: "Task Task",
  state: "TASk_INBOX",
  updateAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  pinTask: action("pinTask"),
  archiveTask: action("archiveTask")
};

storiesOf("Task", module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent]
    })
  )
  .add("default", () => {
    return {
      template: `<task-item [task]="task" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)"></task-item>`,
      props: {
        task,
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask
      }
    };
  })
  .add("pinned", () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: "TASK_PINNED" },
        onPinTask: actions.pinTask,
        onArchiveTask: actions.archiveTask
      }
    };
  })
  .add("archived", () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
      props: {
        task: { ...task, state: "TASK_ARCHIVED" },
        onPinTask: actions.pinTask,
        onArchiveTask: actions.archiveTask
      }
    };
  });
