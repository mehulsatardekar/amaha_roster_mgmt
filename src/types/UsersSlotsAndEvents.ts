type BlockedSlot = {
  slot: string;
  reason: string;
};

export type Availability = {
  timeStamp: string;
  online_slots: BlockedSlot[];
  offline_slots: BlockedSlot[];
  both_slots: BlockedSlot[];
  online_booked_slots: BlockedSlot[];
  offline_booked_slots: BlockedSlot[];
  blocked_slots: BlockedSlot[];
};

export interface Event {
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  borderColor?: string;
  textColor?: string;
}

export interface UserSlotsAndEvents {
  userRefID: number;
  events: Event[];
}

export type DateSlot = {
  userRefID: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: Record<string, any>[]; // Adjust the type if event structure is known
};

export interface FetchUsersSlotsAndEventsResponse {
  dates: UserSlotsAndEvents[];
}
