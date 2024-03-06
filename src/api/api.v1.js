import * as requester from "./request"

const BaseUrl = 'https://sssserver.pythonanywhere.com/'

export const sent_email = async (data) => requester.post(`${BaseUrl}sent_email/`, data);