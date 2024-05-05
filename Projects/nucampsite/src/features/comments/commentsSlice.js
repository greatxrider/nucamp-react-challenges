import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { COMMENTS } from '../../app/shared/COMMENTS';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (comment, { dispatch }) => {
        const response = await fetch(baseUrl + 'commentsss', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            return Promise.reject(response.status)
        }
        const data = await response.json();
        dispatch(addComment(data));
    }
)

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
    // isPosting: false,
    // postError: ''
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('add Comment action.payload', action.payload);
            console.log('addComment state.commentsArray', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        // [postComment.pending]: (state) => {
        //     state.isPosting = true;
        //     state.postError = '';
        // },
        // [postComment.fulfilled]: (state) => {
        //     state.isPosting = false;
        //     state.postError = '';
        // },
        [postComment.rejected]: (state, action) => {
            alert(
                'Your comment could not be posted\nError: ' +
                (action.error ? action.error.message : 'Fetch failed')
            );

            // state.isPosting = false;
            // state.postError = 'Your comment could not be posted\nError: ' +
            //     (action.error ? action.error.message : 'Fetch Failed');

            // alert(
            //     'Your comment could not be posted\nError: ' +
            //     (action.error ? action.error.message : 'Fetch failed')
            // );
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};
