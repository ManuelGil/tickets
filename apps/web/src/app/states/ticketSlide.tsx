import { createSlice } from '@reduxjs/toolkit';

export type messageStructur = {
  id: number;
  user: string;
  data: string;
};

export type ticketStructur = {
  id: number;
  date: string;
  title: string;
  description: string,
  techSupport: string;
  user: string;
  state: string;
  lastContact: string;
  application: string;
  messages: messageStructur[];
};
