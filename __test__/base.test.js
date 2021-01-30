import request from 'supertest'
import app from '../src/server'
import {personalData} from '../src/data/data'

describe('Base JSEND format', () => {
    test('base contains required JSEND message property', async () => {
        const response = await request(app).get('/');

        expect(response.body).toHaveProperty('message')
    })
    test('base contains required JSEND status property - ', async () => {
        const response = await request(app).get('/');

        expect(response.body).toHaveProperty('status')
    })
    test('base contains required JSEND data property - ', async () => {
        const response = await request(app).get('/');

        expect(response.body).toHaveProperty('data')
    })
})

describe('Personal Data - Full name', () => {
    test('personal data must contain name property', async () => {
        const response = await request(app).get('/');

        expect(response.body.data).toHaveProperty('name')
        expect(response.body.data.name).toEqual(personalData.name)
    })
    test('personal data must contain full name at least two names (firstname and lastname', async () => {
        const response = await request(app).get('/');

        expect(response.body.data.name.split(' ').length).toBeGreaterThan(1)
    })
    test('personal data must contain full name to be Tobechukwu Obitube', async () => {
        const response = await request(app).get('/');

        expect(response.body.data.name).toBe('Tobechukwu Obitube')
    })
})

describe('Personal Data - GitHub Handle', () => {
    test('personal data must contain github property', async () => {
        const response = await request(app).get('/');

        expect(response.body.data).toHaveProperty('github')
        expect(response.body.data.github).toEqual(personalData.github)
    })
    test('GitHub handle must contain the @ sympbol', async () => {
        const response = await request(app).get('/');

        expect(response.body.data.github.includes('@')).toBe(true)
    })
    test('Github handle must be @tobechukwuobitube', async () => {
        const response = await request(app).get('/');

        expect(response.body.data.github).toBe('@tobechukwuobitube')
    })
})