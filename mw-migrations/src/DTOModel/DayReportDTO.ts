import { Timestamp } from "firebase/firestore";
import { CommentDTO } from "./CommentDTO.js";
import { JobDoneDTO } from "./JobDoneDTO.js";
import { PlanForNextPeriodDTO } from "./PlanForNextPeriodDTO.js";
import { CurrentProblemDTO } from "./CurrentProblemDTO.js";

export type DayReportDTOMigration = {
  uuid: string;
  date: Timestamp;
  jobDoneUuids: string[];
  planForNextPeriodUuids: string[];
  problemForCurrentPeriodUuids: string[];
  commentUuids: string[];
  isDayOff: boolean;
}

export type DayReportDTO = {
  uuid: string;
  date: string;
  jobDoneUuids: string[];
  planForNextPeriodUuids: string[];
  problemForCurrentPeriodUuids: string[];
  commentUuids: string[];
  isDayOff: boolean;
}

export type DayReportBackup = {
  uuid: string;
  commentsStringified: CommentDTO[],
  jobsDoneStringified: JobDoneDTO[],
  plansStringified: PlanForNextPeriodDTO[],
  problemsStringified: CurrentProblemDTO[],
  createdAt: {
    seconds: number,
    nanoseconds: number,
  }
  /**
   * @deprecated
   */
  isDayOff: boolean;
}

