export const API_ROUTES: any = {
    login: { apiPath: '/login', method: 'POST' },
    signIn: { apiPath: '/createUser', method: 'POST' },
    update: { apiPath: '/updateUser', method: 'POST' },
    userDetail: { apiPath: '/updateUser/:Mobileno', method: 'GET' },
    sendSms: { apiPath: '/userSms', method: 'GET' }
}