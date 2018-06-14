import { UPDATE_SALE_NUMBER } from './types'

export const updateSaleNumber = (number) => ({
    type: UPDATE_SALE_NUMBER,
    payload: number
})
