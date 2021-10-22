import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkApi } from '../store';

export const deposit = createAsyncThunk<number, number, ThunkApi>(
    'bank/deposit',
    async (amount, { dispatch, getState, rejectWithValue }) => {
    // trigga andra actions om du vill med distpach
    // Läs ut data ifrån dit state med getState
    // prata med api - await fetch()...
    // Hantera fel med throw eller rejectWithValue
    // Det måste returneras för att det ska fungera
    // return rejectWithValue('No can do!');
        return amount;
    }
);

interface BankState {
    balance: number;
    transactions: number[];
    isLoading: boolean;
    errorMessage?: string;
}

const initialState: BankState = {
    balance: 0,
    transactions: [],
    isLoading: false
};

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        withdrawal: (state, { payload }: PayloadAction<number>) => {
            state.balance -= payload;
            state.transactions.push(-payload);
        }
    },
    extraReducers: builder => {
    /* DEPOSIT */
        builder.addCase(deposit.fulfilled, (state, { payload }) => {
            state.balance += payload;
            state.transactions.push(payload);
            state.isLoading = false;
        });
        builder.addCase(deposit.pending, (state, action) => {
            state.isLoading = true;
            state.errorMessage = undefined;
        });
        builder.addCase(deposit.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        });

    /* WITHDRAWAL */
    }
});

export const { withdrawal } = bankSlice.actions;

export default bankSlice.reducer;
