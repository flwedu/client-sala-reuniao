import { Room } from "./room";

export class RoomEvent {
  id: number;
  name: string;
  description: string;
  startingTime: Date;
  endingTime: Date;
  room: Room
}
