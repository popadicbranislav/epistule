import axios from "axios";
import { RASA_URL } from "./config";

const rasaClient = axios.create({
  baseURL: RASA_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

type RasaRestWebhookPayload = {
  message: string;
  sender: string;
};

export const RasaService = {
  post(payload: RasaRestWebhookPayload) {
    // {message: "/INTENTinit", sender: "7ff1126f-9297-4ff5-8dd3-5dbaca0b59ca"}

    return rasaClient.post(`webhooks/rest/webhook`, payload);
  },
};
