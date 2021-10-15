
export interface WithdrawalAction {
    type: "WITHDRAWAL";
    payload: number;
}

export interface DepositAction {
    type: "DEPOSIT";
    payload: number;
}

type KnownAction = WithdrawalAction | DepositAction;

/* ------------------------------ */

interface BankState {
    balance: number;
    transactions: number[];
}

const initialState: BankState = {
    balance: 0,
    transactions: []
}

function bankReducer(state: BankState = initialState, action: KnownAction): BankState {
    console.log('bankReducer');
    switch (action.type) {
        case "WITHDRAWAL": {
            return {
                ...state,
                balance: state.balance - action.payload,
                transactions: [...state.transactions, -action.payload]
            }
        }
        case "DEPOSIT": {
            return {
                ...state,
                balance: state.balance + action.payload,
                transactions: [...state.transactions, action.payload]
            }
        }
        default: return state;
    }
}

export default bankReducer;