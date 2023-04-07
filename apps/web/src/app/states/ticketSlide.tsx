import { createSlice } from '@reduxjs/toolkit';

export type messageStructur = {
  id: string;
  user: string;
  data: string;
};

export type ticketStructur = {
  id: string;
  creationDate: string;
  title: string;
  description: string,
  techSupport: string;
  user: string;
  state: string;
  lastContact: string;
  application: string;
  messages: messageStructur[];
};
