import { createSlice, } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { baseUrl } from '../../app/shared/baseUrl';

const fetchPromotions = createSlice(
    'promotions/fetchPromotions',
    async () => {
        const response = await fetch(baseUrl + 'promotions');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

const initialState = {
    promotionsArray: PROMOTIONS
}

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState
})

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);
}
