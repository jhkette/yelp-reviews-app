import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer RdkDTWQhD9yQS6vOGKVJ7Mlpuphotz17M7IQnej3Kc831rIxVYCnIuDGUAQvvzeaafjbTBTcovhAmkFtDuiV81CseN-RpfDE9l2GFBFg1CLHeupDC7KK0comUDM0XnYx'
    }
})