import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Customer } from "../customer.model";

export interface customerSearchCriteria {
  term: string
}
export type SearchStatus = '' | 'searching' | 'complete';

export interface CustomerState extends EntityState<Customer> {
  searchStatus: string,
  criteria: customerSearchCriteria
}

export const customerStateAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
  selectId: (item: Customer) => item.customerId
});

export const initialCustomerState: CustomerState = customerStateAdapter.getInitialState({
  searchStatus: '',
  criteria: {term: ''}
});
