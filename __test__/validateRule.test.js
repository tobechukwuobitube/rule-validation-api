import request from 'supertest'
import app from '../src/server'
import {validateRuleSampleData, dataWithEqualEvaluationRule} from '../src/data/data'


describe('Validate Rule Required response properties', () => {
    test('Validate Rule response contains required message property', async () => {
        const response = await request(app).post('/validate-rule').send(validateRuleSampleData);

        expect(response.body).toHaveProperty('message')
    })

    test('Validate Rule response contains required status property - ', async () => {
        const response = await request(app).post('/validate-rule').send(validateRuleSampleData);

        expect(response.body).toHaveProperty('status')
    })

    test('Validate Rule response contains required data property - ', async () => {
        const response = await request(app).post('/validate-rule').send(validateRuleSampleData);

        expect(response.body).toHaveProperty('data')
    })
})

describe('Equal Evaluation Rule', () => {
    test('Equal Evaluation response contains required message property', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);
        expect(response.body).toHaveProperty('message')
    })

    test('Equal Evaluation response contains required status property - ', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body).toHaveProperty('status')
    })

    test('Equal Evaluation response contains required data property - ', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body).toHaveProperty('data')
    })
    test('Equal Evaluation data property contains validation property', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body.data).toHaveProperty('validation')
    })

    test('Equal Evaluation data property contains validation property which contains error property', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body.data.validation).toHaveProperty('error')
    })
    test('Equal Evaluation data property contains validation property which contains field', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body.data.validation).toHaveProperty('field')
    })
    test('Equal Evaluation data property contains validation property which contains field_value', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body.data.validation).toHaveProperty('field_value')
    })
    test('Equal Evaluation data property contains validation property which contains condition', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body.data.validation).toHaveProperty('condition')
    })
    test('Equal Evaluation data property contains validation property which contains condition_value', async () => {
        const response = await request(app).post('/validate-rule').send(dataWithEqualEvaluationRule);

        expect(response.body.data.validation).toHaveProperty('condition_value')
    })
})
