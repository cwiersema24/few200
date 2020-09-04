export interface GivingListItem {
  id: string;
  name: string;
  holiday: string;
  date: Date;
  needsCard: boolean;
  needsGift: boolean;
  cardCompleted?: boolean;
  giftCompleted?: boolean;
}
