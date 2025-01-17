export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  receiverId: string | null;
  senderId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
